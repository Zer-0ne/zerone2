let w = document.documentElement.clientWidth || window.innerWidth;
if (w < 769) {
    function show() {
       

        let showhide = document.getElementById('navbar');
        
        console.log(innerWidth)
        showhide.style.display = 'flex';
        
    }

    function check() {
        let showhide = document.getElementById('navbar');
        console.log(innerWidth)        
        showhide.style.display = 'none';
   
    }
}
else if(w>769){
    setInterval(()=>{

        let showhide = document.getElementById('navbar');
        showhide.style.display = 'flex';
    },1000)
}

