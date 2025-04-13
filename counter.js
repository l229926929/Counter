let count = 0
const numDisplay = document.getElementById("num")
const countButton = document.querySelector(".card button:first-of-type")

numDisplay.textContent = count

countButton.addEventListener("click",() => {
  count++;
  numDisplay.textContent = count;
})

// 添加背景更换功能
const changeBackgroundButton = document.querySelector(".card button:nth-of-type(2)");

// 生成随机颜色的函数
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// 更换背景事件
changeBackgroundButton.addEventListener("click", () => {
  const color1 = getRandomColor();
  const color2 = getRandomColor();
  const newBackground = `linear-gradient(135deg, ${color1} 0%, ${color2} 100%)`;
  
  // 要修改的元素
  const elements = [document.documentElement, document.body];
  
  // 更新所有背景相关属性
  elements.forEach(el => {
      el.style.background = newBackground;
      el.style.backgroundSize = "cover";
      el.style.backgroundPosition = "center";
      el.style.backgroundAttachment = "fixed";
  });
});