import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useClock from '../../hooks/useClock';




function BetterClock() {
     const {timeString} = useClock();



    return (
        <p style={{ fontSize: '42px' }}> {timeString} </p>
    );
}

export default BetterClock;