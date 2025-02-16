const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

UnicornStudio.addScene({
  elementId: "unicorn",
  fps: 60,
  scale: 1,
  dpi: 1,
  projectId: "YOUR_PROJECT_EMBED_ID",
  lazyLoad: true,
  filePath: "./effect.json",
  altText: "Welcome to Unicorn Studio",
  ariaLabel: "This is a canvas scene",
  production: false,
  interactivity: {
    mouse: {
      disableMobile: true,
    },
  },
});

let videoContainer = document.querySelector(".section-2");
let blob = document.querySelector("#blob");

videoContainer.addEventListener("mousemove", (e) => {
  gsap.to(blob, {
    x: (e.clientX - blob.clientWidth / 2 - 300) * 0.2,
    y: (e.clientY - blob.clientHeight / 2 - 10) * 0.2,
    duration: 2,
    ease: "power1.out",
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  var part1 = gsap.timeline({
    scrollTrigger: {
      trigger: "#section2-1",
      start: "10% 100%",
      end: "90% 0%",
      scrub: true,
      duration: 1,
    },
  });
  part1
    .to(
      "#top-nav-sec2-1",
      {
        backgroundColor: "#FD7024",
      },
      "a"
    )
    .from(
      "#section2-1 h1, #section2-1 p, #section2-1 img",
      {
        opacity: 0,
        y: -850,
      },
      "a"
    )
    .to("#section2-1 h1, #section2-1 p, #section2-1 img", {
      opacity: 0,
      y: 850,
    });

  var part2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#section2-2",
      start: "10% 100%",
      end: "90% 0%",
      scrub: true,
      duration: 1,
    },
  });
  part2
    .to(
      "#top-nav-sec2-2",
      {
        backgroundColor: "#FD7024",
      },
      "b"
    )
    .from(
      "#section2-2 h1, #section2-2 p, #section2-2 img",
      {
        opacity: 0,
        y: -850,
      },
      "b"
    )
    .to("#section2-2 h1, #section2-2 p, #section2-2 img", {
      opacity: 0,
      y: 850,
    });

  var part3 = gsap.timeline({
    scrollTrigger: {
      trigger: "#section2-3",
      start: "10% 100%",
      end: "90% 0%",
      scrub: true,
      duration: 1,
    },
  });
  part3
    .to(
      "#top-nav-sec2-3",
      {
        backgroundColor: "#fd7024",
      },
      "c"
    )
    .from(
      "#section2-3 h1, #section2-3 p, #section2-3 img",
      {
        opacity: 0,
        y: -850,
      },
      "c"
    )
    .to("#section2-3 h1, #section2-3 p, #section2-3 img", {
      opacity: 0,
      y: 850,
    });

  var part4 = gsap.timeline({
    scrollTrigger: {
      trigger: "#section2-4",
      start: "10% 100%",
      end: "90% 0%",
      scrub: true,
      duration: 1,
    },
  });
  part4
    .to(
      "#top-nav-sec2-4",
      {
        backgroundColor: "#fd7024",
      },
      "c"
    )
    .from(
      "#section2-4 h1, #section2-4 p, #section2-4 img",
      {
        opacity: 0,
        y: -850,
      },
      "c"
    )
    .to("#section2-4 h1, #section2-4 p, #section2-4 img", {
      y: 150,
    });
});

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const frames = {
  currentIndex: 0,
  maxIndex: 147,
};

let imagesLoaded = 0;
let images = [];

function preloadImages() {
  for (let i = 1; i <= frames.maxIndex; i++) {
    const imageUrl = `./frames/frame_${i.toString().padStart(4, "0")}.jpeg`;
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      imagesLoaded++;
      if (imagesLoaded === frames.maxIndex) {
        loadImages(frames.currentIndex);
        startAnimation();
      }
    };
    images.push(img);
  }
}

function loadImages(index) {
  if (index >= 0 && index < frames.maxIndex) {
    const img = images[index];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const scaleX = canvas.width / img.width;
    const scaleY = canvas.height / img.height;
    const scale = Math.max(scaleX, scaleY);

    const newWidth = img.width * scale;
    const newHeight = img.height * scale;

    const offsetX = (canvas.width - newWidth) / 2;
    const offsetY = (canvas.height - newHeight) / 2;

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, newWidth, newHeight);

    frames.currentIndex = index;
  }
}

function startAnimation() {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".parent",
      start: "top top",
      end: "1000% bottom",
      pin: true,
      scrub: 2,
    },
  });
  function updateFrames(index) {
    return {
      currentIndex: index,
      ease: "linear",
      onUpdate: function () {
        loadImages(Math.floor(frames.currentIndex));
      },
    };
  }
  tl.to(frames, updateFrames(frames.maxIndex), "a"); // Ensure frames are updated
  window.addEventListener("resize", function () {
    loadImages(Math.floor(frames.currentIndex));
  });
}

preloadImages();

function float() {
  let floats = document.querySelectorAll(".float");
  let papadiv = document.querySelector(".section-3");

  papadiv.addEventListener("mousemove", (e) => {
    floats.forEach((float) => {
      let value = float.getAttribute("value");

      let x = (window.innerWidth - e.clientX * value) / 50;
      let y = (window.innerHeight - e.clientY * value) / 50;

      gsap.to(float, { x: x, y: y, duration: 0.5 });
    });
  });
}
float();
