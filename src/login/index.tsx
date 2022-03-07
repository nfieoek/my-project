import React, {FormEvent} from "react";
import {useAuth} from "../context/auth.context";
const apiUrl=process.env.REACT_APP_API_URL

export const LoginScreen = () =>{
       const {login,user}=useAuth();
    const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
     event.preventDefault()
        const username = (event.currentTarget.elements[0] as HTMLFormElement).value
        const password = (event.currentTarget.elements[1] as HTMLFormElement).value
        login({username,password})
        }

    return <form onSubmit={handleSubmit}>
        {user?<div>
            登陆成功，用户名:{user?.name}
            Token:{user.token}
        </div>:null}
        <div>
            <label htmlFor="username">用户名</label>
            <input type={"text"} id={'username'}/>
        </div>
        <div>
            <label htmlFor="password">密码</label>
            <input type={"password"} id={'password'}/>
        </div>
        <button type={"submit"}>登陆</button>
    </form>
}
