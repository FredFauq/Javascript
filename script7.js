//declaration de fonction
function operation() {
    //declaration des variables
  var shoeSize = document.getElementById('shoeSize').value;
  var yearOfBirth = document.getElementById('yearOfBirth').value;
  var regex = /^[0-9\.]+$/;
    //Boite de dialogue avec appel des variables
  if((regex.test(shoeSize) == true) && (regex.test(yearOfBirth) == true)){
    //Conversion des variables chaînes de caractère en nombre et opération
    result = (((parseInt(shoeSize) * 2) + 5) * 50) - parseInt(yearOfBirth) + 1766;
    alert(result);
  }else{
  alert('Utiliser seulement des chiffres SVP.');
  }
  }
