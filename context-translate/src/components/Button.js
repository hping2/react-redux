import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {

  // must use this name, otherwise not work
  // this is same as Button.contextType = languageContext; outside if this class
  //static contextType = LanguageContext;

  render() {
    //const text = this.context === 'english' ? 'Submit' : '递交';
    return (
      <button className="ui button primary">
        <LanguageContext.Consumer>
          {(value) => value === 'english' ? 'Submit' : '递交'}
        </LanguageContext.Consumer>
      </button>
    )
  }
}

export default Button;
