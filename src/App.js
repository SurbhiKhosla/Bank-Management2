import React from 'react';
// import AxiosT from './axio'; // Assuming the file name is AxiosT.js now
import EmploymentForm from './form'

import MainForm from './MainForm.jsx'

function App() {
    return (
        <div className="App">
            {/* <AxiosT /> */}
            <EmploymentForm />
            <MainForm/>
        </div>
    );
}

export default App;
