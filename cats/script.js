  function getRandomCatImage() {
    // Call the function to fetch a random cat image
    let imageUrl = "https://d2zp5xs5cp8zlg.cloudfront.net/image-26071-800.jpg"; 

    let catImage = document.createElement("img");
    catImage.src = imageUrl;

    // Append the image to the 'container' element
    document.querySelector(".container").innerHTML = "";
    document.querySelector(".container").appendChild(catImage);
  }

  // Add an event listener to the 'Get Random Cat' button
    document.querySelector(".btn").addEventListener("click", getRandomCatImage);

