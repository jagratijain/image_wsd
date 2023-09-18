const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');


const images = ['img1.jpg', `img2.jpg`, `img3.jpg`, `img4.jpg`, `img5.jpg`, `img6.jpg`, `img7.jpg`];
const alts = {
  'img1.jpg' : 'Clouds & River',
  'img2.jpg' : 'Nandi Hills',
  'img3.jpg' : 'Fort',
  'img4.jpg' : 'Sunrise',
  'img5.jpg' : 'GOlden Mysore Palace'
}


for (const image of images) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${image}`);
  newImage.setAttribute('alt', alts[image]);
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
}


btn.addEventListener('click', () => {
  const btnClass = btn.getAttribute('class');
  if (btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});

