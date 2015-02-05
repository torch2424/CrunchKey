<SCRIPT LANGUAGE="JavaScript">
<!-- hide script from old browsers
//Our arraylists for our numbers and operators
var operators = [];
var numbers = [];

//Function to compute answer and display it in text
function compute()
{
	alert("Working!");
	//Get the input from the text box
	var input = document.getElementById('inputBox').value;
	
	//Output answer
	document.getElementById('answer').value = "Sonic The Hedgehog";
	
}

function popup(e) {
  var link = document.URL;
  alert("This is the Link : ( " +link+ " )");
}

var plusBtn = document.querySelector('.plus');
plusBtn.addEventListener('click', popup);
// end hiding script from old browsers -->
</SCRIPT>
