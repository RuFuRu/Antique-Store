import {createContext} from 'react';

type shopProduct = {
    id: number,
    amount: number | undefined
}

interface AntiqueStoreContextInterface {
    filter: string | null | undefined,
    setFilter: React.Dispatch<React.SetStateAction<string | null | undefined>>,
    unFilter: boolean,
    setUnFilter: React.Dispatch<React.SetStateAction<boolean>>,
    shopProducts: shopProduct[],
    setShopProducts: React.Dispatch<React.SetStateAction<shopProduct[]>>,
    getOverallAmount(): number
}

const AntiqueStoreContext = createContext<AntiqueStoreContextInterface | null>(null);

export default AntiqueStoreContext;