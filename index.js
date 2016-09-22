React = require('react');
query = require('dot-prop');

defaultLanguage = {};

class Language {
  constructor(data) {
    this.data = data;
  }

  get(key) {
    return(query.get(this.data, key, key));
  }
};

class T extends React.Component {
  constructor(props) {
    super(props);
    this.state = {systemlocale: '_'};
    this._invalidate = (locale) => {
    this.setState({systemlocale: locale});
    }
  };

  render() {
    var result = defaultLanguage.get(this.props.children);
    return(React.createElement("span", null, result));
  };
};

i18n = {
  'createComponent': function(){
    return(T);
  },
  '__': function(key){
    return(defaultLanguage.get(key));
  }
}

module.exports = function(data) {
  defaultLanguage = new Language(data);
  return i18n;
}
