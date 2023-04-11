function capitalizeFirstLetter(string) {
  if (typeof string !== "string") {
    throw new Error("Invalid Input");
  }
  let firstLetter = string.charAt(0);
  let remainingString = string.slice(1);

  return firstLetter.toUpperCase() + remainingString;
}

function concatenateTwoStrings(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    throw new Error("Invalid Input");
  }
  return string1 + string2;
}

function capitalizeSecondWord(string) {
  if (typeof string !== "string") {
    throw new Error("Invalid Input");
  }

  const wordArray = string.split(" ");

  let secondWord = wordArray[1];
  let firstLetter = secondWord.charAt(0);
  let remainingString = secondWord.slice(1);
  let combinedSecondWord = firstLetter.toUpperCase() + remainingString;
  wordArray[1] = combinedSecondWord;

  return wordArray.join(" ");
}

export { capitalizeFirstLetter, concatenateTwoStrings, capitalizeSecondWord };
