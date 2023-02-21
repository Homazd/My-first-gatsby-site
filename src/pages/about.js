import * as React from 'react'
import { Link } from 'gatsby'
import { Index} from "../components/Layout";


const AboutPage = () => {
    return (
        <Index pageTitle="About me">
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
        </Index>
    )
}

export const Head = () => <title>About Me</title>
export default AboutPage