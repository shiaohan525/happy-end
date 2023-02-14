$('.flip').on('click',function(){
    $(this).parent().children('.front').siblings().toggleClass('active');
    $(this).parent().children('.back').siblings().toggleClass('active');
})

// 投票成功彈窗裡 工作職缺超過10字呈現...
$(function(){
    var len = 11;
    $(".JQellipsis").each(function(i){
        if($(this).text().length>len){
            $(this).attr("title",$(this).text());
            var text=$(this).text().substring(0,len-1)+"...";
            $(this).text(text);
        }
    });
});