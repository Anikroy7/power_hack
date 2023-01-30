
import React from "react";

const BillingTable = () => {

    return <div className="overflow-x-auto">
        <table className="table table-compact w-full">
            <thead>
                <tr>
                    <th>Billing Id</th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Paid Amount</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Littel, Schaden and Vandervort</td>
                    <td>Canada</td>
                    <td>12/16/2020</td>
                    <td>
                        <button className="btn btn-xs">Edit</button>
                        <span> | </span>
                        <button className="btn btn-xs">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
}



export default BillingTable