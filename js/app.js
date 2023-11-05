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
        let color = Math.floor(Math.random() * colors.length)
        console.log(color)
        const li = document.createElement('li')
        const span = document.createElement('span')
        const btn = document.createElement('span') 
    
        btn.classList.add("material-symbols-outlined")
        btn.style.color = 'rgb(143, 126, 172)'
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
            resetButton.classList.add('input')
            
            resetButton.textContent = 'reset'  
            
            resetButton.addEventListener('click', () => {
                outputSection.removeChild(userList)
                footer.removeChild(resetButton)
            })
        }

        

    }

    userInput.focus()
})







