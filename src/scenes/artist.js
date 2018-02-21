import React from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions/index'
import { bindActionCreators } from 'redux'
import Chip from 'material-ui/Chip';
import {GridList, GridTile} from 'material-ui/GridList';
import Badge from 'material-ui/Badge';
import FlatButton from 'material-ui/FlatButton';
import moment from 'moment'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import Album from 'material-ui/svg-icons/av/album';
import Mic from 'material-ui/svg-icons/av/mic';
import Loop from 'material-ui/svg-icons/av/loop';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';


moment.locale('fr')

const styles = {
    chip: {
        margin: 4,
    },
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    root: {
        textAlign:'center',
        margin:'0 auto',
        paddingBottom:'20px'
    },
    gridList: {
        width: '100%',
        height: 'auto',
        overflowY: 'auto',
    },
    radioButton:{
        float:'left',
        display:'inline-block',
        width:'150px'
    },
    sep:{
        width: '100%',
        float: 'left',
        height: '1px',
    }
};

class Artist extends React.Component{

    componentWillMount() {
        let id = this.props.match.params.id;
        this.props.actions.fetchArtist(id)
        this.props.actions.fetchArtistAlbums(id)
        this.onChangeSelect = this.onChangeSelect.bind(this);
    }

    onChangeSelect(event){
        console.log(event.target.value)
        this.props.actions.fetchArtistAlbums(this.props.match.params.id,event.target.value)
    }

    render(){

        const artist = this.props.state.artist.artist;
        const albums = this.props.state.artist.albums;

        return(
            <div style={{width:'100%',float:'left'}}>
                {
                    Object.keys(artist).length === 0 ? '' : (
                        <div>
                            <h1>{artist.name}</h1>
                            <FlatButton
                                href={artist.external_urls.spotify}
                                label="Lien Spotify"
                                labelPosition="before"
                                target="_blank"
                                containerElement="label"
                                backgroundColor="#a4c639"
                            />
                            <div style={styles.wrapper}>
                                {
                                    artist.genres.map((genre) => <Chip style={styles.chip} key={genre} >{genre}</Chip>)
                                }
                                <div style={styles.sep}></div>
                                <div style={styles.root}>
                                    <h3>
                                        <Badge
                                            badgeContent={albums.length}
                                            primary={true}
                                        >
                                             Albums
                                        </Badge>
                                    </h3>
                                    <RadioButtonGroup name="shipSpeed" defaultSelected="album" onChange={this.onChangeSelect}>
                                        <RadioButton
                                            value="single"
                                            label="Titre"
                                            style={styles.radioButton}
                                            checkedIcon={<Mic style={{color: '#F44336'}} />}
                                            uncheckedIcon={<Mic />}
                                        />
                                        <RadioButton
                                            value="album"
                                            label="Album"
                                            style={styles.radioButton}
                                            checkedIcon={<Album style={{color: '#F44336'}} />}
                                            uncheckedIcon={<Album />}
                                        />
                                        <RadioButton
                                            value="compilation"
                                            label="Compilation"
                                            style={styles.radioButton}
                                            checkedIcon={<Loop style={{color: '#F44336'}} />}
                                            uncheckedIcon={<Loop />}
                                        />
                                        <RadioButton
                                            value="appears_on"
                                            label="Apparaît sur"
                                            checkedIcon={<ActionFavorite style={{color: '#F44336'}} />}
                                            uncheckedIcon={<ActionFavoriteBorder />}
                                            style={styles.radioButton}
                                        />
                                    </RadioButtonGroup>
                                </div>

                                <GridList
                                        cellHeight={200}
                                        cols={4}
                                        style={styles.gridList}
                                    >
                                        {albums.map((album) => (
                                            <GridTile
                                                key={album.id}
                                                title={album.name}
                                                subtitle={<span>Paru le <b>{moment(album.release_date).format("DD MMMM YYYY")}</b></span>}
                                            >
                                                <img src={album.images[0].url} alt={'couverture album'} />
                                            </GridTile>
                                        ))}
                                    </GridList>
                            </div>
                        </div>
                    )
                }

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

Artist = connect(mapStateToProps, mapDispatchToProps)(Artist)


export default Artist

