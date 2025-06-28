function main() {
    const display = document.querySelector('input');
    const numberBtns = document.querySelectorAll('.number');
    const operatorBtns = document.querySelectorAll('.operator');
    const equalBtn = document.querySelector('.equal');
    let result = "";

    // Handle number button clicks
    numberBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (result !== "") {
                display.value = "";
                result = "";
            }
            display.value += btn.innerHTML;
        });
    });

    // Handle operator button clicks
    operatorBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const btnValue = btn.innerHTML;

            if (btn.classList.contains("clear")) {
                // Remove last character
                display.value = display.value.slice(0, -1);
            } else if (btn.classList.contains("del")) {
                // Clear all
                display.value = "";
                result = "";
            } else {
                if (result !== "") {
                    result = "";
                    display.value = "";
                }
                display.value += btnValue;
            }
        });
    });

    // Handle equal button
    equalBtn.addEventListener("click", () => {
        const expression = display.value;
        if (!expression) {
            alert("Enter a value");
            return;
        }

        try {
            const evalResult = eval(expression); // still unsafe, but fine for simple calculators
            result = parseFloat(evalResult).toFixed(2);
            display.value = result;
        } catch (error) {
            alert("Invalid Expression");
        }
    });
}

main();
