let stackSize = 12;
let index = 0;
function push(){
    if(index == stackSize){
        alert("Stack is full, pop item to push one :)");
        return ;
    }
    let stack = document.getElementsByClassName("body")[0];
    // let append = "<div class = 'move-items" + (++index)+"' >";
    //     append += "item" + index + "</div>";
    // let cuurentData = stack.innerHTML;
    // cuurentData = cuurentData.replace("move-items"+(index-1),"items");
    // stack.innerHTML =  cuurentData +append;
    var node = document.createElement("div");                 // Create a <li> node
    var textnode = document.createTextNode("item" + ++index);  
        // Create a text node
    node.appendChild(textnode);  
    node.classList.add("move-items");
    // node.style.bottom = ((index - 1) * 10 + 10) + "px";
    stack.appendChild(node);
    change("slide",index)    

    setTimeout(() => {

        node.className = node.className.replace("slide"," ");
    }, 2100);
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
function change(anim,index)
    {
        // find our -webkit-keyframe rule
        var keyframes = findKeyframesRule(anim);
        
      if (keyframes !== null) {
        // remove the existing 0% and 100% rules
        keyframes.deleteRule("0%");
        keyframes.deleteRule("30%");
        keyframes.deleteRule("100%");
        
        // create new 0% and 100% rules with random numbers
        keyframes.appendRule(" 0% {opacity: 0; left: -200px; bottom: " + (600-index*50) + "px; }");
        keyframes.appendRule ("30% { opacity: 1; blue; left: 0px; bottom: " + (600-index*50) + "px; }")
        keyframes.appendRule ("100% {left: 0px; bottom: 0px; }");
         console.log(keyframes);
        // assign the animation to our element (which will cause the animation to run)
        		/*document.getElementById('box').style.WebkitAnimationName = anim;
        document.getElementById('box').style.MozAnimationName = anim;*/
      }
        
    }

// begin the new animation process
// function startChange()
//     {
//         // remove the old animation from our object
// //         document.getElementById('box').style.webkitAnimationName = "none";
        
//         // call the change method, which will update the keyframe animation
//         setTimeout(function(){change("rotate");}, 0);
//     }

// // get a random number integer between two low/high extremes

