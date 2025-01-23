const options = {
  weekday: "short", // Haftaning qisqa nomi
  day: "numeric",
  month: "numeric",
  year: "2-digit",
  hour: "digit",
  minute: "2-digit",
};

const formatter = new Intl.DateTimeFormat("uz-UZ", options);
const date = new Date();

console.log(formatter.format(date));
