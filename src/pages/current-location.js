import React from 'react';
import Layout from '../components/Layout/layout';
import CurrentLocationComponentV1 from '../components/Maps/CurrentLocation/CurrentLocationComponentV1';
import CurrentLocationComponentV2 from '../components/Maps/CurrentLocation/CurrentLocationComponentV2';

export default function CurrentLocation() {
    return (
        <Layout>
        <div>
         <CurrentLocationComponentV1/>
         <CurrentLocationComponentV2/>
        </div>
        </Layout>
    )
}