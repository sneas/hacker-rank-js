function sherlockAndAnagrams(s) {
  let result = 0;

  for (let wordLength = 1; wordLength < s.length; wordLength++) {
    for (
      let referenceBeginning = 0;
      referenceBeginning <= s.length - wordLength - 1;
      referenceBeginning++
    ) {
      const reference = s
        .slice(referenceBeginning, referenceBeginning + wordLength)
        .split("")
        .sort()
        .join("");

      for (
        let wordToCheckBeginning = referenceBeginning + 1;
        wordToCheckBeginning <= s.length - wordLength;
        wordToCheckBeginning++
      ) {
        const wordToCheck = s
          .slice(wordToCheckBeginning, wordToCheckBeginning + wordLength)
          .split("")
          .sort()
          .join("");

        if (reference === wordToCheck) {
          result++;
        }
      }
    }
  }

  return result;
}

console.log(sherlockAndAnagrams("kkkk"));
