import React from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { CreateProductContext } from '../../../contexts/CreateProductContext'

const categoryOptions = [
    { name: 'Opaski', value: 'opaski' },
    { name: 'Koszyki', value: 'koszyki' },
    { name: 'Torebki', value: 'torebki' },
    { name: 'Plecaki', value: 'plecaki' },
    { name: 'Kursy', value: 'kursy' }
]

const CreateCategory = () => {
    const [, setCreateProduct] = React.useContext(CreateProductContext);
    const [category, setCategory] = React.useState('opaski')

    const handleChange = (e) => {
        setCategory(e.target.value)
        setCreateProduct(prevState => ({ ...prevState, category: e.target.value }))
    }

    return (
        <div className='admin-category__container'>
            <InputLabel>Kategoria:</InputLabel>
            <Select
                value={category}
                onChange={handleChange}
                displayEmpty >
                {categoryOptions.map((item, index) => {
                    return <MenuItem key={index} value={item.value}>{item.name}</MenuItem>
                })}
            </Select>
        </div>
    )
}

export default CreateCategory