function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

jQuery(function () {
  jQuery(window).scroll(function () {
    var a = jQuery(window).scrollTop();
    if (a >= 120) {
      jQuery(".region-navigation").addClass("fixed")
    } else {
      jQuery(".region-navigation").removeClass("fixed")
    }
  })
});
jQuery(function () {
  jQuery(window).scroll(function () {
    var a = jQuery(window).scrollTop();
    if (a >= 30) {
      jQuery(".back-to-top").addClass("show")
    } else {
      jQuery(".back-to-top").removeClass("show")
    }
  })

  // Autocomplete search select submit form
  jQuery("#searchfull").autocomplete({
    select: function(event, ui) {
      //assign value back to the form element
      if(ui.item){
          jQuery(event.target).val(ui.item.value);
      }
      //submit the form
      jQuery(event.target.form).submit();
    }
  });
});

jQuery(document).ready(function ($) {

  jQuery(".back-to-top").click(function (e) {
    e.preventDefault();
    $('html,body').animate({ scrollTop: 0 }, '500');
  });


  var params = new URLSearchParams(window.location.search);
  var search_text = params.get('search');
  if(search_text != null ){
    var message = "We are expanding our network, LEAD powered schools coming soon to "+search_text;
    jQuery('#block-leadschool-content .view-id-school_listing .view-empty').text(message);
  }

  var getCookieStcode = getCookie("stateCode");
  if (getCookieStcode == '') {
    getCookieStcode = 'ANY';
  }
  $('#state-frm-ip option[state-id=' + getCookieStcode + ']').attr("selected", true);


  $("#block-parentsmenu").prepend('<a class="menu-button" href="javascript:;"><span>mobileMenu</span></a>')
  jQuery(".menu-button").on("click", function () {
    //alert(5);
    jQuery(this).toggleClass("active");
    jQuery("body").toggleClass("overflow");
    jQuery("#block-parentsmenu").children('ul').toggleClass("show")
  });
  $('.W-msg span').click(function () {
    $('.W-msg').hide();
  });
  $('.show-less-content a').click(function(e){
    e.preventDefault();
    $('.show-less-content').hide();
    $('.show-more-content').show();
  });
  $('.show-more-content a').click(function(e){
    e.preventDefault();
    $('.show-less-content').show();
    $('.show-more-content').hide();
  });
  $('.detail-page-slider  > ul').owlCarousel({
    loop: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    margin: 0,
    items: 1,
    responsiveClass: true,
    nav: false,
    responsive: {
      0: {
        items: 1
      }
    }
  });
  if(jQuery('.block-views-blockschool-detail-page-block-9 p').length <= 1){
    jQuery('.block-views-blockschool-detail-page-block-9').hide()
  }
  $('#node-get-in-touch-form input[name="op"]').attr('type', 'button');
  jQuery('.app-download .dropdown-action').click(function () {
    jQuery(this).toggleClass('active').next('ul').toggleClass('active');
  });

  if ($(window).width() <= 767) {
    $('#block-parentsmenu .menu-item--expanded > a').click(function (e) {
      e.preventDefault();
      $(this).next('ul').toggle();
      $(this).parents('li').siblings().find('ul').hide();
    });
  }
  $('.faq-container .qstn').click(function () {
    $(this).parents('.views-row').siblings().find('.qstn').removeClass('open');
    $(this).toggleClass('open');
    $(this).parents('.views-row').siblings().find('.answr').slideUp();
    $(this).next('.answr').slideToggle();
  });

  // $('.banner-slider').on('init', function (event, slick) {
  //   if (slick.slideCount == 1) {
  //     $('.slick-dots').hide();
  //   }
  // });

  $('.banner-slider').slick({
    centerMode: true,
    centerPadding: '100px',
    slidesToShow: 1,
    arrows: false,
    autoplay: true,
    draggable: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: '40px',
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: '40px',
        }
      }
    ]
  });

  // $(window).resize(function(){
  //   if ($(window).width() <= 1024){
  //     $('.path-find-a-school .view-school-listing .school-list > ul').addClass('owl-carousel');
  //     $('.path-find-a-school .school-list > ul').owlCarousel({
  //       loop: true,
  //       autoplay: true,
  //       autoplayTimeout: 5000,
  //       autoplayHoverPause: true,
  //       margin: 50,
  //       responsiveClass: true,
  //       nav: true,
  //       responsive: {
  //         0: {
  //           items: 1.2,
  //           margin: 20,
  //         },
  //         700: {
  //           items: 2,
  //         },
  //         1000: {
  //           items: 4,
  //           loop: false
  //         }
  //       }
  //     });

  //   }
  // });


  $(".my-account-wrapper.log-in-link > a").append("<span>Submit form for more details</span>");
  $('.block-views-blockschool-detail-page-block-11 .view-content').addClass('owl-carousel')
  $('.block-views-blockschool-detail-page-block-11 .view-content').owlCarousel({
    loop: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    margin: 50,
    responsiveClass: true,
    nav: false,
    responsive: {
      0: {
        items: 3.1,
        margin: 10,
      },
      700: {
        items: 6,
      },
      1000: {
        items: 7,
        loop: false
      }
    }
  });
  $('.block-views-blockschool-detail-page-block-8 .view-content').addClass('owl-carousel')
  $('.block-views-blockschool-detail-page-block-8 .view-content').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    margin: 50,
    responsiveClass: true,
    nav: false,
    responsive: {
      0: {
        items: 2.2,
        margin: 10,
      },
      700: {
        items: 4,
      },
      1000: {
        items: 4,
        loop: false
      }
    }
  });
  $('.block-views-blockschool-detail-page-block-9 .view-content').addClass('owl-carousel')
  $('.block-views-blockschool-detail-page-block-9 .view-content').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    margin: 50,
    responsiveClass: true,
    nav: false,
    responsive: {
      0: {
        items: 1.2,
        margin: 20,
      },
      700: {
        items: 1,
      },
      1000: {
        items: 2,
        loop: false
      }
    }
  });
  $('.block-views-blockschool-detail-page-block-9').append('<div class="symbol"><img src="http://studynxt.com/design/lead-school/listing-page/new/kurduwandi/images/symbol.png" alt="sym"></div>')
  $('.drive-wrapper a').click(function(){
    $('.map-detail .geolocation-map-wrapper').slideToggle();
  });
  $('.block-views-blockschool-detail-page-block-7 .view-content').addClass('owl-carousel')
  $('.block-views-blockschool-detail-page-block-7 .view-content').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    margin: 50,
    responsiveClass: true,
    nav: false,
    responsive: {
      0: {
        items: 2.2,
        margin: 10,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 4,
        loop: false
      }
    }
  })
  // $('.SchoolImages .owl-carousel').owlCarousel({
    $('.block-views-blockschool-detail-page-block-5 .view-content').addClass('owl-carousel')
    $('.block-views-blockschool-detail-page-block-5 .view-content').owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    margin: 20,
    responsiveClass: true,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 3,
        loop: false
      }
    }
  })

  // $('.block-views-blockschool-detail-page-block-7').append('<span class="star"> <img src="https://leadschool.in/schools/wp-content/themes/LeadSchoolTheme/newdesign/images/star.png" class="img-fluid" alt="star"> </span>')
  //remove action dropdown in admin/school-listing
  $('#views-form-school-list-for-admin-page-1 select#edit-action').remove('.form-select');
  $('#views-form-school-list-for-admin-page-1 input#edit-submit--2').remove();


  // click on formpopup
  $('.enqmc, .multienq').click(function (e) {
    //$('.formpop').show();
    $('.mchilds').show();
    var element = $(this);
    var id = $(element).data('id');
    $("#schoolid").val(id);

  });

  var $checkboxes = $('.school-list input[type="checkbox"]');


  $checkboxes.change(function () {
    var countCheckedCheckboxes = $checkboxes.filter(':checked').length;
    if (countCheckedCheckboxes > 1) {
      $('.school-list .action-btn a.enqd').hide();
      $('.action-btn a.enqmc').hide();
      $('.multplbtn').show();
    } else {
      $('.action-btn a.enqmc').show();
      $('.school-list .action-btn a.enqd').show();
      $('.multplbtn').hide();
    }
  });

  $('.checkschool').on('change', function () {
    var vals = [];
    $('.checkschool:checked').each(function () { //could also use .map here
      vals.push($(this).val());
    });
    $('.multienqc, .multienq, .nonlogin').attr("data-id", vals.join(','));
  });

  $('.multienqc, .enq').on('click', function () {
    var schoolid = $(this).attr("data-id");
    var post_data = "&schoolid=" + schoolid;

    $.ajax({
      type: "POST",
      url: drupalSettings.path.baseUrl + "singlechildenquirysave",
      data: post_data,
      cache: false,
      beforeSend: function () {
        $('.loader-wrapper').css('display', 'block');
      },
      success: function (data) {
        if (data.expert_lead_status == 'success') {
          var school_markup = '<p>For The Following Schools</p>';
          for(var i=0;i<data.school_names.length;i++){
            school_markup += '<li>'+data.school_names[i]+'</li>';
          }
          $('.messclass .custom-school-names').html(school_markup);
          $('.messclass').show();
        } else if (data.expert_lead_status == 'error') {
          console.log(0)
        } else {
          console.log('Something Went Wrong');
        }
      },
      error: function (error) {
      }
    });
  });


  $('.nonlogin').on('click', function () {
    var schoolid = $(this).attr("data-id");
    var datapath = $(this).attr("data-info");
    var post_data = "&schoolid=" + schoolid;

    $.ajax({
      type: "POST",
      url: drupalSettings.path.baseUrl + "singlenonloginenquirysave",
      data: post_data,
      cache: false,
      beforeSend: function () {
      },
      success: function (data) {
        location.href = drupalSettings.path.baseUrl + "user/registerform?dest=" + datapath;
      },
      error: function (error) {
      }
    });
  });

  $(".childenquiry-subinfo").attr("href", "javascript:void(0)");
  $('.childenquiry-subinfo').on('click', function () {
    var schoolid = $.trim($("input[name=schoolid]").val());
    var vals = [];
    $('.childchk:checked').each(function () { //could also use .map here
      vals.push($(this).val());
    });
    var expert_flag = true;
    $('.pchname_error_msg').html('');
    $(".pchname").removeClass('invalid').addClass('valid');

    if ($('.childchk:checkbox').filter(':checked').length < 1) {
      $('.pchname_error_msg').html('Please select at least one child.');
      $(".pchname").removeClass('valid').addClass('invalid');
      expert_flag = false;
    }
    var childid = vals.join(',');
    var post_data = "&schoolid=" + schoolid + "&childid=" + childid;
    if (expert_flag) {
      $.ajax({
        type: "POST",
        url: drupalSettings.path.baseUrl + "multiplechildenquirysave",
        data: post_data,
        cache: false,
        beforeSend: function () {
          $('.loader-wrapper').css('display', 'block');
        },
        success: function (data) {
          $('.loader-wrapper').css('display', 'none');
          if (data.expert_lead_status == 'success') {
            console.log(data);
            var school_markup = '<p>For The Following Schools</p>';
            if(data.school_names.length > 1){
              for(var i=0;i<data.school_names.length;i++){
                school_markup += '<li>'+data.school_names[i]+'</li>';
              }
              $('.messclass .custom-school-names').html(school_markup);
            }
            else{
              $('.messclass .custom-school-names').css('display','none');
            }
            $('.messclass').show();
            $('.mchilds').hide();
          } else if (data.expert_lead_status == 'error') {
            console.log(0)
          } else {
            console.log('Something Went Wrong');
          }

        },
        error: function (error) {

        }
      });
    }
  });

  jQuery('.school-loc #edit-ip-state-select').on('change', function () {
    jQuery('#block-views-block-school-listing-block-2 .view-empty').hide();
    var state_name = jQuery(this).val();
    var state = jQuery(this).find("option:selected").text();
    var message = "We are expanding our network, LEAD powered schools coming soon to "+state;
    jQuery('#views-exposed-form-school-listing-block-2 select').val(state_name);
    jQuery('#views-exposed-form-school-listing-block-2 input[type="submit"]').trigger('click');
    jQuery(".view-empty").text(message);
    console.log(state);
  });

  $("#school-search-form").submit(function(e) {
    var text = $('#school-search-form input[type="text"]').val();
    if(text == ''){
      e.preventDefault();
      $('.search-danger').show();
    }
  });

  $(window).scroll(function () {
    var winTop = $(window).scrollTop();
    if (winTop >= 550) {
      $(".applybtn, .form-sec").addClass("sticky");
    } else {
      $(".applybtn, .form-sec").removeClass("sticky");
    }
  });
  // $('.Admission .action-btn a.enq-fd').click(function(e){
  //   e.preventDefault;
  //   $('html, body').animate({
  //     scrollTop: ($('.enquiry-form-wrapper').offset().top - 130),
  // }, 2000);
  // });

  jQuery(".school_detail_page_block_1 .banner-btn #pop-form").click(function(){
    jQuery('.form-popup').fadeIn();
  });

  /*let school_searc_count = jQuery(".view-display-id-page_1 .school-count").attr('data-id');
  if(school_searc_count <= 3 ){
    $(".view-filters form").css('display','block');
  }*/

  var load_count = getCookie('load_count');
  var filter_form = $("#block-leadschool-content div.view-filters").html();
  $("#expose_filter_" + load_count).html(filter_form);

  // Auto click event for the explore more schools filter
  $('#edit-submit-school-listing').hide();
  $('#edit-distance').change(function() {
    $('#edit-submit-school-listing').click();
  });

  $(".school_detail_page_block_10 .enq-cont-wrap #pop-form-2").click(function(){
    $('.form-popup').fadeIn();
  });

  $('.form-close-btn').click(function(){
    $('.form-popup').fadeOut();
  });
  $('.close-btn').click(function () {
    window.location.reload();
    $('.popup').hide();
    $('.thanks-pop-wrapper').hide();
  });
