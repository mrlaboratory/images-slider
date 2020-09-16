var photos = ["img/Md Mijanur Rahaman 1.png","img/Md Mijanur Rahaman 2.png","img/Md Mijanur Rahaman 3.png","img/Md Mijanur Rahaman 4.png","img/Md Mijanur Rahaman 5.png","img/Md Mijanur Rahaman 6.png","img/Md Mijanur Rahaman 7.png","img/Md Mijanur Rahaman 8.png"];
var imgtag = document.querySelector("img");
var htag = document.querySelector("h2");

var i = 0;

function next(){
i++;
if(i>photos.length-1){
i = 0;
imgtag.src=photos[i];
var text = this.innerHTML;

htag.innerHTML="Picture "+(i+1)+" is now on display";
}
else{
imgtag.src=photos[i];
var text = this.innerHTML;
htag.innerHTML="Picture "+(i+1)+" is now on display";
}
}
/*  
Hey Dear, I'm Md Mijanur Rahaman, 
Founder & CEO of MR Laboratory.
I have 2 years experience of Blogger template Development. I have enough ideas about HTML CSS and JavaScript to develop blogger theme. Inshaallah I will do better things for you. I can solve Blogger's problem. If you have any problem you can let me know, I will try my best to solve your problem.
Hire me for your work.
Email: admin@mrlaboratory.com
Fb: fb.com/mdmijanurrahaman.mr
Phone No: 01854650673

*/
function prev(){
i--;
if(i<0){
i = photos.length-1;
imgtag.src=photos[i];
htag.innerHTML="Picture "+(i+1)+" is now on display";
}
else{
imgtag.src=photos[i];
htag.innerHTML="Picture "+(i+1)+" is now on display";
}
}






