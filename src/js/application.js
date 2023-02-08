// 上傳檔案後按鈕內顯示檔名
$(".inputfile").each(function (i) {
    $(this).change(function () {
      var i = $(this).next(".custom-file-upload").clone();
      var file = $(this)[0].files[0].name;
      $(this).next(".custom-file-upload").text(file);
    });
});

// click 品牌報名 展開 表單
$('#btn-apply').on('click', function(){
    $(this).parent().parent().next().children().slideToggle();
})