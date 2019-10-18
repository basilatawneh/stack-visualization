let stackSize = 12;
let index = 0;
function push(){
    if(index == stackSize){
        alert("Stack is full, pop item to push one :)");
        return ;
    }
    let stack = document.getElementsByClassName("body")[0];
    let append = "<div class = 'move-items' style = 'bottom:"+ (index++*40)+"px'>";
        append += "item" + index + "</div>";
    let cuurentData = stack.innerHTML;
    cuurentData = cuurentData.replace("move-items","items");
    stack.innerHTML =  cuurentData +append;

    // let lastitem = document.getElementsByClassName("items")[index-1];
    // lastitem.style.animation = "0s"//animation: slide-up 5s ease;"

}