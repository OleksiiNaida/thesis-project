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
