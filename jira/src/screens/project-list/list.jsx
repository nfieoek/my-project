import React from "react";
//结构赋值从props中的list和users
export const List =({list,users})=>{
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
