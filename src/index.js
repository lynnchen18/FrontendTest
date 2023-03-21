var getTemplate = function (){
    var html = $("template.item").html();
    return $(html).clone();
}

$(function(){
    $.post("https://testapi2447.azurewebsites.net/TestService.asmx/TestAPI", {}, function(data){
        data.result.forEach(ele => {
            var temp = getTemplate();
            temp.find(".item1").text(ele.item1);
            temp.find(".item2").text(ele.item2);
            temp.find(".item3").text(ele.item3);
            temp.find(".item4").text(ele.item4);
            temp.find(".item5").text(ele.item5);
            $(".table tbody").append(temp);
        }); 
    }, "json");
});


