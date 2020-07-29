"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", inputStdin => {
  inputString += inputStdin;
});

process.stdin.on("end", _ => {
  inputString = inputString
    .trim()
    .split("\n")
    .map(str => str.trim());

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the componentsInGraph function below.
 */
function componentsInGraph(gb) {
  const graph = {};
  const visited = {};

  function DFS(vertext) {
    visited[vertext] = true;
    let number = 1;
    for (const adjacent of graph[vertext]) {
      if (visited[adjacent]) {
        continue;
      }

      number += DFS(adjacent);
    }

    return number;
  }

  let min = Infinity;
  let max = 0;

  for (const [p1, p2] of gb) {
    if (graph[p1] === undefined) {
      graph[p1] = [];
    }

    if (graph[p2] === undefined) {
      graph[p2] = [];
    }

    graph[p1].push(p2);
    graph[p2].push(p1);

    visited[p1] = false;
    visited[p2] = false;
  }

  for (const vertex of Object.keys(visited).slice(
    0,
    Object.keys(visited).length / 2
  )) {
    if (visited[vertex] === true) {
      continue;
    }

    const number = DFS(vertex);
    if (number > max) {
      max = number;
    }

    if (number < min) {
      min = number;
    }
  }

  return [min, max];
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  let gb = Array(n);

  for (let gbRowItr = 0; gbRowItr < n; gbRowItr++) {
    gb[gbRowItr] = readLine()
      .split(" ")
      .map(gbTemp => parseInt(gbTemp, 10));
  }

  let result = componentsInGraph(gb);

  ws.write(result.join(" ") + "\n");

  ws.end();
}
