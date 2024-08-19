let equal_pressed = 0;
// Refer all buttons excluding AC and DEL
let button_input = document.querySelectorAll(".input-button");
// Refer input, equal, clear, and erase
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");

window.onload = () => {
    input.value = "";
};

// Access each class using forEach
button_input.forEach((button_class) => {
    button_class.addEventListener("click", () => {
        if (equal_pressed === 1) {
            input.value = "";
            equal_pressed = 0;
        }
        // Display value of each button
        input.value += button_class.value;
    });
});

// Solve the user's input when clicked on equal sign
equal.addEventListener("click", () => {
    equal_pressed = 1;
    let inp_val = input.value;
    try {
        // Evaluate user's input
        let solution = eval(inp_val);
        // Check if the solution is valid and finite
        if (isFinite(solution)) {
            // True for natural numbers, false for decimal numbers
            if (Number.isInteger(solution)) {
                input.value = solution;
            } else {
                input.value = solution.toFixed(2);
            }
        } else {
            input.value = "Invalid Input";
        }
    } catch (err) {
        // If user has entered invalid input
        input.value = "Invalid Input";
    }
});

// Clear whole input
clear.addEventListener("click", () => {
    input.value = "";
});

// Erase single digit
erase.addEventListener("click", () => {
    input.value = input.value.substring(0, input.value.length - 1);
});
