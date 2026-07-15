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
      callout("красный лук", "140px", undefined, {
        offsetY: 16,
        rayScale: 0.1,
        rayOffsetX: 20,
        rayOffsetY: -40
      })
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
      callout("соус кочуджан-мэйо", "170px", undefined, {
        offsetY: -15,
        rayScale: 0.5,
        rayOffsetY: 5
      })
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
    ingredients: detailCallouts(
      ["вареные яйца", "малосольная форель", "сыр Маасдам", "мисо масло", "маринованный огурчик", "ломтик хлеба"],
      { 5: { offsetY: 5 } }
    )
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
    ingredients: detailCallouts(
      ["творожный крем", "зеленый горошек", "авокадо", "шпинат", "соус песто", "маринованное яйцо"],
      { 5: { offsetY: 25, rayLength: 10, rayOffsetX: 30, rayOffsetY: -40 } }
    )
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
    ingredients: detailCallouts(
      ["курица в панировке", "салат айсберг", "соус айоли", "лимон", "пармезан", "домашние<br>чипсы"],
      {
        4: { offsetY: -80, rayX: 130.85890854305006, rayY: 559.96875, rayLength: 30 },
        5: { offsetY: 45, rayLength: 10, rayOffsetX: 20, rayOffsetY: -30 }
      }
    )
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
    ingredients: detailCallouts(
      ["курица в панировке", "салат айсберг", "соус айоли", "лимон", "пармезан", "домашние<br>чипсы"],
      {
        4: { offsetY: -80, rayX: 130.85890854305006, rayY: 559.96875, rayLength: 30 },
        5: { offsetY: 45, rayLength: 10, rayOffsetX: 20, rayOffsetY: -30 }
      }
    )
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
    ingredients: detailCallouts(
      ["авокадо", "брокколи", "стручковая фасоль", "салат айсберг", "шпинат", "ореховый соус", "жареный нори"],
      { 6: { offsetY: 20, rayLength: 30 } }
    )
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

const barDrinkItems = [
  {
    name: "Раф с кедровыми орехами",
    price: "350с",
    image: "assets/bar-raf-pine-nuts.png",
    imageWidth: "205px"
  },
  {
    name: "Юдзу эспрессо тоник",
    price: "350с",
    image: "assets/bar-yuzu-espresso-tonic.png",
    imageWidth: "190px"
  },
  {
    name: "Эспрессо тоник",
    price: "300с",
    image: "assets/bar-espresso-tonic.png",
    imageWidth: "118px"
  },
  {
    name: "Апельсиновый бамбл",
    price: "420с",
    image: "assets/bar-orange-bumble.png",
    imageWidth: "205px"
  },
  {
    name: "Гранатовый бамбл",
    price: "480с",
    image: "assets/bar-pomegranate-bumble.png",
    imageWidth: "190px"
  },
  {
    name: "Монблан",
    price: "350с",
    image: "assets/bar-montblanc.png",
    imageWidth: "190px"
  },
  {
    name: "Колд Брю вишня",
    price: "350с",
    image: "assets/bar-cold-brew-cherry.png",
    imageWidth: "185px"
  },
  {
    name: "Колд брю малина",
    price: "350с",
    image: "assets/bar-cold-brew-raspberry.png",
    imageWidth: "185px"
  }
];

const matchaItems = [
  {
    name: "Матча шот",
    price: "200с",
    image: "assets/bar-espresso-tonic.png",
    imageWidth: "118px"
  },
  {
    name: "Матча латте",
    price: "350с",
    image: "assets/bar-matcha-latte.png",
    imageWidth: "205px"
  },
  {
    name: "Матча латте на альтернативном молоке",
    price: "390с",
    image: "assets/bar-matcha-alternative.png",
    imageWidth: "190px"
  },
  {
    name: "Матча вишня-миндаль",
    price: "450с",
    image: "assets/bar-matcha-cherry-almond.png",
    imageWidth: "185px"
  },
  {
    name: "Матча манго-юдзу",
    price: "450с",
    image: "assets/bar-matcha-mango-yuzu.png",
    imageWidth: "185px"
  },
  {
    name: "Матча алоэ-клауди",
    price: "450с",
    image: "assets/bar-matcha-aloe-cloudy.png",
    imageWidth: "118px"
  },
  {
    name: "Матча клубника",
    price: "450с",
    image: "assets/bar-matcha-strawberry.png",
    imageWidth: "118px"
  },
  {
    name: "Матча маракуйя-жасмин",
    price: "390с",
    image: "assets/bar-matcha-passion-jasmine.png",
    imageWidth: "118px"
  },
  {
    name: "Матча тоник персик",
    price: "350с",
    image: "assets/bar-matcha-tonic-peach.png",
    imageWidth: "190px"
  },
  {
    name: "Ходзича банан",
    price: "420с",
    image: "assets/bar-hojicha-banana.png",
    imageWidth: "185px"
  }
];

