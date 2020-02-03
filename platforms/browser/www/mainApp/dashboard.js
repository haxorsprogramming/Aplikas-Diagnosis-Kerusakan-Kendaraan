$(document).ready(function(){
    $('#divUtama').load('beranda.html');

    $('#btnLogOut').click(function(){
        window.location.assign('../index.html');
    });

    $('#btnLogOutTop').click(function(){
        window.location.assign('../index.html');
    });

    $('.btnUjiDiagnosis').click(function(){
        togelSidebar();
        $('#divUtama').html("Memuat ... ");
    });

    $('.btnDataGejala').click(function(){
        togelSidebar();
        $('#capUtama').html("Data Gejala")
        $('#divUtama').html("Memuat ... ");
        $('#divUtama').load('dataGejala.html');
    });

    $('.btnUjiDiagnosis').click(function(){
        togelSidebar();
        $('#capUtama').html("Data Gejala")
        $('#divUtama').html("Memuat ... ");
        $('#divUtama').load('ujiDiagnosis.html');
    });

    $('.btnDataKerusakan').click(function(){
        togelSidebar();
        $('#capUtama').html("Data kerusakan & solusi");
        $('#divUtama').html("Memuat ...");
        $('#divUtama').load('dataKerusakan.html');
    });

    function togelSidebar(){
        $('body').removeClass('sidebar-show');
        $('body').addClass('sidebar-gone');
    }

});