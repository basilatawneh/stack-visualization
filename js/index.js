let stackSize = 12;
let index = 0;
function push(){
   
    if(index == stackSize){
        popupDisplay("Stack is full, pop item to push one :)");
        return ;
    }
    let stack = document.getElementsByClassName("body")[0];
    let item = creatItem("div","item" + ++index,"move-items")
    stack.appendChild(item);  
   
    change("slide",index,"left")    

    setTimeout(() => {
        item.className = item.className.replace("move-items","items");
    }, 2000);
    
}
    // let lastitem = document.getElementsByClassName("items")[index-1];
    // lastitem.style.animation = "0s"//animation: slide-up 5s ease;"
function isEmpty(){

    if(index == 0){
        popupDisplay("Stack is empty!");
        return true;
    }else{
        popupDisplay("stack is NOT empty");
        return false;
    }
    delay(1000);
}
function pop(){
 
    if(index == 0){
        popupDisplay("Stack is empty, push item to pop one :)");
        return ;
    }
    index--;  
    let stack = document.getElementsByClassName("items");
    let topStack = stack[stack.length-1];
   
    topStack.style.animation = "slide-down 1s linear alternate-reverse forwards";
   
    setTimeout(() => {
        // topStack.style.display="none";
        
       
        let bb= document.getElementsByClassName("body")[0];
        bb.removeChild(topStack);
    }, 1000);
    change("slide-down",index,"right");
    
   
}

function getPeak(){
    
    if(index ==0){
        popupDisplay("Stack is empty");
        return;
    }
    let stack = document.getElementsByClassName("items");
    let topStack = stack[stack.length-1];
    popupDisplay(topStack.innerHTML);
}

function getSize(){
    popupDisplay("the size is : "+index);
}
function creatItem(type,text,className){
    var node = document.createElement(type);                 // Create a <li> node
    var textnode = document.createTextNode(text);  
        // Create a text node
    node.appendChild(textnode);  
    node.classList.add(className);
    // node.style.bottom = ((index - 1) * 10 + 10) + "px";
    return node;

}
function swap(){
    if(index <2){
        popupDisplay("the elements are less than 2");
        return ;
    }
    let stack = document.getElementsByClassName("items");
    let firstElement = stack[stack.length-1];
    let secondElement = stack[stack.length-2];
    firstElement.style.animation = "swap-first 3s linear forwards  ";
    secondElement.style.animation = "swap-second 3s linear forwards 0.1s";
 
    setTimeout(() => {
        // topStack.style.display="none";
        // firstElement.style.display
        // firstElement.style.animation = "";
        // secondElement.style.animation = "";
        let stackBody= document.getElementsByClassName("body")[0];
        stackBody.removeChild(firstElement);
        stackBody.removeChild(secondElement);
        stackBody.appendChild( creatItem("div",firstElement.innerHTML,"items"));
        stackBody.appendChild( creatItem("div",secondElement.innerHTML,"items"));
        popupAnimationChange("swap-first",index,"left");
        popupAnimationChange("swap-second",index-1,"right");
    }, 3050);
   

}
function popupDisplay(text){
    let popup = document.getElementsByClassName("popup")[0];
    popup.innerHTML = text;
    popup.style.display = "block";
    //popup.style.animation = ""
    setTimeout(() => {
        popup.style.display = "none";
    }, 3000);
//    delay(3000);
}
function delay(time){
    let start = new Date();
    while(true){
        let end = new Date();
        if((end-start)>=time)
             break;
    }
}
// search the CSSOM for a specific -webkit-keyframe rule
function findKeyframesRule(rule)
    {
        // gather all stylesheets into an array
        var ss = document.styleSheets;
        
        // loop through the stylesheets
        for (var i = 0; i < ss.length; ++i) {
            
            // loop through all the rules
            for (var j = 0; j < ss[i].cssRules.length; ++j) {
                
                // find the -webkit-keyframe rule whose name matches our passed over parameter and return that rule
                if ((ss[i].cssRules[j].type == window.CSSRule.WEBKIT_KEYFRAMES_RULE || ss[i].cssRules[j].type == window.CSSRule.KEYFRAMES_RULE) && ss[i].cssRules[j].name == rule)
                    return ss[i].cssRules[j];
            }
        }
        
        // rule not found
        return null;
    }

// remove old keyframes and add new ones
function change(anim,index,dir)
    {
        // find our -webkit-keyframe rule
        var keyframes = findKeyframesRule(anim);
        
      if (keyframes !== null) {
        // remove the existing 0% and 100% rules
        keyframes.deleteRule("0%");
        keyframes.deleteRule("30%");
        keyframes.deleteRule("100%");
        
        // create new 0% and 100% rules with random numbers
        keyframes.appendRule(" 0% {opacity: 0; "+dir+": -200px; bottom: " + (600-index*50) + "px; }");
        keyframes.appendRule ("30% { opacity: 1; blue; "+dir+": 0px; bottom: " + (600-index*50) + "px; }")
        keyframes.appendRule ("100% {"+dir+": 0px; bottom: 0px; }");
         console.log(keyframes);
        // assign the animation to our element (which will cause the animation to run)
        		/*document.getElementById('box').style.WebkitAnimationName = anim;
        document.getElementById('box').style.MozAnimationName = anim;*/
      }
        
    }
function popupAnimationChange(animationName1,index,dir){
     // find our -webkit-keyframe rule
     let keyframes = findKeyframesRule(animationName1);
    
     if (keyframes !== null ) {
      
       keyframes.deleteRule("0%");
       keyframes.deleteRule("50%");
       keyframes.deleteRule("60%");   
       keyframes.deleteRule("80%");
       keyframes.deleteRule("100%");

       keyframes.appendRule(" 0%   {background-color:#6cd0e6;  bottom:0px;}");
       keyframes.appendRule ("50%  {background-color:#563dde; "+dir+":0px; bottom:"+(600-50*index)+"px;}")
       keyframes.appendRule ("60%  {background-color:#6cd0e6; "+dir+":200px;bottom:"+(600-50*index)+"px;}");
       keyframes.appendRule ("80%  {background-color:#563dde; "+dir+":0px; bottom:"+(600-50*index)+"px;}")
       keyframes.appendRule ("100% {background-color:#6cd0e6; "+dir+":0px; bottom:0px;}")
     }
       
}
