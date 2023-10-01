document.addEventListener("DOMContentLoaded", () => {
    const cursorPos = document.querySelector('body');
    const initials = document.querySelector('.initials');
    
    let range = -4 * 2 //20 px * 2
    
    function shadow(e) {
      let { offsetX: x, offsetY: y } = e;
      if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
      }
    
      // height and width of div.hero
      const { offsetWidth: width, offsetHeight: height } = cursorPos;
    
      const xRange = Math.round( (x/width * range)  - range/2 );
      const yRange = Math.round( (y/height * range) - range/2 );
      
      initials.style.textShadow = `${xRange}px ${yRange}px 4px #fff, 0 0 0 #000`;
    }
    
    document.addEventListener('mousemove', shadow);
});