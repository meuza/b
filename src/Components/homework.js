import React from 'react';
import { Route, Link } from 'react-router-dom';

import { Content } from '../Components';

class Homework extends React.Component {

    constructor(){
        super();
        this.state={
            Param : "",

        };

    }
    setParam(p){
        const param = p.target.value;
        this.setState({Param : param});
    }
    render() {
        const { match } = this.props;
        /*const { location, pattern, match, isExact } = this.props;*/
        return (
            <div>
                <h1>Reading the query parameters.</h1>
                <div>
                    <input onChange={this.setParam.bind(this)}/>
                </div>
                <div>
                    <ul>
                        <li><Link to={{pathname: "Showhomework/level4", search: '?erer:1234' , param : this.state.Param}} className="active">Submit</Link></li>
                    </ul>
                </div>
                <div className="rightContent">
                    <Route path="/Showhomework" component={Content} />
                </div>
            </div>
        );
    }
}

export default Homework;
