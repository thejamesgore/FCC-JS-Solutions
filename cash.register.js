const money = [
  ['Penny', 0.01],
  ['Nickle', 0.05],
  ['Dime', 0.1],
  ['Quarter', 0.25],
  ['One', 1],
  ['Five', 5],
  ['Ten', 10],
  ['Twenty', 20],
  ['One Hundred', 100],
]

function checkCashRegister(price, cash, cid) {
  let status = ''
  let changeNeeded = cash - price
  // console.log(change)
  let total = 0

  // find total amount of money in draw by iterating over all monetary values
  for (let i = 0; i < cid.length; i++) {
    total = total + cid[i][1]
  }
  // weird decimal with javaScript round to 2 decimal places
  total = total.toFixed(2)

  // check to see if money in draw is less than change due
  if (changeNeeded > total) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] }
  }
  // check to see if money in draw is same as change
  if (changeNeeded == total) {
    return { status: 'CLOSED', change: cid }
  }
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
