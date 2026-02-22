// tab değişimi
function showTab(id) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// sürükleme
const win = document.getElementById("window");
const bar = document.getElementById("titlebar");

let isDrag = false, x, y;

bar.addEventListener("mousedown", e => {
  isDrag = true;
  x = e.clientX - win.offsetLeft;
  y = e.clientY - win.offsetTop;
});

document.addEventListener("mousemove", e => {
  if (!isDrag) return;
  win.style.left = e.clientX - x + "px";
  win.style.top = e.clientY - y + "px";
});

document.addEventListener("mouseup", () => isDrag = false);