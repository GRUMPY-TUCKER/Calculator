// Todo: Make M+ M- and MC functional
let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {
      string = eval(string);    //gives the calculative value
      document.querySelector('input').value = string;
    }
    else if (e.target.innerHTML == 'C') {
      string = ""
      document.querySelector('input').value = string;   //clears the string
    }
    else {
      console.log(e.target)
      string = string + e.target.innerHTML;    //calculate the elements
      document.querySelector('input').value = string;
    }
  })
})