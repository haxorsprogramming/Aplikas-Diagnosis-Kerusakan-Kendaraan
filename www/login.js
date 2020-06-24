//main vue object
var frmLogin = new Vue({
    el : '#frmLogin',
    data : {
        namaAplikasi : 'Sistem Pakar Diagnosis Kerusakan Mobil',
        developer : 'Riyan Ramadhan Tambunan',
        noUji : '',
        username : '',
        password : ''
    },
    methods : {
        bukaFormLogin : function()
        {

        },
        lihatHasilUji : function()
        {
            let kodeUji = document.getElementById('txtKodeUji').value;
        },
        loginProses : function()
        {
            this.username = document.getElementById('txtUsername').value;
            this.password = document.getElementById('txtPassword').value;
            loginToApps();
        }
    }
});

//inisialisasi program
$('#frm_login').hide();
$('#hasil').hide();
$('#txtKodeUji').focus();

let statusKoneksi = navigator.onLine;
if(statusKoneksi === true){
    $('#divStatServer').html('<small>Status koneksi ke server : terhubung</small>');
}else{
    $('#divStatServer').html('Status koneksi ke server : tidak terhubung. Harap periksa koneksi');
}

//start event 
document.getElementById('btnMasukAplikasi').addEventListener("click", function(){
    $('#frm_pelanggan').hide();
    $('#frm_login').show();
    $('#txtUsername').focus();
});

function loginToApps()
{
    let username = frmLogin.username;
    let password = frmLogin.password;
    let dataSend = {'username':username, 'password':password}
    if(username === '' || password === ''){
        isiField();
    }else{
        $('#btnMasuk').addClass('disabled');
        $.post('http://api.haxors.or.id/riyan/login_cek.php', dataSend, function(data){
            let obj = JSON.parse(data);
            if(obj.status === 'sukses'){
                aksi_sukses();
            }else{
                aksi_gagal();
            }
        });
    }
}

function aksi_gagal(){
    iziToast.show({
        title: 'Gagal',
        message: 'Login gagal, periksa username & password!!!',
        position: 'bottomCenter',
        timeout: 2000,
        pauseOnHover : false,
        onClosed: function () {
            $('#capNotifLogin').html("");
            $('#txtUsername').val("");
            $('#txtPassword').val("");
            $('#txtUsername').focus();
            $('#btnMasuk').show();
        } 
      });
}

function aksi_sukses(){
    iziToast.show({
        title: 'Sukses',
        message: 'Anda berhasil login',
        position: 'bottomCenter',
        timeout: 3000,
        pauseOnHover : false,
        onClosed: function () {window.location.assign('mainApp/index.html');} 
      });
}

function isiField()
{
    iziToast.show({
        title : 'Isi field',
        message : 'Harap isi username & password',
        position : 'bottomCenter',
        timeout : 3000,
        pauseOnHover : false
    });
}