(()=>{
    const offArrowoffBtnTopClose=document.querySelector('#offBtnTopClose');
    const offArrow=document.querySelector('#offArrow');

    offArrow.addEventListener('click',()=>{
        offArrowoffBtnTopClose.classList.toggle('offBtnTopClose');
    })
})();