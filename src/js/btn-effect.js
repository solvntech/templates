document.addEventListener("DOMContentLoaded", () => {
    const listBtn = document.getElementsByTagName("button");

    Array.prototype.forEach.call(listBtn, function (btn) {
        btn.addEventListener("click", function (e) {
            const style = getComputedStyle(btn);
            const bgColor = style.color;

            const x = e.clientX - btn.getBoundingClientRect().x;
            const y = e.clientY - btn.getBoundingClientRect().y;
            const ripples = document.createElement("span");
            ripples.style.backgroundColor = bgColor;
            ripples.style.top = `${y}px`;
            ripples.style.left = `${x}px`;
            ripples.className = `absolute -translate-x-1/2 -translate-y-1/2 rounded-full animate-ripple opacity-0`;
            this.appendChild(ripples);
            setTimeout(() => ripples.remove(), 1000);
        });
    });
});
