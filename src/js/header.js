// 登入彈窗
// popup-bg
let closeElement = $('.dialog-bg')
// popup-info
let dialog = $('.dialog-login-info')
// popup-all
let loginAll = $('.login-dialog')

// 點擊登入視窗
$('#login-info').on('click', function () {
  $(dialog).fadeIn(500);
  $('.login-dialog > .container').toggleClass('active');
})

// 點擊登入視窗
$('#login-m-info').on('click', function () {
    $(dialog).fadeIn(500);
    $('.login-dialog > .container').toggleClass('active');
  })

// 點擊背景關閉彈窗
closeElement.on('click', function () {
  $(loginAll).fadeOut(500);
  $('.login-dialog > .container').removeClass('active');
})

// 叉叉
$('.close-btn').on('click', function () {
  $(loginAll).fadeOut(500);
  $('.login-dialog > .container').removeClass('active');
})

//切換登入表單
//點擊連結 原本表單#userLog display:block>none 切換表單#companyLog none>block
//連結顏色改變 原本連結#user摘掉focus 切換連結#company加上focus class

$('#company').on('click', function() {
    $('#user').removeClass('focus');
    $('#company').addClass('focus');
    $('#userLog').attr("style","display:none");
    $('#companyLog').attr("style","display:flex");
})

$('#user').on('click', function() {
    $('#company').removeClass('focus');
    $('#user').addClass('focus');
    $('#companyLog').attr("style","display:none");
    $('#userLog').attr("style","display:flex");
})


