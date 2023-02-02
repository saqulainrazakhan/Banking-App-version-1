export const deposit = cash => {
  return {
    type: 'DEPOSIT',
    payload: cash,
  }
}


export const withDraw = cash => {
  return {
    type: "WITHDRAW",
    payload: cash,
  }
}