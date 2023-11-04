const outputSection = document.querySelector('#output-section')
const userList = document.createElement('ol')
const userInput = document.querySelector('input')
const addItemButton = document.querySelector('#add-me')
const footer = document.querySelector('footer')
const resetButton = document.createElement('button')
const listRecord = []

addItemButton.addEventListener('click', () => {
    const cartItems = userInput.value
    
    if (userInput.value == '') {
        alert("please enter something on the input field")

    } else if (userInput.value != '') {

        

        const li = document.createElement('li')
        const span = document.createElement('span')
        const btn = document.createElement('button')

        li.appendChild(span)
        span.textContent = cartItems
        li.appendChild(btn)
        btn.textContent = 'delete'
        userList.appendChild(li)
        listRecord.push(cartItems)
        outputSection.appendChild(userList)
        

        btn.addEventListener('click', () => {
            userList.removeChild(li)
        })

        if (listRecord.length >= 4) {
            footer.appendChild(resetButton)
            resetButton.classList.add('reset-button')
            resetButton.textContent = 'reset'  
            
            resetButton.addEventListener('click', () => {
                outputSection.removeChild(userList)
                footer.removeChild(resetButton)
            })
        }

        

    }

    userInput.focus()
})







