const generateParenthesis = (n) => {
  let h = new Set(["()"]);

  for (let i = 2; i <= n; i++) {
    const strings = h.values();
    h = new Set();
    for (let str of strings) {
      for (let o = 0; o <= str.length; o++) {
        const opened = str.substring(0, o) + "(" + str.substring(o);
        for (let c = o + 1; c <= opened.length; c++) {
          const closed = opened.substring(0, c) + ")" + opened.substring(c);
          h.add(closed);
        }
      }
    }
  }

  return [...h];
};

console.log(generateParentheses(4));
