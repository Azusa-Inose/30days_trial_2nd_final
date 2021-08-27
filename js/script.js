$(document).ready(function() {
    $('.drawer').drawer();
    // カルーセル
    $('.slick01').slick({
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      dotsClass: 'dot-class',
      draggable: true,
      infinite: true,
      initialSlide: 0,
      variableWidth: true, // width指定できるようにする
      arrows: false,
      slidesToShow: 2,
      responsive: [{
        breakpoint: 768,
             settings: {
                  slidesToShow: 1,
        }
      },
    ]
  });
});

$(function() {
  // qa accordion
  $('.js-qa-item').click(function() {
    $(this).children('.js-qa-ans').slideToggle();
    $(this).children('.qa-question-wrap').toggleClass('qa_active');
    return false;
  });

    // ページ内スクロール
    // #から始まるURLがクリックされた時
    $('a[href^="#"]:not(a.noscroll)').click(function() {
      let speed = 300;
      let id = $(this).attr('href');
      // .headerクラスがついた要素の高さを取得
      let header = $('header').innerHeight();
      let target = $( "#" == id ? 'html' : id );
      // トップからの距離からヘッダー分の高さを引く
      let position = $(target).offset().top - header;
      $('html,body').animate(
      {
          scrollTop: position
      },
      speed,
      );
      return false;
  });

  // form入力チェック
  let $submit = $('#js-form')
  $('#js-form input, #js-form textarea, #js-form select').on('change', function() {
    if (
      $('#js-form input[type="text').val() !== "" &&
      // $('#js-form input[type="email').val() !== "" &&
      $('#js-form input[name="privacypolicy').prop('checked') === true
  ) {
      $submit.prop('disabled', false)
      $submit.addClass('-active')
  } else {
      $submit.prop('disabled', true)
      $submit.removeClass('-active')
    }
  });

  // activeなglobal menuにスタイルをつける
  $('.header-nav-list .header-nav-item .header-nav-link').click(function() {
    $('.header-nav-list .header-nav-item .header-nav-link').removeClass('menu-active');
    $(this).addClass('menu-active');
    return false;
  });
})

  