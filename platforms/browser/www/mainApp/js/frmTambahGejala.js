var divTambahGejala = new Vue({
    el : '#divTambahGejala',
    data : {
        kdGejala : '',
        gejala : '',
        tipeKerusakan : '',
        dataKerusakan : []
    },
    methods : {
        simpanAtc : function()
        {
            this.kdGejala = document.getElementById('txtKodeGejala').value;
            this.gejala = document.getElementById('txtGejala').value;
            this.tipeKerusakan = document.getElementById('txtTipeKerusakan').value;
            if(this.kdGejala === '' || this.gejala === ''){
                window.alert("Isi data gejala..!!");
            }else{
                tambahGejala();
            }
        },
        kembaliAtc : function()
        {
            $('#divUtama').html("Memuat ... ");
            $('#divUtama').load('dataGejala.html');
        }
    }
});

//inisialisasi
$('#txtKodeGejala').focus();

function tambahGejala()
{
    let kdGejala = divTambahGejala.kdGejala;
    let gejala = divTambahGejala.gejala;
    let tipeKerusakan = divTambahGejala.tipeKerusakan;
    console.log(tipeKerusakan);
    $.post(server+'tambah_gejala.php', {'kdGejala':kdGejala, 'gejala':gejala, 'tipeKerusakan':tipeKerusakan}, function(data){
        let obj = JSON.parse(data);
        console.log(obj);
        if(obj.status === 'sukses'){

            window.alert("Data gejala berhasil ditambahkan..");
            $('#divUtama').html("Memuat ... ");
            $('#divUtama').load('dataGejala.html');
        }else{
            window.alert("Kode gejala sudah ada, gunakan yg lain!!");
        }
    });
}

$.post(server+'get_jenis_kerusakan.php', function(data){
    let obj = JSON.parse(data);
    obj.forEach(renderSelect);

    function renderSelect(item, index){
        divTambahGejala.dataKerusakan.push({
            id : obj[index].kd_kerusakan, nama : obj[index].nama
        });
    }
});

// $('#btnSimpan').click(function(){
//     let kdGejala = $('#txtKodeGejala').val();
//     let gejala = $('#txtGejala').val();
//     let tipeKerusakan = $("#txtTipeKerusakan").val();
//     let dataSend = {'kdGejala':kdGejala, 'gejala':gejala, 'tipeKerusakan':tipeKerusakan}

//     if(kdGejala === '' || gejala === ''){
//         window.alert("Isi datanya lah..")
//     }else{
//         $.post('http://api.haxors.or.id/riyan/tambahGejala.php',dataSend,function(data){
//         let obj = JSON.parse(data);
//         if(obj.status === 'sukses'){
//             aksi_sukses();
//         }else{
//             aksi_gagal();
//         }
//     });
//     }
// });

function aksi_sukses(){
        iziToast.show({
            title: 'Sukses',
            message: 'Data gejala berhasil ditambahkan',
            position: 'bottomCenter',
            timeout: 2000,
            pauseOnHover : false,
            onClosed: function () {
                $('#capUtama').html("Data Gejala")
                $('#divUtama').html("Memuat ... ");
                $('#divUtama').load('dataGejala.html');
            }
          });
}

function aksi_gagal(){
    iziToast.show({
        title : 'Gagal',
        message : 'Kode gejala sudah ada, input kembali!!',
        position : 'bottomCenter',
        timeout : 2000,
        pauseOnHover: false,
        onClosed : function(){

        }
    });
}

$('#btnKembali').click(function(){
    $('#divUtama').html("Memuat ... ");
     $('#divUtama').load('dataGejala.html');
});

