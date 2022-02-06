import {SearchPanel} from "./secrch-panel";
import {List} from "./list";
import {useEffect, useState} from "react";
import React from "react";
export const ProjectListScreen = () => {

    const [param,setParam] = useState({  //useState（）中传入初始化的状态
        //   解构赋值：得到state的最新状态，和一个setParam函数
        name:'',
        personId:''//这是进行初始化
    })
    const [list,setList]=useState([])

    useEffect(()=>{
        fetch('').then(async (response)=>{//列表发生变化时发出异步请求
            if(response.ok){
                setList(await response.json())
            }
        })
    },[param]) //deps发生改变后会执行第一个函数
    return <div>
        <SearchPanel param={param} setParam={setParam}/>
      <List list={list}/>
    </div>
}
