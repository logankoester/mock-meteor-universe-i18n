var React = require('react');

class T extends React.Component {
  constructor(props) {
    super(props);
    this.state = {systemlocale: '_'};
    this._invalidate = (locale) => {
    this.setState({systemlocale: locale});
    }
  };

  render() {
    return(React.createElement("span", null, this.props.children));
  };
};

module.exports = {
  'createComponent': function(){
    return(T);
  }
}
