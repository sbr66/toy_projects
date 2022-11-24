const filterBtns = document.querySelectorAll(".filter-btn");

const closeAll = () => {
  filterBtns.forEach((btn) => {
    btn.classList.remove("active");
  });
};

const activeBtn = (e) => {
  //console.log(e.target);
  const target = e.target;
  filterBtns.forEach((btn) => {
    btn.classList.remove("active");
  });
  target.classList.add("active");
};

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    closeAll();
    btn.classList.add("active");
  });
});
