// Keybinds.js handles the Arrow Keys to navigate throughout the homepage screens
// — William Dorffer


Element.prototype.hasClass = function(className) {
    return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
};

document.onkeydown = function(e) {
    e = e || window.event;
    switch(e.which || e.keyCode) {
        case 37: // left
            if (document.getElementById('body').hasClass('rig')) { // Press Left to go back to Homescreen from Right Pane
                document.getElementById('body').className = 'hom';
            } else if (document.getElementById('body').hasClass('hom')) { // Press Left to go to Left Pane
                document.getElementById('body').className = 'lef';
            }
        break;

        case 38: // up
            if (document.getElementById('body').hasClass('bot')) { // Press Up to go back to Homescreen from Bottom Pane
                document.getElementById('body').className = 'hom';
            }
        break;

        case 39: // right
            if (document.getElementById('body').hasClass('lef')) { // Press Right to go back to Homescreen from Left Pane
                document.getElementById('body').className = 'hom';
            } else if (document.getElementById('body').hasClass('hom')) {
                document.getElementById('body').className = 'rig'; // Press Righ to go to Right Pane
            }
        break;

        case 40: // down
            if (document.getElementById('body').hasClass('hom')) { // Press Down to go to Bottom Pane
                document.getElementById('body').className = 'bot';
            }
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
};
