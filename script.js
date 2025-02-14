const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
let total = [...document.querySelectorAll("table td:nth-child(2)")]
        .reduce((sum, cell) => sum + (+cell.textContent || 0), 0);
    document.querySelector("table tr.total-row")?.remove();
    document.querySelector("table").insertAdjacentHTML("beforeend", `<tr class='total-row'><td colspan='2'>Total: Rs ${total}</td></tr>`);

  
};

getSumBtn.addEventListener("click", getSum);

