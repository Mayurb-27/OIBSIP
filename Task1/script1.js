const display = document.getElementById("result");
const buttons = document.querySelectorAll(".buttons button");
const clear_Button = document.querySelector(".element_clear");
const delete_Button = document.querySelector(".element_delete");
const equal_Button = document.querySelector(".element_equal");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;
    if (value === "=") {
      try {
        display.value = eval(display.value);
      } catch (error) {
        display.value = "Error";
      }
    } else if (value === "AC") {
      display.value = "";
    } else if (value === "DEL") {
      display.value = display.value.slice(0, -1);
    } else {
      display.value += value;
    }
  });
});

clear_Button.addEventListener("click", () => {
  display.value = "";
});
