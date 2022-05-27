const greedSection = document.querySelector(".greet");
const headerSection = document.querySelector(".sec1");
const sections = document.querySelectorAll(".section");
const sectionBtns = document.querySelectorAll(".controls");
const sectionBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");
const labels = document.querySelectorAll(".form-control label");

const headerTimeOut = () => {
  greedSection.classList.add("timeout");
  headerSection.classList.add("active");
};

function pageTransitions() {
  //Button click active class
  for (let i = 0; i < sectionBtn.length; i++) {
    sectionBtn[i].addEventListener("click", function () {
      let currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].className = currentBtn[0].className.replace(
        "active-btn",
        ""
      );
      this.className += " active-btn";
    });
  }

  //section active class
  allSections.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    console.log(id);
    if (id) {
      //remove selected from the other btn
      sectionBtn.forEach((btn) => {
        console.log(btn);
        btn.classList.remove("active");
      });
      e.target.classList.add("active");

      //hide other sections
      sections.forEach((section) => {
        section.classList.remove("active");
      });

      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });

  // //toggle theme
  // const themeBtn = document.querySelector(".theme-btn");
  // themeBtn.addEventListener("click", ()=>{
  //     let element = document.body;
  //     element.classList.toggle("light-mode");
  // })
}

const panels = document.querySelectorAll(".portfolio-item");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active-portfolio");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active-portfolio");
  });
}

setTimeout(headerTimeOut, 4000);
pageTransitions();

labels.forEach((label) => {
  label.innerHTML = label.innerHTML
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    .join("");
});
