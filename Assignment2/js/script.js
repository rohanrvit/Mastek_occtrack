function handleSubmit(event) {

    event.preventDefault();

    const data = new FormData(event.target);

    const value = Object.fromEntries(data.entries());

    value.courses = data.getAll("courses");

    console.log({ value });
    const myJSON = JSON.stringify(value);
console.log(myJSON);
}

const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