const coldDrinkItems = [
  {
    name: "Лимонад Грейпфрут-личи",
    price: "320с",
    image: "assets/bar-lemonade-grapefruit-lychee.png",
    imageWidth: "190px"
  },
  {
    name: "Лимонад Юдзу-имбирь",
    price: "320с",
    image: "assets/bar-lemonade-yuzu-ginger.png",
    imageWidth: "190px"
  },
  {
    name: "Лимонад Щавель-дыня",
    price: "320с",
    image: "assets/bar-lemonade-sorrel-melon.png",
    imageWidth: "190px"
  },
  {
    name: "Лимонад Ежевика",
    price: "320с",
    image: "assets/bar-lemonade-blackberry.png",
    imageWidth: "190px"
  },
  {
    name: "Лимонад Каламанси-лайм",
    price: "320с",
    image: "assets/bar-lemonade-calamansi-lime.png",
    imageWidth: "190px"
  },
  {
    name: "Смузи Тропик-матча",
    price: "470с",
    image: "assets/bar-smoothie-tropic-matcha.png",
    imageWidth: "190px"
  },
  {
    name: "Смузи манго-банан",
    price: "470с",
    image: "assets/bar-smoothie-mango-banana.png",
    imageWidth: "190px"
  },
  {
    name: "Айс-ти жасмин-персик",
    price: "390с",
    image: "assets/bar-espresso-tonic.png",
    imageWidth: "118px"
  }
];

const detoxItems = [
  {
    name: "Зеленый",
    price: "220с",
    image: "assets/bar-detox-green.png",
    imageWidth: "185px"
  },
  {
    name: "Цитрус",
    price: "220с",
    image: "assets/bar-detox-citrus.png",
    imageWidth: "185px"
  },
  {
    name: "Клубника-злаки",
    price: "220с",
    image: "assets/bar-detox-strawberry-grains.png",
    imageWidth: "185px"
  }
];

