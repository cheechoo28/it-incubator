const initState = {
    loading: false
};

export const loadingReducer = (state = initState, action: ActionsType): any => { // fix any
    switch (action.type) {
        case "SET-LOADING":
            return {
                ...state,
                loading: action.value
            }
        default: return state;
    }
};

export const loadingAC = (value: boolean) => ({type: 'SET-LOADING', value} as const); // fix any

type ActionsType = LoadingActionType

type LoadingActionType = ReturnType<typeof loadingAC>