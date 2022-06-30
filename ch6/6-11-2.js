// nodemon ch6/6-11-2.js ch6/orders
// nodemon ch6/6-11-2.js ch6/orders -r

import { count } from 'console';
import fs from 'fs';

// if (!process.argv[2]) {
//   throw new Error('파일 이름을 입력하세요');
// }

// const fileName = `./${process.argv[2]}.json`;
// if (!fs.existsSync(fileName)) {
//   throw new Error('파일이 존재하지 않습니다');
// }

// const rawData = fs.readFileSync(fileName);
// const orders = JSON.parse(rawData);
// if (process.argv.includes('-r')) {
//   console.log(orders.filter((order) => order.status === 'ready').length);
// } else {
//   console.log(orders.length);
// }

// 1. 첫 번째 run 함수를 만들어서 테스트성을 높이기
const run = (args) => {
  const command = parseCommandLine(args);
  return countOrders(command);
};

const parseCommandLine = (args) => {
  if (!args) {
    throw new Error('파일 이름을 입력하세요');
  }

  const fileName = `./${args}.json`;
  if (!fs.existsSync(fileName)) {
    throw new Error('파일이 존재하지 않습니다');
  }

  const countReadyOnly = args.includes('-r');

  return {
    fileName,
    countReadyOnly,
  };
};

const countOrders = ({ fileName, countReadyOnly }) => {
  const rawData = fs.readFileSync(fileName);
  const orders = JSON.parse(rawData);
  const filtered = countReadyOnly ? orders.filter((order) => order.status === 'ready') : orders;
  console.log(filtered.length);
};

run(process.argv[2]);
