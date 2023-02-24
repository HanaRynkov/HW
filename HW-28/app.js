//HW#28 
const d = new Deferred()
d.then(function(res){console.log("1",res); return "a";});
d.then(function(res){console.log("2",res); return "b";});
d.then(function(res){console.log("3",res); return "c";});
d.resolve('hello');
//1 hello
//2 a
//3 b
class Deferred {
    #function
    constructor(){
        this.#function=[];
    }
    then(fun) {
        this.#function.push(fun);
    }
    resolve(value) {
        this.#function.forEach(fun => value = fun(value))
    }
    
}