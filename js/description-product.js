const $heart = window.document.querySelector(".-heart");
const $stars = window.document.querySelectorAll(".star");
let index = 0;
const positionLast = $stars.length - 1;

$heart.addEventListener("click", handleClick);
function handleClick(){
  this.classList.toggle("-active");
 }

 function handleClick(){
  this.classList.toggle("-active");
}

$stars.forEach(function($star, key){
  if(key == 0){
     $star.addEventListener("click", firstStar);
  }

  if(key>0 && key < positionLast){
        $star.addEventListener("click", function(){
          middleStar(key);
        });
  }

  if(key == positionLast){
     $star.addEventListener("click", lastStar);
  }
});

function firstStar(){
  $stars.forEach(function($star){
    $star.classList.remove("-active");
  });
  this.classList.add("-active");
}

function middleStar(index){
  $stars.forEach(function($star, key){
    $star.classList.remove("-active");
  
  if(key <= index){
      $star.classList.add("-active");
    } 
  });
 }

function lastStar(){
  $stars.forEach(function($star){
    $star.classList.add("-active");
  });
}




