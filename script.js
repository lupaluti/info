let topZ = 10;
const clickSound = document.getElementById("clickSound");

function playClick() {
  if (clickSound) {
    clickSound.currentTime = 0;
    clickSound.play();
  }
}

function openWin(id) {
  playClick();
  const w = document.getElementById(id);
  w.style.display = "block";
  w.style.zIndex = ++topZ;
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

/* DEFAULT POZİSYONLAR */
document.querySelectorAll('.window').forEach(win => {
  win.style.left = win.dataset.x + "px";
  win.style.top = win.dataset.y + "px";
});

/* DRAG */
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

/* AUTO FOCUS */
window.onload = () => {
  openWin('byf');
};