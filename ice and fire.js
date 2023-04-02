let API = "https://anapioficeandfire.com/api/characters/583"
console.log(API)

function ReadAllData(){
    fetch(API,{
        method : "GET"
    })
    .then((response)=>response.json())
    .then(((data)=>console.log(data)))
    .catch((err)=>console.log(err))
}  
ReadAllData();
//operation in html
const booklist = document.querySelector("#book-list")
function renderbook(book){
    const bookdiv = document.createElement("div")
    bookdiv.className="card"
    bookdiv.innerHTML +=
    <h2>book</h2>
    <P><a href="https://anapioficeandfire.com/api/books/5"></a></P>

booklist.appendChild(bookdiv)
}
renderbook(newbookdata)
// render all the books
function renderallbooks(books){
    booklist.innerHTML=" ";
    book.foreach((book)=>{
        book
    })
} 
renderallbooks()