import React from 'react';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux'
import * as actions from '../actions/index'
import { bindActionCreators } from 'redux'

import CircularProgress from 'material-ui/CircularProgress';

/*const styles = {
    block: {
        maxWidth: 250,
    },
    radioButton: {
        marginBottom: 16,
        float:'left'
    },
};*/

class Search extends React.Component{

    constructor(props){
        super(props)

        console.log(this.props)

        this.handleChange = this.handleChange.bind(this);
        this.handleSelect = this.handleSelect.bind(this);

    }

    handleChange(event){

       // this.props.actions.stringSearch(event.target.value)
        //actions.stringSearch(event.target.value,'artist')
        this.props.actions.stringSearch(event.target.value)
        /*ici middleware */

    }

    handleSelect(event){

        //actions.typeSearch(event.target.value)
        this.props.actions.typeSearch(event.target.value)

        /*ici middleware */
    }

    render(){

        return(
            <div style={{width:'400px', margin:'0 auto'}}>
                <TextField
                    onChange={this.handleChange}
                    floatingLabelText={'Rechercher un artiste...'}
                    value={this.props.state.params.string}
            />{
                this.props.state.artistes.isFetching ? <CircularProgress size={60} thickness={7} /> : ''
            }
                <br/>
            </div>
        )

    }
}


const mapStateToProps = (state) => ({
    state : state,
})

const mapDispatchToProps = (dispatch) => ({
    actions : bindActionCreators(actions,dispatch)
})

Search = connect(mapStateToProps, mapDispatchToProps)(Search)


export default Search

