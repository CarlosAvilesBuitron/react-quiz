import React from 'react';
import ReactDOM from 'react-dom';


let url;
let purl = 'https://www.thesca.org/conservation-quiz';
let pTitle = 'Conservation Quiz | SCA';
let imgPath = 'https://secure2.convio.net/scai/images/content/pagebuilder/LP-BG-Quiz.jpg';
let twitterVia = 'the_sca';
let desc;


let Share = {
    
    facebook: function(purl, ptitle, pimg, text) {
    url = 'http://www.facebook.com/sharer.php?s=100';
    url += '&p[title]=' + encodeURIComponent(ptitle);
    url += '&p[summary]=' + encodeURIComponent(text);
    url += '&p[url]=' + encodeURIComponent(purl);
    url += '&p[images][0]=' + encodeURIComponent(pimg);
    Share.popup(url);
    
    },
    
    twitter: function(purl, ptitle, desc) {
    url = 'http://twitter.com/share?';
    url += 'text=' + encodeURIComponent(desc);
    url += '&url=' + encodeURIComponent(purl);
    url += '&via=' + encodeURIComponent(twitterVia);
    Share.popup(url);
    },
    
    popup: function(url) {
    window.open(url,'','toolbar=0,status=0,width=626, height=436');
    }
}

class Social extends React.Component{
        
constructor(props){
        super(props);
}


    

    _facebook(e){
        
        console.log('Facebook Share');
        
        let url= "https://www.facebook.com/dialog/feed?app_id=280809855646568&ref=site&display=popup& name=The%20Student%20Conservation%20Association%20&caption=Conservation%20Quiz%20&description=Find%20out%20the%20size%20of%20your%20carbon%20footprint%20when%20you%20take%20The%20Student%20Conservation%20Association%27s%20Conservation%20QUIZ!%20&picture=https://secure2.convio.net/scai/images/content/pagebuilder/LP-BG-Quiz.jpg&link=https://www.thesca.org/conservation-quiz&redirect_uri=https://www.thesca.org/conservation-quiz";
        
         window.open(url,'','toolbar=0,status=0,width=626, height=436');
        
     
    }
    
    _twitter(e){
        
        console.log('Twitter Share');
        e.preventDefault();
        
        if(this.props.winner == 'c'){
            desc = 'Super Green: You are the poster child of conservation.';
        } else if(this.props.winner == 'b'){
            desc = 'Sort of Green: You\'re the Goldilocks of conservation.';
        } else {
           desc = 'Not so Green: Your carbon footprint is getting a little too big for its britches.'; 
        }
        
        Share.twitter(purl,pTitle, desc);
    }
    
  

    render(){
        

        return(
            <div className="col-md-12 share">
                <h2>Share your results with your friends</h2>
                <a onClick={this._facebook.bind(this)} className="facebook" ><img src="https://secure2.convio.net/scai/images/content/pagebuilder/Quiz-Facebook.png" alt="Share on Facebook"/></a>
                
                <a  onClick={this._twitter.bind(this)}  className="twitter"><img src="https://secure2.convio.net/scai/images/content/pagebuilder/Quiz-Twitter.png" alt="Share on Twitter"/></a>
            </div>
        );
    }
}

export default Social;