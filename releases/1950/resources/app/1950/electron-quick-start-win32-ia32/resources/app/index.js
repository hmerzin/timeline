const $ = require('jquery');



$( 'document' ).ready(() => {


  function presentModal(modalId) {
   document.getElementById(modalId).style.display = 'block';
  }

  function dismissModals(e) {
    console.log('modalClicked');

    if($(e.target).is('video')) {
      const video = e.target;
      console.log('video pressed');
      if(! video.paused) {
        video.pause();
      } else {
        video.play();
      }

    } else if($(e.target).is('p')) {

    } else {
      Array.from(document.getElementsByClassName('modal')).forEach(modal => { modal.style.display = 'none'; });
      console.log('else');
        if($(e.target).find('video')[0]) {
          console.log($(e.target).find('video')[0]);
          $(e.target).find('video')[0].pause();
          $(e.target).find('video')[0].currentTime = 0;
        }
      }
  }


  $( '#div2' ).on('click', (e) => {
    presentModal('modal1');
    document.getElementById('video1').play();
  });

  $( '#div1' ).on('click', (e) => {
    presentModal('modal2');
  });

$( '#div3' ).on('click', (e) => {
    presentModal('modal3');
  });
  
$( '#div4' ).on('click', (e) => {
  presentModal('modal4');
  document.getElementById('video2').play();
});

$( '#learnMore' ).on('click', (e) => {
  presentModal('modal5');
});


  $( '.modal' ).on('click', (e) => {
    dismissModals(e);
  });
});
