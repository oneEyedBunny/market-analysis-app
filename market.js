//constructor function to build out image objects
var ImgData = function (src, title) {
  this.src = src;
  this.title = title;
  this.imageTotalVotes = 0;
  }

  //array for objects
  var imgObjects = [];
  imgObjects.push(new ImgData("bag.jpg", "bag"));
  imgObjects.push(new ImgData("banana.jpg", "banana"));
  imgObjects.push(new ImgData("boots.jpg", "boots"));
  imgObjects.push(new ImgData("chair.jpg", "chair"));
  imgObjects.push(new ImgData("cthulhu.jpg", "cthulhu"));
  imgObjects.push(new ImgData("dragon.jpg", "dragon"));
  imgObjects.push(new ImgData("pen.jpg", "pen"));
  imgObjects.push(new ImgData("scissors.jpg", "scissors"));
  imgObjects.push(new ImgData("shark.jpg", "shark"));
  imgObjects.push(new ImgData("sweep.jpg", "sweep"));
  imgObjects.push(new ImgData("unicorn.jpg", "unicorn"));
  imgObjects.push(new ImgData("usb.jpg", "usb"));
  imgObjects.push(new ImgData("water_can.jpg", "water_can"));
  imgObjects.push(new ImgData("wine_glass.jpg", "wine_glass"));


  //function to add the images to the page
  function addImage(src, title) {
    var container = document.getElementById("image-container");
    var image = document.createElement("img");
    image.src = src; //ImgData.src;
    image.title = title;
    image.addEventListener("click", recordVote);
    container.appendChild(image);
  }

  //fucntion to randomly pic the image from the addImage array and ensure there are no duplicates
  function showImages() {
    var index1 = Math.floor(Math.random() * 14)
    addImage("images/"+imgObjects[index1].src, imgObjects[index1].title); //"images" is for the folder where they're stored
    var index2 = Math.floor(Math.random() * 14)
    while (index2 == index1) {
      index2 = Math.floor(Math.random() * 14);
    }
    addImage("images/"+imgObjects[index2].src, imgObjects[index2].title);

    var index3 = Math.floor(Math.random() * 14)
    while (index3 == index1 || index3 == index2) {
      index3 = Math.floor(Math.random() * 14)
    }
    addImage("images/"+imgObjects[index3].src, imgObjects[index3].title);
  }

  //records the users vote
  function recordVote(event) {
    var clickedItemTitle = event.target.title; //this is the event object. target is a property within the event object and it gives info about what in HTML was clicked
    console.log(clickedItemTitle);
    var index = 0;
    do {
      var imageClicked = imgObjects[index];
      if (clickedItemTitle == imageClicked.title) {
        imageClicked.imageTotalVotes++;
      } else {
        index ++
      } //closes if/else
    }  while (clickedItemTitle != imageClicked.title);
    console.log(imageClicked.imageTotalVotes)
} //closes function

  window.addEventListener("load", showImages);

  function drawEllipse() {
    ellipseLoc = document.getElementById("ellipse")
    fill(black);
    drawellipse (100, 100, 200, 200);
  }
