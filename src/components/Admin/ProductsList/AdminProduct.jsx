import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({
    accordion: {
        margin: '0.5rem 0'
    },
    delete: {
        width: 35,
    },
}));

const AdminProduct = ({ name, price, colors, images, description }) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleDelete = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Potwierdzenie usunięcia"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Zatwierdzenie spowoduje nieodwracalne usunięcie tego produktu.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleClose}
                        color="primary">
                        Wróć
                    </Button>
                    <Button
                        onClick={handleClose}
                        color="primary" autoFocus>
                        Usuń
                    </Button>
                </DialogActions>
            </Dialog>
            <Accordion >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <List dense={false}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar variant="rounded" >
                                    {<img className="admin-added-img__img"
                                        src={`${images[0]}`}
                                        alt="uploaded-placeholder" />
                                    }
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={name}
                            />
                        </ListItem>
                    </List>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="admin__details">
                        <div className="admin__details-item"><strong>Nazwa:</strong>{name} </div>
                        <div className="admin__details-item"><strong>Cena:</strong> {price.toFixed(2)} zł</div>
                        <div className="admin__details-item"><strong>Opis:</strong> {description}</div>
                        <Accordion className={classes.accordion}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}>
                                <div>Kolory ({colors.length}) </div>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="admin__details-colors">
                                    {colors.map((color, i) => {
                                        return <div className="admin__details-color"
                                            style={{ backgroundColor: `#${color}` }}></div>
                                    })}
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className={classes.accordion}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}>
                                <div>Zdjęcia ({images.length}) </div>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="admin__details-img-wrap">
                                    {images.map((image) => {
                                        return <img src={image} alt={image} />
                                    })}</div>
                            </AccordionDetails>
                        </Accordion>
                        <div className="admin__details-btn-row">
                            <div className="admin__details-btn">
                                <Button
                                    variant="outlined"
                                    color="default"
                                    endIcon={<EditIcon />}>Edytuj</Button>
                            </div>
                            <IconButton
                                onClick={handleDelete}
                                className={classes.delete}
                                aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>
        </>
    )
}

export default AdminProduct
