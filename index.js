                                  //task3-1
// let eded=parseInt(prompt("eded daxil eddin"))
// let cavab=1
// if(eded==0 || eded<0){
//     console.log("duz eded yaz")
// }
// else{
//     for (let i = 1; i <=eded; i++) {
//         cavab*=i
//     }
//     console.log(cavab)
// }


                                 //task3-2
// let arr = [2,4,6,7,10,12,58,9]
// let boyukeded=arr[0]
// let kicikeded=arr[0]
// let boyukindex=0
// let kicikindex=0

// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]>boyukeded){
//         boyukeded=arr[i]
//         boyukindex=i
//     }
//     else if(arr[i]<kicikeded){
//         kicikeded=arr[i]
//         kicikindex=i
//     }
// }
// arr[boyukindex]=kicikeded
// arr[kicikindex]=boyukeded
// console.log(arr)
                                //task3-3
// let array=[1,2,3,4,5,6,7,8,9,10]
// let boyukeded=0
// for (let i = 0; i < array.length; i++) {
//     if(array[i]%2==1){
//         if(array[i]>boyukeded){
//             boyukeded=array[i]
//         }
//     }
// }
// console.log(boyukeded)
                            //task3-4
// let array=[1,2,3,4,5,6,7,8,9]
// let boyuk=array[0]
// let kicik=array[0]
// for (let i = 0; i < array.length; i++) {
//     if(array[i]>boyuk){
//         boyuk=array[i]
//     }
//     else if(array[i]<kicik){
//         kicik=array[i]
//     }
// }
// console.log((boyuk+kicik)/2)
                           //task3-5
let array=[1,2,3,4,5,6,7,8,9]
let boyuk=array[0]
let kicik=array[0]
let sum=0

for (let i = 0; i < array.length; i++) {
    if(array[i]>boyuk){
        boyuk=array[i]
    }
    else if(array[i]<kicik){
        kicik=array[i]
    }
    sum+=array[i]
}
var cem=sum
cem=sum-kicik-boyuk
console.log(cem)