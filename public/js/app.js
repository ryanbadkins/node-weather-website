const weatherForm = document.querySelector('form')
const searchInput = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')


// messageOne.textContent = ''

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()

    const location = searchInput.value
    messageTwo.textContent = ''

    messageOne.textContent ='loading forecast..'
    fetch(`http://localhost:3000/weather?address=${location}`).then((response)=>{
        response.json().then((data) =>{
            if(data.error){
                messageOne.textContent = data.error
            }else{
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })
})