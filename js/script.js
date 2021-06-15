//Табы 
var tabInput= $('.switch__item > input'); 
tabInput.filter(':first').attr('checked', 'checked');
var tabItem = $('.review__text');

tabInput.on('change', showTab);

function showTab() {
   tabInput.each(function(i) {
      tabItem.eq(i).toggleClass('opened', $(this).prop('checked'));
   });
}

//Плитка
let tileInput = $('.latestWorks__navigateItem > input');
let filter = $('[data-filter]');
// let all = $('[data-cat="All"]');
// let branding = $('[data-cat="Branding"]');
// let development = $('[data-cat="Development"]');
// let design = $('[data-cat="Design"]');
// let strategy = $('[data-cat="Strategy"]');

tileInput.filter(':first').attr('checked', 'checked');

filter.on('change', showTile);

function showTile() {
   let cat = $(this).data('filter');

   if(cat == 'All'){
      $('[data-cat]').show('slow');
   }else{
      $('[data-cat]').each(function(){

         let workCat = $(this).data('cat');
   
         if(workCat != cat){
            $(this).hide('slow');
         }else{
            $(this).show('slow');
         }
      })
   }
}

//Навигация 

$(document).ready(function () {

   $('.navigate__item > a').click(function (e) {
      e.preventDefault();
      const ID = $(this).attr('href');
      //  console.log(ID);
      const PAGE_OFFSET = $(ID).offset().top;
      //  console.log(PAGE_OFFSET);
      $('html, body').animate({
         scrollTop: PAGE_OFFSET
      },"slow", "linear")
   })

});


//Форма отправки

// $('.form').submit(function(e){
//    e.preventDefault();
//    let th = $(this);
//    let mess = $('.mess');
//    let btn = th.find('.form__btn');
//    btn.addClass('progress-bar-striped progress-bar-animated');

//    $.ajax({
//       url: "foo.php", // указываем URL
//       method: "POST",            // HTTP метод, по умолчанию GET
//       data: th.serialize(),         // данные, которые отправляем на сервер
//       // dataType: "html",         // тип данных загружаемых с сервера
//       success: function (data) {
//          if(data==1){
//             btn.removeClass('progress-bar-striped progress-bar-animated');
//             mess.html('<div class="alert mt-3 alert-danger">Email введен не верно!</div>');
//             return false;
//          }else{
//             btn.removeClass('progress-bar-striped progress-bar-animated');
//             mess.html('<div class="alert mt-3 alert-succes">Сообщение успешно отправлено!</div>');
//             setTimeout(function(){
//                th.trigger('reset');
//             }, 3000)
//          }
//       },error: function(){
//          mess.html('<div class="alert mt-3 alert-danger">Ошибка отправки!</div>');
//          btn.removeClass('progress-bar-striped progress-bar-animated');
//       }
//    })
// });


//Меню бургер

$('.navigate__btn').on('click', function(e) {
   e.preventDefault();
   $(this).toggleClass('navigate__btn_active');
   $('.navigate__menu').toggleClass('navigate__menu_active');
});