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
        }
    }
});

//inisialisasi 
$('#frmEditGejala').hide();
$('#frmGejalaKerusakan').hide();

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



//    $('#btnHapusgejala').click(function(){
//     let kdGejala = $('#txtKdGejala').val();
//     let konfirmHapus = window.confirm("Anda yakin menghapus gejala?");
//     if(konfirmHapus === true){
//         $.post('http://api.haxors.or.id/riyan/hapus_data_gejala.php',{'kdGejala':kdGejala},function(data){
//         window.alert("Data gejala berhasil di hapus...");
//         $('#divUtama').html("Memuat ... ");
//         $('#divUtama').load('dataGejala.html');
//     });
//     }else{
//     }    
//    });

//    $('#btnUpdateKerusakan').click(function(){
//     let kdGejala = $('#txtKdGejala').val();
//     // localStorage.kdGejalaSes = kdGejala;
//     // localStorage.setItem("kdGejalaSes", kdGejala);
//     $('#capUtama').html("Update gejala kerusakan");
//     $('#frmEditGejala').hide();
//     $.post('http://api.haxors.or.id/riyan/update_gejala_kerusakan.php',{'kdGejala':kdGejala}, function(data){
//         let obj = JSON.parse(data);
//         let gejalaKerusakan = obj.gejala_kerusakan;
//         let capKerusakan = obj.cap_kerusakan;
//         let kdKerusakan = obj.kd_kerusakan;
//         $('#txtGejala2').html(gejalaKerusakan);
//         $('#txtKerusakanCap').html(capKerusakan);
       
//         console.log(obj);
//     });

//     $.post('http://api.haxors.or.id/riyan/get_data_kerusakan.php',function(data){
//         let obj = JSON.parse(data);
//     obj.forEach(renderSelec);

//     function renderSelec(item, index){
//       var sel = document.getElementById('txtDaftarKerusakan');
//       var opt = document.createElement('option');
//       opt.appendChild(document.createTextNode(item.kd_kerusakan+" - "+item.kerusakan));
//       opt.value = item.kd_kerusakan;
//       sel.appendChild(opt);
//     }
//     });
//     $('#txtKdGejala2').val(kdGejala);
//     $('#frmGejalaKerusakan').show();
//    });

//    $('#frmGejalaKerusakan').on('click','.btnUpdateKerusakan',function(){
//     let kdGejala = $('#txtKdGejala').val();
//     let kdKerusakan = $('#txtDaftarKerusakan').val();
//     $.post('http://api.haxors.or.id/riyan/update_gejala_kerusakan_2.php',{'kdGejala':kdGejala,'kdKerusakan':kdKerusakan},function(data){
//         window.alert("Data gejala kerusakan berhasil di update");
//         $('#capUtama').html("Data Gejala")
//     $('#divUtama').html("Memuat ... ");
//     $('#divUtama').load('dataGejala.html');
//     });
//   });

//    $('.btnKembali').click(function(){
//     $('#capUtama').html("Data Gejala")
//     $('#divUtama').html("Memuat ... ");
//     $('#divUtama').load('dataGejala.html');
//    });

