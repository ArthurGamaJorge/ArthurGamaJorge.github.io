
const scroll = new LocomotiveScroll({
    el: document.querySelector('#scroll'),
    smooth: true,
  });
  
  const revealElements = () => {
    const elements = document.querySelectorAll('.reveal');
  
    elements.forEach((el) => {
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-inview');
            
            if (entry.target.id === 'Corvo') {
                setTimeout(() => {
                    entry.target.style.
                    entry.target.style.transition = 'none'; 
                }, 2000); 
            }

            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.5 
      });
  
      observer.observe(el);
    });
  };
  revealElements();

// SLIDER PORTIFÓLIO
container = document.querySelector('.ContainerPortfolio')

let isDown = false;
let startX;
let scrollLeft;

container.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
});

container.addEventListener('mouseleave', () => {
  isDown = false;
});

container.addEventListener('mouseup', () => {
  isDown = false;
});

document.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - container.offsetLeft;
  const walkX = (x - startX) * 0.75; 
  container.scrollLeft = scrollLeft - walkX;
});