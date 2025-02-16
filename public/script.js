const userInput = document.getElementById('text-input');
const checkPalindromeBtn = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');
const resultDiv2 = document.getElementById('result2');

function checkForPalindrome (input ) {
  
  const originalInput = input; // Store for later output

  if (input === '') {
    alert('Please input a value');
    return;
  }

  // Remove the previous result
  resultDiv.replaceChildren();

  const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
 resultDiv.innerHTML +="<p> we dont care, we are cute gay couples</p>";
    const img = document.createElement("img");

  // Set the image source
  img.src ="images/New sign.jpg";  // Replace with the actual image path
  img.alt = "Minimized Image";

  // Set the width and height directly in HTML
  img.width = 350;   // Minimize the image to 150px wide
  img.height = 400;  // Adjust height accordingly (optional)

  // Append the image to the container
  const container = document.querySelector(".container");
  resultDiv2.appendChild(img);

  
 

  // Show the result.
  resultDiv.classList.remove('hidden');
};

checkPalindromeBtn.addEventListener('click', () => {
  checkForPalindrome(userInput.value);
  userInput.value = '';
});

userInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    checkForPalindrome(userInput.value);
    userInput.value = '';
  }
});
