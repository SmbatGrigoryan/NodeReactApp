import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';

const Dashboard = () => {
  return (
      <div>
        <SurveyList />

          <div
              className="fixed-action-btn blue-grey darken-1 white-text"
              style={{fontSize: '18px'}}
          >
            Initiate your own survey ....
            <Link
                to="/surveys/new"
                className="btn-floating btn-large red"
            >
              <i className="material-icons">add</i>
            </Link>
          </div>
      </div>
  );
};

export default Dashboard;