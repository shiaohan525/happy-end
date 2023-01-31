// Adobe 仿宋體置入

(function(d) {
    var config = {
      kitId: 'fkp8stv',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);


  // mobile-menu
const mobile_main_menu =  $(".mobile-main-menu");
$('.mobile-main-menu>li>a').on('click',function(event) {
		event.preventDefault();
		$(this).siblings('ul').slideToggle(500); // 通過使用滑動效果，在顯示和隱藏狀態之間切換，可設置動畫時間，單位毫秒
});


//back to top btn
var btn = $('#button');

$(window).scroll(function() {
if ($(window).scrollTop() > 300) {
    btn.addClass('show');
} else {
    btn.removeClass('show');
}
});

btn.on('click', function(e) {
e.preventDefault();
$('html, body').animate({scrollTop:0}, '300');
});