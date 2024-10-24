// write your JS code here

var numberArray = [5, 8, 6, 7, 4, 2, 6, 2, 4, 8, 1];
const inpId = document.getElementById('inputArea');

// creating input
const input = document.createElement('input');
input.setAttribute('id', 'elementTxt');
inpId.append(input);

// button
const btn = document.createElement('button');
btn.textContent = 'Delete Element';
btn.setAttribute('id', 'btnDelete');
inpId.append(btn);

// function
function deleteArray() {
  const userVal = parseInt(document.getElementById('elementTxt').value); // Get the value and convert it to a number
  const ans = []; // Reset ans array
  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] !== userVal) {
      ans.push(numberArray[i]); // Use push to add elements to the array
    }
  }

  numberArray = ans; // Update numberArray
  const headi = document.getElementById('he');
  headi.textContent = numberArray; // Update text content
}

btn.addEventListener("click", deleteArray);




