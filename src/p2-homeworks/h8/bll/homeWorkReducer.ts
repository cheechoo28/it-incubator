



export const homeWorkReducer = (state: any, action: any): any => {
    switch (action.type) {
        case "sort": {
            const stateCopy = [...state]
            if (action.payload === 'up') {
                stateCopy.sort((a,b) => a.name > b.name ? 1 : -1)
            } else {
                stateCopy.sort((a,b) => b.name > a.name ? 1 : -1)
            }
            return stateCopy
        }
        case "check": {
            return state.filter((p: any) => {
                if (p.age >= action.payload) {
                    return p
                }
            })
        }
        default: return state
    }
};