function Logo({ size }) {
    if (size === undefined) {
        size = '24'
    }

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 105.09 104.01">
            <defs>
                <style>.cls-1{'{'}fill:none;stroke:#1d1d1b;stroke-miterlimit:10;stroke-width:5px;{'}'}</style></defs>
            <g id="Слой_2" data-name="Слой 2">
                <g id="Слой_1-2" data-name="Слой 1">
                    <path className="cls-1" d="M99.73,28V77.18a22.31,22.31,0,0,1-2.08,9.46A48.91,48.91,0,0,0,53.71,53.75,48.91,48.91,0,0,0,85.19,98.27a22.48,22.48,0,0,1-8,1.47H28a22.41,22.41,0,0,1-9.48-2.09A48.88,48.88,0,0,0,51.39,53.7a48.88,48.88,0,0,0-45,30,22.6,22.6,0,0,1-1-6.52V28a22.41,22.41,0,0,1,2.09-9.48,48.91,48.91,0,0,0,44,32.91,48.89,48.89,0,0,0-30-45A22.39,22.39,0,0,1,28,5.4H77.17a22.38,22.38,0,0,1,8,1.48,48.84,48.84,0,0,0-31.5,44.56,48.87,48.87,0,0,0,45.06-30A22.24,22.24,0,0,1,99.73,28Z" />
                    <path className="cls-1" d="M51.44,51.39a48.91,48.91,0,0,1-44-32.91A48.69,48.69,0,0,1,4.83,2.62,48.68,48.68,0,0,1,21.46,6.35,48.89,48.89,0,0,1,51.44,51.39Z" />
                    <path className="cls-1" d="M102.54,3.7a48.58,48.58,0,0,1-3.77,17.75,48.87,48.87,0,0,1-45.06,30A48.85,48.85,0,0,1,102.54,3.7Z" />
                    <path className="cls-1" d="M51.39,53.7a48.88,48.88,0,0,1-32.92,44A48.63,48.63,0,0,1,2.62,100.3,48.51,48.51,0,0,1,6.35,83.71h0A48.88,48.88,0,0,1,51.39,53.7Z" />
                    <path className="cls-1" d="M100.29,101.39A48.79,48.79,0,0,1,53.71,53.75a48.81,48.81,0,0,1,46.58,47.64Z" />
                </g></g>
        </svg>
    )
}
export default Logo;