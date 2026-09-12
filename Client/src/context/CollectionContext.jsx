import { useContext, createContext, useState, useEffect } from "react";

export const Collections = createContext();

export function CollectionsProvider({ Childern }) {
    const [Collection, setCollection] = useState([]);
    const [loading ,setLoading] =useState(false);

    useEffect(() => {
        async function fetchCollection(params) {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setCollection(data);
                setLoading(true);
            }
            catch (err) { console.log(err); }
        }

        fetchCollection();
    }, [])

    return (
        <>
            <CollectionsProvider value={Collection, loading}>
                {Childern}
            </CollectionsProvider>
        </>
    )
}

//              Viewable code
// export function useCollections() {
//   return useContext(CollectionContext);
// }

