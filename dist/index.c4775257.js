const div1 = document.createElement("div");
div1.innerHTML = "1";
div1.setAttribute("id", "x1");
const view1 = document.createElement("div");
view1.style.height = "50px";
view1.style.backgroundColor = "red";
div1.appendChild(view1);
function div11() {
    console.log("xxx");
}
const div2 = document.createElement("div");
div2.setAttribute("id", "x2");
div2.innerHTML = "2";
const routeTable = {
    "/1": div1,
    "/2": div2
};
const app = document.querySelector(`#app`);
let _number;
function x1(root) {
    const number = window.location.pathname;
    console.log(number);
    if (_number == undefined) root.appendChild(document.body.appendChild(routeTable[number.toString()]));
    else if (_number !== number && _number !== undefined) {
        root.innerHTML = "";
        root.appendChild(document.body.appendChild(routeTable[number.toString()]));
    }
    _number = number;
}
x1(app);
window.addEventListener("hashchange", ()=>{
    x1(app), console.log("hash变了");
});

//# sourceMappingURL=index.c4775257.js.map
