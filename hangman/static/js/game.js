let guessed = [];
let word_to_guess = '';
let num_errors = 0;

const MAX_ERRORS = 9;

function startNewGame() {
    guessed = [];
    word_to_guess = getWord();
    num_errors = 0;
    updateStatus();
}

function isLetter(str){
    return str && (str.length === 1) && str.match(/[a-z]/i);
}

function didWeLose() {
    return (num_errors >= MAX_ERRORS);
}

function didWeWin() {
    const num_unguessed_chars = word_to_guess.split('')
          .filter( (letter) => (guessed.indexOf(letter) === -1) )
          .length;
    
    return (!didWeLose()) && (num_unguessed_chars === 0);
}

function isGameOver() {
    return didWeWin() || didWeLose();
}

function updateWordRegion() {
    chars_to_display = word_to_guess.split('').map( (letter) => {
        if (!isLetter(letter) || (guessed.indexOf(letter) !== -1)) {
            return letter;
        }
        return '*';
    });

    $('.word-region').text(chars_to_display.join(''));
}

function updateUsedLetters() {
    $('.used-letters').text(guessed.join(' '));
}

function updateResult() {
    let message = '';
    if (didWeWin()) {
        message = `Congratulations, you guessed the word ${word_to_guess}`;
    }

    if (didWeLose()) {
        message = `Oh oh! Out of guesses! The word was ${word_to_guess}`;
    }
    
    $('#result').text(message);
}

function updateStatus() {
    updateWordRegion();
    drawHangman(num_errors);
    updateUsedLetters();
    updateResult();
}

function makeGuess(letter) {
    letter = letter.toLowerCase();
    if ((guessed.indexOf(letter) !== -1) || (!isLetter(letter)) && (!isGameOver())){
        return;
    }

    guessed.push(letter);
    
    if (word_to_guess.indexOf(letter) === -1) {
        num_errors += 1;
        updateStatus();
        return;
    }

    updateStatus();
}
