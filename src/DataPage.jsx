import React from 'react'

function DataPage({ data }) {

    return (
        <table id="customer_info">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th>Tracking</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map(row => {
                        return (
                            <>
                                <tr key={row.id}>
                                    <td>{row.id}</td>
                                    <td>{row.name}</td>
                                    <td>{row.email}</td>
                                    <td>{row.status}</td>
                                    <td>{row.tracking}</td>
                                </tr>
                            </>
                        )
                    })}
            </tbody>
        </table>
    )
}

export default DataPage

{/* <th>Company Name</th>
                        <th>Industry</th>
                        <th>Department</th>
                        <th>Title</th>
                        <th>Role</th>
                        <th>Annual Revenue</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>ZIP</th>
                        <th>Country</th> */}