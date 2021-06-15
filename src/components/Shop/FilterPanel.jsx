import React from 'react'
import FilterButton from './FilterButton'

const fitlerItems = [
    { name: 'Wszystkie', cat: null },
    { name: 'Opaski', cat: 'opaski' },
    { name: 'Koszyki', cat: 'koszyki' },
    { name: 'Torebki', cat: 'torebki' },
    { name: 'Plecaki', cat: 'plecaki' },
    { name: 'Dostępne', cat: 'dostepne-od-reki' },
    { name: 'Kursy', cat: 'kursy' },
]

const FilterPanel = () => {
    return (
        <ul className="filter">
            {fitlerItems.map(({ name, cat }) => {
                return <FilterButton name={name} cat={cat} />
            })}

        </ul>
    )
}

export default FilterPanel
