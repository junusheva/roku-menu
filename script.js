const menuItems = [
  {
    id: "tuna",
    name: "тунец",
    title: "ТУНЕЦ",
    image: "assets/tuna-hq.png",
    labelOffset: "-18px",
    ingredients: [
      callout("яйца", "18%", "165px", "110px", "18px", "135px", "28px", "72px", "66deg"),
      callout("греческий йогурт", "56%", "205px", "190px", "16px", "18px", "30px", "78px", "106deg"),
      callout("кукуруза", "7%", "305px", "120px", "16px", "68px", "28px", "94px", "52deg"),
      callout("консервированный тунец", "55%", "640px", "210px", "16px", "25px", "-48px", "86px", "-128deg"),
      callout("сыр Чеддер", "14%", "735px", "118px", "16px", "58px", "-92px", "132px", "-76deg"),
      callout("красный лук", "51%", "790px", "140px", "16px", "72px", "-104px", "150px", "-92deg")
    ]
  },
  {
    id: "egg",
    name: "яичный",
    title: "ЯИЧНЫЙ",
    image: "assets/egg-hq.png",
    ingredients: [
      callout("яйца", "15%", "180px", "110px", "18px", "106px", "36px", "92px", "66deg"),
      callout("карамелизированный лук", "55%", "245px", "190px", "14px", "24px", "30px", "78px", "112deg"),
      callout("соус айоли", "7%", "345px", "130px", "16px", "96px", "36px", "82px", "44deg"),
      callout("сыр Чеддер", "64%", "655px", "130px", "16px", "18px", "-50px", "94px", "-128deg")
    ]
  },
  {
    id: "chicken",
    name: "чикен",
    title: "ЧИКЕН",
    image: "assets/chicken-hq.png",
    ingredients: [
      callout("курица в панировке<br> в сладко-остром соусе", "5%", "165px", "210px", "13px", "106px", "34px", "92px", "66deg"),
      callout("сыр Чеддер", "64%", "235px", "130px", "16px", "22px", "30px", "82px", "108deg"),
      callout("нори", "10%", "335px", "86px", "16px", "70px", "28px", "92px", "48deg"),
      callout("соус айоли", "60%", "675px", "130px", "16px", "20px", "-48px", "92px", "-128deg")
    ]
  },
  {
    id: "trout",
    name: "форель",
    title: "ФОРЕЛЬ",
    image: "assets/trout-hq.png",
    ingredients: [
      callout("малосольная форель", "10%", "170px", "160px", "16px", "102px", "34px", "92px", "65deg"),
      callout("гуакамоле", "64%", "230px", "120px", "18px", "30px", "30px", "82px", "106deg"),
      callout("соус алоэ-трюфель", "5%", "320px", "170px", "16px", "75px", "30px", "94px", "47deg"),
      callout("яйца", "69%", "650px", "110px", "16px", "18px", "-48px", "92px", "-128deg"),
      callout("соус васаби-юдзу", "18%", "735px", "170px", "16px", "78px", "-90px", "132px", "-74deg")
    ]
  },
  {
    id: "beef",
    name: "говядина",
    title: "ГОВЯДИНА",
    image: "assets/beef-hq.png",
    ingredients: [
      callout("сыр Чеддер", "16%", "165px", "130px", "18px", "112px", "35px", "92px", "66deg"),
      callout("бон филе", "68%", "235px", "132px", "18px", "24px", "28px", "82px", "108deg"),
      callout("карамелизированный лук", "4%", "312px", "188px", "14px", "112px", "28px", "78px", "40deg"),
      callout("яйца", "68%", "654px", "120px", "18px", "18px", "-48px", "92px", "-128deg"),
      callout("соус кочуджан-мэйо", "16%", "740px", "170px", "16px", "74px", "-92px", "132px", "-76deg")
    ]
  },
  {
    id: "shrimp",
    name: "креветка",
    title: "КРЕВЕТКА",
    image: "assets/shrimp-hq.png",
    ingredients: [
      callout("обжаренные креветки", "9%", "165px", "165px", "16px", "112px", "34px", "92px", "66deg"),
      callout("гуакамоле", "65%", "225px", "120px", "18px", "36px", "34px", "80px", "104deg"),
      callout("соус васаби-юдзу", "6%", "320px", "165px", "16px", "62px", "28px", "96px", "48deg"),
      callout("соус алоэ-трюфель", "61%", "650px", "160px", "16px", "18px", "-48px", "92px", "-128deg"),
      callout("яйца", "20%", "740px", "100px", "18px", "74px", "-92px", "132px", "-76deg")
    ]
  }
];

