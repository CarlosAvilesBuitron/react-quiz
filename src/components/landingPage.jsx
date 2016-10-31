import React from 'react';
import ReactDOM from 'react-dom';

class LandingPage extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
                return(
                    <div className="landingPage">
                         <div className="container">
                         
                             <div className="row lp-logo">
                                <div className="col-md-3">
                                    <a href="https://www.thesca.org">
                                        <img src="https://secure2.convio.net/scai/images/content/pagebuilder/LP-Logo-Quiz.png" alt="Logo" className="img-responsive"/>
                                    </a>
                                </div>
                             </div>
                             
                             <div className="row lp-headline">
                                <div className="col-md-12 centered">
                                    <img src="https://secure2.convio.net/scai/images/content/pagebuilder/LP-Headline-Quiz.png" alt="How Green Are You?" className="img-responsive"/>
                                </div>
                             </div>
                             
                             <div className="row lp-callout">
                               <div className="col-md-6 col-md-offset-6 callOut color-mix">
                                 <p>Find out the size of your carbon footprint when you&nbsp;take <br/>The Student Conservation Association's Conservation QUIZ!</p>
                                 <button onClick={this.props._progress.bind(this)}>Start Now</button>
                                </div>
                            </div>
  
                          </div>
                    </div>
                );
            }
}

export default LandingPage;