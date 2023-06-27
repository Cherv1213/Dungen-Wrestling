/*-------------------------------header------------------------------------------------------------------*/
const serchIcon = document.querySelector('.header__search');
const headerContainer = document.querySelector('.header__container');
const serchForm = document.querySelector('.header-form');
const serachInput = document.querySelector('#header-serch')
const mainBlock = document.querySelector('main');

serchIcon.addEventListener('click', () => {
   headerContainer.style.display = 'none';
   serchForm.style.display = 'flex';
   mainBlock.style.paddingTop = '105px'
   serachInput.focus();

   mainBlock.addEventListener('click', () => {
   headerContainer.style.display = 'block';
   serchForm.style.display = 'none';
   mainBlock.style.paddingTop = '0'
   })
})
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if(iconMenu){
   iconMenu.addEventListener("click", function (e){
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
   });
}
/*--------------------------------main-----------------------------------------------------------------*/
const categoryItem = document.querySelectorAll('.category__item');

categoryItem.forEach(el => {
   el.addEventListener('click', () => {
      categoryItem.forEach(el => el.classList.remove('_choosed'));
      el.classList.add('_choosed')
      
   })
})