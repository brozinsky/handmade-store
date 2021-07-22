import React from 'react'
import CreatePhoto from './CreatePhoto'
import { CreateProductContext } from '../../../contexts/CreateProductContext'
import { storage } from '../../../firebase'
import InputLabel from '@material-ui/core/InputLabel'
import Button from '@material-ui/core/Button'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'

const CreateImages = () => {
    const [, setCreateProduct] = React.useContext(CreateProductContext);
    const [uploadedImgs, setUploadedImgs] = React.useState([]);
    const [progress, setProgress] = React.useState(0);
    const [image, setImage] = React.useState(null)

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }

    const handleUpload = (event) => {
        event.preventDefault()
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            error => {
                console.log(error);
            },
            () => {
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        const newImgData = {
                            name: image.name,
                            url: url
                        }
                        setCreateProduct(prevState => ({ ...prevState, images: [...uploadedImgs, newImgData] }))
                        setUploadedImgs([...uploadedImgs, newImgData])
                    });
            }
        );
    };

    return (
        <div className="admin-added-img__container">
            <InputLabel>Zdjęcia:</InputLabel>
            {uploadedImgs.length > 0
                ? uploadedImgs.map((image, index) => {
                    return <CreatePhoto key={index} name={image.name} url={image.url} />
                })
                : <p className='summary__subtitle'>-- Brak dodanych zdjęć --</p>
            }
            <progress className="admin-added-img__progress" value={progress} max="100" />
            <div className="admin-added-img">
                <input type="file" onChange={handleChange} />
                <Button
                    variant="contained"
                    color="default"
                    onClick={handleUpload}
                    endIcon={<CloudUploadIcon />}
                > Dodaj
                </Button>
            </div>
        </div>
    )
}

export default CreateImages
