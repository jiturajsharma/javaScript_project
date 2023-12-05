  // Assuming you have a function to fetch Chuck Norris jokes in chaiaurcode.js
    function getChuckNorrisJoke() {
    let joke = "Jokes nahi tha bas majak tha kais laga??";

    document.getElementById("display-joke").innerText = joke;
}

  // Add an event listener to the 'Get Joke' button
    document.getElementById("getJoke").addEventListener("click", getChuckNorrisJoke);

