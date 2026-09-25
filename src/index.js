const heroTextAndImage = [
  {
    text: "deep learning on satellite and aerial imagery",
    src: "images/hero-crophealth2.png",
    alt: "Aerial view of fields of crops",
  },
  {
    text: "measuring traffic density",
    src: "images/hero-trafficdensity.png",
    alt: "Traffic on a highway interchange",
  },
  {
    text: "understanding crop health",
    src: "images/hero-crophealth2.png",
    alt: "Aerial view of fields of crops",
  },
  {
    text: "tracking forest loss",
    src: "images/hero-forestloss.png",
    alt: "Color-coded map reflecting forest loss",
  },
  {
    text: "cell nuclei detection",
    src: "images/hero-nucleidetection.png",
    alt: "Close up of a cell nucleus",
  },
  {
    text: "forecasting rip currents",
    src: "images/hero-ripcurrents.png",
    alt: "Aerial view of a hurricane",
  },
  {
    text: "prediction of hourly global solar irradiation",
    src: "images/hero-solarirradiation.png",
    alt: "Satellite imagery of a solar farm",
  },
  {
    text: "assessing storm damage",
    src: "images/hero-stormdamage.png",
    alt: "A flooded suburban neighborhood",
  },
];

const repeatableConfigImage = [
  {
    alt: "A satellite image of a suburban neighborhood with buildings highlighted",
    src: "images/demo-semseg.jpg",
    displayLegend: true,
    codeSnippet: "images/repconfig-ss-snippet.jpg",
  },
  {
    alt: "A satellite image of a housing development next to a large field with a grid overlay",
    src: "images/demo-chipclassification.jpg",
    displayLegend: false,
    codeSnippet: "images/repconfig-cc-snippet.jpg",
  },
  {
    alt: "A satellite image of buildings and cars with a square around every car",
    src: "images/demo-objectdetection.jpg",
    displayLegend: false,
    codeSnippet: "images/repconfig-od-snippet.jpg",
  },
];

function changeHeroTextAndImage(moveForward, reduceMotion) {
  // find visible image id
  const currentImgElem = document.getElementsByClassName("primary")[0];
  const currentIndex = parseInt(currentImgElem.id.split("-")[2]);
  // determine direction and then use mod operator to wrap if needed
  const increment = moveForward ? 1 : -1;
  const nextIndex =
    (currentIndex + increment + heroTextAndImage.length) %
    heroTextAndImage.length;
  // get second slot for setting new image and fade in
  const nextImgElem = document.getElementsByClassName("secondary")[0];
  nextImgElem.id = `hero-img-${nextIndex}`;
  nextImgElem.src = heroTextAndImage[nextIndex].src;
  nextImgElem.alt = heroTextAndImage[nextIndex].alt;
  $(`#hero-img-${nextIndex}`).fadeIn();
  // remove current image after addition to prevent flickering
  $(`#hero-img-${currentIndex}`).fadeOut();
  // switch primary and secondary slots
  nextImgElem.classList.add("primary");
  nextImgElem.classList.remove("secondary");
  currentImgElem.classList.add("secondary");
  currentImgElem.classList.remove("primary");
  // replace hero text to match new slide
  const srTextElem = document.getElementById("hero-text-sr");
  srTextElem.innerText = heroTextAndImage[nextIndex].text;
  const textElem = document.getElementById("hero-text");
  if (!reduceMotion) {
    textElem.innerText = "";
    typewriterEffect(textElem, heroTextAndImage[nextIndex].text);
  } else {
    textElem.innerText = heroTextAndImage[nextIndex].text;
  }
}

function typewriterEffect(textElem, newText) {
  new Typewriter(textElem, {
    loop: false,
    autoStart: true,
    strings: newText,
    delay: 60,
    cursor: "_",
  });
}

// this boolean guards against a Firefox bug where adding the nav
// element changes the YOffset of elements below, setting off a
// race condition which will cause the nav to flash if the user
// scrolls slowly near the breakpoint
function evalHeaderOnChange() {
  const header = document.getElementById("header");
  const subHero = document.getElementById("subHero");
  // 64 px corresponds to h-16, 640 px corresponds to sm breakpoint
  const subHeroOffset = showHeader ? subHero.offsetTop - 64 : subHero.offsetTop;
  if (window.pageYOffset > subHeroOffset) {
    header.classList.remove("sm:hidden");
    showHeader = true;
  } else {
    header.classList.add("sm:hidden");
    showHeader = false;
  }
}

function changeRepeatableConfigImage(selection) {
  // use selection to retrieve and set image from repeatableConfigImage
  const newSelectionIndex = selection.id.split("-")[2];
  const imgElem = document.getElementById("repeatable-config-img");
  imgElem.src = repeatableConfigImage[newSelectionIndex].src;
  imgElem.alt = repeatableConfigImage[newSelectionIndex].alt;
  // replace code snippet image
  const codeSnippetElem = document.getElementById("code-snippet");
  codeSnippetElem.src = repeatableConfigImage[newSelectionIndex].codeSnippet;
  // remove styling from old selection
  const oldSelection = document.getElementsByClassName("selected")[0];
  const oldSelectionIndex = oldSelection.id.split("-")[2];
  const oldSelectionButton = document.getElementById(
    `repeatable-config-button-${oldSelectionIndex}`
  );
  oldSelection.classList.remove("selected", "border-2", "border-teal-500");
  oldSelectionButton.classList.remove("bg-teal-500");
  // set styling of new selection
  const newSelectionButton = document.getElementById(
    `repeatable-config-button-${newSelectionIndex}`
  );
  selection.classList.add("selected", "border-2", "border-teal-500");
  newSelectionButton.classList.add("bg-teal-500");
  // either remove or add semantic segmentation legend
  const legendElem = document.getElementById("legend");
  if (repeatableConfigImage[newSelectionIndex].displayLegend) {
    legendElem.classList.remove("hidden");
  } else if (repeatableConfigImage[oldSelectionIndex].displayLegend) {
    legendElem.classList.add("hidden");
  }
}
