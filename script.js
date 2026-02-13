const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.innerText;

    if (value === "C") {
      display.innerText = "0";
    } else if (value === "⌫") {
      display.innerText = display.innerText.slice(0, -1) || "0";
    } else if (value === "=") {
      try {
        display.innerText = eval(display.innerText);
      } catch {
        display.innerText = "Error";
      }
    } else {
      if (display.innerText === "0") display.innerText = "";
      display.innerText += value;
    }
  });
});
