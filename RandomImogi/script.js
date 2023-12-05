// Event listeners for mouse events
document.getElementById("emoji").addEventListener("mouseover", handleMouseOver);
document.getElementById("emoji").addEventListener("mouseleave", handleMouseLeave);
document.getElementById("emoji").addEventListener("mouseenter", handleMouseEnter);


// Function to generate a random emoji
function getRandomEmoji() {
  // List of emojis
  const emojis = ["😄", "😊", "😎", "😍", "🤔", "😂", "🥳", "😜", "🤣", "😇"];

  // Get a random index from the array
  const randomIndex = Math.floor(Math.random() * emojis.length);

  // Return the randomly selected emoji
  return emojis[randomIndex];
}

// Function to handle mouse hover
function handleMouseOver() {
  // Get the emoji div element
  const emojiDiv = document.getElementById("emoji");

  // Change the emoji on hover
  emojiDiv.textContent = getRandomEmoji();
}

// Function to handle mouse leave
function handleMouseLeave() {
  // Get the emoji div element
  const emojiDiv = document.getElementById("emoji");

  // Turn the emoji into grayscale on mouse leave
  emojiDiv.style.filter = "grayscale(100%)";
}

// Function to handle mouse enter (when the mouse returns after leaving)
function handleMouseEnter() {
  // Get the emoji div element
  const emojiDiv = document.getElementById("emoji");

  // Remove the grayscale filter on mouse enter
  emojiDiv.style.filter = "none";
}

