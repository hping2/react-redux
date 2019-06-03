import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
  // must use this name, otherwise not work
  // this is same as Button.contextType = languageContext; outside if this class
  static contextType = LanguageContext;

  render() {
    const text = this.context.language === 'english' ? 'Name' : '名字';
    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    )
  }
}

export default Field;
