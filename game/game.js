var character=document.getElementById('character');// getting the Character variable
var block=document.getElementById('block');        // getting the block variable

function jump()                //funtion for jump
{
  if(character.classList !="animate")
  {
  character.classList.add("animate");
}
  setTimeout(function(){
    character.classList.remove("animate");
  },500);

}

var checkDead= setInterval(function()                        //in this function, based on the height and width of the chracter we can set interval when the Block reaches the width 20  on the left side.
{
  var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
  var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
  if(blockLeft<20 && blockLeft>0 && characterTop>=130)  // three function to get true to get dead  function.
  {
    block.style.animation="none";  //to stop the animation once the block left reach 20 width.
    block.style.display="none";    // and when the animation stop we should display none to reload the game .

    alert("you lose")
  }
},10);
