import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';

/* Style Sheet Import */
require('../main.scss');

/* Hide The Main Area and Render our Quiz Div*/
(function($) {
    $(document).ready(function() {
        
        $('.page').hide();
        
        let popup = $('<div id="quiz" class="quiz"></div>');
        $('body').prepend(popup);
    
    });
})(jQuery);

/* Render Quiz*/
ReactDOM.render(<App />, document.getElementById('quiz'));









