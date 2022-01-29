const moneyRef = {
  PENNY: 0.01,
  NICKEL: 0.05,
  DIME: 0.1,
  QUARTER: 0.25,
  ONE: 1.0,
  FIVE: 5.0,
  TEN: 10.0,
  TWENTY: 20.0,
  'ONE HUNDRED': 100.0,
}

const checkCashRegister = (price, cash, cid) => {
  let changeNeeded = cash - price
  let total = 0
  let changeToGive = []

  // find total amount of money in draw by iterating over all values
  for (let i = 0; i < cid.length; i++) {
    total = total + cid[i][1]
  }
  total = total.toFixed(2) // weird repeating decimal with javaScript so round to 2 decimal places

  if (changeNeeded.toFixed(2) === total) {
    return { status: 'CLOSED', change: cid }
  }
  if (changeNeeded < total) {
    let cidRev = cid.reverse()

    for (let money of cidRev) {
      let changeCounter = [money[0], 0]

      while (changeNeeded >= moneyRef[money[0]] && money[1] > 0) {
        changeNeeded = changeNeeded - moneyRef[money[0]]

        changeNeeded = changeNeeded.toFixed(2)

        money[1] = money[1] - moneyRef[money[0]]

        changeCounter[1] = changeCounter[1] + moneyRef[money[0]]
      }

      if (changeCounter[1] > 0) {
        changeToGive.push(changeCounter)
      }
    }
  }
  if (changeNeeded > 0) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] }
  }
  return { status: 'OPEN', change: changeToGive }
}

checkCashRegister(19.5, 20, [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100],
])
