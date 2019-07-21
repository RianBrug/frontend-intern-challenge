function generateShortUrl(id) {
    var n = 6;
    var alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var base = alphabet.length;

    var shortUrl = "";
    for (var i = 0; i < n; i++) {
        var char = Math.floor(Math.random() * base);
        char = alphabet.charAt(char);
        shortUrl += char;
    }

    return "http://chr.dc/" + shortUrl;
}

function getId() {
    var maxId = Math.pow(62, 6);
    return Math.floor(Math.random() * maxId);
}

function shortenUrl() {
    var input = document.getElementById("url-field");
    var btn = document.getElementById("generate-button");

    var id = getId();
    var shortUrl = generateShortUrl(id);

    input.value = shortUrl;
    btn.value = "copiar";
}

function restoreStatus() {
  var btn = document.getElementById("generate-button");
  btn.value = "encurtar";
}

function getTotalHits(urls) {
    var hits = urls.map(function (a) {
        return a.hits;
    });

    var total = hits.reduce(function (a, b) {
        return a + b;
    });

    return total;
}

function getTopFive(urls, n) {
    urls.sort(function (a, b) {
        return b.hits - a.hits;
    });

    var topFive = urls.slice(0, n);

    return topFive;
}

function generateTopList(urls, n) {
    var topFive = getTopFive(urls, n);

    var list = document.getElementById("top-5-list");

    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }

    for (var i in topFive) {
        var shortUrl = topFive[i].shortUrl;
        var hits = topFive[i].hits;
        var item = "<div class='item-link box'><a href='" + shortUrl +
                "'>" + shortUrl + "</a> <span class='clicks-count'>" +
                hits + "</span></div><br>";
        list.innerHTML += item;
    }
}

$(document).ready(function () {
    var requestUrl = "/Assets/urls.json";
    $.getJSON(requestUrl, function (urls) {
        generateTopList(urls, 5);

        var totalHits = getTotalHits(urls);

        var hitsCount = document.getElementById("div-hits-count-sum");
        hitsCount.innerHTML = Number(totalHits).toLocaleString();
    });

    $("#generate-button").click(function () {
        var content = document.getElementById("generate-button").value;

        if (content === "encurtar") {
            shortenUrl();
        }
        if (content === "copiar" ) {
          restoreStatus();
        }
    });
});
