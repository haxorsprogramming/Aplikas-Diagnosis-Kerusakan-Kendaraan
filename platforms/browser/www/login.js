$(document).ready(function(){
    $('#frm_login').hide();
    let statusKoneksi = navigator.onLine;

    if(statusKoneksi === true){
        $('#divStatServer').html('Status koneksi ke server : terhubung');
         }else{
           $('#divStatServer').html('Status koneksi ke server : tidak terhubung. Harap periksa koneksi');
         }

    $('#btnMasukAplikasi').click(function(){
        $('#frm_pelanggan').hide();
        $('#frm_login').show();
        $('#txtUsername').focus();
    });

    $('#btnMasuk').click(function(){
        let username = $('#txtUsername').val();
        let password = $('#txtPassword').val();
        let dataSend = {'username':username, 'password':password}

        if(username === '' && password === ''){
            window.alert("Isi username & password please ..");
        }else{
            $('#capNotifLogin').html("Login ke sistem ...");
            $('#btnMasuk').hide();
            $.post('http://api.haxors.or.id/riyan/login_cek.php',dataSend,function(data){
                let obj = JSON.parse(data);
                if(obj.status === 'sukses'){                
                    aksi_sukses();
                }else{
                    aksi_gagal();
                }
            });
        }       
    });

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
    

});