import React ,{Component} from 'react';
import Radium, { Style } from 'radium';
import  globalConst from '../globalConst';


var styles = {
  default: {
  padding: '1em', 
  borderStyle: 'solid',
  borderWidth: '2px',
  fontWeight: 600,
  textTransform: 'uppercase',
  cursor: 'pointer'
  },

    base: {
      background: 'transparent',
      borderColor: "#384d94",
      color: globalConst.themeColor,
      ':hover': {
        background: globalConst.themeColor,
        color: '#fff'
      }
    },
    filled: {
      background:  globalConst.themeColor,
      color: '#fff',
   

    }

  };

class Button extends React.Component {
    render() {
      return (
        <button style={Object.assign({}, styles.default, 
          this.props.base && styles.base,
          this.props.filled && styles.filled
          )}>
          {this.props.children}
        </button>
      );
    }
  }


Button = Radium(Button);
export default Button;