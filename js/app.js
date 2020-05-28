const $userInfo = document.querySelector("#user-info")
const $registerForm = document.querySelector("#register")
const $loginForm = document.querySelector("#login")

const createUser =  (username, password) => {
    fetch("http://localhost:4000/users", {
        method: "POST", 
        headers: {
            "content-type": "application/json"
        }, 
        body: JSON.stringify({
                username: username, 
                password: password
            })
        }
    ).then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error(error))
    }


$registerForm.addEventListener('submit', event => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const username = formData.get('username') 
    const password = formData.get('password')
    createUser(username, password); 
})

$loginForm.addEventListener('submit', event => {
    event.preventDefault(); 
    const formData = new FormData(event.target)

})