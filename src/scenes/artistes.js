 import React from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions/index'
import { bindActionCreators } from 'redux'
import {List} from 'material-ui/List';

import ItemArtist from './itemArtist'

 class Artistes extends React.Component{

    updateArtist(s,c){
        this.props.actions.fetchArtists(s,c)
    }

    resetArtists(){
     this.props.actions.resetArtists()
    }

    componentWillReceiveProps(nextProps){
        //console.log(this.props.state.artistes.items.length > 0)
       //console.log('update',nextProps.state.params.string,this.props.state.params.string)
        if(nextProps.state.params.string.length > 2 && nextProps.state.params.string !== this.props.state.params.string){
            this.updateArtist(nextProps.state.params.string,nextProps.state.params.cat);
        }else if(nextProps.state.params.string.length < 3 && this.props.state.artistes.items.length > 0 ){
            this.resetArtists()
        }
    }

    render(){
        return(
            <div style={{width:'100%',float:'left'}}>
                    <List>
                    {
                        this.props.state.artistes.items.map((item) => <ItemArtist {...item} key={item.id} />)
                    }
                    </List>
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

Artistes = connect(mapStateToProps, mapDispatchToProps)(Artistes)

export default Artistes

