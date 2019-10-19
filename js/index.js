let stackSize = 12;
let index = 0;
function push(){
    if(index == stackSize){
        alert("Stack is full, pop item to push one :)");
        return ;
    }
    let stack = document.getElementsByClassName("body")[0];
   
    var node = document.createElement("div");                 // Create a <li> node
    var textnode = document.createTextNode("item" + ++index);  
        // Create a text node
    node.appendChild(textnode);  
    node.classList.add("move-items");
    // node.style.bottom = ((index - 1) * 10 + 10) + "px";
    stack.appendChild(node);
    change("slide",index,"left")    

    setTimeout(() => {

        node.className = node.className.replace("slide"," ");
    }, 2000);
}
    // let lastitem = document.getElementsByClassName("items")[index-1];
    // lastitem.style.animation = "0s"//animation: slide-up 5s ease;"
function isEmpty(){
    if(index == 0){
        alert("Stack is empty!");
        return true;
    }else{
        alert("stack is NOT empty");
        return false;
    }
}
function pop(){
    if(index == 0){
        alert("Stack is empty, push item to pop one :)");
        return ;
    }
   
    let stack = document.getElementsByClassName("move-items");
    let topStack = stack[stack.length-1];
   
    topStack.style.animation = "slide-down 1s linear alternate-reverse"
    
    setTimeout(() => {
        topStack.style.display="none";
        //change("slide-down",-1*index)  
        index--;  
        // change("slide-down",index,"right");
        let bb= document.getElementsByClassName("body")[0];
        bb.removeChild(topStack);
    }, 1500);
    
   
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
