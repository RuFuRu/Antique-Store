import {createContext} from 'react';

interface AntiqueStoreContextInterface {
    filter: string | null | undefined,
    setFilter: React.Dispatch<React.SetStateAction<string | null | undefined>>
}

const AntiqueStoreContext = createContext<AntiqueStoreContextInterface | null>(null);

export default AntiqueStoreContext;