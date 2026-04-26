// 📖 Lật thiệp
function openCard() {
  document.querySelector(".flip-card").classList.add("open");
}

// 👉 vào web chính
function enterSite(e) {
  e.stopPropagation();
  document.getElementById("flipWrapper").style.display = "none";

  // bật nhạc nếu có
  const music = document.getElementById("bgMusic");
  if (music) music.play();
}