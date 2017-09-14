//Problem #1
const lengths = (arrayOfStrings) => {
let arrayOfLengths = '';

for (let i=0; i < arrayOfStrings.length; i++) {
	if(arrayOfStrings[i].length >= 0) {
		arrayOfLengths += arrayOfStrings[i].length
	}
}
return arrayOfLengths;
};
lengths(['dylan', 'bob', 'sam']);

//Problem #2
const transmogrifier =(num1, num2, num3) => {
	
	return Math.pow((num1 * num2), num3)
};
transmogrifier(5, 3, 2);

//Problem #3
const toonify = (accent, sentence) => { 
		if(accent === 'daffy') {
			newDaffySentence = sentence.replace(/s/g, 'th');
			return newDaffySentence;	
		}
		if (accent === 'elmer') {
			newElmerSentence = sentence.replace(/r/g, 'w');
			return newElmerSentence;
		}
		else {
			return(sentence);
		}
};
toonify('daffy', 'suffering sucataz');

//Problem #4
const wordReverse = (string) => {
	return string.split(' ').reverse().join(' ')
}

wordReverse('the duck is sitting')

//Problem #5
const wordReverse = (string) => {
	firstReverse = (string.split('').reverse().join(''))
	secondReverse = (firstReverse.split (' ').reverse().join(' '))
	return secondReverse
}

wordReverse('the duck is sitting')

//Problem #6
const longest = (arrayOfStrings) => {
	let longestWord = '';
	for (i=0; i < arrayOfStrings.length; i++) {
		if(arrayOfStrings[i].length > longestWord.length) {
			longestWord = arrayOfStrings[i];
		}
	}
	return longestWord 
};
longest(['cullen', 'Cullen', 'pitch']);  --> output is cullen

//Problem #7

