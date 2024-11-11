const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
  const catHeader = category.querySelector("h2");
  console.log(`Category: ${catHeader.textContent}`);
  const liElem = category.querySelectorAll("li");
  console.log(`Elements: ${liElem.length}`);
});
