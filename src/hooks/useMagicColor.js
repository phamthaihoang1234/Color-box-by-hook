import React, { useEffect, useState } from 'react';


function randomColor() {
    const COLOR_LIST = ['red', 'green','yellow'];
    //random 0 -> 2
    const randomIndex = Math.trunc(Math.random() *3);

    console.log(COLOR_LIST[randomIndex]);
    return COLOR_LIST[randomIndex];
}
function useMagicColor(props) {
    const [color, setColor] = useState('transparent');

    // change color every 1 second
    useEffect(() => {
        const colorInterval = setInterval(() => {
                const newColor = randomColor();
                setColor(newColor);
        },1000);

        return () => {
            clearInterval(colorInterval);
        }
    }, []);

    return color;

}

export default useMagicColor;