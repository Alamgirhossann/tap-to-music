window.addEventListener("load", () => {
  let sound = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const vidual = document.querySelector(".vidual")
  let color = [
    "chartreuse",
    "rgb(251, 255, 0)",
    "rgb(0, 217, 255)",
    "rgb(255, 0, 242)",
    "rgb(255, 51, 0)",
  ];

  pads.forEach((pad, index) => {
    pad.addEventListener("click", function () {
      sound[index].currentTime = 0;
      sound[index].play();
      createBubble(index);
    });
  });
   
  function createBubble(index){
      let bubble = document.createElement('div');
      vidual.appendChild(bubble);
      bubble.style.background = color[index];
      bubble.style.animation = 'buble 1s ease';
  }
});
