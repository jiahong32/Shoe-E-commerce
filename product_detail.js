const btn = document.getElementById("collectBtn");
const icon = document.getElementById("heartIcon");

btn.addEventListener("click", () => {
  if (icon.src.endsWith("heart.svg")) {
    icon.src = "../assets/images/heart-fill.svg"; // 切換黑色圖
  } else {
    icon.src = "../assets/images/heart.svg"; // 切回白色圖
  }
});

const collect_btn = document.querySelector(".collect-btn");
const text = collect_btn.querySelector(".l-md");

collect_btn.addEventListener("click", () => {
  if (text.textContent === "加入收藏") {
    text.textContent = "已收藏";
  } else {
    text.textContent = "加入收藏";
  }
});
