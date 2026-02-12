let topZ = 10;

function closeWin(id) {
  document.getElementById(id).style.display = "none";
}

document.querySelectorAll('.window').forEach(win => {
  const bar = win.querySelector('.title-bar');

  bar.addEventListener('mousedown', e => {
    win.style.zIndex = ++topZ;

    let offsetX = e.clientX - win.offsetLeft;
    let offsetY = e.clientY - win.offsetTop;

    function move(e) {
      win.style.left = e.clientX - offsetX + "px";
      win.style.top = e.clientY - offsetY + "px";
    }

    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', move);
    }, { once: true });
  });

  win.addEventListener('mousedown', () => {
    win.style.zIndex = ++topZ;
  });
});