const cocktailItems = [
  {
    id: "cocktail-roku",
    name: "[ROKU]",
    shortName: "[ROKU]",
    title: "[ROKU]",
    price: "700с",
    image: "assets/cocktail-roku.png",
    imageWidth: "205px",
    ingredients: detailCallouts(["джин", "соджу", "юдзу", "нитро-пена"])
  },
  {
    id: "cocktail-gekko",
    name: "Gekko",
    shortName: "Gekko",
    title: "GEKKO",
    price: "700с",
    image: "assets/cocktail-gekko.png",
    imageWidth: "205px",
    ingredients: detailCallouts(["водка", "виноградный соджу", "жасминовый кордиал"])
  },
  {
    id: "cocktail-vermilion",
    name: "Vermilion",
    shortName: "Vermilion",
    title: "VERMILION",
    price: "700с",
    image: "assets/cocktail-vermilion.png",
    imageWidth: "205px",
    ingredients: detailCallouts(["Aperol", "Martini Rosso", "ликер личи", "молочный кордиал"])
  },
  {
    id: "cocktail-gold-static",
    name: "Gold Static",
    shortName: "Gold Static",
    title: "GOLD STATIC",
    price: "700с",
    image: "assets/cocktail-gold-static.png",
    imageWidth: "205px",
    ingredients: detailCallouts(["ананасовый кордиал", "соджу ананас", "саке", "медовый сироп"])
  },
  {
    id: "cocktail-kurasango",
    name: "Kurasango",
    shortName: "Kurasango",
    title: "KURASANGO",
    price: "700с",
    image: "assets/cocktail-kurasango.png",
    imageWidth: "205px",
    ingredients: detailCallouts(["Sauvignon Blanc", "соджу черника", "джин", "молочный кордиал", "шапка маракуйя-черника"])
  },
  {
    id: "cocktail-garnet",
    name: "Garnet",
    shortName: "Garnet",
    title: "GARNET",
    price: "700с",
    image: "assets/cocktail-garnet.png",
    imageWidth: "205px",
    ingredients: detailCallouts(["текила", "гранат", "кордиал гранат-груша"])
  },
  {
    id: "cocktail-akane",
    name: "Akane",
    shortName: "Akane",
    title: "AKANE",
    price: "700с",
    image: "assets/cocktail-akane.png",
    imageWidth: "205px",
    ingredients: detailCallouts(["ром", "кокосовый кордиал", "чай карамельный ройбуш"])
  },
  {
    id: "cocktail-eclat",
    name: "Éclat",
    shortName: "Éclat",
    title: "ÉCLAT",
    price: "700с",
    image: "assets/cocktail-eclat.png",
    imageWidth: "190px",
    ingredients: detailCallouts(["ром", "манговый кордиал", "маракуйя"])
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
let edgeSwipe = null;

function getCalloutLines(label) {
  return label
    .replace(/<br\s*\/?>/gi, "\n")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function wrapCalloutLabel(label) {
  if (/<br\s*\/?>/i.test(label)) return label;

  const words = label.trim().split(/\s+/).filter(Boolean);
  if (words.length < 2) return label;

  const totalLength = words.reduce((sum, word) => sum + word.length, 0);
  let bestSplit = 1;
  let bestBalance = Number.POSITIVE_INFINITY;

  for (let split = 1; split < words.length; split += 1) {
    const firstLength = words.slice(0, split).join(" ").length;
    const secondLength = words.slice(split).join(" ").length;
    const balance = Math.abs(firstLength - secondLength) + Math.max(firstLength, secondLength) / Math.max(totalLength, 1);
    if (balance < bestBalance) {
      bestBalance = balance;
      bestSplit = split;
    }
  }

  return `${words.slice(0, bestSplit).join(" ")}<br>${words.slice(bestSplit).join(" ")}`;
}

function getAutoCalloutBox(label) {
  const longestLine = Math.max(...getCalloutLines(wrapCalloutLabel(label)).map((line) => line.length));
  if (longestLine > 16) return "170px";
  if (longestLine > 12) return "150px";
  if (longestLine > 8) return "130px";
  return "130px";
}

function getAutoCalloutSize(label) {
  const longestLine = Math.max(...getCalloutLines(wrapCalloutLabel(label)).map((line) => line.length));
  return longestLine > 18 ? "14px" : "16px";
}

function callout(label, box, size, options = {}) {
  const wrappedLabel = wrapCalloutLabel(label);
  return {
    label: wrappedLabel,
    box: box ?? getAutoCalloutBox(wrappedLabel),
    size: size ?? getAutoCalloutSize(wrappedLabel),
    ...options
  };
}

function detailCallouts(labels, optionsByIndex = {}) {
  return labels.map((label, index) => callout(label, undefined, undefined, optionsByIndex[index]));
}

function getActiveItems() {
  if (activeCategory === "breakfasts") return breakfastItems;
  if (activeCategory === "evening") return eveningItems;
  if (activeCategory === "cocktails") return cocktailItems;
  return menuItems;
}

function getActiveTitle() {
  if (activeCategory === "breakfasts") return "ЗАВТРАКИ";
  if (activeCategory === "evening") return "ВЕЧЕРНЕЕ МЕНЮ";
  if (activeCategory === "bar") return "БАР";
  if (activeCategory === "cocktails") return "КОКТЕЙЛИ";
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

function renderBarDrinkSection(title, ariaLabel, items, options = {}) {
  return `
      <section class="bar-drinks-section${options.className ? ` ${options.className}` : ""}" aria-label="${ariaLabel}">
        <h2>${title}</h2>
        <div class="bar-drink-board">
          ${items
            .map(
              (item) =>
                options.clickable
                  ? `
                <button class="bar-drink bar-drink-button" type="button" data-id="${item.id}" style="--image-width: ${item.imageWidth};" aria-label="${item.title}">
                  <img src="${item.image}" alt="" />
                  <span>${item.name}<br>${item.price}</span>
                </button>
              `
                  : `
                <article class="bar-drink" style="--image-width: ${item.imageWidth};">
                  <img src="${item.image}" alt="" />
                  <span>${item.name}<br>${item.price}</span>
                </article>
              `
            )
            .join("")}
        </div>
      </section>
  `;
}

function renderBarListSection(title, ariaLabel, groups, className = "") {
  return `
      <section class="bar-list-section${className ? ` ${className}` : ""}" aria-label="${ariaLabel}">
        <h2>${title}</h2>
        <div class="bar-list">
          ${groups
            .map(
              (group) => `
                <ul>
                  ${group
                    .map(
                      (item) =>
                        `<li${item.className ? ` class="${item.className}"` : ""}><span>${item.name}</span>${
                          item.price ? `<b>${item.price}</b>` : ""
                        }</li>`
                    )
                    .join("")}
                </ul>
              `
            )
            .join("")}
        </div>
      </section>
  `;
}

function renderCocktails() {
  menuView.innerHTML = `
    <div class="bar-page">
      ${renderBarDrinkSection("АВТОРСКИЕ<br>КОКТЕЙЛИ:", "Авторские коктейли", cocktailItems, {
        clickable: true,
        className: "cocktail-author-section"
      })}
      ${renderBarListSection("КЛАССИЧЕСКИЕ<br>КОКТЕЙЛИ:", "Классические коктейли", [
        [{ name: "все по 680с", price: "", className: "bar-list-note" }],
        [
          { name: "Aperol Spritz", price: "" },
          { name: "Whiskey Sour", price: "" },
          { name: "French 75", price: "" },
          { name: "Pornstar Martini", price: "" },
          { name: "Negroni", price: "" },
          { name: "Espresso Martini", price: "" },
          { name: "Gin Tonic", price: "" },
          { name: "Daiquiri", price: "" },
          { name: "Clover Club", price: "" },
          { name: "Basil Smash", price: "" }
        ]
      ], "cocktail-classics-section")}
    </div>
  `;
  menuView.setAttribute("aria-label", "Коктейли");
}

function renderBar() {
  menuView.innerHTML = `
    <div class="bar-page">
      <section class="bar-coffee-section" aria-label="Кофе">
        <h2>КОФЕ:</h2>
        <img class="bar-coffee" src="assets/coffee.png" alt="" />
        <div class="bar-list">
          <ul>
            <li><span>Доппио</span><b>250с</b></li>
            <li><span>Американо</span><b>260с</b></li>
            <li><span>Флэй-Уайт</span><b>280с</b></li>
            <li><span>Капучино</span><b>250с/310с</b></li>
            <li><span>Латте</span><b>310с</b></li>
          </ul>
          <ul>
            <li><span>Батч-брю</span><b>250с</b></li>
            <li><span>Харио V60</span><b>370с/430с</b></li>
            <li><span>Оригами</span><b>370с</b></li>
          </ul>
        </div>
      </section>

      ${renderBarDrinkSection("КОФЕЙНЫЕ<br>НАПИТКИ:", "Кофейные напитки", barDrinkItems)}
      ${renderBarDrinkSection("МАТЧА:", "Матча", matchaItems)}
      ${renderBarListSection("АВТОРСКИЕ<br>ЧАИ:", "Авторские чаи", [
        [
          { name: "Ананас-черника", price: "200с/380с" },
          { name: "Цитрус-алоэ", price: "200с/380с" },
          { name: "Имбирь", price: "200с/380с" },
          { name: "Малина-манго", price: "200с/380с" }
        ]
      ])}
      ${renderBarListSection("ЭЛИТНЫЕ<br>ЧАИ:", "Элитные чаи", [
        [
          { name: "Те Гуань Инь", price: "290с" },
          { name: "Жасмин", price: "290с" },
          { name: "Ассам 17", price: "290с" },
          { name: "Молочный улун", price: "290с" },
          { name: "Гречишный Ку-Цау", price: "290с" },
          { name: "Да Хун Пау", price: "290с" },
          { name: "Шу Пу-эр", price: "290с" }
        ]
      ])}
      ${renderBarDrinkSection("ХОЛОДНЫЕ<br>НАПИТКИ:", "Холодные напитки", coldDrinkItems)}
      ${renderBarDrinkSection("ДЕТОКСЫ:", "Детоксы", detoxItems)}
      ${renderBarListSection("ФРЕШИ:", "Фреши", [
        [
          { name: "Апельсин", price: "440с" },
          { name: "Яблоко", price: "250с" },
          { name: "Морковь", price: "200с" }
        ]
      ])}
      ${renderBarListSection("ПРОХЛАДИТЕЛЬНЫЕ<br>НАПИТКИ:", "Прохладительные напитки", [
        [
          { name: "Вода легенда", price: "100с" },
          { name: "Coca-Cola/Fanta", price: "200с" },
          { name: "Cок ЯН в ассортименте", price: "300с" },
          { name: "Schweppes", price: "350с" }
        ]
      ])}
      ${renderBarListSection("ДОПЫ:", "Допы", [
        [
          { name: "Апельсин/лимон", price: "50с" },
          { name: "Лайм", price: "120с" },
          { name: "Мед", price: "50с" }
        ]
      ])}
    </div>
  `;
  menuView.setAttribute("aria-label", "Бар");
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

function getSegmentOrientation(a, b, c) {
  return Math.sign((b.y - a.y) * (c.x - b.x) - (b.x - a.x) * (c.y - b.y));
}

function pointIsOnSegment(a, b, c) {
  return (
    Math.min(a.x, c.x) <= b.x &&
    b.x <= Math.max(a.x, c.x) &&
    Math.min(a.y, c.y) <= b.y &&
    b.y <= Math.max(a.y, c.y)
  );
}

function linesIntersect(a, b) {
  const a1 = { x: a.x1, y: a.y1 };
  const a2 = { x: a.x2, y: a.y2 };
  const b1 = { x: b.x1, y: b.y1 };
  const b2 = { x: b.x2, y: b.y2 };
  const o1 = getSegmentOrientation(a1, a2, b1);
  const o2 = getSegmentOrientation(a1, a2, b2);
  const o3 = getSegmentOrientation(b1, b2, a1);
  const o4 = getSegmentOrientation(b1, b2, a2);

  if (o1 !== o2 && o3 !== o4) return true;
  return (
    (o1 === 0 && pointIsOnSegment(a1, b1, a2)) ||
    (o2 === 0 && pointIsOnSegment(a1, b2, a2)) ||
    (o3 === 0 && pointIsOnSegment(b1, a1, b2)) ||
    (o4 === 0 && pointIsOnSegment(b1, a2, b2))
  );
}

function getLineBoxEntryPoint(line, box) {
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

  for (const [direction, distance] of edges) {
    if (direction === 0) {
      if (distance < 0) return null;
      continue;
    }

    const ratio = distance / direction;
    if (direction < 0) min = Math.max(min, ratio);
    if (direction > 0) max = Math.min(max, ratio);
    if (min > max) return null;
  }

  return {
    x: x1 + dx * min,
    y: y1 + dy * min
  };
}

function expandBox(box, gap) {
  return {
    left: box.left - gap,
    right: box.right + gap,
    top: box.top - gap,
    bottom: box.bottom + gap
  };
}

function getBalancedCalloutAngle(index, total) {
  const upperCount = Math.ceil(total / 2);
  const isUpper = index < upperCount;
  const arcIndex = isUpper ? index : index - upperCount;
  const arcTotal = isUpper ? upperCount : total - upperCount;
  const arcStart = isUpper ? (-Math.PI * 3) / 4 : Math.PI / 4;
  const arcEnd = isUpper ? -Math.PI / 4 : (Math.PI * 3) / 4;

  if (arcTotal <= 1) return isUpper ? -Math.PI / 2 : Math.PI / 2;
  return arcStart + ((arcEnd - arcStart) * arcIndex) / (arcTotal - 1);
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
    for (let step = 0; step <= 8; step += 1) {
      candidates.push([minLeft + ((maxLeft - minLeft) * step) / 8, y]);
    }
  });

  [minLeft, maxLeft].forEach((x) => {
    for (let step = 0; step <= 8; step += 1) {
      candidates.push([x, minTop + ((maxTop - minTop) * step) / 8]);
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
  const halfLabelWidth = (box.right - box.left) / 2;
  const halfLabelHeight = (box.bottom - box.top) / 2;
  const labelRadius = Math.min(
    Math.abs(unitX) > 0.01 ? halfLabelWidth / Math.abs(unitX) : Number.POSITIVE_INFINITY,
    Math.abs(unitY) > 0.01 ? halfLabelHeight / Math.abs(unitY) : Number.POSITIVE_INFINITY
  );

  return {
    x1: centerX + unitX * imageRadius,
    y1: centerY + unitY * imageRadius,
    x2: labelCenterX - unitX * (labelRadius + labelGap),
    y2: labelCenterY - unitY * (labelRadius + labelGap)
  };
}

function clipRayToLabelBoxes(ray, boxes, gap) {
  const expandedBoxes = boxes.map((box) => expandBox(box, gap));
  const distance = Math.hypot(ray.x2 - ray.x1, ray.y2 - ray.y1) || 1;
  const unitX = (ray.x2 - ray.x1) / distance;
  const unitY = (ray.y2 - ray.y1) / distance;
  let clippedRay = ray;
  let closestDistance = distance;

  expandedBoxes.forEach((box) => {
    const entry = getLineBoxEntryPoint(ray, box);
    if (!entry) return;

    const entryDistance = Math.hypot(entry.x - ray.x1, entry.y - ray.y1);
    if (entryDistance < 1 || entryDistance >= closestDistance) return;

    closestDistance = entryDistance;
    clippedRay = {
      ...ray,
      x2: entry.x - unitX * gap,
      y2: entry.y - unitY * gap
    };
  });

  return clippedRay;
}

function fitCalloutsToPoster() {
  const posterRect = poster.getBoundingClientRect();
  const imageRect = detailImage.getBoundingClientRect();
  const titleRect = posterTitle.getBoundingClientRect();
  const padding = 8;
  const imageGap = 42;
  const labelGap = 18;
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
  const angleStep = Math.PI / Math.max(Math.ceil(calloutElements.length / 2), 2);
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
    const angle = getBalancedCalloutAngle(index, calloutElements.length);
    const expectedSide = Math.sin(angle) < 0 ? "upper" : "lower";
    const radiusX = Math.max(imageRect.width / 2 + width / 2 + 54, posterBox.width * 0.34);
    const radiusY = Math.max(imageRect.height / 2 + height / 2 + 92, posterBox.height * 0.24);
    const desiredLeft = centerX + Math.cos(angle) * radiusX - width / 2;
    const desiredTop = centerY + Math.sin(angle) * radiusY - height / 2;
    const candidates = getRadialCandidates(angle, angleStep, centerX, centerY, radiusX, radiusY, width, height);
    addEdgeCandidates(candidates, minLeft, maxLeft, minTop, maxTop, safeImage, width, height, labelGap);
    let best = { left: clamp(desiredLeft, minLeft, maxLeft), top: clamp(desiredTop, minTop, maxTop), score: Number.POSITIVE_INFINITY };
    let bestClean = { ...best };

    candidates.forEach(([candidateLeft, candidateTop]) => {
      const left = clamp(candidateLeft, minLeft, maxLeft);
      const top = clamp(candidateTop, minTop, maxTop);
      const box = { left, top, right: left + width, bottom: top + height };
      const spacedBox = expandBox(box, labelGap);
      const ray = getRaySegment(box, centerX, centerY, halfImageWidth, halfImageHeight, labelGap);
      const candidateCenterY = top + height / 2;
      const rayCrossesLabel =
        occupiedBoxes.some((occupiedBox) => lineIntersectsBox(ray, occupiedBox)) ||
        occupiedRays.some((occupiedRay) => lineIntersectsBox(occupiedRay, spacedBox));
      const rayCrossesRay = occupiedRays.some((occupiedRay) => linesIntersect(ray, occupiedRay));
      const overlapsLabel = occupiedBoxes.some((occupiedBox) => boxesOverlap(spacedBox, occupiedBox));
      const distance = Math.hypot(left - desiredLeft, top - desiredTop);
      const collisionPenalty = overlapArea(box, safeImage) * 10000;
      const wrongSidePenalty =
        (expectedSide === "upper" && candidateCenterY > centerY - height / 2) ||
        (expectedSide === "lower" && candidateCenterY < centerY + height / 2)
          ? 2500000
          : 0;
      const labelCollisionPenalty = occupiedBoxes.reduce(
        (penalty, occupiedBox) => penalty + overlapArea(spacedBox, occupiedBox) * 50000 + (boxesOverlap(spacedBox, occupiedBox) ? 1000000 : 0),
        0
      );
      const rayCollisionPenalty = (rayCrossesLabel ? 5000000 : 0) + (rayCrossesRay ? 1500000 : 0);
      const score = distance + wrongSidePenalty + collisionPenalty + labelCollisionPenalty + rayCollisionPenalty;
      const cleanScore = distance + wrongSidePenalty + collisionPenalty + labelCollisionPenalty;

      if (score < best.score) best = { left, top, score };
      if (!overlapsLabel && !rayCrossesLabel && !rayCrossesRay && cleanScore < bestClean.score) {
        bestClean = { left, top, score: cleanScore };
      }
    });

    if (bestClean.score < Number.POSITIVE_INFINITY) best = bestClean;
    const offsetY = Number.parseFloat(calloutElement.dataset.offsetY) || 0;
    best.top = clamp(best.top + offsetY, minTop, maxTop);
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
  const labelGap = 18;
  const halfImageWidth = imageRect.width / 2 + imageGap;
  const halfImageHeight = imageRect.height / 2 + imageGap;
  const calloutElements = [...callouts.querySelectorAll(".callout")];
  const rayElements = [...callouts.querySelectorAll(".callout-ray")];
  const labelBoxes = calloutElements.map((calloutElement) => ({
    left: calloutElement.offsetLeft,
    top: calloutElement.offsetTop,
    right: calloutElement.offsetLeft + calloutElement.offsetWidth,
    bottom: calloutElement.offsetTop + calloutElement.offsetHeight
  }));

  calloutElements.forEach((calloutElement, index) => {
    const rawRay = getRaySegment(
      {
        left: calloutElement.offsetLeft,
        top: calloutElement.offsetTop,
        right: calloutElement.offsetLeft + calloutElement.offsetWidth,
        bottom: calloutElement.offsetTop + calloutElement.offsetHeight
      },
      centerX,
      centerY,
      halfImageWidth,
      halfImageHeight,
      labelGap
    );
    const otherLabelBoxes = labelBoxes.filter((_, labelIndex) => labelIndex !== index);
    const ray = clipRayToLabelBoxes(rawRay, otherLabelBoxes, labelGap);
    const rayElement = rayElements[index];

    if (!rayElement) return;
    const rayScale = clamp(Number.parseFloat(rayElement.dataset.rayScale) || 1, 0, 1);
    const rayTrim = Math.max(0, Number.parseFloat(rayElement.dataset.rayTrim) || 0);
    const explicitRayLength = Number.parseFloat(rayElement.dataset.rayLength);
    const explicitRayX = Number.parseFloat(rayElement.dataset.rayX);
    const explicitRayY = Number.parseFloat(rayElement.dataset.rayY);
    const rayOffsetX = Number.parseFloat(rayElement.dataset.rayOffsetX) || 0;
    const rayOffsetY = Number.parseFloat(rayElement.dataset.rayOffsetY) || 0;
    const rayEndX = ray.x1 + (ray.x2 - ray.x1) * rayScale;
    const rayEndY = ray.y1 + (ray.y2 - ray.y1) * rayScale;
    const calculatedLength = Math.max(0, Math.hypot(rayEndX - ray.x1, rayEndY - ray.y1) - rayTrim);
    const lineLength = Number.isFinite(explicitRayLength) ? Math.max(0, explicitRayLength) : calculatedLength;
    const lineRotate = Math.atan2(rayEndY - ray.y1, rayEndX - ray.x1) * (180 / Math.PI);
    const lineX = Number.isFinite(explicitRayX) ? explicitRayX : ray.x1 + rayOffsetX;
    const lineY = Number.isFinite(explicitRayY) ? explicitRayY : ray.y1 + rayOffsetY;
    rayElement.style.setProperty("--line-x", `${lineX}px`);
    rayElement.style.setProperty("--line-y", `${lineY}px`);
    rayElement.style.setProperty("--line-l", `${lineLength}px`);
    rayElement.style.setProperty("--line-r", `${lineRotate}deg`);
  });
}

function prepareMenuParting(sourceButton) {
  const posterRect = poster.getBoundingClientRect();
  const posterCenterX = posterRect.left + posterRect.width / 2;
  const posterCenterY = posterRect.top + posterRect.height / 2;

  menuView.querySelectorAll(".menu-item, .breakfast-item, .bar-drink-button").forEach((menuItem) => {
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
  menuView.querySelectorAll(".menu-item, .breakfast-item, .bar-drink-button").forEach((menuItem) => {
    menuItem.classList.remove("is-parting");
    menuItem.style.removeProperty("--part-x");
    menuItem.style.removeProperty("--part-y");
  });
}

function openToasts() {
  window.clearTimeout(zoomTimer);
  activeCategory = "toasts";
  renderToasts();
  poster.classList.remove("is-home", "is-breakfasts", "is-evening", "is-bar", "is-cocktails", "is-detail", "is-animating", "is-callout-ready");
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
  poster.classList.remove("is-home", "is-toasts", "is-evening", "is-bar", "is-cocktails", "is-detail", "is-animating", "is-callout-ready");
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
  poster.classList.remove("is-home", "is-toasts", "is-breakfasts", "is-bar", "is-cocktails", "is-detail", "is-animating", "is-callout-ready");
  poster.classList.add("is-evening");
  detailView.style.transition = "";
  detailView.style.transform = "";
  detailView.setAttribute("aria-hidden", "true");
  posterTitle.textContent = "ВЕЧЕРНЕЕ МЕНЮ";
  resetMenuParting();
  document.querySelectorAll(".is-zoom-source").forEach((item) => item.classList.remove("is-zoom-source"));
  poster.scrollIntoView({ block: "start" });
}

function openBar() {
  window.clearTimeout(zoomTimer);
  activeCategory = "bar";
  renderBar();
  poster.classList.remove("is-home", "is-toasts", "is-breakfasts", "is-evening", "is-cocktails", "is-detail", "is-animating", "is-callout-ready");
  poster.classList.add("is-bar");
  detailView.style.transition = "";
  detailView.style.transform = "";
  detailView.setAttribute("aria-hidden", "true");
  posterTitle.textContent = "БАР";
  resetMenuParting();
  document.querySelectorAll(".is-zoom-source").forEach((item) => item.classList.remove("is-zoom-source"));
  poster.scrollIntoView({ block: "start" });
}

function openCocktails() {
  window.clearTimeout(zoomTimer);
  activeCategory = "cocktails";
  renderCocktails();
  poster.classList.remove("is-home", "is-toasts", "is-breakfasts", "is-evening", "is-bar", "is-detail", "is-animating", "is-callout-ready");
  poster.classList.add("is-cocktails");
  detailView.style.transition = "";
  detailView.style.transform = "";
  detailView.setAttribute("aria-hidden", "true");
  posterTitle.textContent = "КОКТЕЙЛИ";
  resetMenuParting();
  document.querySelectorAll(".is-zoom-source").forEach((item) => item.classList.remove("is-zoom-source"));
  poster.scrollIntoView({ block: "start" });
}

function openHome() {
  window.clearTimeout(zoomTimer);
  activeCategory = "home";
  poster.classList.remove("is-toasts", "is-breakfasts", "is-evening", "is-bar", "is-cocktails", "is-detail", "is-animating", "is-callout-ready");
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
          data-ray-scale="${ingredient.rayScale ?? 1}"
          data-ray-trim="${ingredient.rayTrim ?? 0}"
          data-ray-length="${ingredient.rayLength ?? ""}"
          data-ray-x="${ingredient.rayX ?? ""}"
          data-ray-y="${ingredient.rayY ?? ""}"
          data-ray-offset-x="${ingredient.rayOffsetX ?? 0}"
          data-ray-offset-y="${ingredient.rayOffsetY ?? 0}"
          style="--delay: ${120 + index * 55}ms;"
          aria-hidden="true"
        ></span>
        <div
          class="callout"
          data-offset-y="${ingredient.offsetY ?? 0}"
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
  poster.classList.toggle("is-bar", activeCategory === "bar");
  poster.classList.toggle("is-cocktails", activeCategory === "cocktails");
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

function goBack() {
  if (poster.classList.contains("is-detail")) {
    closeDetail();
    return;
  }
  openHome();
}

function handleEdgeSwipeStart(event) {
  if (event.touches.length !== 1) return;
  const touch = event.touches[0];
  if (touch.clientX > 36) {
    edgeSwipe = null;
    return;
  }

  edgeSwipe = {
    startX: touch.clientX,
    startY: touch.clientY,
    isHorizontal: false
  };
}

function handleEdgeSwipeMove(event) {
  if (!edgeSwipe || event.touches.length !== 1) return;
  const touch = event.touches[0];
  const deltaX = touch.clientX - edgeSwipe.startX;
  const deltaY = Math.abs(touch.clientY - edgeSwipe.startY);

  if (deltaX > 12 && deltaX > deltaY) {
    edgeSwipe.isHorizontal = true;
    event.preventDefault();
  }
}

function handleEdgeSwipeEnd(event) {
  if (!edgeSwipe) return;
  const touch = event.changedTouches[0];
  const deltaX = touch.clientX - edgeSwipe.startX;
  const deltaY = Math.abs(touch.clientY - edgeSwipe.startY);
  const shouldGoBack = edgeSwipe.isHorizontal && deltaX >= 60 && deltaX > deltaY * 1.4 && deltaY < 90;

  edgeSwipe = null;
  if (shouldGoBack) goBack();
}

mainView.addEventListener("click", (event) => {
  const categoryButton = event.target.closest(".main-menu-link");
  if (!categoryButton) return;
  if (categoryButton.dataset.category === "toasts") openToasts();
  if (categoryButton.dataset.category === "breakfasts") openBreakfasts();
  if (categoryButton.dataset.category === "evening") openEvening();
  if (categoryButton.dataset.category === "bar") openBar();
  if (categoryButton.dataset.category === "cocktails") openCocktails();
});

menuView.addEventListener("click", (event) => {
  const itemButton = event.target.closest(".menu-item, .breakfast-item, .bar-drink-button");
  if (itemButton) openDetail(itemButton.dataset.id, itemButton);
});

backButton.addEventListener("click", goBack);

logoButton.addEventListener("click", openHome);

document.addEventListener("touchstart", handleEdgeSwipeStart, { passive: true });
document.addEventListener("touchmove", handleEdgeSwipeMove, { passive: false });
document.addEventListener("touchend", handleEdgeSwipeEnd);
document.addEventListener("touchcancel", () => {
  edgeSwipe = null;
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (poster.classList.contains("is-detail")) {
      closeDetail();
      return;
    }
    if (
      poster.classList.contains("is-toasts") ||
      poster.classList.contains("is-breakfasts") ||
      poster.classList.contains("is-evening") ||
      poster.classList.contains("is-bar") ||
      poster.classList.contains("is-cocktails")
    ) openHome();
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
