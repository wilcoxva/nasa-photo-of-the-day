import React from 'react';

export default function PhotoCard({props}) {
    console.log("PhotoData.js: PhotoData: props:", props)

    return (
        <img src={props}></img>
    )
}