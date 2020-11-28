window.onload = function(){
let btn = document.getElementById("contact-wsp-bubble")
console.log("HOLAAAAA",btn)
    btn.addEventListener("click", ()=>{
    console.log("clickeddddddd")
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({'event': 'clicked_wp_bubble'});
    window.open(" https://api.whatsapp.com/send?phone=[54][1168574399]")
})

}



