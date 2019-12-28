function fn1() {
    var input = document.getElementById("text1").value;
    localStorage.setItem("inputUser", input);
    var submitButton = document.getElementById("button1");
    submitButton.disabled = "true";
    var newHeader = document.createElement("p")
    newHeader.className = "newHeader";
    var bodyInsert = document.getElementById("body").getElementsByTagName("div")[0];
    bodyInsert.appendChild(newHeader);
    newHeader.innerHTML = "Hello, " +input+ ", welcome to the site :). We always love you here, but if u don't like monster, you're NOT welcome.";
    document.getElementById("text1").readOnly = true;
    var newA = document.createElement("a");
    newA.className = "startTheTest";
    var sTT = document.getElementById("startTheTestDiv")
    sTT.appendChild(newA);
    newA.innerHTML = "Start the test!";
    newA.href = "test.html";
}