var $gallery = document.querySelector('main');

var imageUrls = ['https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg',
  'https://c.tenor.com/uYP_Nkq8VPsAAAAd/coding-hello-world.gif',
  'https://wiki.godvillegame.com/images/thumb/7/76/Prap.jpg/298px-Prap.jpg'];

var $imageUrlInput = document.querySelector('input');

var $addImageButton = document.querySelector('button');

$addImageButton.addEventListener('click', function () {
  imageUrls.push($imageUrlInput.value);
});

if ($imageUrlInput.value !== '') {
  updateGallery();
  imageUrls.value = '';

}

function updateGallery() {
  $gallery.innerHTML = '';
  for (var i = 0; i < imageUrls.length; i++) {
    /* console.log(imageUrls[i]); */
    var $imageElement = document.createElement('img');
    $imageElement.className = 'gallery-image';
    $imageElement.src = imageUrls[i];
    $gallery.appendChild($imageElement);
  /*  console.log($imageElement); */
  }

}
updateGallery();
