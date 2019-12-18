//promise 
let promiseToClean= new Promise(function(resolve, reject){
    let isRoomClean = true;
    if(isRoomClean){
        resolve("clean");
    }else{
        reject("not clean");
    }
});
promiseToClean.then(function(fromTheResolve){
    console.log("the room is "+ fromTheResolve);
}).catch(function(fromTheReject){
    console.log("the room is "+ fromTheReject);
});