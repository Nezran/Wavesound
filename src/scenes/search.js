import React from 'react';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux'
import * as actions from '../actions/index'
import { bindActionCreators } from 'redux'
import CircularProgress from 'material-ui/CircularProgress';

class Search extends React.Component{

    constructor(props){
        super(props)

        this.handleChange = this.handleChange.bind(this);
        this.handleSelect = this.handleSelect.bind(this);

    }

    handleChange(event){
        this.props.actions.stringSearch(event.target.value)
    }

    handleSelect(event){
        this.props.actions.typeSearch(event.target.value)
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

