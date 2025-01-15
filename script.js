const lenis = new Lenis({
  smooth: true, // Enable smooth scrolling
  duration: 1.5 , // Duration for the smooth scroll effect
  easing: (t) => t * (2 - t), // Custom easing function for a smoother effect
});

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
})

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
