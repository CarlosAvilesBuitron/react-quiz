import React from 'react';
import ReactDOM from 'react-dom';

import LandingPage from './landingPage.jsx';
import QuizPage from './quizPage.jsx';
import Footer from './footer.jsx';
import ThankYou from './thankYou.jsx';


class App extends React.Component{
    constructor(props){
        super(props);
    
    
    this.state = {
        mainProgress: 1,
        quizProgress: 1,
        answerGiven: '',
        selectA: 0,
        selectB: 0,
        selectC: 0,
        quizDone: false,
        winner: 'a',
        questions: [
            {
                id:1,
                headline: 'How long do you typically stay in the shower?',
                subtext: '',
                secondHeadline: '',
                choices: [
                    {
                        id: "A",
                        text: "I'll stay until the hot water starts turning cold.",
                        value: "a",
                    },
                    {
                        id: "B",
                        text: "I get all of the necessary parts washed as fast as I can, and then I'm done.",
                        value: "b",
                    },
                    {
                        id: "C",
                        text: "I keep the water as cold as I can stand it, and I'm in and out in under 5 minutes.",
                        value: "c",
                    }
                ]
            },
            {
                id:2,
                headline: 'When purchasing toiletry products',
                subtext: '(hairspray, deodorant, etc.)',
                secondHeadline: 'I try to...',
                choices: [
                    {
                        id: "A",
                        text: "Buy whatever looks the coolest or promises me the best results.",
                        value: "a",
                    },
                    {
                        id: "B",
                        text: "Steer clear of aerosol cans, since they can be hazardous waste if left unused.",
                        value: "b",
                    },
                    {
                        id: "C",
                        text: "Read the labels and only choose items that don't contain toxic ingredients.",
                        value: "c",
                    }
                ]
            },
            {
                id:3,
                headline: 'How often do you recycle?',
                subtext: '',
                secondHeadline: '',
                choices: [
                    {
                        id: "A",
                        text: "Pretty much never. I just don't remember.",
                        value: "a",
                    },
                    {
                        id: "B",
                        text: "About once a month I take my paper waste to the recycling bin.",
                        value: "b",
                    },
                    {
                        id: "C",
                        text: "Every day. I'm very conscious about what I'm throwing out.",
                        value: "c",
                    }
                ]
            },
            {
                id:4,
                headline: 'When I’m thirsty, I reach for...',
                subtext: '',
                secondHeadline: '',
                choices: [
                    {
                        id: "A",
                        text: "The nearest plastic water bottle because it's just convenient.",
                        value: "a",
                    },
                    {
                        id: "B",
                        text: "One of those small paper cups next to a water dispenser.",
                        value: "b",
                    },
                    {
                        id: "C",
                        text: "My favorite water container that I wash out and reuse every day.",
                        value: "c",
                    }
                ]
            },
            {
                id:5,
                headline: 'Whenever I go out shopping for groceries, I normally:',
                subtext: '',
                secondHeadline: '',
                choices: [
                    {
                        id: "A",
                        text: "Store my groceries in plastic bags and buy whatever tastes good.",
                        value: "a",
                    },
                    {
                        id: "B",
                        text: "Bring reusable bags from home and buy locally grown products, but sometimes I'll forget and just do whatever is convenient.",
                        value: "b",
                    },
                    {
                        id: "C",
                        text: "Use reusable bags no matter what, and strictly buy locally grown products stored in recycled packaging.",
                        value: "c",
                    }
                ]
            },
            {
                id:6,
                headline: "If I'm going somewhere with my friends",
                subtext: '(sporting event, movies, etc.)',
                secondHeadline: 'I like to...',
                choices: [
                    {
                        id: "A",
                        text: "Pretty much never. I just don't remember.",
                        value: "a",
                    },
                    {
                        id: "B",
                        text: "About once a month I take my paper waste to the recycling bin.",
                        value: "b",
                    },
                    {
                        id: "C",
                        text: "Every day. I'm very conscious about what I'm throwing out.",
                        value: "c",
                    }
                ]
            },
            {
                id:7,
                headline: 'When you return home from being gone for the day, what do you find?',
                subtext: '',
                secondHeadline: '',
                choices: [
                    {
                        id: "A",
                        text: "All the lights are on, as well as the radio and ceiling fan.",
                        value: "a",
                    },
                    {
                        id: "B",
                        text: "The bathroom light is on because I hurried out the door in the morning.",
                        value: "b",
                    },
                    {
                        id: "C",
                        text: "Everything is turned off. Even my computer is in sleep mode.",
                        value: "c",
                    }
                ]
            }
            
        ]
    };
}
    
    _progress(){
                this.setState({mainProgress: this.state.mainProgress + 1});
            }
            
    _setScore(score){
        this.setState({answerGiven: score});
    }
    
    _setQuizView(){
        if(this.state.quizProgress < this.state.questions.length - 1){
            document.getElementById('QuizStart').scrollIntoView();
        } else if(this.state.quizProgress == this.state.questions.length){
            document.getElementById('QuizForm').scrollIntoView();
        } else {
            document.getElementById('QuizHolder').scrollIntoView();
        }
    }
    
    _setQuizProgressNext(){
        
        

        if(this.state.quizProgress < this.state.questions.length){
            this.setState({quizProgress: this.state.quizProgress + 1});
            
            if(this.state.answerGiven == 'a'){
                this.setState({selectA: this.state.selectA + 1});
             } else if(this.state.answerGiven == 'b'){
                this.setState({selectB: this.state.selectB + 1});
             } else if(this.state.answerGiven == 'c'){
                this.setState({selectC: this.state.selectC + 1});
            }
            
            this.setState({answerGiven: ''});
            
            document.getElementById('QuizStart').scrollIntoView();
            
        } else if(this.state.quizProgress == this.state.questions.length) {
        
    
            this.setState({quizDone: true});
            
            if(this.state.selectA > this.state.selectB && this.state.selectA > this.state.selectC){
                this.setState({winner: 'a'});
            } else if (this.state.selectB > this.state.selectA && this.state.selectB > this.state.selectC){
                this.setState({winner: 'b'});
            } else if (this.state.selectC > this.state.selectA && this.state.selectC > this.state.selectB){
                this.setState({winner: 'c'});
            } else{
                this.setState({winner: 'b'});
            }
            
        }
        
    }
    
    _setQuizProgressPrevious(){
        if(this.state.quizProgress > 1){
            this.setState({quizProgress: this.state.quizProgress - 1});
        }
    }
    
    _finishForm(){
        this.setState({ mainProgress: 3});
    }
    
    render(){
        return(
            <div className="rkd-overlay-full" id="QuizHolder">
             {this.state.mainProgress == 1 && <LandingPage _progress={this._progress.bind(this)}/>}
             {this.state.mainProgress == 2 && <QuizPage 
                                                {...this.state} 
                                                _setScore={this._setScore.bind(this)}
                                                _setQuizProgressNext={this._setQuizProgressNext.bind(this)}
                                                _setQuizProgressPrevious={this._setQuizProgressPrevious.bind(this)} 
                                                _finishForm={this._finishForm.bind(this)} /> }
                                                
             {this.state.mainProgress == 3 && <ThankYou {...this.state} />}
             <Footer />
            </div>
        );
    }
}

export default App;