import { createContext, useReducer } from "react";


const initial_state = {
    isFullScreen: false,
}

export const ControlledContext = createContext(initial_state)


const ControlledReducer = (state, action) => {
    switch (action.type) {
        case "fullScreen":
            return {
                ...state,
                isFullScreen: true,
            }
        case 'notFullScreen':
            return {
                ...state,
                isFullScreen: false,
            }
        default:
            return state

    }
}

export const ControlledContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ControlledReducer, initial_state)
    return (
        <ControlledContext.Provider value={{ state, dispatch }}>{children}</ControlledContext.Provider>
    )
}