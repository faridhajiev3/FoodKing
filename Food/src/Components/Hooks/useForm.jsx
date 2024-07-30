import React, { useState } from 'react';

function useForm(initialState = {}) {
    const [formValue, setFormValue] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue((prev) => ({ ...prev, [name]: value }));
    };

    return {
        formValue,
        handleChange
    };
}

export default useForm;