const slideImages = document.querySelectorAll('.slideImage');
      const centerImage = document.getElementById('centerImage');
      
      let currentIndex = 0;
    
      function showImage(index) {
        centerImage.src = slideImages[index].src;
        slideImages[currentIndex].classList.remove('active');
        slideImages[index].classList.add('active');
        currentIndex = index;
      }
    
      showImage(currentIndex);
    
      document.querySelector('.main').addEventListener('click', function(event) {
        if (event.target.classList.contains('font')) {
          const direction = event.target.innerText;
          const lastIndex = slideImages.length - 1;
    
          if (direction === '<') {
            const newIndex = currentIndex === 0 ? lastIndex : currentIndex - 1;
            showImage(newIndex);
          } else if (direction === '>') {
            const newIndex = currentIndex === lastIndex ? 0 : currentIndex + 1;
            showImage(newIndex);
          }
        }
      });
    
      document.querySelector('.slide').addEventListener('click', function(event) {
        if (event.target.classList.contains('slideImage')) {
          const index = Array.from(slideImages).indexOf(event.target);
          showImage(index);
        }
      });