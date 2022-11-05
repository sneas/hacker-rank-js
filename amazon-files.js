const getPaths = (files, path = "") => {
  const res = [];
  // for (let file of files) {
  //   if (file["files"] === undefined) {
  //     res.push(path + "/" + file["name"]);
  //   } else {
  //     res.push(...getPaths(file["files"], path + "/" + file["name"]));
  //   }
  // }

  while (files.length > 0) {
    const file = files.shift();
    if (file["files"] === undefined) {
      res.push(file["name"]);
    } else {
      files.unshift(
        ...file["files"].map((f) => {
          f["name"] = file["name"] + "/" + f["name"];
          return f;
        })
      );
    }
  }

  return res;
};

console.log(
  getPaths([
    {
      name: "dir1",
      files: [
        { name: "dir2", files: [{ name: "piu1" }, { name: "piu2" }] },
        {
          name: "piu3",
        },
      ],
    },
    { name: "piu4" },
  ])
);
