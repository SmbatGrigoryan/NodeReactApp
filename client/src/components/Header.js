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
              key="8"
              style={{fontSize: '15px'}}
          >
            {this.props.auth.displayName}

          </li>,
          <li
              key="1"
              style={{margin: '0 12px', fontSize: '15px'}}
          >
            <StripePayments/>
          </li>,
          <li
              key="5"
              style={{fontSize: '15px'}}
          >
            Available Credits {this.props.auth.credits}
            </li>,
          <li
              key="2"
              style={{fontSize: '15px'}}
          >
            <a href="/api/logout">Log Out</a>
          </li>
        ];
    }
  }

  render() {
    return (
        <nav className=" grey darken-2">
          <div className="nav-wrapper">
            {/*<Link*/}
                {/*to={this.props.auth ? '/surveys' : '/'}*/}
                {/*className="left brand-logo"*/}
                {/*style={{margin: '0 12px', fontSize: '18px'}}*/}
            {/*>Logo</Link>*/}
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

