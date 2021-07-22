import React from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import Chip from '@material-ui/core/Chip'
import { CreateProductContext } from '../../../contexts/CreateProductContext'
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
    divider: {
        margin: '1.3rem 0'
    }
}));

const colorsChoices = [
    { name: 'Fuksja', color: '#FC5896' },
    { name: 'Pudrowy róż', color: '#E2B9BA' },
    { name: 'Jasny łosoś', color: '#F0B19F' },
    { name: 'Biały', color: '#E1E2E7' },
    { name: 'Mocny Róż', color: '#F6445D' },
    { name: 'Burgund', color: '#593646' },
    { name: 'Cielisty', color: '#D2BAA9' },
    { name: 'Jasny beż', color: '#B9B1A8' },
    { name: 'Beż', color: '#948D72' },
    { name: 'Morski', color: '#C5C4BF' },
    { name: 'Szary', color: '#1DA59B' },
    { name: 'Brąz melanż', color: '#8E7463' },
    { name: 'Musztardowy', color: '#F0A640' },
    { name: 'Ciemnozielony', color: '#2b6a52' },
]

const CreateColors = () => {
    const classes = useStyles();
    const [createProduct, setCreateProduct] = React.useContext(CreateProductContext);
    const [availableColors, setAvailableColors] = React.useState([])
    const [hex, setHex] = React.useState([])

    const handleDelete = (e) => {
        const deleteColorName = e.target.innerText;
        const deleteColorHex = colorsChoices.find(item => item.name === deleteColorName).color.substring(1)
        const deleteColorData = {
            name: deleteColorName,
            color: deleteColorHex
        }
        const filteredHexArray = createProduct.colors.filter(
            color => color !== deleteColorHex
        )
        const filteredColorsArray = availableColors.filter(
            color => color.color !== deleteColorData.color)
        setHex(filteredHexArray)
        setCreateProduct(prevState => ({ ...prevState, colors: filteredHexArray }))
        setAvailableColors(filteredColorsArray)
    };

    const handleAdd = (e) => {
        const colorName = e.target.innerText;
        const sameColor = availableColors.find(item => item.name === colorName)

        if (!sameColor) { //check if color isn't duplicate
            const colorHex = colorsChoices.find(item => item.name === colorName).color
            const color = colorHex.substring(1)
            const newColorData = {
                name: colorName,
                color: color
            }
            setHex([...hex, color])
            setCreateProduct(prevState => ({ ...prevState, colors: [...hex, color] }))
            setAvailableColors([...availableColors, newColorData])
        }
    };

    return (
        <div className='admin-colors__container'>
            <InputLabel>Kolory</InputLabel>
            <div className='admin-colors__title'>Wybrane:</div>
            <div className={classes.root}>
                {availableColors.length > 0
                    ? availableColors.map((color, i) => {
                        return <Chip
                            key={i}
                            avatar={<div style={{
                                pointerEvents: 'none',
                                background: `#${color.color}`,
                                borderRadius: '50%'
                            }} />}
                            label={`${color.name}`}
                            onClick={handleDelete}
                            variant="outlined" />
                    })
                    : <p className='summary__subtitle'>-- Nie wybrano kolorów --</p>}
            </div>
            <Divider className={classes.divider} variant="middle" />
            <div className='admin-colors__title'>Dostępne:</div>
            <div className={classes.root}>
                {colorsChoices.map((color, i) => {
                    return <Chip
                        size="small"
                        key={i}
                        data-col={color.color}
                        avatar={<div style={{
                            pointerEvents: 'none',
                            background: `${color.color}`,
                            borderRadius: '50%'
                        }} />}
                        label={`${color.name}`}
                        onClick={handleAdd}
                    />
                })}
            </div>
        </div>
    )
}

export default CreateColors