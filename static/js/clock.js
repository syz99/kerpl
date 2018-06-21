window.onload = tellTime();

function tellTime() {
    var time = new Date();
    var h = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();
    h = h % 12;
    m = check(m);
    s = check(s);

    document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(tellTime, 500);
}

function check(i) {
    if (i < 10) { i = "0" + i;}
    return i;
}

