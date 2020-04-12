import React, { Component } from 'react'

// import * as ACTION_TYPES from './store/actions/action_types';
import * as ACTIONS from './store/actions/actions';

import { connect } from 'react-redux'

const user_text = "User text girildi!"


class Container1 extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.userText ? this.props.userText : "HELLOOOOO"}</h1>
                <h2>User Login mi? : {this.props.stateProp1 ? "Evet" : "Hayır"}</h2>
                <button onClick={() => console.log(this.props)}>Get State</button>
                <button onClick={() => this.props.action1()}>Dispatch Action 1</button>
                <button onClick={() => this.props.action2()}>Dispatch Action 2</button>
                <button onClick={() => this.props.acCreator1()}>Create 1</button>
                <button onClick={() => this.props.acCreator2()}>Create 2</button>
                <button onClick={() => this.props.acCreator3(user_text)}>BAŞLIK OLUŞTUR</button>
                <button onClick={() => this.props.acCreator3("")}>BAŞLIK SİL</button>
            </div>
        )
    }
}

function mapStateToProps ( state ) {
    return {
        stateProp1 : state.Reducer1.stateProp1,
        userText: state.Reducer2.userText
    }
}

function mapDispatchToProps ( dispatch ) {
    
    return {
        action1: () => dispatch(ACTIONS.SUCCESS),
        action2: () => dispatch(ACTIONS.FAILURE),
        acCreator1: () => dispatch(ACTIONS.success()),
        acCreator2: () => dispatch(ACTIONS.failure()),
        acCreator3: (text) => dispatch(ACTIONS.userText(text)),
    }
}

export default  connect(mapStateToProps, mapDispatchToProps) (Container1);