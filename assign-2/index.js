// 1. Library Inventory Management: Create a library inventory management system with the following features:
var library = [
    {
        id: 1,
        title: 'title1',
        author: 'Author1',
        genre: 'genere1',
        quantity: 1,
    },
    {
        id: 2,
        title: 'title2',
        author: 'Author2',
        genre: 'genere2',
        quantity: 2,
    },
    {
        id: 3,
        title: 'title3',
        author: 'Author3',
        genre: 'genere3',
        quantity: 3,
    },
];
console.log('library : ', library);
console.log('BookFormat : ');
var format;
format = 'paperback';
console.log(format);
format = 'hardcover';
console.log(format);
format = 'ebook';
console.log(format);
var librarybook = {
    id: 4,
    title: 'title4',
    author: 'Author4',
    genre: 'genere4',
    quantity: 4,
    format: 'ebook'
};
console.log('librarybook : ', librarybook);
// 3. Interface Definitions: Define interfaces to establish clear contracts for data structures:
// Create an interface Book to define the structure of a book object with properties id, title, author, genre, and quantity.
// Define an interface Library to specify the structure of the library inventory, which consists of an array of LibraryBook objects.
var inventory = [
    {
        id: 5,
        title: 'title5',
        author: 'Author5',
        genre: 'genere5',
        quantity: 5,
        format: 'hardcover'
    },
    {
        id: 6,
        title: 'title6',
        author: 'Author6',
        genre: 'genere6',
        quantity: 6,
        format: 'paperback'
    }
];
console.log('inventory : ', inventory);
// 4. Enums: Implement enums to represent fixed sets of values for book genres:
// Define an enum Genre to represent different genres of books, such as Fiction, Non-Fiction, Mystery, Thriller, etc.
var Genre;
(function (Genre) {
    Genre["Fiction"] = "Fiction";
    Genre['Non-Fiction'] = "Non-Fiction";
    Genre["Mystery"] = "Mystery";
    Genre["Thriller"] = "Thriller";
    Genre["Biography"] = "Biography";
})(Genre || (Genre = {}));
var library_inventory = [
    {
        id: 7,
        title: 'title7',
        author: 'Author7',
        genre: Genre.Fiction,
        quantity: 7,
    },
    {
        id: 8,
        title: 'title8',
        author: 'Author8',
        genre: Genre["Non-Fiction"],
        quantity: 8,
    },
    {
        id: 9,
        title: 'title9',
        author: 'Author9',
        genre: Genre.Mystery,
        quantity: 9,
    },
    {
        id: 10,
        title: 'title10',
        author: 'Author10',
        genre: Genre["Thriller"],
        quantity: 10,
    },
    {
        id: 11,
        title: 'title11',
        author: 'Author11',
        genre: Genre.Biography,
        quantity: 11,
    },
];
console.log('library_inventory : ', library_inventory);
// 5. Testing: Test your TypeScript code by performing the following tasks:
// Display the library inventory on the console, showing the details of each book.
// Add functionality to search for books by title, author, or genre.
function searchBooks(searchType, searchValue) {
    return library_inventory.filter(function (book) {
        return book[searchType] === searchValue;
    });
}
console.log('searchBooks by genre : Fiction    ;', searchBooks('genre', 'Fiction'));
// Implement a feature to update the quantity of books available in the inventory.
function updateQuantity(id, value) {
    library_inventory.forEach(function (book) {
        if (book.id === id) {
            book.quantity = value;
        }
    });
}
updateQuantity(11, 1);
console.log('updateQuantity of id 11 by 1   ;', library_inventory);
// Ensure that the TypeScript compiler catches type errors and provides helpful type annotations.
