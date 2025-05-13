let startTime;
const form = document.getElementById("contactForm");
const timer = document.getElementById("timer");
const confirmation = document.getElementById("confirmation");

form.addEventListener("focusin", () => {
  if (!startTime) startTime = new Date();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const duration = Math.floor((new Date() - startTime) / 1000);
  confirmation.textContent = `Submitted successfully! Time spent: ${duration} seconds.`;
  form.reset();
  startTime = null;
});
