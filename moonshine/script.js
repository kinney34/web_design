var ctrl = new ScrollMagic.Controller();

  $('.block').each(function() {
    new ScrollMagic.Scene({
      triggerElement: this,
      duration: '50%',
      triggerHook: 'onCenter'
    }).setPin(this).addTo(ctrl);
  });
