import React from 'react';
import { Link } from 'react-router'
import Radium from 'radium';
import { Grid, Col, Row } from 'react-bootstrap'
import Subtitle from '../SubTitle';
import globalConst from '../../globalConst';
import FaFacebookSquare from 'react-icons/lib/fa/facebook-square';
import FaTwitterSquare from 'react-icons/lib/fa/twitter-square';
import FaGooglePlusSquare from 'react-icons/lib/fa/google-plus-square';
import globalStyles from '../../globalStyle';
import Map from './Map'
// require('../global.css');


var styles = {
    wrap: {
        padding: 0
    },
    mapStyle:  {
        height: 400,
        width: '100%',
        border: 'none'
    }
}

class ContactUs extends React.PureComponent {
    render() {
        return (
            <div>
            <Grid fluid style={styles.wrap}>
                <div >
                <iframe style={styles.mapStyle} src="http://maps.google.com/maps?q=12.927923,77.627108&z=15&output=embed"></iframe>
                </div>
            </Grid>

                <Grid>
                    <Row className="ContactUs_wrapper">
                        <Col xs={12} md={6} style={globalStyles.margin10} >

                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

ContactUs = Radium(ContactUs);
export default ContactUs;