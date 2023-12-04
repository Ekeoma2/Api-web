let textbox=document.querySelector('.textbox')
let add=document.querySelector('.add')
let newTask=document.querySelector('.newTask')
let del=document.querySelector('del')

add.addEventListener('click',function(){
    textbox.innerHTML=textbox.value
    let display=textbox.value
    if (textbox.value == 0) {
        alert('Input a task')
    }else{
        newTask.innerHTML+=`<li class="taskLists">
        <input type="checkbox"><span>${textbox.value}</span>

        
        <button>Edit</button>
        <button class="del">Remove</button>
    
    </li>`
    textbox.value=''
    var wipe = document.querySelectorAll('.del')
    for(var i = 0; i < wipe.length; i++){
        wipe[i].onclick=function(){
            this.parentNode.remove();
        }
    }
    }
    console.log(textbox.value)

   
    
})


// function addtask(){
//     console.log(textbox.value)
//     if (textbox.value == 0) {
//         alert ('Input a task')
//     }
// }