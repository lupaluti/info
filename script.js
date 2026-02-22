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

let tursuMode = false;

// turşu tabını aç + modu aktif et
function toggleTursu() {
  showTab('tursu');
  tursuMode = true;
}

// ekrana tıklanınca turşu çıkması
document.addEventListener("click", e => {
  if (!tursuMode) return;

  // pencerenin içindeki tıklamaları sayma
  if (e.target.closest("#window")) return;

  const img = document.createElement("img");
  img.src = "assets/img/tursu.png"; // 👈 senin ekleyeceğin dosya
  img.className = "tursu";

  img.style.left = e.pageX - 32 + "px";
  img.style.top = e.pageY - 32 + "px";

  document.body.appendChild(img);

  setTimeout(() => img.remove(), 1000);
});