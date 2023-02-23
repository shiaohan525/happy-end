// 上傳檔案後按鈕內顯示檔名
$(".inputfile").each(function (i) {
  $(this).change(function () {
    var i = $(this).next(".custom-file-upload").clone();
    var file = $(this)[0].files[0].name;
    $(this).next(".custom-file-upload").text(file);
  });
});

// click 品牌報名 展開 表單 並在input/select增加required
// 
let formRequire_input = $('.form > form .require-fill')
// let formRequire_ta = $('.form > form textarea')
let formBox = $('.form')

$("#btn-apply").on("click", function () {
  $(this)
    .parent()
    .parent()
    .next()
    .slideToggle("600", function () {
      if ($(".form").css("display") === "none") {
        $(formRequire_input).prop("required", false);
        // $(formRequire_ad).prop("required", false);
      } else {
        $(formRequire_input).prop("required", true);
        // $(formRequire_ad).prop("required", true);
      }
    });
});

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