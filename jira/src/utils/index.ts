import {useEffect, useState} from "react";

export const isFalsy = (value:any) =>  value === 0 ? false:!value
//定义一个isFalsy,如果参数为0，返回false，不为零返回一个布尔值，该布尔值由value取反转换为布尔值

//在一个函数里，改变传入的对象本身是不好的，会污染参数
export const cleanObject = (object:object) =>{
    //相当于Object.assign({},object)
    const result={...object}
    Object.keys(result).forEach(key =>{
    //    0
        // @ts-ignore
        const value = result[key]
        if(isFalsy(value)){
            // @ts-ignore
            delete result[key]
        }
    })
    return result
}

export const useMount=(callback:()=>void) =>{
    useEffect(()=>{
        callback();
    },[])
}
//
// const debounce = (func,delay) => {
//     let timeout; //闭包，创建一个变量
//     return (...param)=>{  //返回一个内部函数，通过该内部函数执行请求变成一次
//     if(timeout){ //timeout存在，则执行以下函数
//         clearTimeout(timeout)
//     }//清除timeout
//         timeout = setTimeout(function () { //对timeout进行初始化，若再次触发，则重新初始化
//         func(...param);
//     },delay);//延迟一定时间后执行func，
//   }
// }
//
// const log=debounce(()=>console.log('call'),5000)
// log();
// log();
// log();
// export const useDebounce = (param,delay) => {
//     let timeout
//     return (param)=>{
//         if (timeout){
//             clearTimeout(timeout);
//         }
//         timeout=setTimeout(function (){
//
//         },1000)
//
//     }
// }

export const useDebounce = (value:any,delay?:number) => { //定义一个customHook
    const [debouncedValue,setDebouncedValue] =useState(value)  //定义一个
    useEffect(()=>{
        //每次value变化以后设置一个定时器
        const timeout = setTimeout(()=>setDebouncedValue(value),delay)
        //在上一个useEffect处理完以后在运行，
        return ()=>clearTimeout(timeout)
    },[value,delay])
    //返回一个内部函数debouncedValue
    return debouncedValue
}
