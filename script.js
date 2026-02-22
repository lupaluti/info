// pencere sürükleme
const win = document.getElementById("window");
const bar = document.getElementById("titlebar");

let drag=false, x, y;

bar.addEventListener("mousedown", e=>{
  drag=true;
  x=e.clientX-win.offsetLeft;
  y=e.clientY-win.offsetTop;
});

document.addEventListener("mousemove", e=>{
  if(!drag) return;
  win.style.left = e.clientX-x+"px";
  win.style.top  = e.clientY-y+"px";
});

document.addEventListener("mouseup", ()=> drag=false);

// turşu.exe
let tursu=false;
const btn=document.getElementById("tursuBtn");
const panel=document.getElementById("tursuWin");

btn.onclick=()=>{
  tursu=!tursu;
  panel.style.display = tursu ? "block" : "none";
};

document.addEventListener("click", e=>{
  if(!tursu) return;
  if(e.target.closest("#window")) return;

  const img=document.createElement("img");
  img.src="assets/img/tursu.png";
  img.className="tursu";
  img.style.left=e.pageX-32+"px";
  img.style.top=e.pageY-32+"px";
  document.body.appendChild(img);

  setTimeout(()=>img.remove(),1000);
});