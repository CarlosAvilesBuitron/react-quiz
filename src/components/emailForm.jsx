import React from 'react';
import ReactDOM from 'react-dom';
import cookie from 'react-cookie';

class EmailForm extends React.Component{
        
    constructor(props){
        super(props);
        
        
        this.state = {
            emailReady : false
        };
    }
    
    
    _onChange(e){
        if(e.currentTarget.value != ''){
            this.setState({emailReady: true});
        } else {
            this.setState({emailReady: false});
        }
    }
    
    _onSubmit(e){
        const {_finishForm} = this.props;
        
        _finishForm();
        
        document.getElementById('QuizHolder').scrollIntoView();
    }
    
    render(){
    
        return(          
            <div className="emailForm" id="QuizForm">
                <h2>You are done!</h2>
                <p>Ready to see and share your results?</p>
                <form action="http://members.thesca.org/site/Survey?ACTION_REQUIRED=URI_ACTION_USER_REQUESTS&SURVEY_ID=8787" method="post" target="iframeLoader" id="surveyForm" onSubmit={this._onSubmit.bind(this)} >
                    <input id="cons_info_component" name="cons_info_component" type="hidden" value="t"/>
                    <input id="cons_mail_opt_in" name="cons_mail_opt_in" type="hidden" value="t"/>
                    <input type="email" name="cons_email" id="cons_email" placeholder="Your email address" onChange={this._onChange.bind(this)} />
                    {this.state.emailReady && 
                    <input id="ACTION_SUBMIT_SURVEY_RESPONSE" name="ACTION_SUBMIT_SURVEY_RESPONSE" type="submit" class="button-form" value="See results »"/> }
                    <input id="cons_email_opt_in_requested" name="cons_email_opt_in_requested" type="hidden" value="true"/>
                    <input id="denySubmit" name="denySubmit" alt="This field is used to prevent form submission by scripts." type="hidden"/>
                    <input id="SURVEY_ID" name="SURVEY_ID" type="hidden" value="8787"/>
                </form>
                
                <iframe id="iframeLoader" name="iframeLoader" className="frameLoader"></iframe>
                
                
            </div> 
        );
    }
}

export default EmailForm;