$('.edit-icon').click(function(){
  $('.path-find-a-school #block-views-block-leadschool-home-page-block-5').slideToggle();
});
$('.map-icon').click(function(){
  //$('.geolocation-map-wrapper').slideToggle();
  $('.geolocation-map-wrapper,.block-school-map #map_wrapper_div').slideToggle();

});
  $('#block-leadschool-page-title h1:contains("Login")').hide();
  $('#block-leadschool-page-title h1:contains("Register")').hide();
  setTimeout(function () {
  $('.path-frontpage .view-school-listing .school-list > ul').addClass('owl-carousel');
  $('.path-frontpage .school-list > ul').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    margin: 50,
    responsiveClass: true,
    nav: false,
    responsive: {
      0: {
        items: 1.2,
    margin: 20,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 4,
        loop: false
      },
      1150: {
        nav: true,
      }
    }
  });
  }, 2000);
  var total_rec = getCookie('load_count');
  var school_checked = getCookie('school_checked');
  if (school_checked == 'yes') {
    var school_list = jQuery(".schools-search-listing .school-list ul li").filter(".school-row-listing");
    var nids = [];
    if (school_list.length == 1 || total_rec == 1) {
      jQuery(school_list[0].children[0]).prop('checked', 'true');
    }
    else if (school_list.length == 2 || total_rec == 2) {
      for (var i = 0; i < 2; i++) {
        nids.push(jQuery(school_list[i].children[0]).val());
        jQuery(school_list[i].children[0]).prop('checked', 'true');
      }
      var nid = nids.toString();
      jQuery(".schools-search-listing .multplbtn").css('display', 'block');
      jQuery(".schools-search-listing .multplbtn a").attr('data-id', nid);
    }
    else if (school_list.length >= 3 || total_rec >= 3) {
      for (var i = 0; i < 3; i++) {
        nids.push(jQuery(school_list[i].children[0]).val());
        jQuery(school_list[i].children[0]).prop('checked', 'true');
      }
      var nid = nids.toString();
      jQuery(".schools-search-listing .multplbtn").css('display', 'block');
      jQuery(".schools-search-listing .multplbtn a").attr('data-id', nid);
    }
  }

  // Script to seperate school records
  jQuery(".result_separator").hide();
  jQuery("#search_separator_" + total_rec).show();

});

