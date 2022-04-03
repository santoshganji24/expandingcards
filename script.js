const allimg = document.querySelectorAll(".item");

allimg.forEach((item) => {
  item.addEventListener("click", () => {
    remove();
    item.classList.add("active");
  });
});
function remove() {
  allimg.forEach((item) => {
    item.classList.remove("active");
  });
}
