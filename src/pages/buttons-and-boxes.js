import React from 'react'
import Layout from '../components/Layout/layout'
import MarkersButtonsComponent from '../components/Maps/ButtonsBoxes/MarkersButtonsComponent';
import InfoboxComponent from '../components/Maps/ButtonsBoxes/InfoboxComponent';

export default function ButtonsAndBox() {
    return (
        <Layout>
        <div>
            <MarkersButtonsComponent />
            <InfoboxComponent />
        </div>
        </Layout>
    )
}