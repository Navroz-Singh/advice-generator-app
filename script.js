let advice_number = 1
let advice_number_tag = document.body.getElementsByTagName("span")[0]
advice_number_tag.innerHTML = advice_number
let divider = document.getElementById("divider")
let advice_tag = document.body.getElementsByClassName("middle")[0]
let dice = document.body.getElementsByClassName("dice")[0]

const advice_url = "https://api.adviceslip.com/advice"
let advice = "It is easy to sit up and take notice, what's difficult is getting up and taking action."


dice.addEventListener("click", function(){
    fetch(advice_url).then(response=>{
        if(!response.ok){
            console.log("Error in fetching the response, reload the page.")
        }else{
            return response.json()
        }
    }).then(data=>{
        let temp_adv = data.slip.advice
        if(temp_adv!=advice){
            advice = temp_adv
            advice_number+=1
            advice_number_tag.innerHTML = advice_number
        }
        advice_tag.innerHTML = advice
    }).catch(error=>{
        console.error("We've ran into error, reload the page or come back after a few minutes.", error)
    })
    
    
    
})

if(window.innerWidth<=500){
    divider.src = "images/pattern-divider-mobile.svg"
}else{
    divider.src = "images/pattern-divider-desktop.svg"
}

window.addEventListener("resize", function(){
    if(this.innerWidth<=500){
        divider.src = "images/pattern-divider-mobile.svg"
    }else{
        divider.src = "images/pattern-divider-desktop.svg"
    }
})