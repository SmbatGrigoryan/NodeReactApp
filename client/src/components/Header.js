import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import StripePayments from './StripePayments';

class Header extends Component {

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;

      case false:
        return <li><a href="/auth/google">Login With Google</a></li>;

      default:
        return [
          <li
              key="5"
              style={{fontSize: '15px'}}
          >
            Available Credits {this.props.auth.credits}
            </li>,
          <li
              key="1"
              style={{margin: '0 12px', fontSize: '15px'}}
          >
            <StripePayments/>
          </li>,
          <li
              key="2"
              style={{fontSize: '15px'}}
          >
            <a href="/api/logout">Log Out</a>
          </li>
        ];
        // {/*<li><StripePayments/></li>,*/}

    }
  }

  render() {
    //console.log('frome HEADER --->', this.props);

    return (
        <nav className=" grey darken-2">
          <div className="nav-wrapper">

            <a href="#" className="left brand-logo">Logo</a>
            <Link
                to={this.props.auth ? '/surveys' : '/'}
                className="left brand-logo"
            >Logo</Link>
            <ul id="nav-mobile" className="right">
              {this.renderContent()}
            </ul>
          </div>
        </nav>
    );
  }
}

function mapStateToProps({auth}) {
  return {auth};
}

export default connect(mapStateToProps)(Header);

