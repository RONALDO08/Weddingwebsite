// intro auto hide
setTimeout(()=>{
 document.getElementById("intro").style.display="none";
},4000);

// open envelope
function openEnvelope(){
 document.getElementById("envelope").classList.add("open");

 setTimeout(()=>{
   document.getElementById("envelope").style.display="none";
   document.getElementById("audio").play();
 },1000);
}

// lightbox
function openLightbox(img){
 document.getElementById("lightbox").style.display="flex";
 document.getElementById("lightbox-img").src = img.src;
}

function closeLightbox(){
 document.getElementById("lightbox").style.display="none";
}