let arrayOfInputs = [];
let askAgain = true;
let user = {
  choice: '',
  input: ''
}

do {
  user.choice = prompt('¿Desea crear un array de inputs? [S/N]').toUpperCase();
  switch (user.choice) {
    case 'S':
      while (askAgain) {
        user.input = prompt('Ingrese algo o "Fin" para terminar').toUpperCase();
        while (user.input !== 'FIN') {
          if (user.input === '') {
            user.input = prompt('El elemento no puede ser un string vacío; por favor ingrese algo').toUpperCase();
          } else {
            arrayOfInputs.push(user.input);
            user.input = prompt('Ingrese otra cosa o "Fin" para terminar').toUpperCase();
          }
        }
        alert(`Su array contiene ${arrayOfInputs.length} elementos: ${arrayOfInputs.join(', ')}`);
        let list = document.getElementById('list');
        arrayOfInputs.forEach(input => {
          let word = document.createElement('li');
          word.innerHTML = input;
          list.appendChild(word);
        })
        askAgain = false;
      }
      break;
    case 'N':
      alert('Ok, adiós.');
      askAgain = false;
      break;
    default:
      alert('Debe ingresar una "S" o una "N".');
  }
} while (askAgain);
