const { useState, useEffect } = require("react")

const SpotList = () => {
    const useSpotFetcher = () => {
        const [spots, setSpotList] = useState(null);
        const [fetched, setFetched] = useState(false);
        const [loading, setLoading] = useState(false);

        useEffect(() => {
            console.log('hello')
            const windApiUrl = "https://vindapi.herokuapp.com/api/spots";
            setLoading(true);

            fetch(windApiUrl, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'token': 'secret',
                    'blabla': 'blabla'
                }
            })
                .then(response => {
                    if (!response.ok) {
                        setFetched(false);
                        return null;
                    }
                    return response.json()
                })
                .then(json => {
                    setLoading(false);
                    setFetched(true);
                    setSpotList(json);
                })

            console.log('spots')
        }, [])
        return [spots, loading, fetched];
    }

    const [spots, loading, fetched] = useSpotFetcher();
    const mapSpotData = () => {
        if (!fetched) return <div>No data fetched</div>;
        if (loading) return <div>Loading...</div>;
        if (!spots) {
            return <div>No Spot Data</div>;
        } else {
            return (
                <div>
                    <h1>Spots</h1>
                    <div>{JSON.stringify(spots)}</div>

                    <ul>
                        {spots.map(d => (<li key={d.spotName}>{d.spotName}</li>))}
                    </ul>

                </div>
            );
        }
    };

    return (
        <div>
            {mapSpotData()}
        </div>
    );
}
export default SpotList;