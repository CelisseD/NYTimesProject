$(document).ready(function () {

    var article 
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + article + " "fq=pub_year:  "&api-key=roCXKXySi6LwQA5k4H5mIH6NJA3hAlOA";

    function search() {
        $.ajax({
            method: "GET",
            url: queryURL
        }).then(function (response) {
            var articlesArry = response.response.docs;
            for (var i = 0; i < articlesArry.length; i++) {
                var title = articlesArry[i].snippet;
                var artURL = articlesArry[i].web_url;
                var para = articlesArry[i].lead_paragraph;
                var date = articlesArry[i].pub_date;
                var author = articlesArry[i].byline.original;
                let a = $("<a>");
                a.attr("href", artURL);
                a.text(title);
                let p = $("<p>").text(para);
                let pDate = $("<p>").text(date);
                let span = $("<span>").text(author);
                let newDiv = $("<div>");
                newDiv.append(a,span,p,pDate);
                $("#articles").append(newDiv);
            }
        });
    }

    $("#searchButton").on("click", search);

});