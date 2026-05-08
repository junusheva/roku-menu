const menuItems = [
  {
    id: "tuna",
    name: "тунец",
    title: "ТУНЕЦ",
    image: "assets/tuna-hq.png",
    labelOffset: "-18px",
    ingredients: [
      callout("консервированный тунец", "15%", "165px", "210px", "18px", "135px", "28px", "72px", "66deg"),
      callout("яйца", "73%", "230px", "90px", "16px", "18px", "30px", "78px", "106deg"),
      callout("сыр Чеддер", "6%", "285px", "132px", "16px", "68px", "28px", "94px", "52deg"),
      callout("красный лук", "64%", "640px", "148px", "16px", "25px", "-48px", "86px", "-128deg"),
      callout("кукуруза", "12%", "730px", "118px", "16px", "58px", "-92px", "132px", "-76deg"),
      callout("греческий йогурт", "34%", "790px", "210px", "16px", "72px", "-104px", "150px", "-92deg")
    ]
  },
  {
    id: "egg",
    name: "яичный",
    title: "ЯИЧНЫЙ",
    image: "assets/egg-hq.png",
    ingredients: [
      callout("яйца", "15%", "180px", "110px", "18px", "106px", "36px", "92px", "66deg"),
      callout("сыр Чеддер", "68%", "235px", "130px", "16px", "24px", "30px", "78px", "112deg"),
      callout("греческий йогурт", "5%", "325px", "170px", "16px", "96px", "36px", "82px", "44deg"),
      callout("зелень", "67%", "650px", "120px", "16px", "18px", "-50px", "94px", "-128deg"),
      callout("бриошь", "17%", "735px", "120px", "16px", "84px", "-92px", "128px", "-72deg")
    ]
  },
  {
    id: "chicken",
    name: "чикен",
    title: "ЧИКЕН",
    image: "assets/chicken-hq.png",
    ingredients: [
      callout("курица", "18%", "165px", "120px", "18px", "106px", "34px", "92px", "66deg"),
      callout("соус Roku", "69%", "230px", "125px", "16px", "22px", "30px", "82px", "108deg"),
      callout("сыр Чеддер", "6%", "315px", "132px", "16px", "70px", "28px", "92px", "48deg"),
      callout("огурец", "68%", "650px", "110px", "16px", "20px", "-48px", "92px", "-128deg"),
      callout("зеленый лук", "13%", "742px", "150px", "16px", "80px", "-90px", "132px", "-74deg")
    ]
  },
  {
    id: "trout",
    name: "форель",
    title: "ФОРЕЛЬ",
    image: "assets/trout-hq.png",
    ingredients: [
      callout("форель", "17%", "170px", "120px", "18px", "102px", "34px", "92px", "65deg"),
      callout("сливочный крем", "63%", "230px", "152px", "16px", "30px", "30px", "82px", "106deg"),
      callout("красный лук", "5%", "320px", "140px", "16px", "75px", "30px", "94px", "47deg"),
      callout("зелень", "69%", "650px", "110px", "16px", "18px", "-48px", "92px", "-128deg"),
      callout("бриошь", "18%", "735px", "120px", "16px", "78px", "-90px", "132px", "-74deg")
    ]
  },
  {
    id: "beef",
    name: "говядина",
    title: "ГОВЯДИНА",
    image: "assets/beef-hq.png",
    ingredients: [
      callout("говядина", "16%", "165px", "130px", "18px", "112px", "35px", "92px", "66deg"),
      callout("пряный соус", "68%", "235px", "132px", "16px", "24px", "28px", "82px", "108deg"),
      callout("маринованные овощи", "4%", "312px", "188px", "16px", "112px", "28px", "78px", "40deg"),
      callout("бриошь", "68%", "654px", "120px", "16px", "18px", "-48px", "92px", "-128deg"),
      callout("кимчи", "16%", "740px", "100px", "16px", "74px", "-92px", "132px", "-76deg")
    ]
  },
  {
    id: "shrimp",
    name: "креветка",
    title: "КРЕВЕТКА",
    image: "assets/shrimp-hq.png",
    ingredients: [
      callout("креветки", "16%", "165px", "130px", "18px", "112px", "34px", "92px", "66deg"),
      callout("греческий йогурт", "61%", "225px", "160px", "16px", "36px", "34px", "80px", "104deg"),
      callout("зелень", "8%", "316px", "108px", "16px", "62px", "28px", "96px", "48deg"),
      callout("огурец", "69%", "650px", "110px", "16px", "18px", "-48px", "92px", "-128deg"),
      callout("соус", "18%", "740px", "100px", "16px", "74px", "-92px", "132px", "-76deg")
    ]
  }
];

