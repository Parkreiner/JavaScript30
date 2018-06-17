/*
    My traceback of this (much nicer) code——————

    Set-Up – Main:
    1. The constant keys is declared. It's generated from the set of all elements that the .key selector applies to.
    2. The .forEach method is invoked on keys. The function passed in is an arrow function that takes key as its sole
       parameter. The function just calls the .addEventListener method on key, passing it the "transitionend" event and
       the removeTransition function (user-defined function).
    3. Then the .addEventListener method is called on window. It gets passed the "keydown" event (I think "keypress"
       would be better) and the playSound function.
    
    Set-Up – removeTransition(e)
    0. This function takes the event that caused it to be called as its sole parameter.
    1. If the event's propertyName is not "transform", exit the function.
           A. If I have this right, all this does is make sure that when a transition ends, it was one for transform.
    2. Otherwise, call the .remove method on .classList, which is a property of target, which is a property of the
       event.
           A. It looks like the event keeps track of what element the transitionend was for, storing it as target. The
              code then just pulls the element's list of classes, and applies the .remove method to it.
    
    Set-Up – playSound(e)
    0. Again, takes an event as a parameter.
    1. Set a constant called audio to 
*/
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    console.log(audio);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);