const input = document.getElementById("flavorInput");
const options = document.querySelectorAll("#flavors option");

input.addEventListener("input", function () {
  let valid = false;
  options.forEach((option) => {
    if (option.value === input.value) {
      valid = true;
    }
  });

  if (!valid) {
    input.setCustomValidity("Choose a flavor from the list.");
  } else {
    input.setCustomValidity("");
  }
});
