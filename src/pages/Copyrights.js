import React from 'react'
import CopyrightsGrid from '../components/CopyrightsGrid'
import PageLayout from '../components/PageLayout'

export default function Copyrights() {
    return (
        <PageLayout>
            <div style={{ width: "90%" }}>
                <h2 className="mb-3">Copyrights</h2>
                <p className="mb-4">All mediafiles except the following are owned by the operator of this website.</p>
                <CopyrightsGrid />
            </div>
        </PageLayout>

    )
}
