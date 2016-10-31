import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';


/* Style Sheet Import */
require('../main.scss');

/* Hide The Main Area and Render our Quiz Div*/
(function($) {
    $(document).ready(function() {
        
        let url = 'https://secure2.convio.net/scai/images/content/pagebuilder/LP-BG-Quiz.jpg';
        let desc = 'Find out the size of your carbon footprint when you take The Student Conservation Association\'s Conservation QUIZ!';
   
        $("meta[property=og:image]").attr("content", url);
        $("meta[property=og:description]").attr("content", desc);
        
        $('.page').hide();
        
        let popup = $('<div id="quiz" class="quiz"></div>');
        
        $('body').prepend(popup);
    
    });
})(jQuery);

/* Render Quiz*/
ReactDOM.render(<App />, document.getElementById('quiz'));









