

var myImage=document.getElementById("slideshow");

var imageArray=["imgs/slika1.jpg","imgs/slika2.jpg","imgs/slika3.jpg","imgs/slika4.jpg"];

var imageIndex=0;

function changeImage () {
	slideshow.setAttribute("src",imageArray [ imageIndex]);
	imageIndex++;
	if (imageIndex>=imageArray.length) {
		imageIndex=0;
	}
}
var intervalHandle = setInterval (changeImage, 2000);

myPhoto.onclick=function() {
	clearInterval(intervalHandle);
	}