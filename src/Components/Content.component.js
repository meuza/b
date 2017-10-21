import React from 'react';

class Content extends React.Component {
  render() {
    const location = this.props.location;
    const params = this.props.match.params;

      var myObject = JSON.parse(JSON.stringify(location, null, 2));

      return (
      <div>
        <h2>This is {params.level}!</h2>
        <h3>this.props.location</h3>
        <p>{JSON.stringify(location)}</p>
        <h3>this.props.match</h3>
        <p>{JSON.stringify(this.props.match)}</p>
        {location.search !== "" ?
            <p>
                <strong>Query String 1:</strong>
                {JSON.stringify(location.search, null, 2)}
            </p>:null}
            {location.search !== "" ?
            <p>
                <strong>Query String 2:</strong>
              <h1>myobject.search</h1>{myObject.search}

                <br/> <h1>location.kkk</h1>{JSON.stringify(location.kkk, null, 2)}
              <h1>location.search</h1>{location.search}<br/>
              <h1>show xxx</h1>{location.xxx}
            </p>:null}

      </div>
    );
  }
}

export default Content;
