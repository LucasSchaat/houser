import { createStore } from 'redux'

const initialState = {
    propertyName: '',
    address: '',
    city: '',
    state: '',
    zip: 0,
    image: '',
    mortgage: 0,
    rent: 0
}

export const STEP_ONE = "STEP_ONE"
export const STEP_TWO = "STEP_TWO"
export const STEP_THREE = "STEP_THREE"

function reducer (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case STEP_ONE:
        case STEP_TWO:
        case STEP_THREE:
        default:
            return state
    }
}

export default createStore(reducer)