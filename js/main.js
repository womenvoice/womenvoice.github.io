// Show hidden block
function viewDiv(){
	document.getElementById("div1").style.display = "block";
  }


 // Jquery animation 
   $(function(){
    $('#img1').hover(
    function(){
    $(this).animate({
    width: 500,
    opacity: 1
    }, 500);
    },
    function(){
    $(this).animate({
    width: 440,
    opacity: 0.5
    }, 500);
    }
    );
   });


// Validation
   function validate() {
var name = document.getElementById("name");
var password = document.getElementById("pass");

if(name.value.trim()=="")
{

alert("Enter username");
name.style.border = "solid 1px red";
return false;
} else if(password.value.trim()=="")
{
  alert("Enter password");
  pass.style.border = "solid 1px red";
  return false;

} else {
  return true;
}

}

function checkLength(el) {
  if (el.value.length != 6) {
    alert("Length must be exactly 6 characters")
  }
}


// Maps
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            center: [47.863990, 66.920514],
            // center: [48.413732, 68.703508], // координата с карты
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 5
        });
    }




    