// export function printOwing(invoice) {
//   let outstanding = 0;

//   console.log('***********************');
//   console.log('**** Customer Owes ****');
//   console.log('***********************');

//   // calculate outstanding
//   for (const o of invoice.orders) {
//     outstanding += o.amount;
//   }

//   // record due date
//   const today = new Date();
//   invoice.dueDate = new Date(
//     today.getFullYear(),
//     today.getMonth(),
//     today.getDate() + 30
//   );

//   //print details
//   console.log(`name: ${invoice.customer}`);
//   console.log(`amount: ${outstanding}`);
//   console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
// }

// const invoice = {
//   orders: [{ amount: 2 }, { amount: 5 }],
//   customer: '엘리',
// };
// printOwing(invoice);

export function printOwing(invoice) {
  printBanner();
  let outstanding = calculateOutstanding(invoice);
  recordDueDate(invoice);
  printDetails(invoice, outstanding);
}

const printBanner = () => {
  console.log('***********************');
  console.log('**** Customer Owes ****');
  console.log('***********************');
};

const calculateOutstanding = () => {
  // let result = 0;
  // for (const o of invoice.orders) {
  //   result += o.amount;
  // }
  // return result;
  return invoice.orders.reduce((sum, order) => (sum += order.amount), 0);
};

const recordDueDate = (invoice) => {
  const today = new Date();
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
};

const printDetails = (invoice, outstanding) => {
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
};

const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: '엘리',
};

printOwing(invoice);
