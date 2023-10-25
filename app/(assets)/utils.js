export const dateFormating = (date) => {
  let [d, m, y] = date.split(/\D/);
  return "20" + y + "-" + m + "-" + d;
};
