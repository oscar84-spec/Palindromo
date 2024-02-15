const inputText = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");
checkButton.addEventListener("click", () => {
  if (inputText.value === "") {
    alert("Please input a value");
  } else {
    showResult(inputText.value);
  }
});

const showResult = (text) => {
  const regex = /[^a-zA-Z0-9]/g;
  let cadena = text.replace(regex, "").toLowerCase();
  console.log(cadena);
  if (cadena === cadena.split("").reverse().join("")) {
    const mostar = `<p>${text} <span class="bold">is a Palindrome</span></p>`;
    result.innerHTML = mostar;
  } else {
    const mostar = `<p>${text} <span class="error">is not a Palindrome</span></p>`;
    result.innerHTML = mostar;
  }
};
