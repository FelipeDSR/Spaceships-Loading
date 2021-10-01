let speed = 1;

function stars() {
  let space = document.querySelector('.space');

  for( let i = 0; i <80; i++) {
    let star = document.createElement('i');

    let x = Math.floor(Math.random() * window.innerWidth);

    let duration = Math.random() / speed;
    let h = Math.random() * 100;

    star.style.left = x + 'px';
    star.style.width = '1px';
    star.style.height = h + 'px';
    star.style.animationDuration = duration + 's';
    
    space.appendChild(star);    
  }
}

stars();

function reloadStars(){
  const stars = document.getElementsByTagName('i');

  for( let i = 0; i < stars.length; i++) {
    let star = stars[i];
    
    let x = Math.floor(Math.random() * window.innerWidth);

    let duration = Math.random() / speed;
    let h = Math.random() * 100;

    star.style.left = x + 'px';
    star.style.width = '1px';
    star.style.height = h + 'px';
    star.style.animationDuration = duration + 's'; 
  }
}

window.addEventListener("resize", reloadStars);