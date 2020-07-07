var idSettingUser = new Vue({
    el : '#idSettingUser',
    data : {
        usernameN : '',
        passwordN : '',
        tipeN : '', 
        listUser : []
    },
    methods : {
        hapusAtc : function(id){
            hapusUser(id);
        },
        tambahUserAtc : function()
        {
            this.usernameN = document.getElementById('txtUsername').value;
            this.passwordN = document.getElementById('txtPassword').value;
            this.tipeN = document.getElementById('txtTipe').value;
            if(this.usernameN === '' || this.passwordN === ''){
                window.alert("Harap lengkap field!!");
            }else{
                proTambahUser()
            }
        }
    }
 });

 //inisialisasi awal
 $('#frmTambahUser').hide();

 $.post(server+'get_data_user.php',function(data){
    let obj = JSON.parse(data);
    obj.forEach(renderTabel);
    
    function renderTabel(item, index){
        idSettingUser.listUser.push({
            username : obj[index].username,
            id : obj[index].id
        });
    }

});

$('#btnTambah').click(function(){
    $('#frmTambahUser').show();
    $('#frmDataUser').hide();
    $('#capUtama').html("Tambah User");
    $('#txtUsername').focus();
});

function proTambahUser()
{
    let username = idSettingUser.usernameN;
    let password = idSettingUser.passwordN;
    let tipe = idSettingUser.tipeN;
    $('#btnSimpanUser').addClass('disabled');
    $.post(server+'tambah_user.php', {'username':username, 'password':password, 'tipe':tipe}, function(data){
        let obj = JSON.parse(data);
        if(obj.status === 'sukses'){
            window.alert("Sukses menambahkan user");
            $('#capUtama').html("Data User");
            $('#divUtama').html("Memuat ...");
            $('#divUtama').load("settingUser.html");
        }else{
            window.alert("Username sudah digunakan!!");
            $('#btnSimpanUser').removeClass('disabled');
            $('#txtUsername').val("");
            $('#txtPassword').val("");
            $('#txtUsername').focus();
        }
    });
}


function hapusUser(id)
{
    let confirmHapus = window.confirm("Apakah yakin menghapus user?");
    if(confirmHapus === true){
        $.post(server+'hapus_user.php',{'id':id}, function(data){
            window.alert("User berhasil di hapus..");
            $('#divUtama').html("Memuat ...");
            $('#divUtama').load("settingUser.html");
        });
    }else{

    }
}

$('#btnKembali').click(function(data){
    $('#capUtama').html("Data User");
    $('#divUtama').html("Memuat ...");
    $('#divUtama').load("settingUser.html");
});
