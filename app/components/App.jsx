import React from 'react';

import uuid from 'uuid';
import Notes from './Notes';

const notes = [
    {
        id: uuid.v4(),
        task: 'Learn React'
    },
    {
        id: uuid.v4(),
        task: 'Do something'
    }
];


export default () => (
    <div>
        <button onClick={() => console.log('add note')}>+</button>
        <Notes notes={notes} />
    </div>

);