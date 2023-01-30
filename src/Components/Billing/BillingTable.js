
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Loading from "../Shared/Loading";

const BillingTable = () => {

    const [billings, setBillings] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:5000/api/billing-list', {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('access-token')}`,
            },
        })
            .then(res => res.json())
            .then(data => {
                const { error, billings } = data
                if (error) {
                    toast.error(error);
                    setLoading(false)
                }
                console.log(billings);
                if (billings) {
                    setBillings(billings);
                    setLoading(false)
                }
            })
    }, [])

    console.log(billings, loading);

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
                {
                    billings.map(({ _id, fullName, email, phone, payableAmount }) => (<tr>
                        <td>
                            {
                                loading ? <Loading /> : _id
                            }
                        </td>
                        <td>{fullName}</td>
                        <td>
                            {email}
                        </td>
                        <td>{phone}</td>
                        <td>{payableAmount}</td>
                        <td>
                            <button className="btn btn-xs">Edit</button>
                            <span> | </span>
                            <button className="btn btn-xs">Delete</button>
                        </td>
                    </tr>))
                }
                {/*  */}
            </tbody>
        </table>
    </div>
}



export default BillingTable