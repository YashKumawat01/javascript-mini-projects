document.addEventListener("mousemove", (e) => {
  const dot = document.createElement("div");
  dot.classList.add("trail-dot");

  dot.style.left = `${e.clientX}px`;
  dot.style.top = `${e.clientY}px`;

  document.body.appendChild(dot);

  // Remove after animation
  setTimeout(() => {
    dot.remove();
  }, 1000);
});
