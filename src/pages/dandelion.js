import React from 'react';
import { Layout } from '../Components/Layout';
import { Dandelion } from '../Components/Examples/Dandelion/dandelion';


export default () => (
    <Layout title="dandelion" disableHeader>
        <main className="container">
            <h1>Dandelion</h1>
            <Dandelion />
        </main>
    </Layout>
)