    document.addEventListener("DOMContentLoaded", function () {
    const bookForm = document.getElementById("book-form");
    const bookList = document.getElementById("book-list");

    bookForm.addEventListener("submit", function (event) {
        event.preventDefault();

      // Get form values
        const title = document.getElementById("title").value;
        const author = document.getElementById("author").value;
        const year = document.getElementById("year").value;

      // Validate form values
      if (title === "" || author === "" || year === "") {
        alert("Please fill in all fields");
        return;
      }

      // Create a new book object
      const book = {
        title,
        author,
        year,
      };

      // Call a function from chaiaurcode.js to add the book to the list
      addBookToList(book);

      // Clear the form fields
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("year").value = "";
    });

    function addBookToList(book) {
      // Create a new row in the book list
        const bookRow = document.createElement("div");
        bookRow.classList.add("table-section");

      // Create individual cells for title, author, and year
        const titleCell = document.createElement("div");
        titleCell.textContent = book.title;

        const authorCell = document.createElement("div");
        authorCell.textContent = book.author;

        const yearCell = document.createElement("div");
        yearCell.textContent = book.year;

      // Append cells to the row
        bookRow.appendChild(titleCell);
        bookRow.appendChild(authorCell);
        bookRow.appendChild(yearCell);

      // Append the row to the book list
        bookList.appendChild(bookRow);
    }
});
