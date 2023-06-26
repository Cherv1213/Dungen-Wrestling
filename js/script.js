const serchIcon = document.querySelector('.header__search');
const headerContainer = document.querySelector('.header__container');
const serchForm = document.querySelector('.header-form');

serchIcon.addEventListener('click', () => {
   headerContainer.style.display = 'none';
   serchForm.style.display = 'flex';

   document.addEventListener('click',(el)=>{
      const click = el.composedPath().includes(serchForm);
      console.log(click);

      if(!click){
         headerContainer.style.display = 'block';
         serchForm.style.display = 'none';
      }
   })
})
