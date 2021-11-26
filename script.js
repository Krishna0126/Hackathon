const first_container = document.createElement("div");
first_container.setAttribute("class", "first_container");
document.body.append(first_container);
const second_container = document.createElement("div");
second_container.setAttribute("class", "second_container");
first_container.append(second_container);
const third_container = document.createElement("div");
third_container.setAttribute("class", "third_container");
first_container.append(third_container);
async function getdetails() {
    
        const url = await fetch("https://www.anapioficeandfire.com/api/books");
        const data = await url.json();
        console.log(data);
        data.forEach((book) => createBook(book));  
        const images = 
[
    
{url: "./imgs/1.jpg"},
{url: "./imgs/2.jpg"},
{url: "./imgs/3.jpg"},
{url: "./imgs/4.jpg"},
{url: "./imgs/5.jpg"},
{url: "./imgs/6.jpg"},
{url: "./imgs/7.jpg"},
{url: "./imgs/8.jpg"},
{url: "./imgs/9.jpg"},
{url: "./imgs/10.jpg"}
]
images.forEach((img) => createImage(img));

    
}
getdetails();
function createBook({name,authors,numberOfPages,publisher,country,mediaType,released,characters,isbn}) 
{
    const container = document.createElement("div");
    container.setAttribute("class", "container");
    container.innerHTML = `
       
        <div class = "book_info">
            <p class = "name"> Name Of the Book :${name}</p>
            <p class = "authors"> Author :${authors}</p>  
            <p class = "numberOfPages">Number of Pages ${numberOfPages}</p>
            <p class = "publisher">Publisher:${publisher}</p>
            <p class = "released">Released:${released}</p>
            <p class = "isbn">ISBN :${isbn}</p>

    
        <div>
 

        `
    third_container.append(container);    
}
