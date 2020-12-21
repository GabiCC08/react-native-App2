import {useState, useEffect} from 'react';
import yelp from '../api/yelp';

export default ()=> {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        console.log('Hiiiiiiiiiiiiiiiiiii');
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
        } catch (e) {
            console.log(e);
            setErrorMessage('Something wnt wrong');
        }
    }

    useEffect(() => {
        searchApi('pasta');
    }, [])

    return [searchApi, results, errorMessage];
};