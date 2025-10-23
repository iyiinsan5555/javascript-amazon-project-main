const xhr = new XMLHttpRequest();
xhr.open("GET", "https://supersimplebackend.dev/");
xhr.send();

//it takes time to respond --> asynchronous code, doesn't wait for code to finish
xhr.addEventListener("load", () => {
    const response = xhr.response;
    console.log(response);
})