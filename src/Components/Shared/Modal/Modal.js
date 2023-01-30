import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const Modal = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        fetch("http://localhost:5000/api/add-billing", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('access-token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...data })
        })
            .then(res => res.json())
            .then(data => {
                const { message, error } = data
                if (message) {
                    toast.success(message)
                }
                if (error) {
                    toast.error(error)
                }
            })
    };
    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="billingModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Billing Form</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <input
                                type="text"
                                id="fullName"
                                className="mb-2 mt-5 p-3 border"
                                required
                                placeholder='Enter your Fullname'
                                {...register("fullName")}

                            />
                        </div>
                        <div className="form-control">
                            <input
                                type="email"
                                id="email"
                                required
                                className="mb-2 mt-5 p-3 border"
                                placeholder='Enter your email'
                                {...register("email")}

                            />

                        </div>
                        <div className="form-control">
                            <input
                                type="number"
                                id="phone"
                                required
                                className="mb-2 mt-5 p-3 border"
                                placeholder='Enter your phone'
                                {...register("phone")}

                            />

                        </div>
                        <div className="form-control">
                            <input
                                type="number"
                                id="amount"
                                required
                                className="mb-2 mt-5 p-3 border"
                                placeholder='Enter your Payable Amount'
                                {...register("payableAmount")}

                            />

                        </div>

                        <div className="modal-action">
                            <input htmlFor="billingModal" className="btn" type="submit" value={'Submit'} />
                            <label htmlFor="billingModal" className="btn">Cancel</label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;