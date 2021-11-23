import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://reqres.in/api'
})

export const api = {
    getUsers() {
        return instance.get<UsersResponseType>(`/users?per_page=12`)
    }
}

export type EmployeeType = {
    id: number
    email: string
    first_name: string
    last_name: string
    avatar: string
}
export type UsersResponseType = {
    data: EmployeeType[]
    page: number;
    per_page: number;
    support: {
        text: string;
        url: string;
    };
    total: number;
    total_pages: number;
}