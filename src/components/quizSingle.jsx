import React from 'react';
import ReactDOM from 'react-dom';

let currentClass;

class Question extends React.Component{
        
    constructor(props){
        super(props);
    }
    
    _onChange(e){
        //Pass Data Element to the scoring function
        const {_setScore} = this.props;
        _setScore(e.target.value);
    }

    _onClickLabel(e){
        //Remove class from previous clicked button
        if(currentClass){
            currentClass.className = "inactive";
        }
        
        //Add class to current clicked button
        currentClass = e.currentTarget;
        currentClass.className = "active";
    }

    render(){
    
        return(          
            <div className="questionSingle">
                <h3>{this.props.question.headline}</h3>
                <h4>{this.props.question.subtext}</h4>
                <h3>{this.props.question.secondHeadline}</h3>
                <div className="col-md-10 col-md-offset-1">
                {
                 this.props.question.choices.map(choice => {
                  return (<label key={choice.id} onClick={this._onClickLabel.bind(this)}>
                            <input type="radio"
                                value={choice.value} 
                                name={this.props.question.id}
                                onChange={this._onChange.bind(this)}
                            />
                            <div className="row">
                                <div className="col-sm-1"><span className="value">{choice.id}</span></div>
                                <div className="col-sm-11 quizAnswerText"><span className="text-center">{choice.text}</span></div>
                             </div>
                           </label>);
                   })
                }
                </div>
            </div> 
        );
    }
}

export default Question;