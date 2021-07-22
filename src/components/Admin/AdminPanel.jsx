import React from 'react'
import './AdminPanel.scss'
import CreateProduct from './CreateProduct/CreateProduct'
import ProductsList from './ProductsList/ProductsList'
import { CreateProductProvider } from '../../contexts/CreateProductContext'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import AddIcon from '@material-ui/icons/Add'
import ListIcon from '@material-ui/icons/List'
import EditIcon from '@material-ui/icons/Edit'
import LockIcon from '@material-ui/icons/Lock'
import { AuthContext } from '../../contexts/AuthContext'

const AdminPanel = () => {
    const [activeTab, setActiveTab] = React.useState(0)
    const [, setIsLoggedIn] = React.useContext(AuthContext)

    const handleChange = (event, newValue) => {
        setActiveTab(newValue)
    }

    const handleLogout = () => {
        setIsLoggedIn(false)
    }

    return (
        <div className="admin__wrapper">
            <Tabs
                value={activeTab}
                onChange={handleChange}
                variant="fullWidth"
                indicatorColor="primary"
                textColor="primary">
                <Tab icon={<ListIcon />} label="Lista" />
                <Tab icon={<AddIcon />} label="Dodaj" />
                <Tab icon={<EditIcon />} label="Edytuj" />
                <Tab
                    onClick={handleLogout}
                    icon={<LockIcon />} label="Wyloguj" />
            </Tabs>
            {activeTab === 0
                ? <ProductsList />
                : <CreateProductProvider>
                    <CreateProduct />
                </CreateProductProvider>
            }
        </div>
    )
}

export default AdminPanel