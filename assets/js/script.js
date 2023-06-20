function mainMenu() {
    var m = document.getElementById("menu");
    var b = document.getElementById("listMain");
    if (m.style.display === "none") {
        m.style.display = "inline"
    } else {
        m.style.display = "none";
    }
}
function totalCount() {
    var total = document.getElementById("listMain").getElementsByTagName("li").length
    document.getElementById("total").innerHTML = "total games: " + total;
}
function search() {
    var input, filter, ul, li, code, i, txtValue;
    input = document.getElementById("keywords");
    filter = input.value.toUpperCase();
    ul = document.getElementById("listMain");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        code = li[i].getElementsByTagName("code")[0];
        txtValue = code.textContent || code.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

/* document.getElementById("tester").innerHTML = testers; */
