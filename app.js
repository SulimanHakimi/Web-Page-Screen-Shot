let btn = document.getElementById("screenBtn");
btn.addEventListener("click", () => {
  html2canvas(document.body).then((canvas) => {
    const url = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.setAttribute("download", "imageName.png");
    a.setAttribute("href", url);
    a.click();
  });
});