const poster = document.querySelector("#menu");
const posterTitle = document.querySelector("#posterTitle");
const menuView = document.querySelector("#menuView");
const detailView = document.querySelector("#detailView");
const detailImage = document.querySelector("#detailImage");
const callouts = document.querySelector("#callouts");
const backButton = document.querySelector("#backButton");
let zoomTimer;

function callout(label, x, y, box, size, lineX, lineY, lineLength, lineRotate) {
  return { label, x, y, box, size, lineX, lineY, lineLength, lineRotate };
}

function renderMenu() {
  menuView.innerHTML = `
    <div class="menu-board">
    ${menuItems
    .map(
      (item) => `
        <button
          class="menu-item"
          type="button"
          data-id="${item.id}"
          style="--label-offset: ${item.labelOffset || "0px"};"
          aria-label="${item.title}"
        >
          <img src="${item.image}" alt="" />
          <span>${item.name}</span>
        </button>
      `
    )
    .join("")}
    </div>
  `;
}

function prepareCalloutOrigins() {
  const posterRect = poster.getBoundingClientRect();
  const imageRect = detailImage.getBoundingClientRect();
  const originX = imageRect.left - posterRect.left + imageRect.width / 2;
  const originY = imageRect.top - posterRect.top + imageRect.height / 2;

  callouts.querySelectorAll(".callout").forEach((calloutElement) => {
    const x = originX - calloutElement.offsetLeft - calloutElement.offsetWidth / 2;
    const y = originY - calloutElement.offsetTop - calloutElement.offsetHeight / 2;
    calloutElement.style.setProperty("--pop-x", `${x}px`);
    calloutElement.style.setProperty("--pop-y", `${y}px`);
  });
}

function positionCalloutRays() {
  const posterRect = poster.getBoundingClientRect();
  const imageRect = detailImage.getBoundingClientRect();
  const centerX = imageRect.left - posterRect.left + imageRect.width / 2;
  const centerY = imageRect.top - posterRect.top + imageRect.height / 2;
  const radiusX = imageRect.width * 0.48;
  const radiusY = imageRect.height * 0.38;
  const imageGap = 10;
  const calloutElements = [...callouts.querySelectorAll(".callout")];
  const rayElements = [...callouts.querySelectorAll(".callout-ray")];

  calloutElements.forEach((calloutElement, index) => {
    const labelCenterX = calloutElement.offsetLeft + calloutElement.offsetWidth / 2;
    const labelCenterY = calloutElement.offsetTop + calloutElement.offsetHeight / 2;
    const dx = labelCenterX - centerX;
    const dy = labelCenterY - centerY;
    const distance = Math.hypot(dx, dy) || 1;
    const unitX = dx / distance;
    const unitY = dy / distance;
    const ellipseRadius = 1 / Math.sqrt((unitX * unitX) / (radiusX * radiusX) + (unitY * unitY) / (radiusY * radiusY));
    const startX = centerX + unitX * (ellipseRadius + imageGap);
    const startY = centerY + unitY * (ellipseRadius + imageGap);
    const endX = labelCenterX;
    const endY = labelCenterY;
    const lineLength = Math.max(18, Math.hypot(endX - startX, endY - startY));
    const lineRotate = Math.atan2(endY - startY, endX - startX) * (180 / Math.PI);
    const rayElement = rayElements[index];

    if (!rayElement) return;
    rayElement.style.setProperty("--line-x", `${startX}px`);
    rayElement.style.setProperty("--line-y", `${startY}px`);
    rayElement.style.setProperty("--line-l", `${lineLength}px`);
    rayElement.style.setProperty("--line-r", `${lineRotate}deg`);
  });
}

function prepareMenuParting(sourceButton) {
  const posterRect = poster.getBoundingClientRect();
  const posterCenterX = posterRect.left + posterRect.width / 2;
  const posterCenterY = posterRect.top + posterRect.height / 2;

  menuView.querySelectorAll(".menu-item").forEach((menuItem) => {
    if (menuItem === sourceButton) return;

    const rect = menuItem.getBoundingClientRect();
    const itemCenterX = rect.left + rect.width / 2;
    const itemCenterY = rect.top + rect.height / 2;
    const directionX = itemCenterX < posterCenterX ? -1 : 1;
    const driftY = (itemCenterY - posterCenterY) * 0.1;
    const distance = posterRect.width * 0.52;

    menuItem.style.setProperty("--part-x", `${directionX * distance}px`);
    menuItem.style.setProperty("--part-y", `${driftY}px`);
    menuItem.classList.add("is-parting");
  });
}

