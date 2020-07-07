const server = 'http://api.haxors.or.id/riyan/';

$(document).ready(function(){
    $('#divUtama').load('beranda.html');

    $('#btnLogOut').click(function(){
        window.location.assign('../index.html');
    });

    $('#btnLogOutTop').click(function(){
        window.location.assign('../index.html');
    });

    $('.btnDashboard').click(function(){
        togelSidebar();
        $('#capUtama').html("Dashboard Aplikasi");
        $('#divUtama').html("Memuat ... ");
        $('#divUtama').load('beranda.html');
    });

    $('.btnDataGejala').click(function(){
        togelSidebar();
        localStorage.clear();
        $('#capUtama').html("Data Gejala");
        $('#divUtama').html("Memuat ... ");
        $('#divUtama').load('dataGejala.html');
    });

    $('.btnUjiDiagnosis').click(function(){
        togelSidebar();
        $('#capUtama').html("Uji Diagnosis");
        $('#divUtama').html("Memuat ... ");
        $('#divUtama').load('ujiDiagnosis.html');
    });

    $('.btnDataKerusakan').click(function(){
        togelSidebar();
        $('#capUtama').html("Data kerusakan & solusi");
        $('#divUtama').html("Memuat ...");
        $('#divUtama').load('dataKerusakan.html');
    });

    $('.btnSettingUser').click(function(){
        togelSidebar();
        $('#capUtama').html("Data User");
        $('#divUtama').html("Memuat ...");
        $('#divUtama').load("settingUser.html");
    });

    function togelSidebar(){
        $('body').removeClass('sidebar-show');
        $('body').addClass('sidebar-gone');
    }

});
