import { useEffect, useState } from "react";

const FetchData = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            // const res = await fetch('property.json');
            const res = await fetch('http://localhost:4000/spot');
            const data = await res.json();
            setLoading(false);
            setData(data);
        };
        fetchData() 
    },[]);

    return [data, loading]
};

export default FetchData;