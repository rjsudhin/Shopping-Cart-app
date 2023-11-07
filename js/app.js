const outputSection = document.querySelector('#output-section')
const userList = document.querySelector('ol')
const userInput = document.querySelector('input')
const addItemButton = document.querySelector('#add-me')
const footer = document.querySelector('footer')
const resetButton = document.createElement('button')
const listRecord = []
const colors = ['orange', 'skyblue', 'pink', '#fff']

addItemButton.addEventListener('click', () => {
    const cartItems = userInput.value
    
    if (userInput.value == '') {
        alert("please enter something on the input field")

    } else if (userInput.value != '') {


        // show the random color in selected items
        let color = Math.floor(Math.random() * colors.length)


        const li = document.createElement('li')
        const span = document.createElement('span')
        const btn = document.createElement('span') 

        btn.classList.add('delete-button')
        console.log(btn)
        btn.classList.add("material-symbols-outlined")
        btn.style.cursor = 'pointer'
        // btn.style.border = '1px solid rgb(143, 126, 172)'
        btn.style.borderRadius = '50%'
        btn.style.padding = '2px'
        btn.style.margin = '3px'


        li.appendChild(span)
        span.textContent = cartItems
        span.style.color = colors[color]
        console.log(span)
        li.appendChild(btn)
        btn.textContent = 'backspace'
        userList.appendChild(li)
        listRecord.push(cartItems)
        outputSection.appendChild(userList)
        

        btn.addEventListener('click', () => {
            userList.removeChild(li)
        })

        if (listRecord.length >= 4) {
            footer.appendChild(resetButton)
            resetButton.classList.add('reset-button')
            
            resetButton.innerHTML = '<span class="material-symbols-outlined">restart_alt</span>'  
            resetButton.style.color = 'rgb(143, 126, 172)'
            resetButton.style.backgroundColor = 'transparent'
            resetButton.style.border  = 'none'
            
            
        }

        function removeListItems() {
            userList.removeChild(li)
        }

        resetButton.addEventListener('click', removeListItems)
        resetButton.addEventListener('click', () => {
            footer.removeChild(resetButton)
        })

        

    }

    userInput.focus()
})







