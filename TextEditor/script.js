  // Event listeners for button clicks
    document.querySelector(".uppercase").addEventListener("click", () => formatText("uppercase"));
    document.querySelector(".lowercase").addEventListener("click", () => formatText("lowercase"));
    document.querySelector(".capitalize").addEventListener("click", () => formatText("capitalize"));
    document.querySelector(".bold").addEventListener("click", () => formatText("bold"));
    document.querySelector(".italic").addEventListener("click", () => formatText("italic"));
    document.querySelector(".underline").addEventListener("click", () => formatText("underline"));


    // Function to format text based on the button clicked
    function formatText(action) {
        // Get the input and output elements
        const inputField = document.getElementById("input-field");
        const outputField = document.getElementById("output-field");
    
        // Get the current text from the input field
        const text = inputField.value;
    
        // Perform the selected action on the text
        let formattedText;
        switch (action) {
        case "uppercase":
            formattedText = text.toUpperCase();
            break;
        case "lowercase":
            formattedText = text.toLowerCase();
            break;
        case "capitalize":
            formattedText = text.replace(/\b\w/g, (char) => char.toUpperCase());
            break;
        case "bold":
            formattedText = `<strong>${text}</strong>`;
            break;
        case "italic":
            formattedText = `<em>${text}</em>`;
            break;
        case "underline":
            formattedText = `<u>${text}</u>`;
            break;
        default:
            formattedText = text;
        }
    
        // Update the output field with the formatted text
        outputField.innerHTML = formattedText;
    }
    
