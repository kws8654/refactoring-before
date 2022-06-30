// // 예제 1
// export function rating(driver) {
//   return moreThanFiveLateDeliveries(driver) ? 2 : 1;
// }

// function moreThanFiveLateDeliveries(dvr) {
//   return dvr.numberOfLateDeliveries > 5;
// }

// // 예제 2
// function reportLines(customer) {
//   const lines = [];
//   gatherCustomerData(lines, customer);
//   return lines;
// }

// function gatherCustomerData(out, customer) {
//   out.push(['name', customer.name]);
//   out.push(['location', customer.location]);
// }

// 예제 1
export function rating(driver) {
  return dvr.numberOfLateDeliveries > 5 ? 2 : 1;
}

// 예제 2
function reportLines(customer) {
  const lines = [];
  lines.push(['name', customer.name]);
  lines.push(['location', customer.location]);
  return lines;
}
