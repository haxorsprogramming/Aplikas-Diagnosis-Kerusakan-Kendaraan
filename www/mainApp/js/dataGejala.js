var divDataGejala = new Vue({
    el : '#divDataGejala',
    data : {
        gejalaUp : '',
        kdGejalaUp : '',
        listGejala : [],
        kdGejala : '',
        listKerusakan : [],
        kdKerusakanUp : ''
    },
    methods : {
        tambahGejalaAtc : function()
        {
            $('#divUtama').html("Memuat ... ");
            $('#capUtama').html("Tambah Gejala");
            $('#divUtama').load('formTambahGejala.html');
        },
        detailGejalaAtc : function(kdGejala)
        {
            this.kdGejala = kdGejala;
            detailGejala(kdGejala);
        },
        updateGejalaAtc : function()
        {
            this.kdGejalaUp = document.getElementById('txtKdGejala').value;
            this.gejalaUp = document.getElementById('txtGejala').value;
            if(this.kdGejalaUp === '' || this.gejalaUp === ''){
                window.alert("Harap isi field!!");
            }else{
                updateGejala();
            }
        },
        btnUpdateKerusakanAtc : function()
        {
            $('#frmEditGejala').hide();
            $("#frmGejalaKerusakan").show();
            document.getElementById('txtKdGejala2').value = this.kdGejala;
            let kdGejalaKerusakan = this.kdGejala;
            getDataKerusakan(kdGejalaKerusakan);
        },
        updateKerusakanAtc : function()
        {
            this.kdKerusakanUp = document.getElementById('txtDaftarKerusakan').value;
            updateKerusakanGejala();
        },
        hapusGejalaAtc : function()
        {
            let confirmHapus = window.confirm("Yakin menghapus gejala?");
            if(confirmHapus === true){
                hapusGejala();
            }else{

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
$('#frmEditGejala').hide();
$('#frmGejalaKerusakan').hide();
$('#tblGejala').hide();
function updateKerusakanGejala()
{
    let kdGejala = divDataGejala.kdGejala;
    let kdKerusakan = divDataGejala.kdKerusakanUp;
    $.post('http://api.haxors.or.id/riyan/update_kerusakan_gejala.php', {'kdGejala':kdGejala, 'kdKerusakan':kdKerusakan}, function(data){
        window.alert("Data gejala kerusakan berhasil di update");
        $('#capUtama').html("Data Gejala")
        $('#divUtama').html("Memuat ... ");
        $('#divUtama').load('dataGejala.html');
    });
}

function getDataKerusakan(kdGejalaKerusakan)
{
    $.post('http://api.haxors.or.id/riyan/get_data_kerusakan_gejala.php', {'kdGejala':kdGejalaKerusakan}, function(data){
        let obj = JSON.parse(data);
        $('#txtGejala2').html(obj.gejala_kerusakan);
        $('#txtKerusakanCap').html(obj.kerusakan);
    });

    $.post('http://api.haxors.or.id/riyan/get_data_kerusakan.php', function(data){
        let obj = JSON.parse(data);
        obj.forEach(renderSelect);

        function renderSelect(item, index){
            divDataGejala.listKerusakan.push({
                id : obj[index].kd_kerusakan,
                text : obj[index].kerusakan
            });
        }
    });
}

function renderTableGejala()
{
    $('#tblGejala').DataTable({
        "searching": false,
        "bSort" : false
    });
    $('#tblGejala').show();
}
    
$.post('http://api.haxors.or.id/riyan/get_data_gejala.php',function(data){
    let obj = JSON.parse(data);
    obj.forEach(renderTabel);

    function renderTabel(item, index){
        divDataGejala.listGejala.push({
            kd : obj[index].kd_gejala,
            gejala_kerusakan : obj[index].gejala_kerusakan
        });
    }

    setTimeout(renderTableGejala, 500);
       
});

function detailGejala(kdGejala)
{
    $('#frmEditGejala').show();
    $('#frmDataGejala').hide();
    $('#txtKdGejala').val(kdGejala);
    $.post('http://api.haxors.or.id/riyan/get_data_gejala_detail.php', {'kdGejala':kdGejala}, function(data){
        let obj = JSON.parse(data);
        $('#txtGejala').val(obj.gejala_kerusakan);
        $('#capKerusakanGejala').html(obj.cap_kerusakan);
        $('#txtGejala').focus();
    });
}

function updateGejala()
{
    let gejala = divDataGejala.gejalaUp;
    let kdGejala = divDataGejala.kdGejalaUp;
    $.post('http://api.haxors.or.id/riyan/update_data_gejala.php',{'gejala':gejala,'kdGejala':kdGejala},function(data){
        window.alert("Data gejala berhasil di update...");
        $('#divUtama').html("Memuat ... ");
        $('#divUtama').load('dataGejala.html');
    });
}

function hapusGejala()
{
    let kdGejala = divDataGejala.kdGejala;
    $.post('http://api.haxors.or.id/riyan/hapus_gejala.php', {'kdGejala':kdGejala}, function(data){
       window.alert("Data gejala berhasil dihapus..");
       $('#divUtama').html("Memuat ... ");
       $('#divUtama').load('dataGejala.html'); 
    });
}
