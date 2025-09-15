// Challenge 3 Book constructor
function book(title, author, price, ISBN) {
     this.title = title;
     this.author = author;
}
 
// Creating instances using the constructor
let book1 = new book("Alice in HP Sauce", "Bob", 25, 98765);
let book2 = new book("Bob the Magican", "Alice", 30, 12345);

// Creating instances using the Book constructor

// Displaying book information
book1.displayInfo();
book2.displayInfo();