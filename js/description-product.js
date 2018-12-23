const $heart = window.document.querySelector(".-heart");
const $stars = window.document.querySelectorAll(".star");
let index = 0;

$heart.addEventListener("click", handleClickHeart);
function handleClickHeart(){
  $heart.classList.toggle("-active");
 }

$stars.forEach(function($star){
  $star.addEventListener("click", handleStar);
});

function handleStar(){
  this.classList.toggle("-active");
}


