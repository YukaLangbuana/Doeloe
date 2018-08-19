function init_document(){
  var element    = document.getElementById("inputEjaanBaru");
  var tempoeDoloe= transliterate(element.value);
	var pre_view_element = document.getElementById("ejaanLama");
	pre_view_element.innerHTML = tempoeDoloe;
}

function result(){
	var text = $("#inputEjaanBaru").val();
	var trans_text = transliterate(text);
	$("#ejaanLama").text(trans_text);
}

function transliterate(text){
  ejaanLama = "";
  for(var i = 0; i < text.length; i++){

    switch (text.charAt(i)) {
      case "u":
        ejaanLama = ejaanLama.concat("oe");
        break;

      case "y":
        ejaanLama = ejaanLama.concat("j");
        break;
      
      case "j":
        ejaanLama = ejaanLama.concat("dj");
        break;
      
      case "c":
        ejaanLama = ejaanLama.concat("tj");
        break;
      
      case "k":
        if (text.charAt(i+1) == "h"){
          ejaanLama = ejaanLama.concat("ch");
          i++;
        } else {
          ejaanLama = ejaanLama.concat(text.charAt(i));
        }
        break;

      default:
        ejaanLama = ejaanLama.concat(text.charAt(i));
    }
  }

  return ejaanLama;
}

$(document).ready(function () {
	$('#inputEjaanBaru').keydown(function(event) {
		  if (event.keyCode == '32') {
		      	result();
		   }
	});})