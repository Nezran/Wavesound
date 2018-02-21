import React from 'react'
import Avatar from 'material-ui/Avatar';
import Stars from 'material-ui/svg-icons/action/stars';
import {Link} from 'react-router-dom'
import {ListItem} from 'material-ui/List';

const ItemArtist = (item) => {

    return(
        <Link to={`/artists/${item.id}`}>
            <ListItem
                className='test'
                key={item.id}
                style={{width: '300px', float: 'left'}}
                primaryText={item.name}
                leftAvatar={<Avatar src={item.images.length > 0 ? item.images[0].hasOwnProperty('url') ? item.images[0].url : '' : ''}/>}
                rightIcon={(<p>{item.popularity}<Stars/></p>)}
            />
        </Link>
    )
}

export default ItemArtist