import {useEffect, useState} from "react";
import React from "react";

export const SearchPanel =({users,param,setParam})=>{

    return <form>
        <div>
            {/*setParam(Object.assign({}//目标函数 ,param,{name:evt.target.value}))*/
            /*Object.assign()方法可将后面的两个源对象可 枚举参数，复制到第一个参数这个源对象上，同名会覆盖 */}
            <input type="text" value={param.name} onChange={evt =>setParam({
            ...param, //param进行展开
            name: evt.target.value //名字为点击事件的元素的值// 点击后触发状态改变函数，值将会变成
            })}/>
            <select value={param.personId} onChange={evt =>setParam({
            ...param,
            personId:evt.target.value
            })}>
                <option value={''}>负责人</option>
            {
            users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)
            }
            </select>
        </div>
    </form>
}
