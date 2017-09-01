//constructor function to build out image objects
// function drawEllipse() {
//   var ellipseLoc = document.getElementById("ellipse")
//   var ctx = ellipseLoc.getContext('2d')
//   ctx.ellipse (100, 100, 200, 200);
//   ctx.fill(black);
// }
// drawEllipse();
// var header-container=document.getElementById("header-container");
// var image-container = document.getElementById("image-container");
// var results-container = document.getElementById("results-container");

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
    event.target.classList.add("onClick")
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
} //closes imageReload()
