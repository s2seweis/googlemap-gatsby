import React from 'react';
import Layout from '../components/Layout/layout';
import ClusteringComponentV1 from '../components/Maps/Clustering/ClusteringComponentV1/ClusteringComponentV1';
import ClusteringComponentV2 from '../components/Maps/Clustering/ClusteringComponentV2/ClusteringComponentV2';
import ClusteringComponentV3 from '../components/Maps/Clustering/ClusteringComponentV3';

export default function Clustering() {
    return (
        <Layout>
        <div>
            <ClusteringComponentV1 />
            <ClusteringComponentV2 />
            <ClusteringComponentV3 />
        </div>
        </Layout>
    )
}