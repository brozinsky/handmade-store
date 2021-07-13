import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { PopupContext } from '../../contexts/PopupContext'

const ProductPopup = ({ name, count, color }) => {
    const [open, setOpen] = React.useContext(PopupContext);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description">
            <DialogTitle id="alert-dialog-title">
                {
                    color
                        ? "Dodano do koszyka"
                        : null
                }
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {
                        color
                            ? `${name} - ${count}szt`
                            : `Proszę wybrać kolor`
                    }
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Zamknij
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ProductPopup
