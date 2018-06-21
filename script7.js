//declaration de fonction
function operation() {
    //declaration des variables
  var shoeSize = document.getElementById('shoeSize').value;
  var yearOfBirth = document.getElementById('yearOfBirth').value;
  var regex = /^[0-9]+$/;
    //Boite de dialogue avec appel des variables
  if(regex.test(shoeSize) && regex.test(yearOfBirth)){
    //Conversion des variables chaînes de caractère en nombre et opération
    result = ((shoeSize * 2 + 5) * 50) - yearOfBirth + 1766;
    alert(result);
  } else {
  alert('Utilisez seulement des chiffres SVP.');
  }
  }
