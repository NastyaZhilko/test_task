import {Dispatch} from 'redux';
import {api, EmployeeType} from "../DALL/Api";

type InitialStateType = {
    users: EmployeeType[],
    isFetching: boolean
}

const initialState: InitialStateType = {
    users: [],
    isFetching: false
}

export const employeesReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'APP/SET_USERS':
            return ({
                ...state,
                ...action.payload
            });
        case 'APP/DELETE_USER':
            return ({
                ...state,
                users: [...state.users.filter(u => u.id !== action.payload.userId)]
            })
        case 'APP/ADD_USER':
            return ({
                ...state,
                users: [{
                    id: Math.floor(Math.random() * 1000),
                    email: '',
                    avatar: '',
                    ...action.payload
                }, ...state.users]
            })
        case 'APP/SET_IS_FETCHING': {
            return {
                ...state,
                isFetching: action.payload
            }
        }
        default:
            return state;
    }
}

type ActionsTypes = ReturnType<typeof setUser>
    | ReturnType<typeof deleteUser>
    | ReturnType<typeof addUser>
    | ReturnType<typeof setIsFetching>

export const setIsFetching = (status: boolean) =>
    ({type: 'APP/SET_IS_FETCHING', payload: status} as const)
export const setUser = (users: EmployeeType[]) => ({type: 'APP/SET_USERS', payload: {users}} as const)
export const deleteUser = (userId: number) => ({type: 'APP/DELETE_USER', payload: {userId}} as const)
export const addUser = (first_name: string, last_name: string) => ({
    type: 'APP/ADD_USER', payload: {
        first_name,
        last_name,
    }
} as const)


export const getUsersTC = () => async (dispatch: Dispatch) => {
    dispatch(setIsFetching(true))
    try {
        const {data} = await api.getUsers();
        dispatch(setUser(data.data));
    } catch (error) {
        console.log('Error')
    }
    finally {
        dispatch(setIsFetching(false))
    }
}