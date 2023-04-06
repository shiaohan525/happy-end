// Adobe 仿宋體置入

(function (d) {
  var config = {
    kitId: 'fkp8stv',
    scriptTimeout: 3000,
    async: true
  },
    h = d.documentElement, t = setTimeout(function () { h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive"; }, config.scriptTimeout), tk = d.createElement("script"), f = false, s = d.getElementsByTagName("script")[0], a; h.className += " wf-loading"; tk.src = 'https://use.typekit.net/' + config.kitId + '.js'; tk.async = true; tk.onload = tk.onreadystatechange = function () { a = this.readyState; if (f || a && a != "complete" && a != "loaded") return; f = true; clearTimeout(t); try { Typekit.load(config) } catch (e) { } }; s.parentNode.insertBefore(tk, s)
})(document);


// mobile-menu
const mobile_main_menu = $(".mobile-main-menu");
$('.mobile-main-menu>li>a').on('click', function (event) {
  event.preventDefault();
  $(this).siblings('ul').slideToggle(500); // 通過使用滑動效果，在顯示和隱藏狀態之間切換，可設置動畫時間，單位毫秒
});


//back to top btn
var btn = $('#button');

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});

// 地區 產業 福利 篩選 click
$('.dialog-filter .container .form li').each(function (index, el) {
  $(el).on('click', function () {
    var tab = $(this).attr('class');
    var tabbox = $('#' + tab);
    var back = $('.dialog-filter .fixed .rwd-back');

    $(this).addClass('active').siblings().removeClass('active');
    $(tabbox).addClass('active').siblings().removeClass('active');

    if ($(window).width() < 767) {
      $('.conditions').addClass('transform-rwd').siblings().removeClass('transform-rwd');
      $(tabbox).addClass('transform').siblings().removeClass('transform');
      $(back).addClass('active').siblings().removeClass('active');
    }
  })
})

// 手機版點選左側分類後 transform右邊的細分類，最上面會從「選擇ＸＸ」變成回到上層，這邊是控這個的
$('.dialog-filter .container .form li').on('click', function () {
  var basic = $('.dialog-filter .fixed .basic');
  var back = $('.dialog-filter .fixed .rwd-back');

  if($(back).css('display') == 'block'){
    $(basic).addClass('active')
  }else{
    $(basic).removeClass('active')
  }
})

// 職務＆地區會有的，查看全部條件跟收合起來
$('.choice-info > .expand').on('click', function(){
  var info = $('.choice-info');
  var collapse = $('.choice-info .collapse');

  $(info).toggleClass('active');
  $(collapse).toggleClass('active');
  
  if($(collapse).css('display') == 'block'){
    $(this).css('display','none')

  }else{
    $(this).css('display','block')
  }
})

// 點擊 看全部 - 字會換成 收起來
$('.choice-info > .collapse').on('click', function(){
  var info = $('.choice-info');
  var collapse = $('.choice-info .collapse');
  var expand = $('.choice-info .expand');

  $(info).removeClass('active')
  $(this).removeClass('active')
  $(expand).css('display','flex')
})

// 選地區
let areabtn = $('#ft-area')
let area = $('.area-wrapper')

// 選職務
let industrybtn = $('#ft-industry')
let industry = $('.industry-wrapper')

// 選福利
let benefitbtn = $('#ft-benefits')
let benefits = $('.benefits-wrapper')

// 共用背景＆彈窗＆叉叉按鈕＆回上一層
let filterbg = $('.dialog-bg')
let filterbox = $('.dialog-filter')

let closeBtn = $('.dialog-filter .close-btn')
let basic = $('.dialog-filter .fixed .basic');
let back = $('.dialog-filter .fixed .rwd-back');


benefitbtn.on('click', function () {
  $(filterbox).fadeIn().toggleClass('active');
  $(benefits).fadeIn().toggleClass('active');
})

industrybtn.on('click', function () {
  $(filterbox).fadeIn().toggleClass('active');
  $(industry).fadeIn().toggleClass('active');
})

areabtn.on('click', function () {
  $(filterbox).fadeIn().toggleClass('active');
  $(area).fadeIn().toggleClass('active');
})

closeBtn.on('click', function () {
  $(filterbox).fadeOut().removeClass('active');
  $(benefits).fadeOut().removeClass('active');
  $(industry).fadeOut().removeClass('active');
  $(area).fadeOut().removeClass('active');
})
filterbg.on('click', function () {
  $(filterbox).fadeOut().removeClass('active');
  $(benefits).fadeOut().removeClass('active');
  $(industry).fadeOut().removeClass('active');
  $(area).fadeOut().removeClass('active');
})
back.on('click', function () {
  $('.conditions').toggleClass('transform-rwd');
  $('.g-conditions').removeClass('active', 'transform');
  $(this).removeClass('active');
  $(basic).removeClass('active');
})



//horizonal scroll
const slider = document.querySelector('.tabWrapper');
let isDown = false;
let startX;
let scrollLeft;
slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
});


