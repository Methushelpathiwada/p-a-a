// Write one example explaining how you can write a callback function ?

// let callback = function() {  
//     console.log("This message is shown after 3 seconds");
// }
 
// setTimeout(callback, 3000);

// as the callback() is called after some time interval it's a "callback function" 

// "Write callback function to print numbers from 1 to 7, 
// in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

// Explain callback hell.
// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"
// let rod = () => {
//            setTimeout(()=>{
//                console.log("1");
//                 setTimeout(()=>{
//                   console.log("2");
//                    setTimeout(()=>{
//                       console.log("3");
//                        setTimeout(()=>{
//                           console.log("4");
//                             setTimeout(()=>{
//                               console.log("5");
//                               setTimeout(()=>{
//                                   console.log("6");
//                                   setTimeout(()=>{
//                                       console.log("7");
//                                   },1000)
//                               },1000)
//                          },1000)
//                      },1000)
//                  },1000)   
        //      },1000)
        //  },1000)
        // }
        // rod()   

        // the long triangle shaped form that occurs above is called as "callback hell"
        // as the callback() are so irrelevant & so clummsy & the code written is not readable

// Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec 
// , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7

// function pro(number){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(number);
//             resolve("promise done")
//         },1000)
//     }) 
// }
// pro(1).then(()=>pro(2)).then(()=>pro(3)).then(()=>pro(4)).then(()=>pro(5)).then(()=>pro(6)).then(()=>pro(7))

// Create a promise function accepting a argument, if yes is passed to the function then 
// it should go to resolved state and print Promise Resolved,and if nothing is passed then it should
//  go to reject state and catch the error and print Promise Rejected 

// function prom(pr){
//     return new Promise((resolve,reject)=>{
//         if(pr=="yes"){
//             console.log("Promise Resolved")
//         }
//         else{
//             console.log("Promise Rejected");
//         }
//     })
// }
// prom("yes").then((pr)=>{console.log(pr);}).catch((pr)=>{console.log(pr);})
