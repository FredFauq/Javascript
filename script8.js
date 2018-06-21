//declaration de fonction
function condition() {
    //declaration des variables
  var age = document.getElementById('age').value;
  var regex = /^[0-9\.]+$/;
    //Regex et Vérification de la condition de majeur
  if((regex.test(age) == true) && (age < 18)){
      alert('Vous étes mineur')
    }
    else{
      alert('Vous étes majeur')
    }
  }
