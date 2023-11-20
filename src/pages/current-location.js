import React from 'react';
import Layout from '../components/Layout/layout';
import CurrentLocationComponentV1 from '../components/Maps/CurrentLocation/CurrentLocationComponentV1';
import CurrentLocationComponentV2 from '../components/Maps/CurrentLocation/CurrentLocationComponentV2';

export default function CurrentLocation() {
    return (
        <Layout>
            <a
                style={{
                    fontSize: '1.3rem',
                    padding: '5px',
                    marginLeft: '20px',
                }}
                href="javascript:history.back()"
            >
                <button type="button" className="btn btn-link">Go Back</button>
            </a>
            <div className='intro-container'>
            <div className='intro-card'>
                <CurrentLocationComponentV1 />
                <CurrentLocationComponentV2 />
            </div>
            </div>
        </Layout>
    )
}