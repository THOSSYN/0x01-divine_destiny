import { ActionTypes, GET_TOKEN, DESTROY_TOKEN } from "./action";

export interface AuthState {
    isAuthenticated: boolean;
    token?: string;
}

const initialState: AuthState = {
    isAuthenticated: false,
    token: undefined,
};
  
export default function authReducer(state: AuthState = initialState, action: ActionTypes) {
    switch (action.type) {
        case GET_TOKEN:
            return {
                ...state,
                isAuthenticated: true,
                token: action.payload.token,
            };
        case DESTROY_TOKEN:
            return {
                ...state,
                isAuthenticated: false,
                token: undefined,
            };
        default:
            return state;
    }
}
