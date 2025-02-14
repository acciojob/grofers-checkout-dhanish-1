const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let total = [...document.querySelectorAll("table td:nth-child(2)")]
        .reduce((sum, cell) => sum + (parseFloat(cell.textContent) || 0), 0);
    
    let table = document.querySelector("table");
    let totalRow = document.createElement("tr");
    totalRow.innerHTML = `<td colspan='2'>Total Price: Rs ${total.toFixed(2)}</td>`;
    
    document.querySelector("table tr.total-row")?.remove();
    totalRow.classList.add("total-row");
    table.appendChild(totalRow);
  
};

getSumBtn.addEventListener("click", getSum);

