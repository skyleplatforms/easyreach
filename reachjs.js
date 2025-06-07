const positions = [
  { top: "0px", left: "75px" },   // 12 o'clock
  { top: "75px", left: "150px" }, // 3 o'clock
  { top: "150px", left: "75px" }, // 6 o'clock
  { top: "75px", left: "0px" }    // 9 o'clock
];

const numbers = document.querySelectorAll(".rolling-number");
let currentIndex = 0;

function moveNumbers() {
  let prevPos = positions[positions.length - 1]; // Store last position

  for (let i = positions.length - 1; i > 0; i--) {
      positions[i] = positions[i - 1]; // Shift positions
  }

  positions[0] = prevPos; // Move last position to first

  // Apply new positions and fade effect
  numbers.forEach((num, index) => {
      num.style.top = positions[index].top;
      num.style.left = positions[index].left;

      // Only show the number at 12 o'clock
      num.style.opacity = index === 2 ? "1" : "1";
  });
}

setInterval(moveNumbers, 2000); 