console.log('works');

function addName(letter,callback){
    console.log(letter+' Printed first');
    callback();
}
function callB(){
    console.log('Now print Callback');
}
addName('A',callB)


function num(){
    
   setTimeout(()=>{
    console.log('1');
    setTimeout(()=>{
        console.log(2); 
        setTimeout(()=>{
            console.log(3); 
            setTimeout(()=>{
                console.log(4); 
                setTimeout(()=>{
                    console.log(5);
                    setTimeout(()=>{
                        console.log(6); 
                        setTimeout(()=>{
                            console.log(7);
                            setTimeout(()=>{
                                console.log(8); 
                                setTimeout(()=>{
                                    console.log(9); 
                                    setTimeout(()=>{
                                        console.log(10); 
                                    },10000)
                                },9000)
                            },8000) 
                        },7000)
                    },6000) 
                },5000)
            },4000)
        },3000)
    },2000)
   },1000)

}

num();



let printNum=(time,num)=>{
    return new Promise((resolve,reject)=>{
        if(num){
            setTimeout(()=>{
                resolve(num())
            },1000)
        }
        else{
           reject( console.log('no number'));
        }
    })
}


printNum (0 ,()=>console.log("Number"))
.then (()=> {return printNum(1000,()=> console.log("1"))
})
.then (()=> {return printNum(2000,()=> console.log("2"))
})
.then (()=> {return printNum(3000,()=> console.log("3"))
})
.then (()=> {return printNum(4000,()=> console.log("4"))
})
.then (()=> {return printNum(5000,()=> console.log("5"))
})
.then (()=> {return printNum(6000,()=> console.log("6"))
})
.then (()=> {return printNum(7000,()=> console.log("7"))
})
.catch(()=> console.log('Error occured'))



const promise1=(arg1)=>{
    return new Promise((resolve,reject)=>{
        if(arg1=='yes'){
            resolve('promise resolved');
        }
        else{
            reject('promise rejected');
        }
    })
}

promise1('yes').then(response=>console.log(response)).catch(err=>console.log(err))



function callbackHell(){
setTimeout(()=>{
    console.log('Hi'); 
    setTimeout(()=>{
        console.log('prepbytes'); 
    },2000)
},1000)
}
callbackHell();




let promise = new Promise(function(resolve, reject) {
    const x = "hello";
    const y = "hello"
    if(x === y) {
        resolve();
    } else {
        reject();
    }
    });
            
    promise.then(function () {
                console.log('Success, both are same');
            }).
            catch(function () {
                console.log('Error');
            });


            const p1 = Promise.resolve(54);
            const p2 = 245;
            const p3 = new Promise((resolve, reject) => {
            const error=false;
            if(!error){
              setTimeout(() => {
                resolve("prepbytes");
              }, 100);
        }   
            else{
                setTimeout(() => {
                    reject();
                  }, 100); 
            }
            })
        
        
            
            Promise.all([p1, p2, p3]).then((values) => {
              console.log(values); 
            }).catch((error)=>{console.log('error')})    
            
         
            
    // a promise
let promise2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved')}, 2000); 
});

// async function
async function asyncFunc() {

    // wait until the promise resolves 
    let result = await promise2; 

    console.log(result);
    console.log('hello');
}

// calling the async function
asyncFunc();        