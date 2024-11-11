let imgbox = document.getElementById("imgbox");
let qrimg = document.getElementById("qrimage");
let qrtxt = document.getElementById("qrtext");

function genQR(){
    if(qrtxt.value.length>0){
qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtxt.value;
imgbox.classList.add("show-img");
}
else{
    qrtxt.classList.add('error')
    setTimeout(()=>{
        qrtxt.classList.remove('error')
        alert("enter text or QR");
    },1000)
}
}