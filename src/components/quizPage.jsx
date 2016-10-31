import React from 'react';
import ReactDOM from 'react-dom';
import Question from './quizSingle.jsx';
import EmailForm from './emailForm.jsx';

class QuizPage extends React.Component{
        
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="quizPage" id="quizPage">
                
                <div className="quizHeader">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <img src="https://secure2.convio.net/scai/images/content/pagebuilder/LP-Logo-Quiz.png" alt="Logo" className="img-responsive"/>
                                <span>The Student Conservation Association</span>
                            </div>
                        </div>
                     </div>
                </div>
            
            
               <div className="container" id="QuizStart">
                     <div className="row quiz-headline color-mix-horizontal">
                          <div className="col-md-12">
                                <div className="text-center">
                                    <h1>How Green Are You?</h1>
                                    <p>Find out the size of your carbon&nbsp;footprint!</p>
                                </div>
                          </div>
                     </div>
                     
                     <div className="row quiz-intro">
                         <div className="col-md-10 col-md-offset-1">
                            <p>Take the Student Conservation Association's simple quiz below to see what kind of impact you're having on our planet.</p>
                         </div>
                     </div>
                     
                     <div className="quizBody">
                     
                     <span className="ribbon">{this.props.quizProgress}/{this.props.questions.length}</span>
                     
                        <div className="row">

                              {
                                this.props.questions.map(question => {
                                    if(question.id == this.props.quizProgress){
                                        return <Question question={question} key={question.key} {...this.props} />
                                    }
                                })
                              }

                           </div>
                           
                           <div className="row">
                                {this.props.quizProgress != 1 && !this.props.quizDone &&
                                <button onClick={this.props._setQuizProgressPrevious.bind(this)} className="btn btn-lg prev">« Prev</button>}
                                
                                {!this.props.quizDone && <button onClick={this.props._setQuizProgressNext.bind(this)} className="btn btn-lg next">Next »</button>}
                           </div>
                           
                           {this.props.quizDone && <EmailForm {...this.props} />}
                           
                        
                     </div>
                     
                 </div>
            </div>
        );
    }
}

export default QuizPage;