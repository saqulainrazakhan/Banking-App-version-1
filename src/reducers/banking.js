const initialState = {
  balance: 500
}




export const bankingReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'DEPOSIT':
      return { ...state, balance: state.balance + action.payload }
    case 'WITHDRAW':
      return { ...state, balance: state.balance - action.payload }
    default:
      return state;
  }
}