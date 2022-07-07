import { BrowserRouter } from 'react-router-dom';
import ManuList from './ManuList';

const mockManus = [
    {
        id: 1,
        name: "August Storck KG",
        country: "DE",
        products: [
            {
                id: 1,
                name: "Mamba",
                yearIntroduced: "1953-01-01",
                manufacturerId: 1
            }
        ]
    },
    {
        id: 2,
        name: "Cadbury",
        country: "UK",
        products: [
            {
                id: 2,
                name: "Caramello",
                yearIntroduced: "1976-01-01",
                manufacturerId: 2
            }
        ]
    }
]

const mockManuList = () => {
    return (
        <BrowserRouter>
            <ManuList filteredManuArray={mockManus} />
        </BrowserRouter>
    )
}

export default mockManuList