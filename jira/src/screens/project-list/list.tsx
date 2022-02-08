import React from "react";
import {User} from "./secrch-panel";
//结构赋值从props中的list和users
export interface  Project{
    id:string;
    name:string;
    personId:string;
    pin:boolean;
    organization:string;
}



interface ListProps{
    list:Project[]
    users: User[];
}
export const List =({list,users}:ListProps)=>{
    return <table>
        <thead>
        <tr>
            <th>名称</th>
            <th>负责人</th>
        </tr>
        </thead>
        <tbody>
    {
        //通过arr.map遍历后台返回的数据
        list.map(project =><tr key={project.id}>
        <td>{project.name}</td>
        <td>{users.find(users => users.id ===project.personId)?.name||'未知'
        /*通过users的id和project的id匹配输出该列表的该项*/
        }</td>
    </tr>)
    }
        </tbody>
    </table>
}
