import React from 'react';
import ReactDOM from 'react-dom';
import Social from './social.jsx';

class ThankYou extends React.Component{
        
constructor(props){
        super(props);
}


    render(){
        
        let winner;
        let winnerMessage;
        let winnerBody;
        
        if(this.props.winner == 'c'){
            winner = <p>Super Green</p>;
            winnerMessage = <p>You are the poster child of conservation, so congratulations for what you're doing to minimize your carbon footprint.</p>;
            winnerBody = <p>Through your conscientious choices, you're helping and not hurting the environment. Keep up the good work, and be sure to encourage your friends to do the same when it comes to conserving and protecting our natural resources.</p>;
            
        } else if(this.props.winner == 'b'){
            winner = <p>Sort of Green</p>;
            winnerMessage = <p>You're the Goldilocks of conservation with a carbon footprint that's not too big and not too small.</p>;
            winnerBody = <p>While you’re trying to help make a difference when you can, there’s more you can do. By educating yourself, you can learn how to make a more tangible impact in the world around you. Knowledge is power!</p>;
            
        } else if(this.props.winner == 'a'){
            winner = <p>Not so Green</p>;
            winnerMessage = <p>Your carbon footprint is getting a little too big for its britches.</p>;
            winnerBody = <p>But despite that, there's good news. You can become greener! And it doesn't have to be an overwhelming process. By making small changes in your lifestyle choices -– one day at a time -- you can become greener. </p>;
        }
        
        return(
            <div className="thankYou">
                    
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
                
                <div className="container">
                    <div className="row quiz-headline color-mix-horizontal">
                          <div className="col-md-12">
                                <div className="text-center">
                                    <p>QUIZ RESULTS:</p>
                                    <h1>Here's How Green You Are...</h1>
                                </div>
                          </div>
                     </div>
                     
                     <div className="row quiz-intro">
                         <div className="col-md-12">
                            <p>Thanks for taking the Student Conservation Association's <strong>"How&nbsp;Green&nbsp;Are&nbsp;You?"</strong> Quiz. <br/>
                            <strong>Check out your results...</strong></p>
                         </div>
                     </div>
                     
                     <div className="quizBody no-pad">
                        <div className="row result-headline color-mix-horizontal no-margin">
                            <div className="col-md-12">
                                {winner}
                            </div>
                        </div>
                        
                        <div className="row result-message">
                            <div className="col-md-12">
                                {winnerMessage}
                            </div>
                        </div>
                        
                        <div className="row result-body">
                            <div className="col-md-12">
                                {winnerBody}
                            </div>
                        </div>
                        
                        <div className="row">
                            <Social {...this.props} />
                        </div>
                        
                        
                     </div>
                     
                     
                        <div className="row">
                        
                            <div className="col-sm-5">
                              <div className="donate">
                                <img src="https://secure2.convio.net/scai/images/content/pagebuilder/LP-Headline-Quiz-TY.png" className="img-responsive" alt="Make a Difference" />
                                <br/>
                                <p>No matter your green level or age, you can always do your part to help reduce carbon footprints in our world. </p>
                                <p>What's more, you can also help <strong>The Student Conservation Association</strong> (SCA) continue the work of serving our planet and helping build the next generation of conservation leaders. </p>
                                
                                <a href="http://members.thesca.org/site/Donation2?df_id=8540&8540.donation=form1" target="_blank" className="btn btn-lg button">Donate Now</a>
                                
                                <p>Each year we motivate and deploy thousands of young people (age 15 to young adults) from all 50 states and socio-economic backgrounds who care passionately about improving their natural world. </p>
                                
                                <p>You can help our SCA members make a difference across the United States as they continue protecting, enhancing, and restoring:</p>
                                
                                <ul>
                                    <li>National parks</li>
                                    <li>Marine sanctuaries</li>
                                    <li>Cultural landmarks</li>
                                    <li>Urban green spaces</li>
                                </ul>
                              </div>    
                            </div>
                            
                            <div className="col-sm-7">
                              <div className="tips">
                                <img src="https://secure2.convio.net/scai/images/content/pagebuilder/LP-Headline-Quiz-Conservation.png" alt="Conservation Tips" className="img-responsive" />
                                
                                <h2>FOOD &amp; BEVERAGES</h2>
                                <hr/>
                                <div className="clearAll"></div>
                                <ul>
                                    <li>Shop local -- as close to your neighborhood -- whenever possible. <span>When you buy your food from local food growers at farm stands or outdoor food markets, you ensure a smaller carbon footprint since the food has a shorter distance to get from its source to you.</span></li>
                                    
                                    <li>Plan out your meals for at least 5 days at a time, and try to make ingredients work for more than one meal. <span>If you’re making rice as a side dish for one meal, you can use the leftover rice when making burritos or stir-fry the next day.</span></li>
                                    
                                    <li>Instead of buying sodas in cans or plastic liter bottles, give H20 another shot! <span>Add slices of lemon or sprigs of fresh mint to give your water some extra flavor.</span></li>
                                </ul>
                                
                                <h2>RECYCLING &amp; HOME</h2>
                                <hr/>
                                <div className="clearAll"></div>
                                <ul>
                                    <li>Keep a separate bin for recyclables right next to your indoor garbage can. <span>The visual reminder will help you make good choices when throwing out trash each day.</span></li>
                                    
                                    <li>Plastic food storage containers can be washed out and reused over and over again. <span>And if you’re really serious, so can plastic, zip-top storage bags!</span></li>
                                    
                                    <li>Bring your own canvas or reusable bags with you to the store. <span>By not using the plastic shopping bags that many retailers provide, you help decrease the output of non-biodegradable materials into the environment.</span> </li>
                                    
                                    <li>Consider going paperless when it comes to your monthly bill-paying and shopping needs. <span>You can receive your receipts and bills electronically and help reduce the amount of trees being harvested at the same time.</span></li>
                                </ul>
                                
                                <h2>TRANSPORTATION</h2>
                                <hr/>
                                <div className="clearAll"></div>
                                <ul>
                                    <li>No car, no problem! <span>Whether you hop on your bicycle, you can help reduce carbon emissions while getting some great physical exercise.</span></li>
                                    
                                    <li>Group your errands into one day a week. <span>Plan out your route and try to keep your destinations as close together as possible.</span></li>
                                    
                                    <li>Consider a more fuel-efficient alternative. <span>For those of you who must use a vehicle to get around, consider swapping out your gas guzzler for a fuel-efficient hybrid or electric car. Efficiency will both lower your fuel expenses and reduce your carbon footprint! </span> </li>
                                </ul>
                               </div>    
                            </div>
                            
                        </div>
                        
                     
                     
                </div>
                 
            </div>
        );
    }
}

export default ThankYou;