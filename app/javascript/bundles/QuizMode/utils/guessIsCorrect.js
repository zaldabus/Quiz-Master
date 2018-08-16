import changeNumbersToWordsInStringConvertor from '../../../lib/utils/changeNumbersToWordsInStringConvertor';

const guessIsCorrect = (guess, answer) => {
  const convertedAnswer = changeNumbersToWordsInStringConvertor(answer);

  if (guess == answer || guess == convertedAnswer) {
    return true;
  } else {
    return false;
  }
};

export default guessIsCorrect;