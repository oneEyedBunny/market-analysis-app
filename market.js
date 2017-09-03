function drawRectangle(x) {
  var rectangleLoc = document.getElementById("rectangle")
  var ctx = rectangleLoc.getContext('2d')
  ctx.rect(x, 5, 20, 120);
  ctx.stroke();
  ctx.fill(black);
}

//function that creates the object data
var ImgData = function (src, title) {
  this.src = src;
  this.title = title;
  this.label= title;
  this.y = Math.floor(Math.random()*10);
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
    image.addEventListener("click", imageReload);
    container.appendChild(image);
  }

  //fucntion to randomly pic the image from the addImage array and ensure there are no duplicates
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

  var x = 5;
  //records the users vote
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
    console.log(imageClicked.imageTotalVotes)
  } //closes function

  window.addEventListener("load", showImages);

//function that builds the table that displays the results of the votes
  function displayResults() {
    for (var i = 0; i < imgObjects.length; i++) {
      var el = document.getElementById("results-container");
      var ul = document.createElement("ul");
      var list = document.createElement("li");
      list.innerText = imgObjects[i].title + "- " + imgObjects[i].imageTotalVotes;
      ul.appendChild(list);
      el.appendChild(ul);
    }
}

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
      displayResults();
    }
  }, 300); //timeout delay
} //closes imageReoad()
