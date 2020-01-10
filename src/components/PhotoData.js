import React, {useState, useEffect} from 'react';
import PhotoCard from './PhotoCard';
import axios from 'axios';

import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

const H1 = styled.h1`
  color: gray;
`;

const H2 = styled.h2`
    color: green;
`;

const Div = styled.div`
    display: flex;
    flex-direction: column;
`;

const P = styled.p`
    color: blue;
`;

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
        
        <Div>
            <H1>Photo of the day:</H1>
            <H2>{photos.title}</H2>
            <PhotoCard 
                 props={photos.hdurl} />
            <P>{photos.explanation}</P>

        </Div>

    );
}