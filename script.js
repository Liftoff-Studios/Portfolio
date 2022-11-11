let light = true;
function changeWeather(){
	console.log("weather changed")
	if(light){
		document.body.style.backgroundColor="rgb(40, 40, 40)";
		light=false;
		document.getElementById("weather").innerHTML = "dark_mode";
		document.body.style.color="white";

		document.querySelectorAll(".project-pane").forEach((e)=>{
			e.style.backgroundColor = "rgb(30, 25, 25)";
			e.style.boxShadow = "0px 0px 3px 3px rgb(60,59,59)";
		})

		document.querySelectorAll("#circlegraph img").forEach((e)=>{
			e.style.backgroundColor = "rgb(40, 40, 40)";
		})
	}else{
		document.body.style.backgroundColor="white";
		light=true;
		document.getElementById("weather").innerHTML = "light_mode";
		document.body.style.color="black";
		document.querySelectorAll(".project-pane").forEach((e)=>{
			e.style.backgroundColor = "white";
			e.style.boxShadow = "0px 0px 3px 3px rgb(227, 221, 221)";
		})
		document.querySelectorAll("#circlegraph img").forEach((e)=>{
			e.style.backgroundColor = "white";
		})
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
		document.getElementById("projectappend").innerHTML +=`
		<div class="project-pane" onclick="window.open('${projects[i].link}')">
			<img src="${projects[i].pic}">
			<span>
			<a>${projects[i].name}</a><br>
   ${projects[i].description==null?"A project":projects[i].description}
			</span>
		</div>`
	}


	var circle = document.getElementById('circlegraph'),
	imgs = document.querySelectorAll('#circlegraph img'),
	total = imgs.length,
	coords = {},
	diam, radius, radius2, imgW;

// get circle diameter
// getBoundingClientRect outputs the actual px AFTER transform
//      using getComputedStyle does the job as we want
diam = parseInt( window.getComputedStyle(circle).getPropertyValue('width') ),
radius = diam/2,
imgW = imgs[0].getBoundingClientRect().width,
// get the dimensions of the inner circle we want the images to align to
radius2 = radius - imgW

var i,
	alpha = Math.PI / 2,
	len = imgs.length,
	corner = 2 * Math.PI / total;

for ( i = 0 ; i < total; i++ ){

  imgs[i].style.left = parseInt( ( radius - imgW / 2 ) + ( radius2 * Math.cos( alpha ) ) ) + 'px'
  imgs[i].style.top =  parseInt( ( radius - imgW / 2 ) - ( radius2 * Math.sin( alpha ) ) ) + 'px'

  alpha = alpha - corner;
}




let changeSkill = (c)=>{
	document.getElementById("centerdot2").innerHTML = c;
}