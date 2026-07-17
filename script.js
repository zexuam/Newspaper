const wrapper = document.querySelector(".wrapper");
const pre = document.querySelector(".pre");
const file = document.querySelector("input");
const btn = document.querySelector(".submit");

pre.addEventListener("click", () => {
  file.click();
});

file.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) {
    pre.children[0].src = "./assets/uploadImage.png";
    return;
  }
  const url = URL.createObjectURL(file);
  pre.children[0].src = url;

  btn.addEventListener("click", async () => {
    const fileName = `${location.host}/Newspaper/assets/${file.name}`;
    document.querySelector("p").innerText = fileName;

    await navigator.clipboard.writeText([fileName]).catch((err) => {
      console.log(err);
    });
  });
});
