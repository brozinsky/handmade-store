import React from 'react'
import '../AdminPanel.scss'
import { CreateProductContext } from '../../../contexts/CreateProductContext'
import CreateCategory from './CreateCategory'
import CreateColors from './CreateColors'
import CreateImages from './CreateImages'
import CreateInput from './CreateInput'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import { useMutation } from '@apollo/client'
import { ADD_PRODUCT } from '../../../queries/addProduct'

const CreateProduct = () => {
    const [createProduct,] = React.useContext(CreateProductContext);
    const [addProduct,] = useMutation(ADD_PRODUCT);
    const [createColors, setCreateColors] = React.useState([])
    const [createImages, setCreateImages] = React.useState([])

    // change syntax from array of strings ["a", "b", "c"] to Graphql type "{a, b, c}"
    React.useEffect(() => {
        if (createProduct.images.length > 0) {
            const linkArr = createProduct.images.map((image) => {
                return image.url
            })
            const imagesListed = linkArr.join(", ")
            const imagesSyntax = '{' + imagesListed + '}'
            setCreateImages(imagesSyntax)
        }
        if (createProduct.colors.length > 0) {
            const colorsListed = createProduct.colors.join(", ")
            const colorsSyntax = '{' + colorsListed + '}'
            setCreateColors(colorsSyntax)
        }
    }, [createProduct])

    const handleAdd = () => {
        if (createProduct.name === '') {
            alert('Podaj nazwę produktu')
        }
        else if (createProduct.description === '') {
            alert('Dodaj opis do produktu')
        }
        else if (createProduct.price === null) {
            alert('Podaj cenę produktu')
        }
        else if (createProduct.colors.length === 0) {
            alert('Nie wybrano kolorów')
        }
        else if (createProduct.images.length === 0) {
            alert('Nie dodano zdjęć')
        }
        else {
            addProduct({
                variables: {
                    name: createProduct.name,
                    price: createProduct.price,
                    category: createProduct.category,
                    colors: createColors,
                    images: createImages,
                }
            });
            alert(`Dodano produkt ${createProduct.name}`)
        }
    }

    return (
        <>
            <form className="form">
                <h3 className="admin-title">Dodaj nowy produkt</h3>
                <CreateInput label="Nazwa"
                    isMultiline={false}
                    isNumber={false} />
                <CreateInput label="Opis..."
                    rows={4}
                    isMultiline={true}
                    isNumber={false} />
                <div className='admin__small-wrapper'>
                    <CreateInput label="Cena"
                        isMultiline={false}
                        isNumber={true} />
                    <CreateCategory />
                </div>
                <CreateColors />
                <CreateImages />
                {/* <input className="admin-submit"
                    type="submit"
                    value="Dodaj produkt" /> */}
                <Button
                    fullWidth
                    variant="contained"
                    color="default"
                    onClick={handleAdd}
                    endIcon={<AddIcon />}
                > Dodaj Produkt
                </Button>
            </form >
        </>
    )
}

export default CreateProduct
