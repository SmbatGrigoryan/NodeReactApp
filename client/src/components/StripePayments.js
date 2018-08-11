import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class StripePayments extends Component {
  render() {
    return (
        <StripeCheckout
            name="Payment for services"
            description="$10 per 10 emails"
            amount={0}
            token={(token) => {
              console.log(token);
               return this.props.handleToken(token);
            }}
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
        >

          <button className="btn">
            Add Credit
          </button>
        </StripeCheckout>
    );
  }
}

export default connect(null, actions)(StripePayments);