const breakfastItems = [
  {
    id: "breakfast-basic",
    name: "Базовый завтрак",
    shortName: "базовый завтрак",
    title: "БАЗОВЫЙ ЗАВТРАК",
    price: "580с",
    image: "assets/breakfast-basic.png",
    imageWidth: "205px",
    description:
      "2 вареных яйца, малосольная форель, сыр Маасдам, мисо масло, маринованный огурчик, ломтик хлеба",
    ingredients: detailCallouts([
      "вареные яйца",
      "малосольная форель",
      "сыр Маасдам",
      "мисо масло",
      "маринованный огурчик",
      "ломтик хлеба"
    ])
  },
  {
    id: "breakfast-french-omelet",
    name: "Французский омлет",
    shortName: "французский омлет",
    title: "ФРАНЦУЗСКИЙ ОМЛЕТ",
    price: "320с",
    image: "assets/breakfast-french-omelet.png",
    imageWidth: "210px",
    description: "классический французский омлет с трюфельным соусом, посыпается пармезаном и жареным нори",
    ingredients: detailCallouts(["французский омлет", "трюфельный соус", "пармезан", "жареный нори"])
  },
  {
    id: "breakfast-french-toast",
    name: "Френч тост",
    shortName: "френч тост",
    title: "ФРЕНЧ ТОСТ",
    price: "470с",
    image: "assets/breakfast-french-toast.png",
    imageWidth: "205px",
    description:
      "пропитанный хлеб с карамелизированной корочкой, подается с кремом, карамелизированный бананом и арахисом",
    ingredients: detailCallouts([
      "пропитанный хлеб",
      "карамелизированная<br>корочка",
      "крем",
      "карамелизированный<br>банан",
      "арахис"
    ])
  },
  {
    id: "breakfast-granola",
    name: "Гранола с манговым йогуртом",
    shortName: "гранола с<br>манговым йогуртом",
    title: "ГРАНОЛА",
    price: "550с",
    image: "assets/breakfast-granola.png",
    imageWidth: "145px",
    description: "манговый йогурт с лемонграссом, домашняя гранола, засахаренный арахис, голубика",
    ingredients: detailCallouts(["манговый йогурт", "лемонграсс", "домашняя гранола", "засахаренный<br>арахис", "голубика"])
  },
  {
    id: "breakfast-avocado-toast",
    name: "Авокадо тост",
    shortName: "авокадо тост",
    title: "АВОКАДО ТОСТ",
    price: "570с",
    image: "assets/breakfast-avocado-toast.png",
    imageWidth: "205px",
    description: "творожный крем, зеленый горошек, авокадо, шпинат, соус песто, маринованное яйцо",
    ingredients: detailCallouts(["творожный крем", "зеленый горошек", "авокадо", "шпинат", "соус песто", "маринованное яйцо"])
  },
  {
    id: "breakfast-chicken-salad",
    name: "Чикен салат",
    shortName: "чикен салат",
    title: "ЧИКЕН САЛАТ",
    price: "350с",
    image: "assets/breakfast-chicken-salad.png",
    imageWidth: "165px",
    description: "курица в панировке, салат айсберг, соус айоли, лимон, посыпается пармезаном и домашними чипсами",
    ingredients: detailCallouts(["курица в панировке", "салат айсберг", "соус айоли", "лимон", "пармезан", "домашние<br>чипсы"])
  },
  {
    id: "breakfast-green-salad",
    name: "Зеленый салат",
    shortName: "зеленый салат",
    title: "ЗЕЛЕНЫЙ САЛАТ",
    price: "390с",
    image: "assets/breakfast-green-salad.png",
    imageWidth: "205px",
    description: "",
    ingredients: detailCallouts(["зеленые овощи", "авокадо", "огурец", "нори", "лимон", "кунжут"])
  }
];

const poster = document.querySelector("#menu");
const posterTitle = document.querySelector("#posterTitle");
const mainView = document.querySelector("#mainView");
const menuView = document.querySelector("#menuView");
const detailView = document.querySelector("#detailView");
const detailImage = document.querySelector("#detailImage");
const callouts = document.querySelector("#callouts");
const backButton = document.querySelector("#backButton");
let zoomTimer;
let activeCategory = "home";

function callout(label, x, y, box, size, lineX, lineY, lineLength, lineRotate) {
  return { label, x, y, box, size, lineX, lineY, lineLength, lineRotate };
}

function detailCallouts(labels) {
  const positions = [
    ["12%", "170px", "170px", "16px"],
    ["58%", "230px", "180px", "16px"],
    ["7%", "320px", "150px", "16px"],
    ["64%", "640px", "160px", "16px"],
    ["18%", "735px", "170px", "16px"],
    ["50%", "780px", "190px", "16px"]
  ];

  return labels.map((label, index) => {
    const [x, y, box, size] = positions[index % positions.length];
    return callout(label, x, y, box, size);
  });
}

