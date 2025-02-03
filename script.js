const button = document.getElementById("send");
const daynight = document.getElementById("daynight");
const input = document.getElementById("input");
const taskList = document.getElementById("taskList");
const body = document.querySelector("body")

daynight.addEventListener('click', ()=>{
    if (body.classList.toggle('dark-mode')){
        daynight.textContent = '☀️'
        daynight.style.backgroundColor = 'white'
    }else{
        daynight.textContent = '🌙'
        daynight.style.backgroundColor = 'black'
    }
});


button.addEventListener('click', ()=>{
    const li = document.createElement("li");
    li.className = 'li-element'

    const span = document.createElement('span');
    span.textContent = input.value;
    li.appendChild(span)


    taskList.appendChild(li)

    const editDelete = document.createElement('div');


    const editBtn = document.createElement('button');
    editBtn.textContent = '🖊'
    editDelete.appendChild(editBtn)

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '🪣'
    editDelete.appendChild(deleteBtn)
    deleteBtn.addEventListener('click',() =>{
        li.remove()
    });
    editBtn.addEventListener('click',() => {
        let e1 = prompt(`${span.textContent}ni yangi sozga almashtiring`)
        if (e1 === null || e1 === ''){
            alert('siz soz yozmadingiz')
        }
        else{
            span.textContent = e1;
        }
        
    })
    li.appendChild(editDelete)

    input.value='';

})
