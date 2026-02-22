const openSound = document.getElementById("openSound");
const clickSound = document.getElementById("clickSound");

window.onload = () => {
  openSound.play();
};

function openWin(id) {
  const win = document.getElementById(id);
  win.style.display = "block";
  clickSound.play();
}

document.querySelectorAll(".window").forEach(win => {
  const bar = win.querySelector(".titlebar");
  const closeBtn = win.querySelector(".close");
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

  closeBtn.onclick = () => win.style.display = "none";
});