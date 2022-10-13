import {createContext} from 'react';

interface AntiqueStoreContextInterface {
    filter: string | undefined,
    setFilter: React.Dispatch<React.SetStateAction<string | undefined>>
}

const AntiqueStoreContext = createContext<AntiqueStoreContextInterface | null>(null);

export default AntiqueStoreContext;