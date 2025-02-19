import React from "react";
import PropTypes from 'prop-types'

function User({ name, age, isStudent }) {
    return(
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Student: {isStudent ? 'Yes' : 'No'}</p>
        </div>
    )
};

User.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}

export default User;