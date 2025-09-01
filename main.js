function changeLight(color) {
  let redLight = document.querySelector('.red');
  let yellowLight = document.querySelector('.yellow');
  let greenLight = document.querySelector('.green');

redLight.style.backgroundColor ='black'
yellowLight.style.backgroundColor ='black'
greenLight.style.backgroundColor ='black'

  if (color == 'red') {
    redLight.style.backgroundColor = 'red';
  } else if (color == 'yellow') {
    yellowLight.style.backgroundColor = 'yellow';
  } else if (color == 'green') {
    greenLight.style.backgroundColor = 'green';
  }

}