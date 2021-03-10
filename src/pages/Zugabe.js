import React from 'react'
import PageLayout from '../components/PageLayout'
import { ProjectReport } from '../components/ProjectReport'


export default function Zugabe() {
    return (
        <PageLayout>
            <ProjectReport>
                <ProjectReport.Header>
                    <ProjectReport.Title>
                        ZUGABE
                    </ProjectReport.Title>
                    <ProjectReport.Subtitle>
                        My master thesis project
                    </ProjectReport.Subtitle>
                </ProjectReport.Header>
            </ProjectReport>
        </PageLayout>
    )
}
