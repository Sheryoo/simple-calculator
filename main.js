(function(){
    let screen =document.querySelector(".screen")
    let buttons =document.querySelectorAll(".btn")
    let clear =document.querySelector(".clear")
    let equal =document.querySelector(".equal")
    let power=document.querySelector(".power")

    buttons.forEach(function(button){
            button.addEventListener("click",function(e){
                let value=e.target.dataset.num;
                screen.value +=value
            })
        })

    equal.addEventListener("click",function(e){
        if(screen.value ===""){
            screen.value=""
        }
        else{
            let answer=eval(screen.value)
            screen.value=answer
        }
    })
    clear.addEventListener("click",function(e){
        screen.value=""
    })
    power.addEventListener("click",function(e){
        if (screen.value===""){
            screen.value=""
        }else{
        let answer=eval(screen.value)
        // screen.value=Math.pow(answer,2)
        screen.value=answer+"^2"
        equal.addEventListener("click",function(e){let x=Math.pow(answer,2);
        screen.value=x})
    }
    })
    })()


// RAndom Back-Ground Colour:

// let randomletter=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
// let part =[]

// for (let i=0;i<6;i++){
//     (part.push((randomletter[Math.floor(Math.random()*randomletter.length)])))
// }
// x=`#${part.join("")}`
// document.body.style.backgroundColor=x
