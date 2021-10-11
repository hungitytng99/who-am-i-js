const initState = {
    count: 0
}

export default function reducer(state = initState, action, args) {
    switch (action) {
        case 'INCREAMENT':
            const [ newValue ] = args;
            return {
                ...state,
                count: Number(newValue),
            }
        default:
            return state
    }
}