import React from "react";
import {SearchPanel} from "./secrch-panel";
import {List} from "./list";
import {useEffect, useState} from "react";
import qs from "qs";
import {cleanObject} from "../../utils";

const apiUrl=process.env.REACT_APP_API_URL

export const ProjectListScreen = () => {

    const [param,setParam] = useState({  //useState（）中传入初始化的状态
        //   解构赋值：得到state的最新状态，定义一个setParam函数
        name:'',
        personId:''//这是进行初始化
    })

    const [list,setList]=useState([])

    const [users, setUsers]=useState([])
//列表发生变化时发出异步请求，通过useEffect函数刷新页面
    useEffect(()=>{
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(async response => {//fetch函数获得后台数据
            if(response.ok){
                setList(await response.json()) //通过useEffect函数对state进行更改
            }
        })
    },[param]) //每次deps发生改变后会执行useEffect函数，从而执行setState函数从而变更刷新状态

    useEffect(()=>{
        fetch(`${apiUrl}/users`).then(async (response) => {
            if (response.ok){
                setUsers(await response.json())
            }
        })
    },[param])

    return <div>
        {/*{通过props传递fetch获得的后台数据}*/}
        <SearchPanel users={users} param={param} setParam={setParam}/>
      <List users={users} list={list}/>
    </div>
}
