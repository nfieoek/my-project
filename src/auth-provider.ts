//在真实环境中 使用firebase第三方 auth服务，本文件不需要开发中开发

const apiUrl = process.env.REACT_APP_API_URL

import {User} from "./screens/project-list/secrch-panel";

const localStorageKey = '__auth_provider_token__'

export const getToken = () => {
    window.localStorage.getItem(localStorageKey)
}

export const handleUserResponse = ({user}: { user: User }) => {
    window.localStorage.setItem(localStorageKey, user.token || '')
    return user
}

export const login = (data: { username: string, password: string }) => {
    return fetch(`${apiUrl}/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(
        async (response) => {
            if (response.ok) {
                return handleUserResponse(await response.json())
            }
        }
    )
}



export const register = (data: { username: string, password: string }) => {
    return fetch(`${apiUrl}/register`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(
        async (response) => {
            if (response.ok) {
                return handleUserResponse(await response.json())
            }
        }
    )
}