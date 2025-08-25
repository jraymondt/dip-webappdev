// Challenge - Stage 2
// The data
let addBook = function (book){


// If there's no book to do, do nothing
// data
if (!book || book.length < 1) return;
// Get the list

// Create a new list item
let list = document.querySelector('#list')
// template
let listItem = document.createElement("li")
// Append the item to the list
listItem.textContent = book;
// render
list.appendChild(listItem);
};
let book = "Harry Potter I";
let book1 = "Harry Potter II;"
addBook(book1)

addBook(book);

let data = {
    books: ['Harry Potter III', 'Harry Potter']
}
// The template
let template = function (props) {
    let html =
        '<ul>' +
            props.books.map(function (book) {
                return '<li>' + book + '</li>';
                    }).join('') +
                '</ul>';
            return html;
        };

// Render the template into the UI
let app = document.querySelector('#list');
app.innerHTML = template(data);

// Update the UI
data.books.push("Harry Potter IV");
data.books.push("Harry Potter V");
//data.books.pop();
//data.books[1] = "Harry Potter VII"
app.innerHTML = template(data);
