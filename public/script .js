const userInput = document.getElementById('text-input');
const checkPalindromeBtn = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

const checkForPalindrome = input => {
  const originalInput = input; // Store for later output

  if (input === '') {
    alert('Please input a value');
    return;
  }

  // Remove the previous result
  resultDiv.replaceChildren();

  const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();

  let resultMsg ='<img src="images/New sign.jpg" alt="Local Image">';

  
  resultDiv.innerHTML+=resultMsg;

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
