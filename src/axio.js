// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// function AxiosT() {
//     const [data, setData] = useState(null);
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('https://api.everythinglocation.com/address/complete', {
//                     params: {
//                         lqtkey: 'CR85-FA39-TY63-BB53',
//                         query: '999 bak',
//                         country: 'USA'
//                     }
//                 });
//                 setData(response.data); // Set the fetched data into state
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };
//         fetchData();
//     }, []);
//     return (
//         <div>
//             {data ? (
//                 <div>
//                     <h2>Addresses:</h2>
//                     <ul>
//                         {data.output.map((address, index) => (
//                             <li key={index}>{address}</li>
//                         ))}
//                     </ul>
//                 </div>
//             ) : (
//                 <p>Loading...</p>
//             )}
//         </div>
//     );
// }
// // export default AxiosT;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// function AxiosT() {
//     const [query, setQuery] = useState(''); // State to hold the input query
//     const [data, setData] = useState(null); // State to hold fetched data
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('https://api.everythinglocation.com/address/complete', {
//                     params: {
//                         lqtkey: 'CR85-FA39-TY63-BB53',
//                         query: query,
//                         country: 'USA'
//                     }
//                 });
//                 setData(response.data); // Set the fetched data into state
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };
//         if (query.trim() !== '') {
//             fetchData();
//         }
//     }, [query]); // Fetch data whenever query state changes
//     const handleInputChange = (event) => {
//         setQuery(event.target.value); // Update query state as user types
//     };
//     return (
//         <div>
//             <input
//                 type="text"
//                 placeholder="Type an address..."
//                 value={query}
//                 onChange={handleInputChange}
//             />
//             {data ? (
//                 <div>
//                     <h2>Suggested Addresses:</h2>
//                     <ul>
//                         {data.output.map((address, index) => (
//                             <li key={index}>{address}</li>
//                         ))}
//                     </ul>
//                 </div>
//             ) : (
//                 <p>No suggestions yet...</p>
//             )}
//         </div>
//     );
// }
// export default AxiosT;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './axio.css'; // Import CSS file
// function AxiosT() {
//     const [query, setQuery] = useState(''); // State to hold the input query
//     const [data, setData] = useState(null); // State to hold fetched data
//     const [selectedAddress, setSelectedAddress] = useState(''); // State to hold selected address
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('https://api.everythinglocation.com/address/complete', {
//                     params: {
//                         lqtkey: 'CR85-FA39-TY63-BB53',
//                         query: query,
//                         country: 'USA'
//                     }
//                 });
//                 setData(response.data); // Set the fetched data into state
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };
//         if (query.trim() !== '') {
//             fetchData();
//         }
//     }, [query]); // Fetch data whenever query state changes
//     const handleInputChange = (event) => {
//         setQuery(event.target.value); // Update query state as user types
//     };
//     const handleAddressClick = (address) => {
//         setSelectedAddress(address); // Set selected address on click
//     };
//     return (
//         <div className="input-container">
//             <input
//                 type="text"
//                 placeholder="Type an address..."
//                 value={query}
//                 onChange={handleInputChange}
//                 className="input-field"
//             />
//             {data ? (
//                 <div className="suggestions-container">
//                     {data.output.map((address, index) => (
//                         <div
//                             key={index}
//                             onClick={() => handleAddressClick(address)}
//                             className={`suggestion ${address === selectedAddress ? 'selected' : ''}`}
//                         >
//                             {address}
//                         </div>
//                     ))}
//                 </div>
//             ) : null}
//             {selectedAddress && (
//                 <div className="selected-address">
//                     <h3>Selected Address: {selectedAddress}</h3>
//                 </div>
//             )}
//         </div>
//     );
// }
// export default AxiosT;



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './axio.css'; // Import CSS file

function AxiosT() {
    const [query, setQuery] = useState(''); // State to hold the input query
    const [data, setData] = useState(null); // State to hold fetched data

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.everythinglocation.com/address/complete', {
                    params: {
                        lqtkey: 'HE59-YH98-MP91-ZJ44',
                        query: query,
                        country: 'USA'
                    }
                });
                setData(response.data); // Set the fetched data into state
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        if (query.trim() !== '') {
            fetchData();
        }
    }, [query]); // Fetch data whenever query state changes

    const handleInputChange = (event) => {
        setQuery(event.target.value); // Update query state as user types
    };

    const handleAddressClick = (address) => {
        setQuery(address); // Set selected address as the input value
        setData(null); // Clear the data to hide suggestions
    };

    return (
        <div className="input-container">
            <input
                type="text"
                placeholder="Type an address..."
                value={query}
                onChange={handleInputChange}
                className="input-field"
            />
            {data ? (
                <div className="suggestions-container">
                    {data.output.map((address, index) => (
                        <div
                            key={index}
                            onClick={() => handleAddressClick(address)}
                            className="suggestion"
                        >
                            {address}
                        </div>
                    ))}
                </div>
            ) : null}
        </div>
    );
}

export default AxiosT;
