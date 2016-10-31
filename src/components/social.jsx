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
        
        e.preventDefault();
        
        if(this.props.winner == 'a'){
            desc = 'Super Green: You are the poster child of conservation, so congratulations for what you\'re doing to minimize your carbon footprint.';
        } else if(this.props.winner == 'b'){
            desc = 'Sort of Green: You\'re the Goldilocks of conservation with a carbon footprint that\'s not too big and not too small.';
        } else {
           desc = 'Not so Green: Your carbon footprint is getting a little too big for its britches.'; 
        }
        
        Share.facebook(purl,pTitle,imgPath,desc);
    }
    
    _twitter(e){
        
        
        e.preventDefault();
        
        if(this.props.winner == 'a'){
            desc = 'Super Green: You are the poster child of conservation.';
        } else if(this.props.winner == 'b'){
            desc = 'Sort of Green: You\'re the Goldilocks of conservation.';
        } else {
           desc = 'Not so Green: Your carbon footprint is getting a little too big for its britches.'; 
        }
        
        Share.twitter(purl,pTitle, desc);
    }
    
    //onClick={this._facebook.bind(this)}

    render(){
        

        return(
            <div className="col-md-12 share">
                <h2>Share your results with your friends</h2>
                <a  onClick={this._facebook.bind(this)} href="http://www.google.com" className="facebook" ><img src="https://secure2.convio.net/scai/images/content/pagebuilder/Quiz-Facebook.png" alt="Share on Facebook"/></a>
                <a  onClick={this._twitter.bind(this)}  className="twitter"><img src="https://secure2.convio.net/scai/images/content/pagebuilder/Quiz-Twitter.png" alt="Share on Twitter"/></a>
            </div>
        );
    }
}

export default Social;