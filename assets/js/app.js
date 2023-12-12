    document.addEventListener('DOMContentLoaded', function() {
        const portfolioItems = document.querySelectorAll('.portfolio-item');

        portfolioItems.forEach(item => {
            const hoverElement = item.querySelector('.portfolio-hover');

            item.addEventListener('mousemove', function(event) {
                const boundingRect = item.getBoundingClientRect();
                const x = (event.clientX - boundingRect.left) / boundingRect.width * 100;
                const y = (event.clientY - boundingRect.top) / boundingRect.height * 100;
 
                const translateX = x;  
                const translateY = y;

                hoverElement.style.transform = `translate(${translateX}%, ${translateY}%)`;
 
            });

            item.addEventListener('mouseleave', function() {
                hoverElement.style.transform = 'translate(0, 0)';
                hoverElement.style.transform = 'translate(0, 0) rotateX(0) rotateY(0)';
            });

         
        });
    });
