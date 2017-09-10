function drawRectangle(x) {
  var rectangleLoc = document.getElementById("rectangle")
  var ctx = rectangleLoc.getContext('2d')
  ctx.fillStyle =  'rgba(0, 0, 200, 0.5)';
  ctx.fillRect(x, 5, 20, 120);
  ctx.stroke();
}

//function that creates the object data
var ImgData = function (src, title) {
  this.src = src;
  this.title = title;
  this.label= title;
  this.imageTotalVotes = 0;
  }

  //array of objects
  var imgObjects = [];
  imgObjects.push(new ImgData("images/bag.jpg", "bag"));
  imgObjects.push(new ImgData("images/banana.jpg", "banana"));
  imgObjects.push(new ImgData("images/boots.jpg", "boots"));
  imgObjects.push(new ImgData("images/chair.jpg", "chair"));
  imgObjects.push(new ImgData("images/cthulhu.jpg", "cthulhu"));
  imgObjects.push(new ImgData("images/dragon.jpg", "dragon"));
  imgObjects.push(new ImgData("images/pen.jpg", "pen"));
  imgObjects.push(new ImgData("images/scissors.jpg", "scissors"));
  imgObjects.push(new ImgData("images/shark.jpg", "shark"));
  imgObjects.push(new ImgData("images/sweep.jpg", "sweep"));
  imgObjects.push(new ImgData("images/unicorn.jpg", "unicorn"));
  imgObjects.push(new ImgData("images/usb.jpg", "usb"));
  imgObjects.push(new ImgData("images/water_can.jpg", "water can"));
  imgObjects.push(new ImgData("images/wine_glass.jpg", "wine glass"));

  //function to add the images to the page
  function addImage(src, title) {
    document.getElementById("header-container").innerText = "Please select which item you would most like to purchase"
    var container = document.getElementById("image-container");
    var image = document.createElement("img");
    image.src = src; //ImgData.src;
    image.title = title;
    image.addEventListener("click", recordVote);
    //image.addEventListener("click", imageReload);
    container.appendChild(image);
  }

  //fucntion to randomly pic the image from the imgObjects array and ensure there are no duplicates
  function showImages() {
    document.getElementById("image-container").innerHTML = "";
    var index1 = Math.floor(Math.random() * imgObjects.length)
    addImage(imgObjects[index1].src, imgObjects[index1].title); //"images" is for the folder where they're stored
    var index2 = Math.floor(Math.random() * imgObjects.length)
    while (index2 == index1) {
      index2 = Math.floor(Math.random() * imgObjects.length);
    }
    addImage(imgObjects[index2].src, imgObjects[index2].title);

    var index3 = Math.floor(Math.random() * imgObjects.length)
    while (index3 == index1 || index3 == index2) {
      index3 = Math.floor(Math.random() * imgObjects.length)
    }
    addImage(imgObjects[index3].src, imgObjects[index3].title);
  }

  var x = 5; //sets the starting position for the rectangle

  //Event listner that records the users vote
  function recordVote(event) {
    var clickedItemTitle = event.target.title; //this is the event object. target is a property within the event object and it gives info about what in HTML was clicked
    console.log(clickedItemTitle);
    var index = 0;
        if(reloadCounter > 0){
        drawRectangle(x+= 20);
      }
        else {drawRectangle(x);
      }
      event.target.classList.add("onClick")
    do {
      var imageClicked = imgObjects[index];
      if (clickedItemTitle == imageClicked.title) {
        imageClicked.imageTotalVotes++;
      } else {
        index ++
      } //closes if/else
    }  while (clickedItemTitle != imageClicked.title && index < imgObjects.length);
    imageReload();
    console.log(imageClicked.imageTotalVotes)

    localStorage.setItem("party", JSON.stringify(imgObjects));

  } //closes function

  function pageRefresh () {
    if (localStorage.getItem("party") != null) {
      imgObjects = JSON.parse(localStorage.getItem("party"))
    }
    showImages()
  }

  window.addEventListener("load", pageRefresh);

  var reloadCounter = 0;

//function to reload the images after the user votes
  function imageReload () {
    document.getElementById("header-container")
    setTimeout (function (){
      if (reloadCounter < 14) {
      showImages(); //this also has the addImage() in it, and that has the recordVote(), so all are being called with this one
      reloadCounter++;
      console.log("reload counter: " + reloadCounter);
    } else {
      document.getElementById("image-container").innerHTML = "";
      document.getElementById("header-container").innerText = "Thanks for playing! Here are your results"
      chartResults();
    }
  }, 300); //timeout delay
} //closes imageReoad()

//function to reset reload counter and then clear all the prior visual results from the page
  function voteAgain() {
    reloadCounter = 0; //-1
    document.getElementById("results-container").innerHTML = ""; //clears chart
    document.getElementById("button").innerHTML = "";//clears button
    var rectangleLoc = document.getElementById("rectangle") //clears the rectangle on the next 3 lines
    var ctx = rectangleLoc.getContext('2d')
    ctx.clearRect(0, 0, rectangleLoc.width, rectangleLoc.height);
    x = 5;
    //imageReload(); was replaced by showImages() below
    showImages();
  }
