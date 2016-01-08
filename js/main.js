var counter = 1;
var max = $("#projecttabz").children().length;
var slide = true;
var time = 4000;
var percent = 0;

function initialize() {


    $(".button-collapse").sideNav();
    if($(document).width() > 992 && $(window).width() > 992 )
        $('ul.tabs').tabs('select_tab', 'home');
    $('#projects ul.tabs').tabs('select_tab', 'project1');
    $('.parallax').parallax();
    if($(window).width() > 1200) {
        var scrolls = [
            {selector: '#skillimg1', offset: 100, callback: 'Materialize.fadeInImage("#skillimg1")' },
            {selector: '#skillimg2', offset: 100, callback: 'Materialize.fadeInImage("#skillimg2")' },
            {selector: '#skillimg3', offset: 100, callback: 'Materialize.fadeInImage("#skillimg3")' },
            {selector: '#skillimg4', offset: 100, callback: 'Materialize.fadeInImage("#skillimg4")' },
            {selector: '#skillimg5', offset: 100, callback: 'Materialize.fadeInImage("#skillimg5")' },
            {selector: '#skillimg6', offset: 100, callback: 'Materialize.fadeInImage("#skillimg6")' },
            {selector: '#skillimg7', offset: 100, callback: 'Materialize.fadeInImage("#skillimg7")' },
            {selector: '#skillimg8', offset: 100, callback: 'Materialize.fadeInImage("#skillimg8")' },
            {selector: '#skillimg9', offset: 100, callback: 'Materialize.fadeInImage("#skillimg9")' },
            {selector: '#skillimg10', offset: 100, callback: 'Materialize.fadeInImage("#skillimg10")' },
            {selector: '#skillimg11', offset: 100, callback: 'Materialize.fadeInImage("#skillimg11")' },
            {selector: '#skillimg12', offset: 100, callback: 'Materialize.fadeInImage("#skillimg12")' },
            {selector: '#skillimg13', offset: 100, callback: 'Materialize.fadeInImage("#skillimg13")' },
            {selector: '#skillimg14', offset: 100, callback: 'Materialize.fadeInImage("#skillimg14")' },
            {selector: '#skillimg15', offset: 100, callback: 'Materialize.fadeInImage("#skillimg15")' },
            {selector: '#skillimg16', offset: 100, callback: 'Materialize.fadeInImage("#skillimg16")' },
            {selector: '#skillimg17', offset: 100, callback: 'Materialize.fadeInImage("#skillimg17")' },
            {selector: '#skillimg18', offset: 100, callback: 'Materialize.fadeInImage("#skillimg18")' },
            {selector: '#skillimg19', offset: 100, callback: 'Materialize.fadeInImage("#skillimg19")' },
            {selector: '#skillimg20', offset: 100, callback: 'Materialize.fadeInImage("#skillimg20")' },
            {selector: '#skillimg21', offset: 100, callback: 'Materialize.fadeInImage("#skillimg21")' },
            {selector: '#skillimg22', offset: 100, callback: 'Materialize.fadeInImage("#skillimg22")' },
            {selector: '#skillimg23', offset: 100, callback: 'Materialize.fadeInImage("#skillimg23")' },
            {selector: '#skillimg24', offset: 100, callback: 'Materialize.fadeInImage("#skillimg24")' },
            {selector: '#footnav', offset: 50, callback: 'Materialize.showStaggeredList("#footnav")' },
            {selector: '#hbbs', offset: 50, callback: 'Materialize.showStaggeredList("#hbbs")' }
        ];
        Materialize.scrollFire(scrolls);
        if((window.location.href).includes("?thanks=true"))
            $("#fancytext").html("Thank you!");
        else
            $("#fancytext").html("Welcome!");
        setTimeout(function(){$('[data-typer-targets]').typer();}, 2500);
    }
    $("html, body").animate({scrollTop: 0}, "fast");
    $("#loader").fadeOut(1000, function() {
        $("#loader").remove();
    });
    setInterval(function(){
        if(slide) {
            $('#projects ul.tabs').tabs('select_tab', 'project'+counter);
            counter++;
            if(counter > max)
                counter = 1;
        }
    }, time);
    setInterval(function(){
        if(slide) {
            $('#datbartho .determinate').width(percent+"%");
            percent+= 5;
            if(percent > 101)
                percent = 0;
        }
    }, time/20);
    //$("#projs").click(function(event) { gotoProj(1); });
    $(".ttop").click(function() {
        $('html, body').animate({scrollTop: 0}, 'fast');
    });
    $("#projects .pause").hover(function() {
            slide = false;
        }, function() {
            slide = true;
    });
}

function tabz(tab) {
    if($(document).width() > 992 && $(window).width() > 992 )
        $('ul.tabs').tabs('select_tab',tab);
}

function resumeToast() {
    if($(document).width() > 992 && $(window).width() > 992 )
        $('ul.tabs').tabs('select_tab', 'resume');
}

function slidenum(i) {
    counter = i;
    percent = 0;
}

function gotoProj(i) {
    $('ul.tabs').tabs('select_tab', 'projects');
    $('#projects ul.tabs').tabs('select_tab', 'project'+i);
    slidenum(i);
}

function fabShow(show) {
    if(show)
        $("#fab").show();
    else
        $("#fab").hide();
}

$(document).ready(function(){
    initialize();
}), $(window).resize(function() {
    location.reload();
});