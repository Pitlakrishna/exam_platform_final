import { createContext, useEffect, useReducer } from "react"


const initial_state = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    loading: false,
    error: null,
}

export const AuthContext = createContext(initial_state);

const AuthReducer = (state, action) => {
    switch (action.type) {
        case "login_start":
            return {
                user: null,
                loading: true,
                error: null,
            };
        case 'login_success':
            return {
                user: action.payload,
                loading: false,
                error: null,
            }
        case 'login-failure':
            return {
                user: null,
                loading: false,
                error: action.payload,
            }
        case 'logout':
            return {
                user: null,
                loading: false,
                error: null,
            }
        default:
            return state;
    }
};

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, initial_state);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user));
    }, [state.user]);

    return (
        <AuthContext.Provider value={{ user: state.user, loading: state.loading, error: state.error, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}