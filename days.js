const getDay = (now) => {
  var start = new Date(now.getFullYear(), 0, 0);
  var diff =
    now -
    start +
    (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000;
  var oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
};

Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

const getRes = () => {
  const startTime = Date.UTC(2000, 0, 1);
  const endTime = Date.UTC(2010, 0, 1);

  let day = new Date(2000, 0, 1);
  let endDate = new Date(2010, 0, 1);

  const res = [];

  while (day.getTime() < endDate.getTime()) {
    res.push([
      Date.UTC(day.getFullYear(), day.getMonth(), day.getDate()),
      day.getFullYear() * getDay(day),
    ]);
    day = day.addDays(1);
  }

  return res;
};

console.log(getRes());

const formData = new FormData();
formData.set("a", "b");

this.nativeHttp
  .sendRequest("https://httpbin.org/post", {
    method: "post",
    data: formData,
    serializer: "multipart",
  })
  .then((data) => {
    console.log("cordova-plugin-advanced-http is installed properly", data);
  });
