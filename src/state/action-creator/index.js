export const depositMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "deposite",
            payload: amount
        })
    }
}

export const withDrawMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "withdraw",
            payload: amount
        })
    }
}