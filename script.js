let topZ = 10;
const clickSound = document.getElementById("clickSound");

function playClick() {
  if (clickSound) {
    clickSound.currentTime = 0;
    clickSound.play();
  }
}

function closeWin(id) {
  playClick();
  document.getElementById(id).style.display = "none";
}

function toggleStart() {
  playClick();
  const m = document.getElementById("startMenu");
  m.style.display = m.style.display === "block" ? "none" : "block";
}

/* DEFAULT POZİSYONLARI UYGULA */
document.querySelectorAll('.window').forEach(win => {
  const x = win.dataset.x;
  const y = win.dataset.y;
  win.style.left = x + "px";
  win.style.top = y + "px";
});

/* DRAG (AMA KAYDETME YOK) */
document.querySelectorAll('.window').forEach(win => {
  const bar = win.querySelector('.title-bar');

  bar.addEventListener('mousedown', e => {
    playClick();
    win.style.zIndex = ++topZ;

    let ox = e.clientX - win.offsetLeft;
    let oy = e.clientY - win.offsetTop;

    function move(e) {
      win.style.left = e.clientX - ox + "px";
      win.style.top = e.clientY - oy + "px";
    }

    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', move);
    }, { once: true });
  });
});

/* AUTO POPUP */
window.onload = () => {
  document.getElementById("byf").style.zIndex = ++topZ;
};