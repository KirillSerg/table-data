export const dateFormating = (date) => {
  let [d, m, y] = date.split(/\D/);
  console.log("20" + y + "-" + m + "-" + d);
  return "20" + y + "-" + m + "-" + d;
};
