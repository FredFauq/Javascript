//declaration de fonction
function operation() {
    //declaration des variables
  var firstNumber = document.getElementById('firstNumber').value;
  var secondNumber = document.getElementById('secondNumber').value;
  var regex = /^[0-9\.]+$/;
    //Boite de dialogue avec appel des variables
  if((regex.test(firstNumber) == true) && (regex.test(secondNumber) == true)){
    //Conversion des variables chaînes de caractère en nombre et opération
  result = parseInt(firstNumber) / parseInt(secondNumber);
  alert(result);
  }else{
  alert('Utiliser seulement des chiffres SVP.');
  }
  }
