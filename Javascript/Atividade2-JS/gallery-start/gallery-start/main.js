const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const imageFiles = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

function displayImage(imageSrc) {
    displayedImage.setAttribute('src', 'images/' + imageSrc);
}

for (let i = 0; i < imageFiles.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/' + imageFiles[i]);
    newImage.setAttribute('alt', 'Image ' + (i + 1));
    thumbBar.appendChild(newImage);
  
    newImage.addEventListener('click', function () {
        displayImage(imageFiles[i]);
      });
}
  
btn.onclick = function () {
if (btn.getAttribute('class') === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
} else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
}
};
