// 上傳檔案後按鈕內顯示檔名
$(".inputfile").each(function (i) {
  $(this).change(function () {
    var i = $(this).next(".custom-file-upload").clone();
    var file = $(this)[0].files[0].name;
    $(this).next(".custom-file-upload").text(file);
  });
});

// click 品牌報名 展開 表單
$('#btn-apply').on('click', function () {
  $(this).parent().parent().next().children().slideToggle();
})

// 先寫出來再看如何簡化
// popup-bg
let closeElement = $('.dialog-bg')
// popup-info
let dialog = $('.dialog-application-info')
// popup-all
let dialogAll = $('.apply-dialog')

// 點擊顯示投票獎勵視窗
$('#application-info').on('click', function () {
  $(dialog).fadeIn(500);
  $('.apply-dialog > .container').toggleClass('active');
})

// 點擊背景關閉彈窗
closeElement.on('click', function () {
  $(dialogAll).fadeOut(500);
  $('.apply-dialog > .container').removeClass('active');
})

// 叉叉
$('.close-btn').on('click', function () {
  $(dialogAll).fadeOut(500);
  $('.apply-dialog > .container').removeClass('active');
})