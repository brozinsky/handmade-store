import React from 'react'
import TextField from '@material-ui/core/TextField';
import { CreateProductContext } from '../../../contexts/CreateProductContext'

const CreateInput = ({ label, rows, isMultiline, isNumber }) => {
    const [, setCreateProduct] = React.useContext(CreateProductContext);

    const handleChange = (e) => {
        const newValue = e.target.value
        if (label === 'Cena') {
            setCreateProduct(prevState => ({ ...prevState, price: newValue }))
        }
        if (label === 'Nazwa') {
            setCreateProduct(prevState => ({ ...prevState, name: newValue }))
        }
        if (label === 'Opis...') {
            setCreateProduct(prevState => ({ ...prevState, description: e.target.value }))
        }
    }

    return (
        <div className={`admin-${isNumber ? 'price__wrapper' : 'input-wrapper'}`}>
            <TextField
                onChange={handleChange}
                label={label}
                multiline={isMultiline ? true : false}
                rows={rows ? rows : null}
                variant="outlined"
                type={isNumber ? 'number' : 'text'}
            />
            {isNumber
                ? <span className="admin-price__adornment">zł</span>
                : null}
        </div>

    )
}

export default CreateInput