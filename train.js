console.log("Jack Ma maslahatlari");

const list = [
  "yaxshi talaba boling", //0-20
  "togri boshliq tanlang va koproq hato qiling", // 20-30
  "uzingiz uchun ishlashni boshlang", // 30-40
  "siz kuchli bolgan narsalarni qiling", // 40-50
  "yoshlarga investitsiya kiriting", // 50-60
  "endi dam oling baribir foydasi yoq", //60
];

function maslahatBering(a, callback) {
  if (typeof a !== "number") callback("insert a number", null);
  else if (a <= 20) callback(null, list[0]);
  else if (a > 20 && a <= 30) callback(null, list[1]);
  else if (a > 30 && a <= 40) callback(null, list[2]);
  else if (a > 40 && a <= 50) callback(null, list[3]);
  else if (a > 50 && a <= 60) callback(null, list[4]);
  else {
    setTimeout(() => {
      callback(null, list[5]);
    }, 5000);
  }
}
console.log("passed here 0");
maslahatBering(65, (err, data) => {
  if (err) console.log("error:", err);
  else {
    console.log("answer:", data);
  }
});

console.log("passed here 1");