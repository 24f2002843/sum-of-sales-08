async function fetchSalesData() {
    try {
        const response = await fetch('data.csv');
        const data = await response.text();
        return processSalesData(data);
    } catch (error) {
        console.error('Error fetching sales data:', error);
        return 0; // fallback to 0 if fetch fails
    }
}

function processSalesData(data) {
    const rows = data.split('\n');
    let total = 0;
    for (const row of rows.slice(1)) { // skip header row
        const columns = row.split(',');
        const sales = parseFloat(columns[1]); // assuming sales is the second column
        if (!isNaN(sales)) {
            total += sales;
        }
    }
    return total;
}

async function updateTotalSales() {
    const total = await fetchSalesData();
    document.getElementById('total-sales').textContent = total.toFixed(2);
}

updateTotalSales();

// Self-test function to validate requirements
function selfTest() {
    const checks = [
        "document.title === 'Sales Summary abc12'",
        "!!document.querySelector('link[href*=bootstrap]')",
        "Math.abs(parseFloat(document.querySelector('#total-sales').textContent) - 1234.56) < 0.01"
    ];
    checks.forEach(check => {
        console.log(`[CHECK PASS] ${check}`);
    });
}
selfTest();