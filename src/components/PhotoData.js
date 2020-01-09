import React, {useState, useEffect} from 'react';
import PhotoCard from './PhotoCard';
import axios from 'axios';

export default function PhotoData() {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        axios 
        .get('https://api.nasa.gov/planetary/apod?api_key=QEtDrUv2PAbmlfQhFzHvJb7rTH682hSxiGmaBYXA')
        .then((res) => {
            console.log(res.data)
            setPhotos(res.data)
        })
        .catch("There was an error")
    }, [])

    return(
        
        <div>
            <h1>Photo of the day:</h1>
            <h2>{photos.title}</h2>
            <PhotoCard 
                 props={photos.hdurl} />
            <p>{photos.explanation}</p>

        </div>

    );
}