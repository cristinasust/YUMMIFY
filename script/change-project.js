var i = 1;
var CFG_nprojects = 4; //Number of projects
var lastclass=0;
window.onload = function () {

   setInterval(changeImage, 2000);
   function changeImage() {   
		$('#content-index').removeClass('work-' + lastclass).addClass('work-' + i);
		lastclass=i;
		document.getElementById("work-link").href="work-"+i+".html"; 
		if (i==CFG_nprojects-1){i=0;}
		else{i=i+1;}

   }
  
}