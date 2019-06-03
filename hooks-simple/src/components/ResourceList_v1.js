import React, {useState, useEffect} from 'react';
import axios from 'axios';

const ResourceList = ({ resource }) => {
    const [resources, setResources] = useState([]);
    
    const fetchResource = async () => {

        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
        
        setResources(response.data);
    }

    useEffect(() => {
        fetchResource(resource);
    }, [resource])

    return (
        <ul>
            {resources.map(record => <li>{record.title}</li>)}
        </ul>
    )
}

export default ResourceList;
