//declaration de fonction
function condition() {
    //declaration des variables
  var age = document.getElementById('age').value;
  var regex1 = /^[0-9]{0,2}$/;
  var regex2 = /^[a-zA-Z]+$/;
    //Regex et Vérification de la condition de majeur
  if((regex1.test(age) == true) && (age < 18)){
      alert('Vous étes mineur')
    }
    else if(regex2.test(age) == true){
      alert('Veuillez utiliser des chiffres SVP.')
    }
    else {
      alert('Vous étes majeur')
    }
  }
