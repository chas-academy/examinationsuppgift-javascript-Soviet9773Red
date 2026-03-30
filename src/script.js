// 1. Hämta värden 
// 2. Validering
// 3. Uppdatera listorna
// 4. Beräkna saldo
// 5. UX - Användarupplevelse
 
 // get elements from HTML
const inpDesc= document.getElementById("desc"),
      inpAmount = document.getElementById("amount"),
      btnInc = document.getElementById("incomeBtn"),
      btnExp = document.getElementById("expenseBtn"),
      outInc= document.getElementById("incomeList"),
      outExp = document.getElementById("expenseList"),
      saldoEl = document.getElementById("balance");
// 
let balance = 0;

//  Normalize amount(belopp) input (comma → dot)
function parseAmount(va) {
    const normAmount = va.trim().replace(",", ".");

    if (!/^\d+(\.\d+)?$/.test(normAmount)) {
        return NaN;
    }
    return Number(normAmount);
}

// Validate input values
function isValid(desc, amount) {
    return {
        desc: !!desc, // true if non-empty string, false if empty string
        amount: !isNaN(amount) && amount > 0
    };
}

// Transaction: validate input, update list and balance
function transaction (type) {
    const desc = inpDesc.value.trim(),
          amount = parseAmount(inpAmount.value),
		  valid = isValid(desc, amount);
		  
	// UX: Handle invalid input (UI feedback)
    let hasError = false;

    // desc validation
    if (!valid.desc) {
		inpDesc.value = ""; 
        inpDesc.style.border = "2px solid red";
		inpDesc.placeholder = "Fel: beskrivning saknas";
        hasError = true;
    }

    // amount validation
    if (!valid.amount) {
        inpAmount.value = "";
        inpAmount.placeholder = "Fel: ogiltigt belopp";
        inpAmount.style.border = "2px solid red";
        hasError = true;
    }

    if (hasError) return;
    
    const li = document.createElement("li");
	// NOTE: Output format is fixed by assignment specification.
	// '-' is a visual separator; sign is reflected in balance only.
    if (type === "in") {
        li.textContent = `${desc} - ${amount} kr (Inkomst)`;
        outInc.appendChild(li);
        balance += amount;
    } else {
        li.textContent = `${desc} - ${amount} kr (Utgift)`;
        outExp.appendChild(li);
        balance -= amount;
    }

    // Reset input styles
    inpAmount.style.border = "";
	
	// Saldo: update balance value and color
    saldoEl.textContent = balance.toString()
	
	saldoEl.style.color =
    balance > 0 ? "green" :
    balance < 0 ? "red" : "";
	
    // Reset inputs and placeholder
    inpAmount.placeholder = "Ex: 500" 
    inpDesc.value = "";
    inpAmount.value = "";

}

// Adjust list heights when empty
outInc.style.minHeight = outInc.children.length === 0 ? "40px" : "";
outExp.style.minHeight = outExp.children.length === 0 ? "40px" : "";

inpDesc.addEventListener("input", () => {
    inpDesc.style.border = "";
	inpDesc.placeholder = "Ex: Hyra"; 
});

inpAmount.addEventListener("input", () => {
    inpAmount.style.border = "";
    inpAmount.placeholder = "Ex: 500";
});

// Buttons events
btnInc.addEventListener("click",() => transaction("in"));
btnExp.addEventListener("click",() => transaction("ut"));

