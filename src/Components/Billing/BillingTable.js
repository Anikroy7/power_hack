
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Loading from "../Shared/Loading";
import Modal from "../Shared/Modal/Modal";

const BillingTable = ({ setOpenModal, openModal }) => {

    const [billings, setBillings] = useState([])
    const [loading, setLoading] = useState(false);
    const [updateBillling, setUpdatedBilling] = useState({})

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
                if (billings) {
                    setBillings(billings);
                    setLoading(false)
                }
            })
    }, [])


    // Update billings
    const handleUpdate = (_id) => {
        fetch(`http://localhost:5000/api/update-billing/${_id}`, {
            method: "PATCH",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('access-token')}`,
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    const handleDelte = (_id) => {
        fetch(`http://localhost:5000/api/delete-billing/${_id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('access-token')}`,
            },
        }).then(res => res.json())
            .then(data => {
                const { message, error } = data
                if (message) {
                    toast.success(message)
                }
                if (error) {
                    toast.error(error)
                }
            })
    }

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
                    billings.map((billing) => {
                        const { _id, fullName, email, phone, payableAmount } = billing
                        return <tr>
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
                                <label
                                    onClick={() => setUpdatedBilling(billing)} htmlFor="billingModal" className="bg-green-400 btn btn-xs rounded p-3 py-5">Edit</label>

                                <span> | </span>
                                <button
                                    onClick={() => handleDelte(_id)}
                                    className="btn btn-xs">Delete</button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
        {updateBillling && <Modal
            updateBillling={updateBillling}
            setUpdatedBilling={setUpdatedBilling}
        />}
    </div >
}



export default BillingTable