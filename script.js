const endDate = "25 JULY, 2023 2:40 PM";
document.getElementById("end-Date").innerHTML = endDate;

const inputs = document.querySelectorAll("input");
// create clock
function clock() {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;
    // console.log(diff);
    inputs[0].value = Math.floor(diff / 3600 / 60);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;
}
clock();

// settime
setInterval(() => {
    clock();
}, 1000);