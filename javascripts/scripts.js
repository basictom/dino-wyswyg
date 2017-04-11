

$.ajax("./db/dinosaurs.json").done(function(data){
  var dinoArray = data.dinosaurs;
  loopDino(dinoArray);
}).fail(function(error){
  console.log("fail", error);
});



function loopDino(dino){
  var newDino = "";
  for(var i=0;i<dino.length;i++){
    if(i%3===0){
        newDino += `<div class="row">`;
      }

    newDino += `<div class="col-md-4 col-sm-6">`;
    newDino += `<div class="dino-card">`;
    newDino += `<header>${dino[i].type}</header>`;
    newDino += `<section><p class="bio">${dino[i].bio}</p><br /><img class="image" src="${dino[i].img}"></section>`;
    newDino += `<footer>${dino[i].info}</footer>`;
    newDino += `</div>`;
    newDino += `</div>`;

    if(i%3===2){
      newDino += `</div>`;
    }
  }
  $(".output").append(newDino);
}

$(".output").on("click", ".dino-card", function(e){
  // $(".form-control").focus
  $(".dino-card").removeClass("dotted-border");
  $(this).addClass("dotted-border");
  $(".form-control").val("").focus();
});

$(".form-control").keyup(mirrorText);
function mirrorText(e){
  var selectedCard = $(".dotted-border");
  var bioValue = $(".form-control").val();
  var bio = $(".dotted-border").find("p.bio");
  bio.html(bioValue);

  if(e.keyCode == 13){
    $(".form-control").val("");
  }
}
