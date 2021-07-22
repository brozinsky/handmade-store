import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import DeleteIcon from '@material-ui/icons/Delete';
import ImageIcon from '@material-ui/icons/Image';

const AddedPhoto = ({ name, url }) => {
    return (
        <List dense={false}>
            <ListItem className="admin-added-img__wrap">
                <ListItemAvatar>
                    <a className="admin-added-img__link" href={url}>
                        <Avatar variant="rounded" >
                            {url ?
                                <img className="admin-added-img__img"
                                    src={url || "http://via.placeholder.com/300"}
                                    alt="uploaded-placeholder" />
                                : <ImageIcon />
                            }

                        </Avatar>
                    </a>
                </ListItemAvatar>
                <ListItemText
                    primary={name}
                    secondary='Dodano pomyślnie' />
                <DeleteIcon />
            </ListItem>
        </List>
    )
}

export default AddedPhoto