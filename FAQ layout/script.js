const questions = document.querySelectorAll('.faq-question');


questions.forEach(question => {
    question.addEventListener('click', () => {
       
        const faqItem = question.parentElement;
        
        
        const isActive = faqItem.classList.contains('active');
        
        
        questions.forEach(q => q.parentElement.classList.remove('active'));
        
        
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});