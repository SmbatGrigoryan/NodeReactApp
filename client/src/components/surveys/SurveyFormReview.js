import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
//import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../.././actions';


const SurveyFormReview = ( {onCancel, formValues, submitSurvey, history} ) => {
          //console.log(formValues.surveyTitle);

  return (
      <div>
        <h3>Confirm your entries</h3>
        <div>
          <label>Survey Titlle </label>
          <div>{formValues.surveyTitle}</div>
        </div>
        <div>
          <label>Subject</label>
          <div>{formValues.subject}</div>
        </div>
        <div>
          <label>Email Body </label>
          <div>{formValues.body}</div>
        </div>
        <div>
          <label>Recipients List </label>
          <div>{formValues.recipients}</div>
        </div>

        <button
            onClick={onCancel}
            className="yellow darken-2 btn-flat left white-text"
        >Back</button>

        <button
            onClick={() => submitSurvey(formValues, history)}
            className="green darken-2 btn-flat right white-text"
        >
          Send Survey
          <i className="material-icons right">email</i>
        </button>

      </div>

  );
};

function mapStateToProps(state) {
          //console.log('state.form.surveyForm.values' ,state.form.surveyForm.values);
  return { formValues: state.form.surveyForm.values };
}

export default connect (mapStateToProps, actions)
    (withRouter(SurveyFormReview));

