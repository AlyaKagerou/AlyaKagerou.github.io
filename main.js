var element = document.body;

function ubahMode() {
    element.classList.toggle("dark");
    if (element.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}
var theme = localStorage.getItem("theme");
if (theme == 'dark') {
    element.classList.add("dark");
}

gsap.from(".bg-box1", {
    opacity: 0,
    duration: 1,
    delay: 1.6,
    y: 30,
});

gsap.from(".bg-box2", {
    opacity: 0,
    duration: 2,
    delay: 1.9,
    y: 40,
});
gsap.from(".box-project", {
    opacity: 0,
    duration: 2,
    delay: 1.5,
    y: 50,
});