function getActiveItems() {
  return activeCategory === "breakfasts" ? breakfastItems : menuItems;
}

function getActiveTitle() {
  return activeCategory === "breakfasts" ? "ЗАВТРАКИ" : "ТОСТЫ";
}

function renderToasts() {
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
          <span class="menu-item-content">
            <img src="${item.image}" alt="" />
            <span>${item.name}</span>
          </span>
        </button>
      `
    )
    .join("")}
    </div>
  `;
  menuView.setAttribute("aria-label", "Меню тостов");
}

function renderBreakfasts() {
  menuView.innerHTML = `
    <div class="breakfast-board">
    ${breakfastItems
    .map(
      (item) => `
        <button
          class="breakfast-item"
          type="button"
          data-id="${item.id}"
          style="--image-width: ${item.imageWidth};"
          aria-label="${item.title}"
        >
          <img src="${item.image}" alt="" />
          <span>${item.shortName}</span>
        </button>
      `
    )
    .join("")}
    </div>
  `;
  menuView.setAttribute("aria-label", "Меню завтраков");
}

function clamp(value, min, max) {
  if (max < min) return min;
  return Math.min(Math.max(value, min), max);
}

function coordToPixels(value, basis) {
  if (value.endsWith("%")) return (parseFloat(value) / 100) * basis;
  return parseFloat(value) || 0;
}

function boxesOverlap(a, b) {
  return a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top;
}

function overlapArea(a, b) {
  if (!boxesOverlap(a, b)) return 0;
  return (Math.min(a.right, b.right) - Math.max(a.left, b.left)) * (Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top));
}

