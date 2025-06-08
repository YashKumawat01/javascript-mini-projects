document.body.addEventListener("click", (e) => {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");

  const size = Math.random() * 100 + 30; // Size between 30px to 130px
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;

  bubble.style.left = `${e.clientX - size / 2}px`;
  bubble.style.top = `${e.clientY - size / 2}px`;

  const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 100%, 60%)`;
  bubble.style.background = randomColor;
  bubble.style.boxShadow = `0 0 20px ${randomColor}`;
  bubble.style.transform = `scale(${Math.random() * 0.5 + 1}) rotate(${Math.random() * 360}deg)`;

  document.body.appendChild(bubble);
});


// // document.body.addEventListener("click", (e) => {
//   const bubble = document.createElement("div");
//   bubble.classList.add("bubble");

//   const size = Math.random() * 100 + 30; // Bubble size 30px to 130px
//   bubble.style.width = `${size}px`;
//   bubble.style.height = `${size}px`;

//   bubble.style.left = `${e.clientX - size / 2}px`;
//   bubble.style.top = `${e.clientY - size / 2}px`;

//   const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 100%, 60%)`;
//   bubble.style.background = randomColor;
//   bubble.style.boxShadow = `0 0 20px ${randomColor}`;

//   document.body.appendChild(bubble);

  // Remove after animation
//   setTimeout(() => {
//     bubble.remove();
//   }, 1000);
// });
