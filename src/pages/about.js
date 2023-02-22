import * as React from 'react'
import { Layout} from "../components/Layout/index";


const AboutPage = () => {
    return (
        <Layout className="about">
            <h3>Watch the Jabs</h3>
            <p>
                Our primary objective is to bring live boxing matches to fans all around
                the world
            </p>

            <h3>Its not About the Fights Alone!</h3>
            <p>
                We also air documentaries specially made for the greats, lifestyle of
                boxers, news, and more.
            </p>
        </Layout>
    )
}

export const Head = () => <title>About Me</title>
export default AboutPage