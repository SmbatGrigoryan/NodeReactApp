import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../.././utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {
  renderFields() {

        return (
        <div>
          <Field
              type="text"
              name="surveyTitle"
              component={SurveyField}
              label="Survey Title"
              key="surveyTitle"
          />
          <Field
              type="text"
              name="subject"
              component={SurveyField}
              label="Subject"
              key="subject"
          />
          <Field
              type="text"
              name="body"
              component={SurveyField}
              label="Email Body"
              key="body"
          />
          <Field
              type="text"
              name="recipients"
              component={SurveyField}
              label="Recipients List"
              key="emails"
          />
        </div>
    )
  }

  render() {
    return (
        <div>
          <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>

            {this.renderFields()}
            <Link to="/surveys" className="red btn-flat white-text">
              Cancel
            </Link>
            <button type="submit" className="teal btn-flat right white-text">
              Next
              <i className="material-icons right">done</i>
            </button>
          </form>
        </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '');

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = 'You must provide a value';
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);

