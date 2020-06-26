var idSettingUser = new Vue({
    el : '#idSettingUser',
    data : {
        listUser : []
    },
    methods : {
        hapusAtc : function(id){
            window.alert(id);
        }
    }
 });

 //inisialisasi awal
 $('#frmTambahUser').hide();

 $.post('http://api.haxors.or.id/riyan/get_data_user.php',function(data){
    let obj = JSON.parse(data);
    console.log(obj);
    obj.forEach(renderTabel);
    
    function renderTabel(item, index){
        idSettingUser.listUser.push({
            username : obj[index].username
        });
    }

});

$('#btnTambah').click(function(){
    $('#frmTambahUser').show();
    $('#frmDataUser').hide();
    $('#capUtama').html("Tambah User");
    $('#txtUsername').focus();
});

$('#btnSimpanUser').click(function(){
    let username = $('#txtUsername').val();
    let password = $('#txtUsername').val();
    let tipe = $('#txtTipe').val();
    if(username === '' || password === ''){
        window.alert("Harap isi username & password!!");
    }else{
        if(tipe === 'none'){
            window.alert("Harap pilih tipe user!!");
        }else{
            $('#btnSimpanUser').addClass('disabled');
            $.post('http://api.haxors.or.id/riyan/tambah_user.php',{'username':username,'password':password,'tipe':tipe}, function(data){
                let obj = JSON.parse(data);
                if(obj.status === 'error'){
                    window.alert("Username sudah digunakan!!");
                    $('#btnSimpanUser').removeClass('disabled');
                    $('#txtUsername').val("");
                    $('#txtPassword').val("");
                    $('#txtUsername').focus();
                }else{
                    window.alert("Sukses menambahkan user");
                    $('#capUtama').html("Data User");
                    $('#divUtama').html("Memuat ...");
                    $('#divUtama').load("settingUser.html");
                }
                // console.log(obj);
            });
        }
    }
});

$('#tblUser').on('click','.btnHapus',function(){
    let id = $(this).attr('id');
    let confirmHapus = window.confirm("Apakah anda yakin menghapus user?");
    if(confirmHapus === true){
        $.post('http://api.haxors.or.id/riyan/hapus_user.php',{'id':id}, function(data){
            window.alert("User berhasil di hapus");    
            $('#capUtama').html("Data User");
            $('#divUtama').html("Memuat ...");
            $('#divUtama').load("settingUser.html");
        });
    }else{

    }
});

$('#btnKembali').click(function(data){
    $('#capUtama').html("Data User");
    $('#divUtama').html("Memuat ...");
    $('#divUtama').load("settingUser.html");
});
