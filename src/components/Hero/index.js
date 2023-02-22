import * as React from "react";
import { Link } from "gatsby"
import { hero, introText, hear, connecting, stand1, stand1} from "./index.module.css"
export const Hero = () => {
    return (
        <section className={hero}>
            <div className={introText}>
                <h1>
                    <span className={hear}> You can Hear the Jabs </span> <br/>
                    <span className={connecting}>Connecting</span>
                </h1>
                <p>
                    An online streaming platform for boxing matches <br/>
                    We also dedicate some special time to throwbacks cuz old is gold
                </p>
                <Link className={btn red} to="#">Learn More</Link>
                <Link className={btn blue} to="#">Subscribe</Link>
            </div>
            <div className="i-frame">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/sUmM_PFpsvQ"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
                <div className={stand1}></div>
                <div className={stand2}></div>
            </div>
        </section>
    )
}