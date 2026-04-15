import "./styles.css";

document.getElementById("outer").addEventListener(
  "click",
  () => {
    console.log("outer");
  },
  true //by default it is false/event bubling
);
document.getElementById("mid").addEventListener(
  "click",
  () => {
    console.log("mid");
  },
  true
);
document.getElementById("inner").addEventListener(
  "click",
  () => {
    console.log("inner");
  },
  true
);
