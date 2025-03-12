import React, { useEffect, useState } from 'react';

const Datalist = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://geeta-backend.vercel.app/')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="text-center mt-4 d-flex justify-content-center align-items-center vh-100">
                <img src={require("../Images/loader image.gif")} alt="Loading..." className='img-fluid object-fit-contain' />
            </div>
        );
    }

    if (error) {
        return <div className="text-center text-danger mt-4">Error: {error.message}</div>;
    }

    return (
        <>
            <div className='orangecolor text-center p-3 display-6 fw-bold'>REGISTERED PASS DATA</div>
            <div className="container">
                <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                        <thead className="table-dark text-center">
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone No.</th>
                                <th>Area</th>
                                <th>No. Of Pass</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.length > 0 ? (
                                data.map((item) => (
                                    <tr key={item._id} className='text-center'>
                                        <td>{item._id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phnumber}</td>
                                        <td>{item.area}</td>
                                        <td>{item.pass}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="text-center">No data available</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Datalist;