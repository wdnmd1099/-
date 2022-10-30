const div1 = document.createElement("div");
div1.setAttribute("id", "x1");
div1.innerHTML = "1";
const div2 = document.createElement("div");
div2.setAttribute("id", "x2");
div2.innerHTML = "2";
const div3 = document.createElement("div");
div3.setAttribute("id", "x3");
div3.innerHTML = "3";
const div4 = document.createElement("div");
div4.setAttribute("id", "x4");
div4.innerHTML = "4";
const routeTable = {
    "1": div1,
    "2": div2,
    "3": div3,
    "4": div4
};
console.log(routeTable);
let _number;
function x1() {
    const app = document.querySelector(`#app`);
    const number = window.location.hash.substring(1) || 1;
    if (_number == undefined) app.appendChild(document.body.appendChild(routeTable[number.toString()]));
    else if (_number !== number && _number !== undefined) {
        app.innerHTML = "";
        app.appendChild(document.body.appendChild(routeTable[number.toString()]));
    }
    _number = number;
}
x1();
window.addEventListener("hashchange", ()=>{
    x1(), console.log("hash变了");
});

//# sourceMappingURL=index.c4775257.js.map
