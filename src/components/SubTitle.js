import React  from 'react';
import Radium from 'radium';

var styles = {
    default: {
        marginTop: 10,
        marginBottom: 10,
        fontWeight: 600,
        fontSize: 18,
        letterSpacing: 1,
        textTransform: 'uppercase',
    },
   
    white: {
        color: '#fff'
    }, 
    black:{
        color: '#333'
    }
}

class Title extends React.PureComponent {
    render() {
        return(
        <h4 key={1} style={[styles.default, this.props.white ? styles.white : styles.black]} className={this.props.class}>
            {this.props.children}
        </h4>   
        )
    }
}

Title = Radium(Title);
export default Title;