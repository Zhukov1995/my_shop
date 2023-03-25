const initialState = {
    totalShopCounter: 0,
    labelTotalShopCounter: '',
    UIarrIDitem: [],
    resultArrIDitem: [],
    allSumBasket: 0,
    targetItemID: '8882100',
    navBarFlag: false
}

const reducer = (state = initialState,action) => {
    switch(action.type) {
        case 'INC_TOTAL_SHOP_COUNTER': 
            return {...state, totalShopCounter: state.totalShopCounter + 1}
        case 'DEC_TOTAL_SHOP_COUNTER':
            return {...state, totalShopCounter: state.totalShopCounter - 1}
        case 'CORECT_TOTAL_SHOP_COUNTER': 
            return {...state, totalShopCounter: state.totalShopCounter - action.payload }
        case 'UI_ADD_NEW_ID':
            return {
                ...state,
                UIarrIDitem: [...state.UIarrIDitem,action.payload]
            }
        case 'UI_DELETE_ID': 
            return {
                ...state,
                UIarrIDitem: [...state.UIarrIDitem.slice(0,action.payload),...state.UIarrIDitem.slice(action.payload + 1)]
            }
        case 'RESULT_ADD_NEW_ID':
            return {
                ...state,
                resultArrIDitem: [...state.resultArrIDitem,action.payload]
            }
        case 'RESULT_DELETE_ID': 
            return {
                ...state,
                resultArrIDitem: [...state.resultArrIDitem.slice(0,action.payload),...state.resultArrIDitem.slice(action.payload + 1)]
            }
        case 'RESULT_DELETE_TARGET_ALL_ID': 
            return {
                ...state, 
                resultArrIDitem: state.resultArrIDitem.filter(id => id !== action.payload)
            }
        case 'SET_LABEL_TOTAL_COUNTER':
            return {...state, labelTotalShopCounter: action.payload}
        case 'CALCULATE_ALL_SUM_BASKET':
            return {...state, allSumBasket: action.payload}
        case 'SET_TARGET_ITEM_ID':
            return {...state, targetItemID: action.payload}
        case 'NAV_BAR_TOGGLE': {
            return {...state, navBarFlag: !state.navBarFlag}
        }
        default: return state
    }
}

export default reducer;