function fitCalloutsToPoster() {
  const posterRect = poster.getBoundingClientRect();
  const imageRect = detailImage.getBoundingClientRect();
  const padding = 8;
  const imageGap = 42;
  const labelGap = 12;
  const posterBox = {
    width: posterRect.width,
    height: posterRect.height
  };
  const safeImage = {
    left: imageRect.left - posterRect.left - imageGap,
    right: imageRect.right - posterRect.left + imageGap,
    top: imageRect.top - posterRect.top - imageGap,
    bottom: imageRect.bottom - posterRect.top + imageGap
  };

  callouts.querySelectorAll(".callout").forEach((calloutElement) => {
    const desiredLeft = coordToPixels(calloutElement.dataset.x || "0px", posterBox.width);
    const desiredTop = coordToPixels(calloutElement.dataset.y || "0px", posterBox.height);
    const width = calloutElement.offsetWidth;
    const height = calloutElement.offsetHeight;
    const minLeft = padding;
    const maxLeft = posterBox.width - width - padding;
    const minTop = padding;
    const maxTop = posterBox.height - height - padding;
    const baseLeft = clamp(desiredLeft, minLeft, maxLeft);
    const baseTop = clamp(desiredTop, minTop, maxTop);
    const candidates = [
      [baseLeft, baseTop],
      [safeImage.left - width - labelGap, baseTop],
      [safeImage.right + labelGap, baseTop],
      [baseLeft, safeImage.top - height - labelGap],
      [baseLeft, safeImage.bottom + labelGap],
      [safeImage.left - width - labelGap, safeImage.top - height - labelGap],
      [safeImage.right + labelGap, safeImage.top - height - labelGap],
      [safeImage.left - width - labelGap, safeImage.bottom + labelGap],
      [safeImage.right + labelGap, safeImage.bottom + labelGap]
    ];
    let best = { left: baseLeft, top: baseTop, score: Number.POSITIVE_INFINITY };

    candidates.forEach(([candidateLeft, candidateTop]) => {
      const left = clamp(candidateLeft, minLeft, maxLeft);
      const top = clamp(candidateTop, minTop, maxTop);
      const box = { left, top, right: left + width, bottom: top + height };
      const distance = Math.hypot(left - desiredLeft, top - desiredTop);
      const collisionPenalty = overlapArea(box, safeImage) * 1000;
      const score = distance + collisionPenalty;

      if (score < best.score) best = { left, top, score };
    });

    calloutElement.style.left = `${best.left}px`;
    calloutElement.style.top = `${best.top}px`;
  });
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
  const imageGap = 18;
  const labelGap = 12;
  const halfImageWidth = imageRect.width / 2 + imageGap;
  const halfImageHeight = imageRect.height / 2 + imageGap;
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
    const imageRadius = Math.min(
      Math.abs(unitX) > 0.01 ? halfImageWidth / Math.abs(unitX) : Number.POSITIVE_INFINITY,
      Math.abs(unitY) > 0.01 ? halfImageHeight / Math.abs(unitY) : Number.POSITIVE_INFINITY
    );
    const startX = centerX + unitX * imageRadius;
    const startY = centerY + unitY * imageRadius;
    const halfWidth = calloutElement.offsetWidth / 2;
    const halfHeight = calloutElement.offsetHeight / 2;
    const labelRadius = Math.min(
      Math.abs(unitX) > 0.01 ? halfWidth / Math.abs(unitX) : Number.POSITIVE_INFINITY,
      Math.abs(unitY) > 0.01 ? halfHeight / Math.abs(unitY) : Number.POSITIVE_INFINITY
    );
    const endX = labelCenterX - unitX * (labelRadius + labelGap);
    const endY = labelCenterY - unitY * (labelRadius + labelGap);
    const lineLength = Math.max(0, Math.hypot(endX - startX, endY - startY));
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

  menuView.querySelectorAll(".menu-item, .breakfast-item").forEach((menuItem) => {
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
  menuView.querySelectorAll(".menu-item, .breakfast-item").forEach((menuItem) => {
    menuItem.classList.remove("is-parting");
    menuItem.style.removeProperty("--part-x");
    menuItem.style.removeProperty("--part-y");
  });
}

function openToasts() {
  window.clearTimeout(zoomTimer);
  activeCategory = "toasts";
  renderToasts();
  poster.classList.remove("is-home", "is-breakfasts", "is-detail", "is-animating", "is-callout-ready");
  poster.classList.add("is-toasts");
  detailView.style.transition = "";
  detailView.style.transform = "";
  detailView.setAttribute("aria-hidden", "true");
  posterTitle.textContent = "ТОСТЫ";
  resetMenuParting();
  document.querySelectorAll(".is-zoom-source").forEach((item) => item.classList.remove("is-zoom-source"));
  poster.scrollIntoView({ block: "start" });
}

function openBreakfasts() {
  window.clearTimeout(zoomTimer);
  activeCategory = "breakfasts";
  renderBreakfasts();
  poster.classList.remove("is-home", "is-toasts", "is-detail", "is-animating", "is-callout-ready");
  poster.classList.add("is-breakfasts");
  detailView.style.transition = "";
  detailView.style.transform = "";
  detailView.setAttribute("aria-hidden", "true");
  posterTitle.textContent = "ЗАВТРАКИ";
  resetMenuParting();
  document.querySelectorAll(".is-zoom-source").forEach((item) => item.classList.remove("is-zoom-source"));
  poster.scrollIntoView({ block: "start" });
}

function openHome() {
  window.clearTimeout(zoomTimer);
  activeCategory = "home";
  poster.classList.remove("is-toasts", "is-breakfasts", "is-detail", "is-animating", "is-callout-ready");
  poster.classList.add("is-home");
  detailView.style.transition = "";
  detailView.style.transform = "";
  detailView.setAttribute("aria-hidden", "true");
  resetMenuParting();
  document.querySelectorAll(".is-zoom-source").forEach((item) => item.classList.remove("is-zoom-source"));
  poster.scrollIntoView({ block: "start" });
}

function openDetail(id, sourceButton) {
  const item = getActiveItems().find((menuItem) => menuItem.id === id);
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
          data-x="${ingredient.x}"
          data-y="${ingredient.y}"
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
  poster.classList.remove("is-home");
  poster.classList.toggle("is-toasts", activeCategory === "toasts");
  poster.classList.toggle("is-breakfasts", activeCategory === "breakfasts");
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

  fitCalloutsToPoster();
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
  document.querySelectorAll(".is-zoom-source").forEach((item) => item.classList.remove("is-zoom-source"));
  resetMenuParting();
  detailView.setAttribute("aria-hidden", "true");
  posterTitle.textContent = getActiveTitle();
  poster.scrollIntoView({ block: "start" });
}

mainView.addEventListener("click", (event) => {
  const categoryButton = event.target.closest(".main-menu-link");
  if (!categoryButton) return;
  if (categoryButton.dataset.category === "toasts") openToasts();
  if (categoryButton.dataset.category === "breakfasts") openBreakfasts();
});

menuView.addEventListener("click", (event) => {
  const itemButton = event.target.closest(".menu-item, .breakfast-item");
  if (itemButton) openDetail(itemButton.dataset.id, itemButton);
});

backButton.addEventListener("click", () => {
  if (poster.classList.contains("is-detail")) {
    closeDetail();
    return;
  }
  openHome();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (poster.classList.contains("is-detail")) {
      closeDetail();
      return;
    }
    if (poster.classList.contains("is-toasts") || poster.classList.contains("is-breakfasts")) openHome();
  }
});

window.addEventListener("resize", () => {
  if (poster.classList.contains("is-detail")) {
    fitCalloutsToPoster();
    prepareCalloutOrigins();
    positionCalloutRays();
  }
});

renderToasts();
