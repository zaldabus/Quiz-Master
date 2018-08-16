import writtenNumber from 'written-number';

const changeNumbersToWordsInStringConvertor = (string) => {
	const anyNumberGroup = /\d+/g;
	const aryOfNumbers = string.match(anyNumberGroup);

	if (aryOfNumbers != null) {
		for (const stringNumber of aryOfNumbers) {
			const intNumber = parseInt(stringNumber)
			const wordForNumber = writtenNumber(intNumber);

			const regexPattern = new RegExp(stringNumber,"g");
			string = string.replace(regexPattern, wordForNumber);
		}
	}

	return string;
};

export default changeNumbersToWordsInStringConvertor;