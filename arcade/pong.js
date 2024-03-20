 // JavaScript to move paddle1
 const paddle1 = document.getElementById('paddle1');
 let paddle1YPosition = 0;
 const moveAmount = 20; // pixels
 
 document.addEventListener('keydown', function(event) {
     if (event.key === 'w' || event.key === 'W') {
         if (paddle1YPosition > 0) {
             paddle1YPosition -= moveAmount;
             paddle1.style.top = paddle1YPosition + 'px';
         }
     } else if (event.key === 's' || event.key === 'S') {
         if (paddle1YPosition < 320) { // 400px game area height - 80px paddle height
             paddle1YPosition += moveAmount;
             paddle1.style.top = paddle1YPosition + 'px';
         }
     }
 });