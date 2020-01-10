import React from 'react';

import styled from "styled-components";

const Image = styled.div`
    display: flex;
    justify-content: center;
`;

const Img = styled.img`
    height: 50%;
    width: 50%;
`;

export default function PhotoCard({props}) {
    console.log("PhotoData.js: PhotoData: props:", props)

    return (
        <Image><Img alt={"NASA Photo"} src={props}></Img></Image>
    )
}