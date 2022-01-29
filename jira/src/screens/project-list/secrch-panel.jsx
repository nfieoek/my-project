import {useEffect, useState} from "react";

export const SearchPanel =()=>{
   const [param,setParam] = useState({  //useState（）中传入初始化的状态
    //   解构赋值：得到state的最新状态，和一个setParam函数
    name:'',
    personId:''//这是进行初始化
   })

    const [users, setUsers]=useState([])

    useEffect(()=>{},[param]) //deps发生改变后会执行第一个函数
    return <form >
        <div>
            {/*setParam(Object.assign({}//目标函数 ,param,{name:evt.target.value}))*/
            /*Object.assign()方法可将后面的两个源对象可Z枚举参数，复制到第一个参数这个源对象上，同名会覆盖 */}
            <input type="text" value={param.name} onChange={evt =>setParam({
            ...param, //param进行展开
            name: evt.target.value //名字为点击事件的元素的值
                // 点击后触发状态改变函数，值将会变成
            })}/>
            <section value={param.personId} onChange={evt =>setParam({
            ...param,
            name:evt.target.value
            })}>负责人</section>
            <option value={""}>a</option>
            {users.map(user =><option value={user.id}>{user.name}</option>)}

        </div>
    </form>
}
