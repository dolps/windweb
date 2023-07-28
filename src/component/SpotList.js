import { CircularProgress } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import {
    Text,
    ListItem,
    UnorderedList,
} from '@chakra-ui/react'
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
        if (!fetched) return <CircularProgress isIndeterminate color='green.300' />;
        if (loading) return <div>Loading...</div>;
        if (!spots) {
            return <div>No Spot Data</div>;
        } else {
            return (
                <div>
                    <Tabs variant='soft-rounded' colorScheme='green'>
                        <TabList>
                            {spots.map(d => (<Tab>{d.spotName}</Tab>))}
                        </TabList>
                        <TabPanels>
                            {spots.map(d => (<TabPanel>
                                <UnorderedList styleType="none">{d.windInfos.toReversed().map((wind, key) =>
                                    (<ListItem key={key}><Text textAlign={['left']}>{wind.time} {wind.speed} {wind.direction}</Text></ListItem>))}
                                </UnorderedList>
                            </TabPanel>))}
                        </TabPanels>
                    </Tabs>

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