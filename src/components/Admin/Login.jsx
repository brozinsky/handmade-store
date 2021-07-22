import React from 'react'
import './AdminPanel.scss'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import LogoMobile from '../LogoMobile'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useHistory } from "react-router-dom"
import { auth } from "../../firebase"
import { AuthContext } from '../../contexts/AuthContext'

const useStyles = makeStyles((theme) => ({
    input: {
        margin: '1rem', width: '20rem',
    },
    button: {
        marginTop: '1rem', width: '20rem', height: '3rem',
    }
}));

export const ErrorAlert = ({ setOpenAlert, openAlert, errorMessage }) => {
    const handleClose = () => {
        setOpenAlert(false);
    };

    return (
        <Dialog
            open={openAlert}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{"Wystąpił błąd"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {errorMessage}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    OK
                </Button>
            </DialogActions>
        </Dialog>
    )
}

const Login = () => {
    const classes = useStyles();
    const [openAlert, setOpenAlert] = React.useState(false);
    const [error, setError] = React.useState("")
    const [loading, setLoading] = React.useState(false)
    const [passwordInput, setPasswordInput] = React.useState('')
    const [emailInput, setEmailInput] = React.useState('')
    const history = useHistory()
    // const [currentUser, setCurrentUser] = React.useState(null);
    const [, setIsLoggedIn] = React.useContext(AuthContext)

    const onChangePassword = (e) => {
        setPasswordInput(e.target.value)
    }
    const onChangeEmail = (e) => {
        setEmailInput(e.target.value)
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    // React.useEffect(() => {
    //     auth.onAuthStateChanged(setCurrentUser)
    // }, [])

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError("")
            setOpenAlert(false)
            setLoading(true)
            setIsLoggedIn(true)
            await login(emailInput, passwordInput)
            history.push("/admin")
        } catch {
            setError("Nie udało się zalogować")
            setOpenAlert(true)
            setIsLoggedIn(false)
        }
        setLoading(false)
    }

    return (
        <>
            <div className="white-space" />
            <LogoMobile />
            {openAlert && <ErrorAlert setOpenAlert={setOpenAlert} openAlert={openAlert} errorMessage={error} />}
            <Paper>
                <h3 className="login-title">Zaloguj się</h3>
                <form className="login__wrapper"
                    onSubmit={handleSubmit}>
                    <TextField className={classes.input}
                        value={emailInput}
                        onChange={onChangeEmail}
                        label="Nazwa"
                        type="email"
                        color="primary" />
                    <TextField className={classes.input}
                        value={passwordInput}
                        onChange={onChangePassword}
                        label="Hasło"
                        type="password"
                        color="primary" />
                    <Button className={classes.button}
                        disabled={loading}
                        type="submit"
                        variant="outlined"
                        color="primary">Zaloguj</Button>
                </form>
            </Paper>
        </>
    )
}

export default Login