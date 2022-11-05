var nextPalindrome = function (num) {
  let replaceTo = -1;
  let replaceWith = -1;

  for (let i = Math.floor(num.length / 2) - 1; i > 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      if (num[i] <= num[j]) {
        continue;
      }

      if (replaceTo < j) {
        replaceTo = j;
        replaceWith = i;
        continue;
      }

      if (num[replaceWith] >= num[i]) {
        replaceWith = i;
      }
    }
  }

  if (replaceTo === -1) {
    return "";
  }

  const toReplace = num[replaceTo];
  const withReplace = num[replaceWith];

  return (
    num.substring(0, replaceTo) +
    withReplace +
    num.substring(replaceTo + 1, replaceWith) +
    toReplace +
    num.substring(replaceWith + 1)
  );
};

console.log(nextPalindrome("45544554"));
