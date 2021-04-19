import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';


Clock.propTypes = {
    
};

function formatData(date) {
    const hours = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const seconds = `0${date.getSeconds()}`.slice(-2);
    return `${hours}:${minutes}:${seconds}`;
}

function Clock(props) {
     const [timeString, setTimeString] = useState('');
    

     //  mỗi lần sau mỗi giây thì nó cập nhật cái timeString
    useEffect(() => {
        // sau mỗi giây nó sẽ làm một cái gì đó
        setInterval(() =>{
            // lấy thời gian hiện tại
            const now = new Date();
           
            // biến một object date thành chuỗi giờ phút giây
            const newTimeString = formatData(now);
            
            setTimeString(newTimeString);
        }, 1000)
    }, [])


    // //  mỗi lần sau mỗi giây thì nó cập nhật cái timeString
    // useEffect(() => {
    //     // sau mỗi giây nó sẽ làm một cái gì đó
    //     setInterval(() =>{
    //         // lấy thời gian hiện tại

    //         const now = new Date();
    //         // biến một object date thành chuỗi giờ phút giây

    //         const newTimeString = formatData(now);
            
    //         setTimeString(newTimeString);
    //     }, 1000)
    // }, [])
    
    
    return (
        <p style={{fontSize: '42px'}}>{timeString}</p>
    );
}

export default Clock;