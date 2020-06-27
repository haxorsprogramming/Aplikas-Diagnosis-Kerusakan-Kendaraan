var divKerusakan = new Vue({
    el : '#divKerusakan',
    data : {
        dataKerusakan : [],
        kdKerusakanIn : '',
        tipeKerusakanIn : '',
        kerusakanIn : '',
        solusiIn : '',
        dataKerusakanMain : [],
        detailKdKerusakan : '',
        capMainButtonForm : 'Edit'
    },
    methods : {
        tambahKerusakanAtc : function()
        {
            $('#frmDataKerusakan').hide();
            $('#frmTambahKerusakan').show();
            document.getElementById('txtKodeKerusakan').focus();
        },
        simpanKerusakanAtc : function()
        {
            this.kdKerusakanIn = document.getElementById('txtKodeKerusakan').value;
            this.tipeKerusakanIn = document.getElementById('txtTipeKerusakan').value;
            this.kerusakanIn = document.getElementById('txtKerusakan').value;
            this.solusiIn = document.getElementById('txtSolusi').value;
            if(this.kdKerusakanIn === '' || this.kerusakanIn === '' || this.solusiIn === ''){
                window.alert("Harap isi semua field!!");
            }else{
                prosesTambahKerusakan();
            }
        },
        kembaliAtc : function()
        {
            $('#capUtama').html("Data kerusakan & solusi");
            $('#divUtama').html("Memuat ...");
            $('#divUtama').load('dataKerusakan.html');
        },
        detailAtc : function (kdKerusakan)
        {
            $('#frmDataKerusakan').hide();
            $('#capUtama').html("Detail kerusakan");
            $('#frmDetailKerusakan').show();
            this.detailKdKerusakan = kdKerusakan;
        },
        detailAtcForm : function()
        {
            if(this.capMainButtonForm === 'Edit'){
                this.capMainButtonForm = 'Simpan';
            }else{
                this.capMainButtonForm = 'Edit';
            }
        }
    }
});

//inisialisasi 
$('#frmTambahKerusakan').hide();
$('#frmDetailKerusakan').hide();

function prosesTambahKerusakan()
{
    let kdKerusakan = divKerusakan.kdKerusakanIn;
    let tipeKerusakan = divKerusakan.tipeKerusakanIn;
    let kerusakan = divKerusakan.kerusakanIn;
    let solusi = divKerusakan.solusiIn;
    $.post('http://api.haxors.or.id/riyan/tambah_kerusakan.php', {'kdKerusakan':kdKerusakan, 'tipeKerusakan':tipeKerusakan, 'kerusakan': kerusakan, 'solusi':solusi}, function(data){
        let obj = JSON.parse(data);
        if(obj.status === 'sukses'){
            window.alert("Berhasil menambahkan kerusakan");
            $('#capUtama').html("Data kerusakan & solusi");
            $('#divUtama').html("Memuat ...");
            $('#divUtama').load('dataKerusakan.html');
        }else{
            window.alert('Gagal menambahkan, kode kerusakan sudah dipakai!!');
        }
    });
}

//get jenis kerusakan
$.post('http://api.haxors.or.id/riyan/get_jenis_kerusakan.php', function(data){
    let obj = JSON.parse(data);
    obj.forEach(renderSelect);
    
    
    function renderSelect(item, index){
        divKerusakan.dataKerusakan.push({
            id : obj[index].kd_kerusakan, nama : obj[index].nama
        });
    }
});

//event combo box jenis kerusakan 
document.getElementById('txtTipeKerusakanAwal').addEventListener('change', function(){
    let kdJenis = document.getElementById('txtTipeKerusakanAwal').value;
    let jlhIsi = divKerusakan.dataKerusakanMain.length;
    // console.log(jlhIsi);   
    var i; 
    for(i = 0; i < jlhIsi; i++){
        divKerusakan.dataKerusakanMain.splice(0, 1);
    }
    setTimeout(getKerusakanByJenis(kdJenis), 400);
});

function getKerusakanByJenis(kdJenis)
{
    $.post('http://api.haxors.or.id/riyan/get_kerusakan_by_jenis.php', {'kdJenis':kdJenis}, function(data){
        let obj = JSON.parse(data);
        obj.forEach(isiDataKerusakan);
        
        function isiDataKerusakan(item, index)
        {
            divKerusakan.dataKerusakanMain.push({
                kdKerusakan : obj[index].kd_kerusakan,
                kerusakan : obj[index].kerusakan,
                solusi : obj[index].solusi
            });
        }
    });
}