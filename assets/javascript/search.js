$(document).ready(function () {
    function search(e) {
        e.preventeDefault();
        var search = $("#search").val();
        var startYear = $("#startYear").val();
        var endtYear = $("#endtYear").val();
        var num = $("#numbers").val();
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+search+"&begin_date="+startYear+"0101&end_date="+endtYear+"1231&api-key=roCXKXySi6LwQA5k4H5mIH6NJA3hAlOA"
        $("#search").val("");
        $("#startYear").val("");
        $("#endtYear").val("");
        $("#numbers").val("");
        
        $.ajax({
            method: "GET",
            url: queryURL
        }).then(function (response) {
            var articlesArry = response.response.docs;
            for (var i = 0; i < num; i++) {
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