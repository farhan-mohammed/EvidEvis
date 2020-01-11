import React, { Component } from 'react'
import {Link} from "react-router-dom"
export default class Welcome extends Component {
    constructor(props){
        super(props);
        this.state={numSavedProfiles:0}
    }
    componentDidMount(){
        // Make an API call here to call the the number of profiles.
        // t = t.get()
        // this.setState({numSavedProfiles:t})
    }

    renderProfileButton =()=>{
        if (!this.state.numSavedProfiles===0){
            return (

                <Link to="/savedprofiles"><div className="welSelector__View welSelector_Button">View Saved Profiles</div></Link>

            )
        }
    }
    render() {
        return (
            <div className="wel">
                <h1>Welcome to <span className="header-title">Evid<span className="header-title_">Evis</span></span>!</h1>
                <div className="welSelector">
                    <Link to="/setup"><div className="welSelector__Setup welSelector_Button">Create a setup</div></Link>
                    {this.renderProfileButton()}
                </div>
                
            </div>
        )
    }
}