// Refresh the home page after back button click
if (window.location.pathname == '/') {
  window.addEventListener('pageshow', function (event) {
    var historyTraversal = event.persisted || (typeof window.performance != "undefined" && window.performance.navigation.type === 2);
    if (historyTraversal) {
      window.location.reload();
    }
  });
}

  /*var newly_register = getCookie('newly_register');
  if(newly_register == 'yes'){
    jQuery('.custom-registration').show();
  }
  else{
    jQuery('.custom-registration').hide();
  }*/

  jQuery('.custom-registration #message-hide').click(function(){
    /*const d = new Date();
    d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = "newly_register=no;" + expires + ";path=/";
    jQuery('.custom-registration').hide();*/

    jQuery.ajax({
          type: "POST",
          url: drupalSettings.path.baseUrl + "sessionregistrationmessage",
          cache: false,
          success: function (data) {
              console.log(data);
              jQuery('.custom-registration').hide();
          }
        });
  });


  jQuery(document).ajaxComplete(function (event, request, settings) {
    var state = jQuery("#ip-state-form select").find("option:selected").text();
    var message = "We are expanding our network, LEAD powered schools coming soon to "+state;
    jQuery('#block-views-block-school-listing-block-2 .view-empty').text(message);

    jQuery('.multienqc, .enq').on('click', function () {
      var schoolid = jQuery(this).attr("data-id");
      var post_data = "&schoolid=" + schoolid;
  
      jQuery.ajax({
        type: "POST",
        url: drupalSettings.path.baseUrl + "singlechildenquirysave",
        data: post_data,
        cache: false,
        beforeSend: function () {
          jQuery('.loader-wrapper').css('display', 'block');
        },
        success: function (data) {
          if (data.expert_lead_status == 'success') {
            var school_markup = '<p>For The Following Schools</p>';
            for(var i=0;i<data.school_names.length;i++){
              school_markup += '<li>'+data.school_names[i]+'</li>';
            }
            jQuery('.messclass .custom-school-names').html(school_markup);
            jQuery('.messclass').show();
          } else if (data.expert_lead_status == 'error') {
            console.log(0)
          } else {
            console.log('Something Went Wrong');
          }
        },
        error: function (error) {
        }
      });
    });
    
  });