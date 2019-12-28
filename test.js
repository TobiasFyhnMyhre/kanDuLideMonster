function fnSame() {
    var yheaSame = document.createElement("h1");
    yheaSame.className = "same";
    var sameInsert = document.getElementById("buttonDivId");
    sameInsert.appendChild(yheaSame);
    yheaSame.innerHTML = "same";
    document.getElementById("yesButton").disabled = true;
    document.getElementById("noButton").disabled = true;
    var results = document.createElement("a");
    results.className = "results";
    sameInsert.appendChild(results);
    results.innerHTML = "results";
    results.href = "results-i-love-you.html";
}

function fnFuckYou() {
    var fuckInsert = document.getElementById("buttonDivId");
    var fuckYou = document.createElement("h1");
    fuckYou.className = "fuckYou";
    fuckInsert.appendChild(fuckYou);
    fuckYou.innerHTML = "fuck you";
    document.getElementById("yesButton").disabled = true;
    document.getElementById("noButton").disabled = true;
    var results = document.createElement("a");
    results.className = "results";
    fuckInsert.appendChild(results);
    results.innerHTML = "results";
    results.href = "results-i-hate-you.html";
}