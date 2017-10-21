import React from 'react';
import { connect } from 'react-redux';
import { addCounter, delCounter } from "../actions/App.actions";
import { withRouter } from 'react-router-dom';

class Counthomework extends React.Component {
  render() {

      return (
      <div>

            <div>
              <h2>
                The Number of counter is
              </h2>
              <h2>
                  {this.props.count}
              </h2>
            </div>


      </div>
    );
  }
}


const mapStateToProps = (state) => {
    return {
        count: state.app
    };
};


export default withRouter(connect(mapStateToProps)(Counthomework));

