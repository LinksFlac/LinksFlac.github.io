let btn_add = document.getElementById('btn_add')
let taskSection = document.getElementById('task_section')
let closeTask = document.getElementById('close_task')
let taskAdd = document.getElementById('task_add')
let emptyScreen = document.getElementById('empty')
//FORM
let taskName = document.getElementById('taskName')
let taskType = document.getElementById('taskType')
let taskDesc = document.getElementById('task_desc')
//CARDS
let taskContainer = document.getElementById('tarjeta_container')
//let card = document.getElementById('tarjeta')
//let description = document.getElementById('contenido_tarjeta')

btn_add.addEventListener('click', (e)=>{
    taskSection.style.display = 'flex'
    taskName.value = ''
    taskType.value = '0'
    taskDesc.value = ''
})

closeTask.addEventListener('click', (e)=>{
    taskSection.style.display = 'none'
})

taskAdd.addEventListener('click', ()=>{
    let newCard = document.createElement('div')
    //inputs
    let newTaskName = document.createTextNode(taskName.value)
    let newTaskType = taskType.value
    let newTaskDesc = document.createTextNode(taskDesc.value)
    let newCardDesc = document.createElement('div')
    let cardTitle = document.createElement('h3')
    let cardDesc = document.createElement('p')
    //Img
    let cardImgContainer = document.createElement('div')
    let cardImg = document.createElement('img')
    //borrar
    let newCardOptions = document.createElement('div')
    let taskDelet = document.createElement('img')

    if(taskName.value != '' && taskType.value != '0' && taskDesc.value != ''){
        taskSection.style.display = 'none'
        emptyScreen.style.display = 'none'
        taskContainer.style.display = 'flex'

        newCard.className = 'tarjeta'
        //IMG
        switch (newTaskType) {
            case '1':
                cardImg.src = 'icons/work.png'
                break;
            case '2':
                    cardImg.src = 'icons/cleaning.png'
                    break;
            case '3':
                cardImg.src = 'icons/joy.png'
                break;
            case '4':
                cardImg.src = 'icons/personal.png'
                break;
        }
        cardImg.className = 'imagenTar'
        cardImgContainer.appendChild(cardImg)
        newCard.appendChild(cardImgContainer)
        //CONTENIDO
        newCardDesc.className = 'contenido'    
        cardTitle.appendChild(newTaskName)
        cardDesc.appendChild(newTaskDesc)
        newCardDesc.appendChild(cardTitle)
        newCardDesc.appendChild(cardDesc)
        newCard.appendChild(newCardDesc)
        taskContainer.appendChild(newCard)

        //PRIORIDAD
        let prio = document.querySelector('input[name="priority"]:checked').value
        switch (prio) {
            case '1':
                newCard.classList.add('pr1')
                break;
            case '2':
                newCard.classList.add('pr2')
                    break;
            case '3':
                newCard.classList.add('pr3')
                break;
            case '4':
                newCard.classList.add('pr4')
                break;
        }
        //options
        newCardOptions.className = 'opciones'
        taskDelet.className = 'delete'
        taskDelet.src = 'icons/borrar.png'
        newCardOptions.appendChild(taskDelet)
        newCard.appendChild(newCardOptions)
        taskDelet.addEventListener('click', ()=>{
            newCard.style.display = 'none'
        })
    } else{
        alert('Completa todo wachin!')
    }
})

