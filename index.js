
let inputfield = document.querySelector('#text');
let genBTN = document.querySelector('#genBtn');
let imgGenr = document.querySelector('#imgGen');
let btnrest = document.querySelector('#reset');
let btndown = document.querySelector('#download');



genBTN.addEventListener('click',function(){
    imgGenr.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + inputfield.value;
    // imgGenr.src = ' https://api.imgflip.com/caption_image' + inputfield.value;
});

btnrest.addEventListener('click',function(){
    inputfield.value = '';
    imgGenr.src = '';

});
btndown.addEventListener('click',function(){
     let hrf = imgGenr.src;
     window.open(hrf)
});
