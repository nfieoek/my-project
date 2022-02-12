import {useArray, useMount} from "./utils";
import React from "react";

export const TsReactTest=()=>{
    const persons:{name:string; age:number}[]=[
    {name:"jack",age:25},
    {name:"ma",age:23}
    ];
     const {value,clear,removeIndex,add}=useArray(persons);
     useMount(() => {

});
      return (
          <div>
              {/*点击后增加第一项*/}
              <button onClick={()=>{add({name:"john",age:24})}}>add john</button>
              {/*点击后删除第一项*/}
              <button onClick={()=>{removeIndex(0)}}>remove</button>
              {/*点击后清空列表*/}
              <button style={{marginBottom:"50px"}} onClick={()=>{clear()}}>clear</button>
              {
                  value.map((person:{age:number,name:string},index:number)=>(
                      <div style={{marginBottom:"30px"}}>
                          <span style={{color:"red"}}></span>
                          <span>{person.name}</span>
                          <span>{person.age}</span>
                      </div>
                  ))}
          </div>
      )



}
