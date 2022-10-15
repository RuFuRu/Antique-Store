import {createContext} from 'react';

interface AntiqueStoreContextInterface {
    filter: string | null | undefined,
    setFilter: React.Dispatch<React.SetStateAction<string | null | undefined>>,
    unFilter: boolean,
    setUnFilter: React.Dispatch<React.SetStateAction<boolean>>,
    numOfItems: number,
    setNumOfItems: React.Dispatch<React.SetStateAction<number>>
}

const AntiqueStoreContext = createContext<AntiqueStoreContextInterface | null>(null);

export default AntiqueStoreContext;