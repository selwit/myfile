let cleanRoom = function(){
    return new Promise(function(resolve, reject){
        resolve("cleaned the room");
    })
};
let removeGarbage = function(){
    return new Promise(function(resolve, reject){
        resolve("garbage taken out");
    })

};
let getIceCream = function(){
    return new Promise(function(resolve, reject){
        resolve("got icecream");
    })
};
cleanRoom().then(function(){
    return removeGarbage();
}).then(function(){
    return getIceCream();
}).then(function(){
    console.log("finished");
});