$(document).on('ready', function () {
    if ($('html').attr('dir') === 'rtl') {
        $('link[href="css/rtl.css"]').prop('disabled', false);
        $('.en').removeClass('hidden');
        $('.ar').addClass('hidden');
    } else if ($('html').attr('dir') === 'ltr') {
        $('.ar').removeClass('hidden');
        $('.en').addClass('hidden');
        $('link[href="css/rtl.css"]').prop('disabled', true);
    };
});
$(document).ready(function () {
    $(function(){
        if (!window.isMobile && window.isScroll) {
          $(window).on('scroll', function() {
              if ($(this).scrollTop() >= 10) {
                  $('body').addClass('notTop');
              } else {
                  $('body').removeClass('notTop');
              }
          });
        }
      });
    $("[data-localize]").localize("language/lang", { language: "ar" });
    setTimeout(function () {
        $('#loadingMask').fadeOut(1000);
    }, 2000);

    $('.lang-btn').click(function (e) {
        e.preventDefault();
        if ($('html').attr('dir') === 'ltr') {
            $('.en').removeClass('hidden');
            $('.ar').addClass('hidden');
            $('html').removeClass('sidebarShown ');
            $('link[href="css/rtl.css"]').prop('disabled', false);
            $('html').attr('dir', 'rtl');
            $("[data-localize]").localize("language/lang", { language: "ar" });
        } else if ($('html').attr('dir') === 'rtl') {
            $('.ar').removeClass('hidden');
            $('.en').addClass('hidden');
            $('html').removeClass('sidebarShown ');
            $('html').attr('dir', 'ltr');
            $('link[href="css/rtl.css"]').prop('disabled', true);
            $("[data-localize]").localize("language/lang", { language: "en" });
        }
    });
});
$(window).resize(function () {
    $('html').removeClass('sidebarShown ');
});