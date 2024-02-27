let currentScore = '';

function updateScore(number) {
  currentScore += number;
  document.getElementById('score').value = currentScore;
}

function enterScore() {
  const current = parseInt(currentScore);
  let min = parseInt(document.getElementById('min-score').value);
  let max = parseInt(document.getElementById('max-score').value);
  
  if (isNaN(min) || current < min) {
    min = current;
    document.getElementById('min-score').value = min;
  }
  
  if (isNaN(max) || current > max) {
    max = current;
    document.getElementById('max-score').value = max;
  }
  
  currentScore = '';
  document.getElementById('score').value = '';
}