function resetMenuParting() {
  menuView.querySelectorAll(".menu-item").forEach((menuItem) => {
    menuItem.classList.remove("is-parting");
    menuItem.style.removeProperty("--part-x");
    menuItem.style.removeProperty("--part-y");
  });
}

function openDetail(id, sourceButton) {
  const item = menuItems.find((menuItem) => menuItem.id === id);
  if (!item) return;
  window.clearTimeout(zoomTimer);

  const sourceImage = sourceButton?.querySelector("img");
  const posterRect = poster.getBoundingClientRect();
  const sourceRect = sourceImage?.getBoundingClientRect();
  const sourceBox = sourceRect
    ? {
        x: sourceRect.left - posterRect.left,
        y: sourceRect.top - posterRect.top,
        width: sourceRect.width
      }
    : null;

  posterTitle.textContent = item.title;
  detailImage.src = item.image;
  detailImage.alt = item.title;
  callouts.innerHTML = item.ingredients
    .map(
      (ingredient, index) => `
        <span
          class="callout-ray"
          style="--delay: ${120 + index * 55}ms;"
          aria-hidden="true"
        ></span>
        <div
          class="callout"
          style="
            --x: ${ingredient.x};
            --y: ${ingredient.y};
            --box: ${ingredient.box};
            --size: ${ingredient.size};
            --delay: ${120 + index * 55}ms;
          "
        >${ingredient.label}</div>
      `
    )
    .join("");

  poster.classList.remove("is-callout-ready");
  resetMenuParting();
  prepareMenuParting(sourceButton);
  poster.classList.add("is-detail");
  poster.classList.add("is-animating");
  detailView.setAttribute("aria-hidden", "false");
  poster.scrollIntoView({ block: "start" });

  sourceButton?.classList.add("is-zoom-source");
  detailView.style.transition = "none";

  const nextPosterRect = poster.getBoundingClientRect();
  const targetRect = detailImage.getBoundingClientRect();
  const targetBox = {
    x: targetRect.left - nextPosterRect.left,
    y: targetRect.top - nextPosterRect.top,
    width: targetRect.width
  };

  prepareCalloutOrigins();
  positionCalloutRays();
  poster.classList.add("is-callout-ready");

  if (sourceBox) {
    const scale = sourceBox.width / targetBox.width;
    const translateX = sourceBox.x - targetBox.x * scale;
    const translateY = sourceBox.y - targetBox.y * scale;
    detailView.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
  }

  requestAnimationFrame(() => {
    detailView.style.transition = "";
    detailView.style.transform = "translate(0, 0) scale(1)";
  });

  const finishZoom = () => {
    window.clearTimeout(zoomTimer);
    sourceButton?.classList.remove("is-zoom-source");
    poster.classList.remove("is-animating");
    detailView.removeEventListener("transitionend", handleZoomEnd);
  };

  const handleZoomEnd = (event) => {
    if (event.target === detailView && event.propertyName === "transform") finishZoom();
  };

  detailView.addEventListener("transitionend", handleZoomEnd);
  zoomTimer = window.setTimeout(finishZoom, 1050);
}

function closeDetail() {
  window.clearTimeout(zoomTimer);
  poster.classList.remove("is-detail");
  poster.classList.remove("is-animating");
  poster.classList.remove("is-callout-ready");
  detailView.style.transition = "";
  detailView.style.transform = "";
  document.querySelectorAll(".menu-item.is-zoom-source").forEach((item) => item.classList.remove("is-zoom-source"));
  resetMenuParting();
  detailView.setAttribute("aria-hidden", "true");
  posterTitle.textContent = "ТОСТЫ";
  poster.scrollIntoView({ block: "start" });
}

menuView.addEventListener("click", (event) => {
  const itemButton = event.target.closest(".menu-item");
  if (itemButton) openDetail(itemButton.dataset.id, itemButton);
});

backButton.addEventListener("click", closeDetail);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && poster.classList.contains("is-detail")) {
    closeDetail();
  }
});

window.addEventListener("resize", () => {
  if (poster.classList.contains("is-detail")) positionCalloutRays();
});

renderMenu();
