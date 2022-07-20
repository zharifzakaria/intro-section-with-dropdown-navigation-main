const features = document.getElementById("features");
const company = document.getElementById("company");
const submenu1 = document.getElementById("submenu1");
const submenu2 = document.getElementById("submenu2");
const menu = document.querySelector("nav > .menu");

features.addEventListener("mouseover", () => {
  submenu1.classList.add("show");
  submenu2.classList.remove("show");
});

company.addEventListener("mouseover", () => {
  submenu2.classList.add("show");
  submenu1.classList.remove("show");
});

menu.addEventListener("mouseleave", () => {
  submenu1.classList.remove("show");
  submenu2.classList.remove("show");
});

const blocker = document.createElement("div");
blocker.classList.add("blocker");

const mobileMenu = document.createElement("div");
mobileMenu.classList.add("mobile-container");

const openMenuButton = document.getElementById("openMenu");
openMenuButton.addEventListener("touchstart", () => {
  const blocker = document.createElement("div");
  blocker.classList.add("blocker");

  const mobileMenu = document.createElement("div");
  mobileMenu.classList.add("mobile-container");

  const mainMenuArray = [
    {
      name: "Features",
      class: "features",
    },
    {
      name: "Company",
      class: "company",
    },
    {
      name: "Careers",
      class: "careers",
    },
    {
      name: "About",
      class: "about",
    },
  ];

  const subMenuArray = [
    [
      {
        name: "Todo List",
        class: "todo",
      },
      {
        name: "Calendar",
        class: "calendar",
      },
      {
        name: "Reminders",
        class: "reminders",
      },
      {
        name: "Planning",
        class: "planning",
      },
    ],
    [
      {
        name: "History",
        class: "history",
      },
      {
        name: "Our Team",
        class: "ourteam",
      },
      {
        name: "Blog",
        class: "blog",
      },
    ],
  ];

  const subMenu1 = document.createElement("div");
  subMenu1.classList.add("menu__list__sub1");
  const menu1Ul = document.createElement("ul");
  menu1Ul.classList.add("sub__menu");

  mainMenuArray.forEach((el) => {
    const li = document.createElement("li");
    li.classList.add(`submenu-icon`);
    li.classList.add(`icon-${el.class}`);
    li.innerHTML = el.name;
    menu1Ul.appendChild(li);

    if (el.name === "Features" || el.name === "Company") {
      li.id = el.name;
      const arrowDown = document.createElement("img");
      arrowDown.src = "./images/icon-arrow-down.svg";
      arrowDown.style.paddingLeft = "16px";
      li.appendChild(arrowDown);
    }
  });

  const closeBtn = document.createElement("img");
  closeBtn.id = "closeBtn";
  closeBtn.src = "./images/icon-close-menu.svg";
  closeBtn.classList.add("close-btn");

  closeBtn.addEventListener("touchstart", () => {
    mobileMenu.style.right = "-280px";
    setTimeout(() => {
      document.body.removeChild(blocker);
      document.body.removeChild(mobileMenu);
    }, 300);
  });

  mobileMenu.appendChild(closeBtn);
  mobileMenu.appendChild(menu1Ul);
  document.body.appendChild(blocker);
  document.body.appendChild(mobileMenu);
  mobileMenu.style.right = "-280px";

  setTimeout(() => {
    mobileMenu.style.right = "0";
    mobileMenu.style.opacity = 1;
    blocker.style.opacity = 0.6;
  }, 100);

  const subMenu = document.querySelectorAll(".submenu-icon");
  subMenu.forEach((el) => {
    el.addEventListener("touchstart", (e) => {
      if (e.target.innerText === "Features") {
        toggleSubMenu(1, subMenuArray[0]);
      } else if (e.target.innerText === "Company") {
        toggleSubMenu(2, subMenuArray[1]);
      } else return;
    });
  });
});

function toggleSubMenu(x, array) {
  if (x === 1) {
    const subMenu1 = document.createElement("div");
    subMenu1.classList.add("submenu-1");
    document.getElementById("Features").appendChild(subMenu1);

    array.forEach((el) => {
      const div = document.createElement("div");
      div.innerText = el.name;
      subMenu1.appendChild(div);
    });
  } else {
    const subMenu2 = document.createElement("div");
    subMenu2.classList.add("submenu-2");
    document.getElementById("Company").appendChild(subMenu2);

    array.forEach((el) => {
      const div = document.createElement("div");
      div.innerText = el.name;
      subMenu2.appendChild(div);
    });
  }
}
