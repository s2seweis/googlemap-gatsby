import React from 'react'
import Layout from '../components/Layout/layout'
import MarkersButtonsComponent from '../components/Maps/ButtonsBoxes/MarkersButtonsComponent';
import InfoboxComponent from '../components/Maps/ButtonsBoxes/InfoboxComponent';

export default function ButtonsAndBox() {
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
            <div>
                <MarkersButtonsComponent />
                <InfoboxComponent />
            </div>
        </Layout>
    )
}