// JavaScript source code
const img1 = document.querySelector('.aboutImg1');
const img1Click = img1.addEventListener('click', function () {
    console.log(img1);
    if (img1.style.animationDuration === '0s') {
        img1.style.animationDuration = '5s';
    } else {
        img1.style.animationDuration = '0s';
    }
});
const img2 = document.querySelector('.aboutImg2');
const img2Click = img2.addEventListener('click', function () {
    if (img2.style.animationDuration === '0s') {
        img2.style.animationDuration = '5s';
    } else {
        img2.style.animationDuration = '0s';
    }
});
const img3 = document.querySelector('.aboutImg3');
const img3Click = img3.addEventListener('click', function () {
    if (img3.style.animationDuration === '0s') {
        img3.style.animationDuration = '5s';
    } else {
        img3.style.animationDuration = '0s';
    }
});

//function imgStopStart(imageSelected) {
//    console.log(imageSelected);
//    if (imageSelected.style.animationDuration === '0s') {
//        imageSelected.style.animationDuration = '5s';
//    } else {
//        imageSelected.style.animationDuration = '0s';
//    }
//}