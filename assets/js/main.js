
/* javascript */

document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.querySelector('.textElement');
    
    textElement.addEventListener("mouseenter", function() {
      addSpecialElements();
    });
  
    textElement.addEventListener("mouseleave", function() {
      removeSpecialElements();
    });
  });
  
  function addSpecialElements() {
    const stateDiv = document.getElementById("state");
    
    const smallFlameImg = createImageElement("small-flame", "assets/img/small_flame.png");
    stateDiv.appendChild(smallFlameImg);
  
    const explodeImg = createImageElement("explode", "assets/img/explode.png");
    stateDiv.appendChild(explodeImg);
    
    let text = document.querySelector('.textElement');
    text.textContent = "Stunning Meets Explosive";

    setTimeout(() => {
      smallFlameImg.classList.add('active');
      explodeImg.classList.add('active');
    }, 50);
  }
  
  function removeSpecialElements() {
    const smallFlame = document.querySelector('.small-flame');
    const explode = document.querySelector('.explode');
    let text = document.querySelector('.textElement');

    
    if (smallFlame && explode) {
      smallFlame.classList.remove('active');
      explode.classList.remove('active');
      text.textContent = "Stunning Meets Exclusive";

      setTimeout(() => {
        smallFlame.remove();
        explode.remove();
      }, 500); 
    }
  }
  
  function createImageElement(className, src) {
    const img = document.createElement("img");
    img.className = className;
    img.src = src;
    return img;
  }

  console.log("Here is an unbranding for Samsung's notorious phone explosion contraversy.")
  console.log("The Samsung Galaxy Note 7 was a highly anticipated smartphone that was released in August 2016. However, it quickly became infamous due to numerous reports of its lithium-ion battery overheating and catching fire. The incidents led to injuries and property damage in some cases. This controversy was a significant setback for Samsung, both in terms of reputation and financial impact.")


  