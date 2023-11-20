import React from 'react'
import KmlComponent from '../components/Maps/KmlComponent'
import Layout from '../components/Layout/layout'

export default function Kml() {
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
                <KmlComponent />
            </div>
        </Layout>
    )
}