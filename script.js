var displayValue=(num)=>result.value+=num
// function displayValue(num){
//     result.value+=num
//     // let res=document.querySelector("#result")
//     // res.value +=num
// }

var ClearBox=()=>result.value=""
// function ClearBox(){
//     result.value="";
//     // document.querySelector("#result").value=""
// }

var evaluvateExpression=()=>result.value=eval(result.value)
// function evaluvateExpression(){
//     result.value=eval(result.value)
//     // let res=document.querySelector("#result")
//     // let cur_val=res.value
//     // let result=eval(cur_val)
//     // res.value=result
// }

var backspace=()=>result.value=result.value.slice(0,-1)

// function backspace(){
//     let res=document.querySelector("#result")
//     let cur_val=res.value
//     res.value=cur_val.slice(0,-1)
// }