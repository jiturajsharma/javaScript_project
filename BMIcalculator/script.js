    // script.js

    // Wait for the HTML document to be fully loaded before executing the code.
    document.addEventListener("DOMContentLoaded", function () {
        // Select the "Calculate" button.
        const calculateButton = document.querySelector("button");
    
        // Attach an event listener to the "Calculate" button.
        calculateButton.addEventListener("click", calculateBMI);
    });
    
    // Function to calculate BMI when the button is clicked.
    function calculateBMI() {
        // Get references to the height, weight, and results elements.
        const heightInput = document.getElementById("height");
        const weightInput = document.getElementById("weight");
        const resultsDiv = document.getElementById("results");
    
        // Extract numerical values from the input fields.
        const height = parseFloat(heightInput.value) / 100; // Convert height to meters
        const weight = parseFloat(weightInput.value);
    
        // Check if the input values are valid.
        if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        // Display an error message if the input values are not valid.
        resultsDiv.innerHTML = "Please enter valid values for height and weight.";
        return;
        }
    
        // Calculate BMI using the provided height and weight.
        const bmi = calculateBMIValue(height, weight);
    
        // Determine the BMI category (Underweight, Normal Range, or Overweight).
        const bmiCategory = getBMICategory(bmi);
    
        // Display the calculated BMI and category in the results div.
        resultsDiv.innerHTML = `Your BMI is: ${bmi.toFixed(2)} (${bmiCategory})`;
    }
    
    // Function to calculate BMI using the formula: weight / (height * height).
    function calculateBMIValue(height, weight) {
        return weight / (height * height);
    }
    
    // Function to determine the BMI category based on the calculated BMI value.
    function getBMICategory(bmi) {
        if (bmi < 18.6) {
        return "Underweight";
        } else if (bmi >= 18.6 && bmi <= 24.9) {
        return "Normal Range";
        } else {
        return "Overweight";
        }
    }
    