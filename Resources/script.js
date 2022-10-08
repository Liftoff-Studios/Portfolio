let light = true;
function changeWeather(){
	console.log("weather changed")
	if(light){
		document.body.style.backgroundColor="rgb(40, 40, 40)";
		light=false;
		document.getElementById("weather").innerHTML = "dark_mode";
		document.body.style.color="white";
	}else{
		document.body.style.backgroundColor="white";
		light=true;
		document.getElementById("weather").innerHTML = "light_mode";
		document.body.style.color="black";
	}
	
}


/**Change page function**/
var scenes = document.getElementsByClassName('scene');
function changePage(index) {
	for (var i = 0; i < scenes.length; i++) {
		scenes[i].style.display = 'none';
	}
	scenes[index].style.display = 'block';
	scenes[index].classList.add("master");
	window.scrollTo(0,0)
};
changePage(0);

let aboutMe = [
	"I'm an amateur developer who's still in high school.",
	"I've been coding for a long time",
	"I also love to play sports and debate in Model United Nations"
];
let numberin = 0;
function changeAboutSlide(){
	if(numberin==aboutMe.length){
		numberin = 0;
	};	document.getElementById("texttext").innerHTML = aboutMe[numberin];
	numberin++;
}
changeAboutSlide();
let projects = [
	{
		pic:"https://res.cloudinary.com/practicaldev/image/fetch/s--p4fOYx3u--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ob5wvhb2bbp2pobvzr7q.png",
		description:"A Chat application that supports many awesome features",
		link:"https://dolphinchat-client.liftoff-ka.repl.co",
		name:"DolphinChat"
	}
];
for(let i=0;i<projects.length;i++){
		document.getElementById("projectappend").innerHTML +=`<div class="project-pane">
			<img src="${projects[i].pic}">
			<span>
			<a target="_blank" href="${projects[i].link}">${projects[i].name}</a><br>
   ${projects[i].description==null?"A project":projects[i].description}
			</span>
		</div>`
	}
