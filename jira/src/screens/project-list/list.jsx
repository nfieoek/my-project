import React from "react";

export const List =({list})=>{
    return <table>
        <thead>
        <tr>
            <th>名称</th>
            <th>负责人</th>
        </tr>

        <tbody>
        {
            list.map(project =>{<tr>
                <td>{project.name}</td>
                <td>{project.personId}</td>
            </tr>})
        }
        </tbody>
        </thead>
    </table>
}
