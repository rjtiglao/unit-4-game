

$(document).ready(function(){

     let target = 0;

  let targetNum = function(){ 
      target = 19 + Math.floor(Math.random() * 120);
      return target
  };  
  targetNum();
  $("#number").text(target);

  let counter = 0;
  let win = 0;
  let lose = 0;

  let numRandom = function(){
    let numOpt = Math.floor(Math.random() * 12) + 1;
    return numOpt
  }
  let images = ["./assets/images/cid.png","./assets/images/cloud.png","./assets/images/tifa.png","./assets/images/aerith.png"];

  // create loop for images and number values
  for (let i = 0; i < 4; i++) {
      let numb = numRandom();
    let imageFF = $("<img>");
    imageFF.addClass("ff-image");

    // adds a image to each tag based on image path in images array
    imageFF.attr("src", images[i]);

   // adds a data value to each element
    imageFF.attr("data-ffvalue", numb);

    $("#ff").append(imageFF);
  }

  // on click functions applies to all ff-image ids
  $(".ff-image").on("click", function() {
    // grabs value from data-ffvalue attribute
    let ffValue = ($(this).attr("data-ffvalue"));
    ffValue = parseInt(ffValue);
    // adds value to the counter
    counter += ffValue;


    //shows current counter
    $("#new-score").text("");
    $("#new-score").append(counter);

    //win/lose logic
    if (counter === target) {
      alert("You win!");
      win++
      counter = 0;
      $("#win").text("");
      $("#win").append(win);
      $("#new-score").text("");
      $("#new-score").append(counter);
      targetNum();
      $("#number").text(target);
    }

    else if (counter >= target) {
      alert("You lose!!");
      lose++
      counter = 0;
      $("#lose").text("");
      $("#lose").append(lose);
      $("#new-score").text("");
      $("#new-score").append(counter);
      targetNum();
      $("#number").text(target);
    }

  });
});