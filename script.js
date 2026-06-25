const menuItems = [
  {
    id: "tuna",
    name: "тунец",
    title: "ТУНЕЦ",
    image: "assets/tuna-hq.png",
    labelOffset: "-18px",
    ingredients: [
      callout("яйца", "110px", "18px"),
      callout("греческий йогурт", "190px"),
      callout("кукуруза", "120px"),
      callout("консервированный тунец", "210px"),
      callout("сыр Чеддер", "118px"),
      callout("красный лук", "140px")
    ]
  },
  {
    id: "egg",
    name: "яичный",
    title: "ЯИЧНЫЙ",
    image: "assets/egg-hq.png",
    ingredients: [
      callout("яйца", "110px", "18px"),
      callout("карамелизированный лук", "190px", "14px"),
      callout("соус айоли", "130px"),
      callout("сыр Чеддер", "130px")
    ]
  },
  {
    id: "chicken",
    name: "чикен",
    title: "ЧИКЕН",
    image: "assets/chicken-hq.png",
    ingredients: [
      callout("курица в панировке<br> в сладко-остром соусе", "210px", "13px"),
      callout("сыр Чеддер", "130px"),
      callout("нори", "86px"),
      callout("соус айоли", "130px")
    ]
  },
  {
    id: "trout",
    name: "форель",
    title: "ФОРЕЛЬ",
    image: "assets/trout-hq.png",
    ingredients: [
      callout("малосольная форель", "160px"),
      callout("гуакамоле", "120px", "18px"),
      callout("соус алоэ-трюфель", "170px"),
      callout("яйца", "110px"),
      callout("соус васаби-юдзу", "170px")
    ]
  },
  {
    id: "beef",
    name: "говядина",
    title: "ГОВЯДИНА",
    image: "assets/beef-hq.png",
    ingredients: [
      callout("сыр Чеддер", "130px", "18px"),
      callout("бон филе", "132px", "18px"),
      callout("карамелизированный лук", "188px", "14px"),
      callout("яйца", "120px", "18px"),
      callout("соус кочуджан-мэйо", "170px")
    ]
  },
  {
    id: "shrimp",
    name: "креветка",
    title: "КРЕВЕТКА",
    image: "assets/shrimp-hq.png",
    ingredients: [
      callout("обжаренные креветки", "165px"),
      callout("гуакамоле", "120px", "18px"),
      callout("соус васаби-юдзу", "165px"),
      callout("соус алоэ-трюфель", "160px"),
      callout("яйца", "100px", "18px")
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

const eveningItems = [
  {
    id: "evening-karaage-aioli",
    name: "Карааге с айоли",
    shortName: "карааге с<br>айоли",
    title: "КАРААГЕ С АЙОЛИ",
    price: "380с",
    image: "assets/evening-karaage-aioli.png",
    imageWidth: "220px",
    description: "курица в двойной панировке, посыпается пармезаном и цедрой лайма, подаются с соусом айоли",
    ingredients: detailCallouts(["курица в двойной<br>панировке", "пармезан", "цедра лайма", "соус айоли"])
  },
  {
    id: "evening-karaage-gochujang",
    name: "Карааге с карамельным кочуджаном",
    shortName: "карааге с<br>карамельным<br>кочуджаном",
    title: "КАРААГЕ",
    price: "380с",
    image: "assets/evening-karaage-gochujang.png",
    imageWidth: "215px",
    description:
      "курица в двойной панировке в сладко-остром соусе, посыпается арахисом и сычуанским перцем, продается с греческим йогуртом",
    ingredients: detailCallouts([
      "курица в двойной<br>панировке",
      "сладко-острый соус",
      "арахис",
      "сычуанский перец",
      "греческий йогурт"
    ])
  },
  {
    id: "evening-curry-katsu",
    name: "Карри Кацу",
    shortName: "карри кацу",
    title: "КАРРИ КАЦУ",
    price: "600с",
    image: "assets/evening-curry-katsu.png",
    imageWidth: "205px",
    description: "курица в панировке, рис, соус карри, маринованные огурчики",
    ingredients: detailCallouts(["курица в панировке", "рис", "соус карри", "маринованные<br>огурчики"])
  },
  {
    id: "evening-donburi-trout",
    name: "Донбури с форелью",
    shortName: "донбури с<br>форелью",
    title: "ДОНБУРИ С ФОРЕЛЬЮ",
    price: "660с",
    image: "assets/evening-donburi-trout.png",
    imageWidth: "190px",
    description: "запеченная форель, рис, мисо соус, жареный нори, капуста пак-чой, маринованная редька дайкон",
    ingredients: detailCallouts([
      "запеченная форель",
      "рис",
      "мисо соус",
      "жареный нори",
      "капуста пак-чой",
      "маринованная<br>редька дайкон"
    ])
  },
  {
    id: "evening-chicken-salad",
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
    id: "evening-green-salad",
    name: "Зеленый салат",
    shortName: "зеленый салат",
    title: "ЗЕЛЕНЫЙ САЛАТ",
    price: "390с",
    image: "assets/breakfast-green-salad.png",
    imageWidth: "205px",
    description: "авокадо, брокколи, стручковая фасоль, салат айсберг, шпинат, ореховый соус, посыпается жареным нори",
    ingredients: detailCallouts(["авокадо", "брокколи", "стручковая фасоль", "салат айсберг", "шпинат", "ореховый соус", "жареный нори"])
  },
  {
    id: "evening-pickles",
    name: "Маринованные огурцы",
    shortName: "маринованные<br>огурцы",
    title: "МАРИНОВАННЫЕ ОГУРЦЫ",
    price: "170с",
    image: "assets/evening-pickles.png",
    imageWidth: "185px",
    description: "маринованные огурцы, посыпается арахисом и кинзой",
    ingredients: detailCallouts(["маринованные<br>огурцы", "арахис", "кинза"])
  },
  {
    id: "evening-corn-ribs",
    name: "Корн рибс",
    shortName: "корн рибс",
    title: "КОРН РИБС",
    price: "280с",
    image: "assets/evening-corn-ribs.png",
    imageWidth: "205px",
    description: "обжаренная кукуруза, мисо масло, жареный нори, пармезан",
    ingredients: detailCallouts(["обжаренная кукуруза", "мисо масло", "жареный нори", "пармезан"])
  },
  {
    id: "evening-chips-kurut",
    name: "Чипсы с копченым курутом",
    shortName: "чипсы с<br>копченым<br>курутом",
    title: "ЧИПСЫ С КУРУТОМ",
    price: "120с",
    image: "assets/evening-chips-kurut.png",
    imageWidth: "220px",
    description: "Домашние чипсы, посыпается копченым курутом и подается с соусом айоли",
    ingredients: detailCallouts(["домашние чипсы", "копченый курут", "соус айоли"])
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
const logoButton = document.querySelector("#logoButton");
let zoomTimer;
let activeCategory = "home";

function getAutoCalloutBox(label) {
  const plainLabel = label.replace(/<br\s*\/?>/gi, " ");
  if (plainLabel.length > 24) return "210px";
  if (plainLabel.length > 18) return "180px";
  if (plainLabel.length > 12) return "160px";
  return "130px";
}

function getAutoCalloutSize(label) {
  const plainLabel = label.replace(/<br\s*\/?>/gi, " ");
  return plainLabel.length > 28 ? "14px" : "16px";
}

function callout(label, box = getAutoCalloutBox(label), size = getAutoCalloutSize(label)) {
  return { label, box, size };
}

function detailCallouts(labels) {
  return labels.map((label) => callout(label));
}

function getActiveItems() {
  if (activeCategory === "breakfasts") return breakfastItems;
  if (activeCategory === "evening") return eveningItems;
  return menuItems;
}

function getActiveTitle() {
  if (activeCategory === "breakfasts") return "ЗАВТРАКИ";
  if (activeCategory === "evening") return "ВЕЧЕРНЕЕ МЕНЮ";
  return "ТОСТЫ";
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

function renderEvening() {
  menuView.innerHTML = `
    <div class="breakfast-board">
    ${eveningItems
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
  menuView.setAttribute("aria-label", "Вечернее меню");
}

function clamp(value, min, max) {
  if (max < min) return min;
  return Math.min(Math.max(value, min), max);
}

function boxesOverlap(a, b) {
  return a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top;
}

function overlapArea(a, b) {
  if (!boxesOverlap(a, b)) return 0;
  return (Math.min(a.right, b.right) - Math.max(a.left, b.left)) * (Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top));
}

function lineIntersectsBox(line, box) {
  const { x1, y1, x2, y2 } = line;
  const dx = x2 - x1;
  const dy = y2 - y1;
  let min = 0;
  let max = 1;
  const edges = [
    [-dx, x1 - box.left],
    [dx, box.right - x1],
    [-dy, y1 - box.top],
    [dy, box.bottom - y1]
  ];

  return edges.every(([direction, distance]) => {
    if (direction === 0) return distance >= 0;
    const ratio = distance / direction;
    if (direction < 0) min = Math.max(min, ratio);
    if (direction > 0) max = Math.min(max, ratio);
    return min <= max;
  });
}

function expandBox(box, gap) {
  return {
    left: box.left - gap,
    right: box.right + gap,
    top: box.top - gap,
    bottom: box.bottom + gap
  };
}

function getEvenCalloutAngle(index, total) {
  const step = (Math.PI * 2) / Math.max(total, 1);
  return -Math.PI / 2 + index * step;
}

function getRadialCandidates(angle, step, centerX, centerY, radiusX, radiusY, width, height) {
  const angleNudges = [0, -step * 0.32, step * 0.32, -step * 0.62, step * 0.62];
  const radiusScales = [1, 1.12, 0.88, 1.25, 0.76];
  const candidates = [];
  const addCandidate = (candidateAngle, radiusScale) => {
    const labelCenterX = centerX + Math.cos(candidateAngle) * radiusX * radiusScale;
    const labelCenterY = centerY + Math.sin(candidateAngle) * radiusY * radiusScale;
    candidates.push([labelCenterX - width / 2, labelCenterY - height / 2]);
  };

  angleNudges.forEach((angleNudge) => {
    radiusScales.forEach((radiusScale) => {
      addCandidate(angle + angleNudge, radiusScale);
    });
  });

  const fallbackSlots = Math.max(Math.round((Math.PI * 2) / step) * 3, 18);
  for (let slot = 0; slot < fallbackSlots; slot += 1) {
    const fallbackAngle = -Math.PI / 2 + (slot / fallbackSlots) * Math.PI * 2;
    addCandidate(fallbackAngle, 1);
    addCandidate(fallbackAngle, 1.22);
  }

  return candidates;
}

function addEdgeCandidates(candidates, minLeft, maxLeft, minTop, maxTop, safeImage, width, height, gap) {
  const xs = [minLeft, (minLeft + maxLeft) / 2, maxLeft];
  const ys = [
    minTop,
    Math.max(minTop, safeImage.top - height - gap),
    Math.min(maxTop, safeImage.bottom + gap),
    maxTop
  ];

  xs.forEach((x) => ys.forEach((y) => candidates.push([x, y])));
  [minTop, maxTop].forEach((y) => {
    for (let step = 0; step <= 4; step += 1) {
      candidates.push([minLeft + ((maxLeft - minLeft) * step) / 4, y]);
    }
  });
}

function getRaySegment(box, centerX, centerY, halfImageWidth, halfImageHeight, labelGap) {
  const labelCenterX = box.left + (box.right - box.left) / 2;
  const labelCenterY = box.top + (box.bottom - box.top) / 2;
  const dx = labelCenterX - centerX;
  const dy = labelCenterY - centerY;
  const distance = Math.hypot(dx, dy) || 1;
  const unitX = dx / distance;
  const unitY = dy / distance;
  const imageRadius = Math.min(
    Math.abs(unitX) > 0.01 ? halfImageWidth / Math.abs(unitX) : Number.POSITIVE_INFINITY,
    Math.abs(unitY) > 0.01 ? halfImageHeight / Math.abs(unitY) : Number.POSITIVE_INFINITY
  );
  const halfWidth = (box.right - box.left) / 2;
  const halfHeight = (box.bottom - box.top) / 2;
  const labelRadius = Math.min(
    Math.abs(unitX) > 0.01 ? halfWidth / Math.abs(unitX) : Number.POSITIVE_INFINITY,
    Math.abs(unitY) > 0.01 ? halfHeight / Math.abs(unitY) : Number.POSITIVE_INFINITY
  );

  return {
    x1: centerX + unitX * imageRadius,
    y1: centerY + unitY * imageRadius,
    x2: labelCenterX - unitX * (labelRadius + labelGap),
    y2: labelCenterY - unitY * (labelRadius + labelGap)
  };
}

function fitCalloutsToPoster() {
  const posterRect = poster.getBoundingClientRect();
  const imageRect = detailImage.getBoundingClientRect();
  const titleRect = posterTitle.getBoundingClientRect();
  const padding = 8;
  const imageGap = 42;
  const labelGap = 12;
  const occupiedBoxes = [];
  const occupiedRays = [];
  const calloutElements = [...callouts.querySelectorAll(".callout")];
  const posterBox = {
    width: posterRect.width,
    height: posterRect.height
  };
  const centerX = imageRect.left - posterRect.left + imageRect.width / 2;
  const centerY = imageRect.top - posterRect.top + imageRect.height / 2;
  const headerGap = Math.max(44, posterBox.height * 0.045);
  const headerBottom = titleRect.bottom - posterRect.top + headerGap;
  const angleStep = (Math.PI * 2) / Math.max(calloutElements.length, 1);
  const lineImageGap = 18;
  const halfImageWidth = imageRect.width / 2 + lineImageGap;
  const halfImageHeight = imageRect.height / 2 + lineImageGap;
  const safeImage = {
    left: imageRect.left - posterRect.left - imageGap,
    right: imageRect.right - posterRect.left + imageGap,
    top: imageRect.top - posterRect.top - imageGap,
    bottom: imageRect.bottom - posterRect.top + imageGap
  };

  calloutElements.forEach((calloutElement, index) => {
    const width = calloutElement.offsetWidth;
    const height = calloutElement.offsetHeight;
    const minLeft = padding;
    const maxLeft = posterBox.width - width - padding;
    const minTop = Math.max(padding, headerBottom);
    const maxTop = posterBox.height - height - padding;
    const angle = getEvenCalloutAngle(index, calloutElements.length);
    const radiusX = Math.max(imageRect.width / 2 + width / 2 + 54, posterBox.width * 0.34);
    const radiusY = Math.max(imageRect.height / 2 + height / 2 + 92, posterBox.height * 0.24);
    const desiredLeft = centerX + Math.cos(angle) * radiusX - width / 2;
    const desiredTop = centerY + Math.sin(angle) * radiusY - height / 2;
    const candidates = getRadialCandidates(angle, angleStep, centerX, centerY, radiusX, radiusY, width, height);
    addEdgeCandidates(candidates, minLeft, maxLeft, minTop, maxTop, safeImage, width, height, labelGap);
    let best = { left: clamp(desiredLeft, minLeft, maxLeft), top: clamp(desiredTop, minTop, maxTop), score: Number.POSITIVE_INFINITY };

    candidates.forEach(([candidateLeft, candidateTop]) => {
      const left = clamp(candidateLeft, minLeft, maxLeft);
      const top = clamp(candidateTop, minTop, maxTop);
      const box = { left, top, right: left + width, bottom: top + height };
      const spacedBox = expandBox(box, labelGap);
      const ray = getRaySegment(box, centerX, centerY, halfImageWidth, halfImageHeight, labelGap);
      const distance = Math.hypot(left - desiredLeft, top - desiredTop);
      const collisionPenalty = overlapArea(box, safeImage) * 10000;
      const labelCollisionPenalty = occupiedBoxes.reduce(
        (penalty, occupiedBox) => penalty + overlapArea(spacedBox, occupiedBox) * 50000 + (boxesOverlap(spacedBox, occupiedBox) ? 1000000 : 0),
        0
      );
      const rayCollisionPenalty =
        occupiedBoxes.reduce((penalty, occupiedBox) => penalty + (lineIntersectsBox(ray, occupiedBox) ? 500000 : 0), 0) +
        occupiedRays.reduce((penalty, occupiedRay) => penalty + (lineIntersectsBox(occupiedRay, spacedBox) ? 500000 : 0), 0);
      const score = distance + collisionPenalty + labelCollisionPenalty + rayCollisionPenalty;

      if (score < best.score) best = { left, top, score };
    });

    calloutElement.style.left = `${best.left}px`;
    calloutElement.style.top = `${best.top}px`;
    const placedBox = { left: best.left, top: best.top, right: best.left + width, bottom: best.top + height };
    occupiedBoxes.push(expandBox(placedBox, labelGap));
    occupiedRays.push(getRaySegment(placedBox, centerX, centerY, halfImageWidth, halfImageHeight, labelGap));
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
  poster.classList.remove("is-home", "is-breakfasts", "is-evening", "is-detail", "is-animating", "is-callout-ready");
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
  poster.classList.remove("is-home", "is-toasts", "is-evening", "is-detail", "is-animating", "is-callout-ready");
  poster.classList.add("is-breakfasts");
  detailView.style.transition = "";
  detailView.style.transform = "";
  detailView.setAttribute("aria-hidden", "true");
  posterTitle.textContent = "ЗАВТРАКИ";
  resetMenuParting();
  document.querySelectorAll(".is-zoom-source").forEach((item) => item.classList.remove("is-zoom-source"));
  poster.scrollIntoView({ block: "start" });
}

function openEvening() {
  window.clearTimeout(zoomTimer);
  activeCategory = "evening";
  renderEvening();
  poster.classList.remove("is-home", "is-toasts", "is-breakfasts", "is-detail", "is-animating", "is-callout-ready");
  poster.classList.add("is-evening");
  detailView.style.transition = "";
  detailView.style.transform = "";
  detailView.setAttribute("aria-hidden", "true");
  posterTitle.textContent = "ВЕЧЕРНЕЕ МЕНЮ";
  resetMenuParting();
  document.querySelectorAll(".is-zoom-source").forEach((item) => item.classList.remove("is-zoom-source"));
  poster.scrollIntoView({ block: "start" });
}

function openHome() {
  window.clearTimeout(zoomTimer);
  activeCategory = "home";
  poster.classList.remove("is-toasts", "is-breakfasts", "is-evening", "is-detail", "is-animating", "is-callout-ready");
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
          style="
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
  poster.classList.toggle("is-evening", activeCategory === "evening");
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
  if (categoryButton.dataset.category === "evening") openEvening();
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

logoButton.addEventListener("click", openHome);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (poster.classList.contains("is-detail")) {
      closeDetail();
      return;
    }
    if (poster.classList.contains("is-toasts") || poster.classList.contains("is-breakfasts") || poster.classList.contains("is-evening")) openHome();
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
