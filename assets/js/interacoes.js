


function mostrarDetalhes(containerClass, detalhesClass, videoIndex) {
  let container = document.querySelector(`.${containerClass}`)
  let detalhes = document.querySelector(`.${detalhesClass}`)
  let video = document.querySelectorAll('.container-video')

  if (container.style.display === 'none' || container.style.display === '') {
    container.style.display = 'block'
    detalhes.classList.remove('hide')
    detalhes.classList.add('show')
    video[videoIndex].classList.add('video-show')
    video[videoIndex].classList.remove('video-hide')


  } else {
    container.style.display = 'none'
    detalhes.classList.add('hide')
    detalhes.classList.remove('show')
    video[videoIndex].classList.remove('video-show')
    video[videoIndex].classList.add('video-hide')
  }

}


let btnDetalhes1 = document.querySelector('.mostrarDetalhes1');
let btnDetalhes2 = document.querySelector('.mostrarDetalhes2');
let btnDetalhes3 = document.querySelector('.mostrarDetalhes3');


btnDetalhes1.addEventListener('click', () => {
  mostrarDetalhes('containerDetalhes1', 'detalhes1', 0);
});

btnDetalhes2.addEventListener('click', () => {
  mostrarDetalhes('containerDetalhes2', 'detalhes12', 1);
});
btnDetalhes3.addEventListener('click', () => {
  mostrarDetalhes('containerDetalhes3', 'detalhes123', 2);
});

