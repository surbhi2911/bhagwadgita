
import MUIDataTable from 'mui-datatables';
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

    const columns = [
        {
            name: "_id",
            label: "Id",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "name",
            label: "Name",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "email",
            label: "Email",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "phnumber",
            label: "Phone no.",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "address",
            label: "Address",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "area",
            label: "Area",
            options: {
                filter: true,
                sort: false,
            }
        },
    ];
    if (loading) return <div className="text-center mt-4 d-flex justify-content-center align-items-center vh-100">
        <img src={require("../Images/loader image.gif")} alt="" className='img-fluid object-fit-contain' />
    </div>
    if (error) return <div className="text-center text-danger mt-4">Error: {error.message}</div>;

    const options = {
        filterType: 'checkbox',
        responsive: "standard",
        print: false,
    };

    return (
        <>
            <div className='orangecolor text-center p-3 display-6 fw-bold'>REGISTERED PASS DATA</div>
            <MUIDataTable

                data={data}
                columns={columns}
                options={options}
            />
        </>
    );
};

export default Datalist;

