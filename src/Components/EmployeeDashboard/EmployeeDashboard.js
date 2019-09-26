import React, { Component } from 'react'
import {Link} from "react-router-dom"

import {connect} from 'react-redux'

export default class EmployeeForm extends Component { 
constructor() {
    super()
}
render() {
    return (
        <div>
            {/* {this.props.employerPost.skill1 ? <h2 className='name'>Nice {this.props.employerPost.skill1} </h2> :null} */}
            <h1>Hey</h1>
        </div>
    )
}
}

// const mapStateToProps = reduxState => {
//     return {
    
//         employerPost: reduxState.employerFormReducer.employerPost
//     }
// }

// export default connect(mapStateToProps)(EmployeeForm)
