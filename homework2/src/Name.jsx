import React, { useState, useEffect } from 'react';

const Name = () => {
    const [value, setValue] = useState(''); 
    const [names, setNames] = useState(() => {
        const text = localStorage.getItem('names');
        return text ? JSON.parse(text) : [];
    });

    useEffect(() => {
        if (names.length > 0) {
            localStorage.setItem('names', JSON.stringify(names));
        }
    }, [names]);

    const addName = () => {
        if (value.trim()) {
            setNames([
                {
                    id: Math.random(),
                    text: value, 
                    complete: false,
                    delete: false,
                    isEdit: false
                },
                ...names 
            ]);
            setValue(''); 
        }
    };

    return (
        <div>
            <div className="container">
                <input 
                    type="text" 
                    value={value} 
                    onChange={(e) => setValue(e.target.value)} 
                />
                <button onClick={addName}>Add name</button>
            </div>
            <div>
                {names.map(name => (
                    <div key={name.id}>
                        {name.text}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Name;
