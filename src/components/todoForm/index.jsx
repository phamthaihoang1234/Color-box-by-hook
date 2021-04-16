import React, { useState } from 'react';
import PropTypes from 'prop-types';

// khai báo type của props
TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
    onSubmit: null
}



function TodoForm(props) {
    const {onSubmit} = props
    const [value, setValue] = useState('')
    
    function handleValueChange(e){
        console.log(e.target.value);
        setValue(e.target.value);
    }
    
    // chặn reload khi click submit
    function handleSubmit(e) {
        e.prevenDefault();
    }
    
    return (
        <form>
            <input type="text" value={value} 
            onChange={handleValueChange}
            
            />    
        
        
        </form>
    );
}

export default TodoForm;