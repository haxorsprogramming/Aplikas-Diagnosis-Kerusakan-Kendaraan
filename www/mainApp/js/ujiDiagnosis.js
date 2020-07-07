var dataGejalaUji = [];

var divDiagnosis = new Vue({
    el : '#divDiagnosis',
    data : {
        kodeUji : '',
        pelanggan : '',
        nomorPolisi : '',
        mobil : '',
        dataGejala : [],
        kerusakanFinal : '',
        solusiFinal : '',
        dataFinalDiagnosis : [],
        historyUji : [],
        kodeUjiH : '',
        pelangganH : '',
        nomorPolisiH : '',
        mobilH : '',
        kerusakanFinalH : '',
        solusiFinalH : '',
        dataDiagnosisH : []
    },
    methods : {
        ujiBaruAtc : function()
        {
            let kodeUji =  Math.random().toString(36).substring(2, 6) + Math.random().toString(36).substring(2, 6);
            this.kodeUji = kodeUji;
            $('#divFrmUjiDiagnosisBaru').show();
            $('#divDataDiagnosis').hide();
            document.getElementById('txtNamaPelanggan').focus();
        },
        ujiStep2 : function()
        {
            this.pelanggan = document.getElementById('txtNamaPelanggan').value;
            this.nomorPolisi = document.getElementById('txtNomorPolisi').value;
            this.mobil = document.getElementById('txtNamaMobil').value;

            if(this.pelanggan === '' || this.nomorPolisi === '' || this.mobil === ''){
                window.alert("Harap isi semua field!!");
            }else{

                
                $('#divFrmUjiDiagnosisBaru').hide();
                $('#divDiagnosis2').show();
            }
        },
        updateGejala : function(kd)
        {
            let nGejala = dataGejalaUji.includes(kd);
            if(nGejala === true){
                // console.log("Gejala sudah ada");
                let gejalaKe = dataGejalaUji.indexOf(kd);
                dataGejalaUji.splice(gejalaKe, 1);
            }else{
                // console.log("Gejala belum ada");
                dataGejalaUji.push(kd);
            }
        },
        ujiStep3 : function()
        {
            let jlhGejalaDipilih = dataGejalaUji.length;
            if(jlhGejalaDipilih < 1){
                window.alert("Pilih gejala!!");
            }else{
                prosesDiagnosis();
            }
        },
        kembaliAtc : function()
        {
            $('#capUtama').html("Uji Diagnosis");
            $('#divUtama').html("Memuat ... ");
            $('#divUtama').load('ujiDiagnosis.html');
        },
        detailHistoryAtc(kdUji)
        {
            lihatDetailHistory(kdUji);
            
        }
    }
});

function prosesDiagnosis()
{
   
    let kdUji = divDiagnosis.kodeUji;
    let pelanggan = divDiagnosis.pelanggan;
    let nomorPolisi = divDiagnosis.nomorPolisi;
    let mobil = divDiagnosis.mobil;
    let dataSend = {'kdUji':kdUji, 'pelanggan':pelanggan, 'nomorPolisi':nomorPolisi, 'mobil':mobil}
     //daftarkan pengujian 
    $.post('http://api.haxors.or.id/riyan/registrasi_uji.php', dataSend, function(data){
        let obj = JSON.parse(data);
    });
    //masukkan ke tabel probabilitas 
    let jlhGejalaDipilih = dataGejalaUji.length;
    var i;
    for (i = 0; i < jlhGejalaDipilih; i++) {
        let gejalaPil = dataGejalaUji[i];
        $.post('http://api.haxors.or.id/riyan/update_probabilitas.php', {'kdUji':kdUji, 'kdGejala':gejalaPil}, function(data){
            // console.log(data);
        });
    }
    //finalisasi 
    $.post('http://api.haxors.or.id/riyan/finalisasi.php', {'kdUji':kdUji}, function(data){
        let obj = JSON.parse(data);
        let dataDiagnosis = obj.tabelProp;
        console.log(obj);
        divDiagnosis.kerusakanFinal = obj.kerusakanDil;
        divDiagnosis.solusiFinal = obj.solusiDil;
        dataDiagnosis.forEach(renderDataDiagnosis);

        function renderDataDiagnosis(item, index){
            divDiagnosis.dataFinalDiagnosis.push({
                kd : dataDiagnosis[index].kdKerusakan, kerusakan : dataDiagnosis[index].kerusakan, bobot : dataDiagnosis[index].jlhBobot
            });
        }

    });
    $('#divDiagnosis2').hide();
    $('#divHasilDiagnosis').show();
}

//inisialisasi
$('#divFrmUjiDiagnosisBaru').hide();
$('#divDiagnosis2').hide();
$('#divHasilDiagnosis').hide();
$('#divDetailHistory').hide();

document.getElementById('txtTipeKerusakanChoice').addEventListener('change', function(data){
    let kdKerusakan = document.getElementById('txtTipeKerusakanChoice').value;
    
    setTimeout(getKerusakanByJenis(kdKerusakan), 400);
});

function getKerusakanByJenis(kdJenis)
{
    $.post('http://api.haxors.or.id/riyan/get_data_gejala_for_uji.php', {'kdJenis':kdJenis}, function(data){
        let obj = JSON.parse(data);
        console.log(obj);

        let penjangArray = divDiagnosis.dataGejala.length;

        var i;

        for(i = 0; i < penjangArray; i++){
            divDiagnosis.dataGejala.splice(0,1);
        }

        setTimeout(breakKita, 400);

        function breakKita()
        {
            obj.forEach(renderGejala);
        }

        function renderGejala(item, index)
        {
            divDiagnosis.dataGejala.push({
                id : obj[index].kd_gejala,
                nama : obj[index].gejala_kerusakan
            });
        }
    });
}

$.post('http://api.haxors.or.id/riyan/get_history_uji.php', function(data){
    let obj = JSON.parse(data);
    obj.forEach(renderHistory);
    function renderHistory(item, index)
    {
        divDiagnosis.historyUji.push({
            kdUji : obj[index].kdUji, pelanggan : obj[index].pelanggan, waktu : obj[index].waktu
        });
    }
});

function lihatDetailHistory(kdUji){
    divDiagnosis.kodeUjiH = kdUji;
    $.post('http://api.haxors.or.id/riyan/get_detail_history_uji.php', {'kdUji':kdUji}, function(data){
        let obj = JSON.parse(data);
        let dataDiagnosis = obj.tabelProp;
        console.log(obj);
        dataDiagnosis.forEach(renderDataDiagnosis);
        function renderDataDiagnosis(item, index)
        {
            divDiagnosis.dataDiagnosisH.push({
                kd : dataDiagnosis[index].kdKerusakan, kerusakan : dataDiagnosis[index].kerusakan, bobot : dataDiagnosis[index].jlhBobot
            });
        }
        
        divDiagnosis.pelangganH = obj.pelanggan;
        divDiagnosis.nomorPolisiH = obj.nomorPolisi;
        divDiagnosis.mobilH = obj.mobil;
        divDiagnosis.kerusakanFinalH = obj.kerusakanDil;
        divDiagnosis.solusiFinalH = obj.kerusakanDil;

    });
    $('#divDataDiagnosis').hide();
    $('#divDetailHistory').show();
}