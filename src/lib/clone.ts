// 在尖括号中声明一个将要传入的未知类型X，下列方法表示传入X类型返回X类型
// 将传入的JSON字符串变为JavaScript值或对象
function deepClone<X>(data:X):X{
    return JSON.parse(JSON.stringify(data));
}
export default deepClone;