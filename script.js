const nameInput = document.getElementById("nameInput");
const greetButton = document.getElementById("greetButton");
const helloMessage = document.getElementById("message");

const toTitleCase = (name) =>
    name
        .toLowerCase()
        .split(" ")
        .filter(Boolean)
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(" ");

const sanitiseName = (value) =>
    value
        .trim()
        .replace(/[^a-zA-Z\s]/g, "")
        .replace(/\s+/g, " ");

const sayHello = () => {
    let raw = sanitiseName(nameInput.value);

    if (raw.length < 2) {
        helloMessage.textContent = "⚠️ Enter a valid name";
        helloMessage.classList.add("show");
        return;
    }

    const name = toTitleCase(raw);

    helloMessage.classList.remove("show");
    void helloMessage.offsetWidth;

    helloMessage.textContent = `🌿 Hello, ${name}! 🌿`;
    helloMessage.classList.add("show");
};

greetButton.addEventListener("click", sayHello);

nameInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") sayHello();
});