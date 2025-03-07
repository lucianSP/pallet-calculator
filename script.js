// script.js
function updatePalletInfo() {
    const palletType = document.getElementById("palletType").value;
    const palletInfo = document.getElementById("palletInfo");
    if (palletType === "euro") {
        palletInfo.innerHTML = "<p>120cm x 80cm, 1500kg</p>";
    } else if (palletType === "standard") {
        palletInfo.innerHTML = "<p>120cm x 100cm, 1000kg</p>";
    } else {
        palletInfo.innerHTML = "";
    }
}

function calculateBoxes() {
    const palletType = document.getElementById("palletType").value;
    const length = parseFloat(document.getElementById("boxLength").value);
    const width = parseFloat(document.getElementById("boxWidth").value);
    const height = parseFloat(document.getElementById("boxHeight").value);
    const weight = parseFloat(document.getElementById("boxWeight").value);
    
    if (!palletType || isNaN(length) || isNaN(width) || isNaN(height) || isNaN(weight)) {
        alert("Please fill all fields correctly.");
        return;
    }
    
    let palletWidth, palletLength, maxWeight;
    if (palletType === "euro") {
        palletWidth = 80;
        palletLength = 120;
        maxWeight = 1500;
    } else if (palletType === "standard") {
        palletWidth = 100;
        palletLength = 120;
        maxWeight = 1000;
    }
    
    const boxesPerLevel = Math.floor(palletLength / length) * Math.floor(palletWidth / width);
    const levels = Math.floor(maxWeight / (boxesPerLevel * weight));
    const totalWeight = boxesPerLevel * levels * weight;
    
    document.getElementById("results").innerHTML = `
        <p>Boxes per level: ${boxesPerLevel}</p>
        <p>Complete levels: ${levels}</p>
        <p>Total weight: ${totalWeight.toFixed(2)} kg</p>
    `;
}
