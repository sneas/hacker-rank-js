function processData(commands) {
  const stack = [];
  let result = "";
  const output = [];

  const undo = () => {
    const command = stack.pop();

    switch (command[0]) {
      case "1":
        result = result.slice(0, result.length - command[1].length);
        break;
      case "2":
        result = result + command[2];
        break;
    }
  };

  for (command of commands) {
    switch (command[0]) {
      case "1":
        result = result + command[1];
        stack.push(command);
        break;
      case "2":
        const substr = result.slice(-parseInt(command[1]));
        result = result.slice(0, result.length - parseInt(command[1]));
        stack.push([...command, substr]);
        break;
      case "3":
        output.push(result.charAt(parseInt(command[1]) - 1));
        break;
      default:
        undo();
    }
  }

  console.log(output.join("\n"));
}

// processData([ [ '1', 'abc' ],
//     [ '3', '3' ],
//     [ '2', '3' ],
//     [ '1', 'xy' ],
//     [ '3', '2' ],
//     [ '4' ],
//     [ '4' ],
//     [ '3', '1' ],
// ]);

// processData([
//     ['1', 'abcd'],
//     ['2', '3'],
//     ['2', '1'],
//     ['4'],
//     ['4'],
//     ['1', '123'],
//     ['4']
// ]);

processData([
  ["1", "ewcgpjfh"],
  ["1", "igqsbqyp"],
  ["1", "qsdliigcj"],
  ["4"],
  ["3", "15"],
  ["1", "iilmgp"],
  ["2", "8"],
  ["4"],
  ["2", "18"],
  ["1", "scwhors"]
]);
