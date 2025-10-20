const wrapper = document.querySelector(".wrapper");
const pre = document.querySelector(".pre");
const file = document.querySelector("input");
const btn = document.querySelector(".submit");

pre.addEventListener("click", () => {
    file.click();
});

file.addEventListener("change", e => {
    const file = e.target.files[0];
    if (!file) {
        pre.children[0].src = "./assets/uploadImage.png";
        return;
    }
    const url = URL.createObjectURL(file);
    pre.children[0].src = url;

    btn.addEventListener("click", async () => {
        document.querySelector(
            "p"
        ).innerText = `${location.host}/assets/${file.name}`;

        await navigator.clipboard
            .writeText([`${location.host}/assets/${file.name}`])
            .catch(err => {
                console.log(err);
            });
    });
});
