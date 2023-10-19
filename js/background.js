const images = ["0.jpg", "1.jpg", "2.jpg"];
const container = document.querySelector(".container");
const chosenImage = images[Math.floor(Math.random() * images.length)];  //images[random]을 받아와 담기

const bgImage = document.createElement("img");  //document에 <img>만들기

bgImage.src = `img/${chosenImage}`; //만든 <img>태그에 src적용  <img src="img/random.jpg>"

//append:body 가장 아래에... prepend:body 가장 위에..
document.body.appendChild(bgImage);    //document body에 추가
bgImage.id = "bgImage";