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
            return {
                propertyName: payload.propertyName,
                address: payload.address,
                city: payload.city,
                state: payload.state,
                zip: payload.zip,
                image: state.image,
                mortgage: state.mortgage,
                rent: state.rent
                }
        case STEP_TWO:
            return { 
                propertyName: state.propertyName,
                address: state.address,
                city: state.city,
                state: state.state,
                zip: state.zip,
                image: payload.image,
                mortgage: state.mortgage,
                rent: state.rent
            }
        case STEP_THREE:
            return { 
                propertyName: state.propertyName,
                address: state.address,
                city: state.city,
                state: state.state,
                zip: state.zip,
                image: state.image,
                mortgage: payload.mortgage,
                rent: payload.rent
            }
        default:
            return state
    }
}

export default createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)