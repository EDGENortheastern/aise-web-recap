const nameInput = document.getElementById("nameInput")
const greetButton = document.getElementById("greetButton")
const helloMessage = document.getElementById("message")

const sayHello = () => {
    const nameVal = nameInput.value;
    if(nameVal == ''){
        helloMessage.textContent = "Please do not forget to enter name"
    } else {
        helloMessage.textContent = `Hello, ${nameVal}!`
    }
}

greetButton.addEventListener("click", sayHello);
