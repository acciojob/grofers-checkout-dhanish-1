const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
 let total = [...document.querySelectorAll("table td:nth-child(2)")]
        .reduce((sum, cell) => sum + (+cell.textContent.trim() || 0), 0);
    
    document.querySelector("table tr.total-row")?.remove();
    
    let totalRow = document.createElement("tr");
    totalRow.classList.add("total-row");
    let totalCell = document.createElement("td");
    totalCell.colSpan = 2;
    totalCell.id = "ans";
    totalCell.textContent = `Total: Rs ${total}`;
    totalRow.appendChild(totalCell);
    
    document.querySelector("table").appendChild(totalRow);

  
};

getSumBtn.addEventListener("click", getSum);

