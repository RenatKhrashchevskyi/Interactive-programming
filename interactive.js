// Deferred code execution and setTimeout

    // let timeUp = function() {
    //     alert('Time is out');
    // };
    // setTimeout(timeUp, 3000);



//Canceling the timer action

// let doHomeworkAlarm = function() {
//         alert('Hey! Time to do homework!');
//     };
//     let timeoutId = setTimeout(doHomeworkAlarm, 10000);

//     //cancel timeout
//     clearTimeout(timeoutId);


//Multiple code runs and setInterval

// let counter = 1;
// let printMessage = function() {
//     console.log('You are looking into the console ' + counter + ' sec');
//     counter++;
// };
// let intervalId = setInterval(printMessage, 1000);
// clearInterval(intervalId);


// //Animating elements using setInterval
// let letOffset = 0;
// let moveHeading = function() {
//     $('#heading').offset({left: letOffset});
//     letOffset++;
//     if (letOffset > 200) {
//         letOffset = 0;
//     }
// };
//setInterval(moveHeading, 30 / 2);



//Reaction to user actions
    // let clickHandler = function(event) {
    //     console.log('Click! ' + event.pageX + ' ' + event.pageY);
    // };
    // $('h1').click(clickHandler);


 

    let direction = 'вправо';
    let offset = 0;
    let intervalLength = 120;
    let clicks = 0;
    $('#heading').offset({ left: offset, top: offset });
    let moveHeading1 = function () {
        $('h1').click(moveHeading1);

      if (direction === 'вправо') {
        $('#heading').offset({ left: offset });
        offset++;
        if (offset > 200) {
          offset = 0;
          direction = 'вниз';
        }
      } else if (direction === 'вниз') {
        $('#heading').offset({ top: offset });
        offset++;
        if (offset > 200) {
          offset = 200;
          direction = 'влево';
        }
      } else if (direction === 'влево') {
        $('#heading').offset({ left: offset });
        offset--;
        if (offset < 0) {
          offset = 200;
          direction = 'вверх';
        }
      } else if (direction === 'вверх') {
        $('#heading').offset({ top: offset });
        offset--;
        if (offset < 0) {
          offset = 0;
          direction = 'вправо';
        }
      }
    };
    let intervalId = setInterval(moveHeading1, intervalLength);

    $('#heading').click(function () {
      clearInterval(intervalId);
      intervalLength /= 2;
      clicks++;

      if (clicks > 10) {
        $('#heading').text('Накликал-таки!');
      } else {
        intervalId = setInterval(moveHeading1, intervalLength)

      }
    });

  
