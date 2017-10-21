import React from 'react';

class Showhomework extends React.Component {
  render() {
    const location = this.props.location;
    const params = this.props.match.params;

      var myObject = JSON.parse(JSON.stringify(location, null, 2));

      return (
      <div>
        <h1>This is Show Homework Pram</h1>



        {location.search !== "" ?
            <div>
              <h2>
                the Query parameters is
              </h2>
              <p>
              {JSON.stringify(location.param, null, 2)}
              </p>
            </div>
            :null}

      </div>
    );
  }
}

export default Showhomework;
