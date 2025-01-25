
// 1. Library Inventory Management: Create a library inventory management system with the following features:

// Maintain an array of book objects, where each book has the following properties:
// id: Unique identifier for the book (numeric).
// title: Title of the book (string).
// author: Author of the book (string).
// genre: Genre of the book (string).
// quantity: Number of copies available in the library (numeric).
// Initialize the library inventory with a predefined set of books.

type Book ={
      id: number,
      title: string,
      author: string,
      genre: string,
      quantity: number,
}

let library : Book[] =[
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
]

    
// 2. Union and Intersection Types: Utilize union and intersection types to define complex data structures and improve type safety:

// Define a union type BookFormat to represent different formats of books, such as paperback, hardcover, and ebook.
type BookFormat =  'paperback' | 'hardcover'| 'ebook'

let format:BookFormat ;
 format='paperback'; 
 format='hardcover'; 
 format='ebook'; 

 format='abcd'; 

// Create an intersection type LibraryBook by combining the Book interface with the BookFormat union type.

type LibraryBook = Book & {
      format: BookFormat
};
let librarybook: LibraryBook={
      id:4,
      title: 'title4',
      author: 'Author4',
      genre: 'genere4',
      quantity: 4,
      format: 'ebook'
}

// 3. Interface Definitions: Define interfaces to establish clear contracts for data structures:

// Create an interface Book to define the structure of a book object with properties id, title, author, genre, and quantity.
// Define an interface Library to specify the structure of the library inventory, which consists of an array of LibraryBook objects.
let inventory: LibraryBook[] =[
      {
            id:5,
            title: 'title5',
            author: 'Author5',
            genre: 'genere5',
            quantity: 5,
            format: 'hardcover'   
      },
      {
            id:6,
            title: 'title6',
            author: 'Author6',
            genre: 'genere6',
            quantity: 6,
            format: 'paperback'   
      }
]

// 4. Enums: Implement enums to represent fixed sets of values for book genres:

// Define an enum Genre to represent different genres of books, such as Fiction, Non-Fiction, Mystery, Thriller, etc.
// Use the Genre enum to specify the genre property of book objects in the library inventory.


// 5. Testing: Test your TypeScript code by performing the following tasks:

// Display the library inventory on the console, showing the details of each book.
// Add functionality to search for books by title, author, or genre.
// Implement a feature to update the quantity of books available in the inventory.
// Ensure that the TypeScript compiler catches type errors and provides helpful type annotations.