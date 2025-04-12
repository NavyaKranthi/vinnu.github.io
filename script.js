// Tab switching logic
const buttons = document.querySelectorAll("nav button");
const sections = document.querySelectorAll(".tab-section");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const tab = btn.getAttribute("data-tab");

    sections.forEach((section) => {
      section.classList.remove("active");
    });

    document.getElementById(tab).classList.add("active");
  });
});
