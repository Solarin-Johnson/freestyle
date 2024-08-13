const face = document.querySelector("#face");
const ear = document.querySelector("#ear");
const faceComponents = document.querySelector("#face-components");
const animation = document.querySelector("#eyeOpened");
let blinkInterval;
let mouseTimeout;

function startBlink() {
  if (!blinkInterval) {
    blinkInterval = setInterval(() => {
      if (animation) {
        animation.beginElement();
      }
    }, 4000);
  }
}

function quickBlink() {
  if (animation) {
    animation.beginElement();
  }
}

function stopBlink() {
  if (blinkInterval) {
    clearInterval(blinkInterval);
    blinkInterval = null;
  }
}

function updateTransform(event) {
  const svg = document.querySelector("svg");
  const svgRect = svg.getBoundingClientRect();
  const x = event.clientX - svgRect.left;
  const y = event.clientY - svgRect.top;

  const svgCenterX = svgRect.width / 2;
  const svgCenterY = svgRect.height / 2;

  const directionX = (x - svgCenterX) / svgCenterX;
  const directionY = (y - svgCenterY) / svgCenterY;

  const offsetX = directionX;
  const offsetY = directionY;

  face.style.setProperty(
    "--transform-3d",
    `translate3d(${offsetX * 20}px, ${offsetY * 20}px, 0)`
  );
  faceComponents.style.setProperty(
    "--transform-3d",
    `translate3d(${offsetX * 60}px, ${offsetY * 60}px, 0)`
  );
  ear.style.setProperty(
    "--transform-3d",
    `translate3d(${offsetX * -20}px, ${offsetY * -20}px, 0)`
  );
}

function resetTransform() {
  face.style.setProperty("--transform-3d", "translate3d(0, 0, 0)");
  ear.style.setProperty("--transform-3d", "translate3d(0, 0, 0)");
  faceComponents.style.setProperty("--transform-3d", "translate3d(0, 0, 0)");
}

function observeMouse() {
  document.addEventListener("mousemove", updateTransform);
}

function handleMouseMove() {
  stopBlink();

  clearTimeout(mouseTimeout);

  mouseTimeout = setTimeout(startBlink, 100);
}

startBlink();

face.addEventListener("click", quickBlink);

document.addEventListener("mouseover", observeMouse);
document.addEventListener("mouseout", resetTransform);
document.addEventListener("mousemove", handleMouseMove);
