/*
    1. Get the audio elements (possibly by using their data-keys?)
    2. Add event listeners to the elements (connecting them to the <div>s that have the same key). Set the <div>s up to
       play the audio when clicked.
    3. Add event listeners for pressing the keys
    4. Add code for temporarily modifying the classes of an element.

    https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*
*/

// Plays audio and change button's style when pressed
function play(ele)
{
    function pulseElement()
    {
        ele.classList.add("playing", "sound");
        setTimeout(function()
        {
            ele.classList.remove("playing", "sound");
        }, 100);
    }
    pulseElement(ele);
    audioDict[ele.dataset.key].play();
}

// Get the key <div>s
let keys = document.getElementsByClassName("key");

// Get <audio> elements
let audioFiles = document.getElementsByTagName("audio");

// Generate dict pairing audio files with their IDs
let audioDict = {};
for (let i = 0; i < audioFiles.length; i++)
    audioDict[audioFiles[i].dataset.key] = audioFiles[i];

// Add event listeners for clicking the buttons
for (let i = 0; i < keys.length; i++)
{
    keys[i].addEventListener("click", function()
    {
        play(keys[i]);
    });
}

// Add event listener for pressing keys; looks like keyboard events need to be added to window
window.addEventListener("keypress", function(event)
{
    for (let i = 0; i < keys.length; i++)
    {
        if (event.key.toUpperCase().charCodeAt(0) == keys[i].dataset.key)
        {
            play(keys[i]);
        }
    }
});