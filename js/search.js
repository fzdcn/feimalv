$(".topSearch >a").on("click", function() {
    if ($("#txt_search_input").val() == "") {
        alert("请输入搜索内容！");
        $("#txt_search_input").focus();
        return false;
    }
    location.href = "/Search/" + $("#txt_search_input").val();
})