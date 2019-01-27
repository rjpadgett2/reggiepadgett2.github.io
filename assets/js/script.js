$( document ).ready(function() {
  //========================================= portfolio filter =========================================
    if($().prettyPhoto) {

      lightboxPhoto();
          imgHover();
    }


  if ($().quicksand) {
  // Clone applications to get a second collection
    var $data = $("ul.container_folio").clone();
    // get the action filter option item on page load
    var $filterClass = $('#filterOptions li.cur a').attr('class');

    // get and assign the ourHolder element to the
    // $holder varible for use later
    //var $holder = $('ul.ourHolder');

    // clone all items within the pre-assigned $holder element
    //var $data = $holder.clone();

    // attempt to call Quicksand when a filter option
    // item is clicked
    $('#filterOptions li a').click(function(e) {
      // reset the active class on all the buttons
      $('#filterOptions li').removeClass('cur');
      $('#filterOptions li a').removeClass('cur');

      // assign the class of the clicked filter option
      // element to our $filterType variable
      /*var $filterType = $(this).attr('class');
      $(this).parent().addClass('actived');

      if ($filterType == 'all') {
        // assign all li items to the $filteredData var when
        // the 'All' filter option is clicked
        var $filteredData = $data.find('li');
      }
      else {
        // find all li elements that have our required $filterType
        // values for the data-type element
        var $filteredData = $data.find('li[data-type=' + $filterType + ']');
      }*/
      // Use the last category class as the category to filter by. This means that multiple categories are not supported (yet)
      var filterClass=$(this).attr('class').split(' ').slice(0)[0];
      $(this).parent().addClass('cur');

      if (filterClass == 'all') {

        var $filteredData = $data.find('li');

      } else {
        var $filteredData = $data.find('li[data-type~=' + filterClass + ']');
      }

      $("ul.container_folio").quicksand($filteredData, {
        duration: 800,
        adjustHeight: false,
              easing:'swing'
      }, function () {

              lightboxPhoto();
              imgHover();
        });


      $(this).addClass("cur");

      return false;
    });


  }

    $("#about_scroll").fadeOut();
    $("#work_scroll").fadeOut();
    $("#contact_scroll").fadeOut();

    $("#about").click(function(){
        $("#index").fadeOut();
        $("#about_scroll").fadeIn();
        $('#about_left').addClass('animated slideInLeft');
        $('#about_right').addClass('animated slideInRight');
        });
    $("#work").click(function(){
        $("#index").fadeOut();
        $("#work_scroll").fadeIn();
        $('#work_left').addClass('animated slideInLeft');
        $('#work_right').addClass('animated slideInRight');
        });
    $("#contact").click(function(){
        $("#index").fadeOut();
        $("#contact_scroll").fadeIn();
        $('#contact_left').addClass('animated slideInLeft');
        $('#contact_right').addClass('animated slideInRight');
        });

    $(".back").click(function(){
        $(".pages").fadeOut();
        $("#index").fadeIn();
        $('#index_left').addClass('animated slideInLeft');
        $('#index_right').addClass('animated slideInRight');
        });

		});


    //================================ function ========================================
    function imgHover(){
     $('.thumb-img').hover(function(){

        $(this).children('.folio-caption').animate({
        bottom:'0px'
        });

     }, function(){
        $(this).children('.folio-caption').animate({
        bottom:'-55px'
        });

     });
    }

    function lightboxPhoto() {
    	$("area[data-gal^='prettyPhoto']").prettyPhoto();

    				$(".gallery:first a[data-gal^='prettyPhoto']").prettyPhoto({animation_speed:'normal',slideshow:200000, show_title: true, autoplay_slideshow: true});
    				$(".gallery:gt(0) a[data-gal^='prettyPhoto']").prettyPhoto({animation_speed:'fast', slideshow:200000, hideflash: true});

    				$("#custom_content a[data-gal^='prettyPhoto']:first").prettyPhoto({
    					custom_markup: '<div id="map_canvas" style="width:260px; height:265px"></div>',
    					changepicturecallback: function(){ initialize(); }
    				});

    				$("#custom_content a[data-gal^='prettyPhoto']:last").prettyPhoto({
    					custom_markup: '<div id="bsap_1259344" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6"></div><div id="bsap_1237859" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6" style="height:260px"></div><div id="bsap_1251710" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6"></div>',
    					changepicturecallback: function(){ _bsap.exec(); }
    				});

            // $('a.pretty-link').click(function(){
               // $(this).parent().children('div.link').contents().clone().appendTo($('.ppl'));
               // });

    	}

// Modal code
var modal_slide;
function projectModal(elem){
  let modal;

  if(elem.id == "iadvisor-div"){
    modal = document.getElementById('iadvisor-modal');
    modal_slide = document.getElementsByClassName('iadv-Slides');
  }else if (elem.id == "pbd-div"){
    modal = document.getElementById('pbd-modal');
    modal_slide = document.getElementsByClassName('pbd-Slides');
  }else if (elem.id == "pkmn-div"){
    modal = document.getElementById('pkmn-modal');
    modal_slide = document.getElementsByClassName('pkmn-Slides');
  }

  showDivs(slideIndex, modal_slide);
  // Get the <span> element that closes the modal
  let span = modal.childNodes[3].childNodes[1].childNodes[1];

  modal.style.display = "block";

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

var slideIndex = 1;


function plusDivs(n) {
  showDivs(slideIndex += n);
}

// function plusDivs(n) {
//   showDivs(slideIndex += n);
// }

function showDivs(n) {
  var i;
  var x = modal_slide;
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
