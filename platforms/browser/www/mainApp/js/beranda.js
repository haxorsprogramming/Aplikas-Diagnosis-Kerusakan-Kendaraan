var divBeranda = new Vue({
    el : '#divBeranda',
    data : {
      totalUji : '',
      gejala : '',
      solusi : ''
    }
  });
  
  $.post(server+'get_item_beranda.php', function(data){
    let obj = JSON.parse(data);
    let j_data_uji = obj.j_data_uji;
    let j_data_gejala = obj.j_data_gejala;
    let j_data_solusi = obj.j_data_solusi;
    divBeranda.totalUji = j_data_uji;
    divBeranda.gejala = j_data_gejala;
    divBeranda.solusi = j_data_solusi;
  });
  
  $('#btnMulaiDiagnosis').click(function(){
    $('#capUtama').html("Uji Diagnosis")
    $('#divUtama').html("Memuat ... ");
    $('#divUtama').load('ujiDiagnosis.html');
  });