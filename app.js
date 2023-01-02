function countDown(time){
    let timer = setInterval(function(){
      time--;
      if(time <= 0){
        clearInterval(timer);
        console.log('Finished!');
      }
      else {
        console.log(time);
      }
  
    },1000)
  }
  setTimeout(countDown(4),5000);
  function randomGame(){
    let number;
    let times = 0;
    let timer = setInterval(function(){
        number = Math.random();
        times++
        if (number > .75) {
            clearInterval(timer);
            console.log(`It took ${times} Tries` );
        }
    },1000)
  }
  randomGame();