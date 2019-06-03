import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {

  renderSubmit(value) {
    return value === 'english' ? 'Submit' : '递交';
  }

  render() {
    //const text = this.context === 'english' ? 'Submit' : '递交';
    return (
      <button className="ui button primary">
        <LanguageContext.Consumer>
          {({language}) => this.renderSubmit(language)}
        </LanguageContext.Consumer>
      </button>
    )
  }
}

export default Button;
