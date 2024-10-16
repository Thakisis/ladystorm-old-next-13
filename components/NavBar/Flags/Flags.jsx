
import styles from './Flags.module.scss'
export const Flags = ({ flag }) => {

    const flagstyles = {
        en: flag === "en" ? { opacity: 1, translate: "0px 0px" } : { opacity: 0, translate: "0px -600px" },
        es: flag === "es" ? { opacity: 1, translate: "0px 0px" } : { opacity: 0, translate: "0px -600px" },
        cs: flag === "cs" ? { opacity: 1, translate: "0px 0px" } : { opacity: 0, translate: "0px -600px" },
    }

    return (
        <svg width="21" height="14" viewBox="0 0 900 600" className={styles.flags}>
            <g id="cs" style={flagstyles.cs}>
                <rect width="900" height="600" fill="#d7141a" />
                <rect width="900" height="300" fill="#fff" />
                <path d="M 450,300 0,0 V 600 z" fill="#11457e" />
            </g>
            <g id="es" style={flagstyles.es}>
                <rect width="900" height="600" fill="#c60b1e" />
                <rect width="900" height="300" fill="#ffc400" y="150" />
            </g>
            <g id="en" style2={{ translate: "0px -600px", opacity: 1 }} style={flagstyles.en}>
                <rect
                    id="rect124"
                    fill="#000066"
                    height="600"
                    width="900"
                    y="0"
                    x="0" />
                <path
                    id="path146"
                    fill="#ffffff"
                    d="M 0.01728419,0.03741006 V 67.110935 L 799.36631,599.96349 h 100.6161 V 532.89197 L 100.63339,0.0394101 H 0.01728419 Z m 899.96512581,0 V 67.108935 L 100.63339,600 H 0.01728419 V 532.88997 L 799.36631,0.03741006 Z" /><path
                    id="path136"
                    fill="#ffffff"
                    d="M 375.00274,0.03741006 V 600 h 149.9942 V 0.03741006 Z M 0.01728419,200.0121 V 399.9868 H 900 V 200.0121 Z" /><path
                    id="path141"
                    fill="#cc0000"
                    d="m 0.01728419,240.00705 v 119.9848 H 900 V 240.00705 Z M 405.00159,0.03741006 V 600 h 89.99652 V 0.03741006 Z" /><path
                    id="path150"
                    fill="#cc0000"
                    d="M 0.01728419,600 300.00566,399.9868 h 67.07739 L 67.094687,600 Z m 0,-600 L 300.00566,200.0121 H 232.92825 L 0.01728419,44.753754 Z M 532.91663,200.0121 832.90503,0.03741006 h 67.07738 L 599.99404,200.0121 Z M 900,600 599.99404,399.9868 h 67.07738 l 232.91099,155.26033 z" />
            </g>
        </svg>
    )
}
