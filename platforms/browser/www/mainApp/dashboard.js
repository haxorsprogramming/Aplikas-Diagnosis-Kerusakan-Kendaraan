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
        $('#divUtama').html("Memuat ... ");
        $('#divUtama').load('dataGejala.html');
    });

    function togelSidebar(){
        $('body').removeClass('sidebar-show');
        $('body').addClass('sidebar-gone');
    }

});