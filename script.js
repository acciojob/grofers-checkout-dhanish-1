const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	
	// Step 1: Calculate total sum
    let total = [...document.querySelectorAll("table td:nth-child(2)")]
        .reduce((sum, cell) => sum + (+cell.textContent || 0), 0);
    
    // Step 2: Remove existing total row if present
    document.querySelector("table tr.total-row")?.remove();
    
    // Step 3: Create a new row to display the total
    let totalRow = `<tr class='total-row'><td colspan='2'>Total Price: Rs ${total}</td></tr>`;
    
    // Step 4: Append the new row to the table
    document.querySelector("table").insertAdjacentHTML("beforeend", totalRow);
  
};

getSumBtn.addEventListener("click", getSum);

