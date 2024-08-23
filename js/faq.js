
const faqHeader = document.querySelectorAll(".faq-item-header");

faqHeader.forEach((faq)=>{
    faq.addEventListener("click", collapsFaqs);

    function collapsFaqs(){
        const activeFaq = document.querySelector(".active");
        if(activeFaq && activeFaq !== faq) {
            activeFaq.classList.toggle("active");
            activeFaq.nextElementSibling.style.maxHeight = 0;
        }
        faq.classList.toggle("active");
        const faqBody = faq.nextElementSibling;

        if(faq.classList.contains("active")) {
            faqBody.style.maxHeight = faqBody.scrollHeight + "px";
        }else {
            faqBody.style.maxHeight = 0;
        }
    }
});