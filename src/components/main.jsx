import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import Frame from './frame.jsx';


/* Style Sheet Import */
require('../main.scss');

/* Hide The Main Area and Render our Quiz Div*/
(function($) {
    $(document).ready(function() {
        
       if (window.location.protocol !== 'http:') {
           window.location = 'http://' + window.location.hostname + window.location.pathname + window.location.hash;
           console.log('changed protocol')
         }
        
        $('.page').hide();
        
        let popup = $('<div id="quiz" class="quiz"></div>');
        let frameHolder = $('<div id="frameHolder"></div>');
        
        $('body').prepend(frameHolder).prepend(popup);
    
    });
})(jQuery);


/* Render Quiz*/
ReactDOM.render(<App />, document.getElementById('quiz'));

/*Render Iframe */
ReactDOM.render(<Frame />, document.getElementById('frameHolder'));









