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
let all = $('.latestWorks__item.All');
let branding = $('.latestWorks__item.Branding');
let development = $('.latestWorks__item.Development');
let design = $('.latestWorks__item.Design');
let strategy = $('.latestWorks__item.Strategy');

// $('.latestWorks__item').hide();

tileInput.filter(':first').attr('checked', 'checked');

tabInput.on('change', showTile);
// $(document).ready(function () {
//    tabInput.on('change', showTile);
//    showTile();
// });

function showTile() {

}
