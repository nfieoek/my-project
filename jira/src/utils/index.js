export const isFalsy = (value) =>  value === 0 ? false:!value
//定义一个isFalsy,如果参数为0，返回false，不为零返回一个布尔值，该布尔值由value取反转换为布尔值

//在一个函数里，改变传入的对象本身是不好的，会污染参数
export const cleanObject = (object) =>{
    //相当于Object.assign({},object)
    const result={...object}
    Object.keys(result).forEach(key =>{
    //    0
        const value = result[key]
        if(isFalsy(value)){
            delete result[key]
        }
    })
    return result
}
