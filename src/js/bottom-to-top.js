

// Получаем все элементы с классом .section-heading
const sectionHeadings = document.querySelectorAll('.section-heading');

// Создаем экземпляр Intersection Observer для каждого элемента
sectionHeadings.forEach((sectionHeading) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                sectionHeading.classList.add('animate');
            }
        });
    });

    observer.observe(sectionHeading);
});
