import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import './CustomerOrder.css'


const CustomerOrder = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [order, setOrder] = useState({});
    const [file, setFile] = useState(null);


    const handleBlur = (e) => {
        const newInfo = { ...order }
        newInfo[e.target.name] = e.target.value;
        setOrder(newInfo)
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile)
    }

    const handleSubmit = (e) => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', order.name);
        formData.append('email', order.email);
        formData.append('orderName', order.orderName);
        formData.append('projectDetails', order.projectDetails);
        formData.append('price', order.price);
        formData.append('status', "Pending");

        fetch('https://dry-bastion-62808.herokuapp.com/addOrder', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert("Service added successfully")
                }
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className="rightSide">
            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9">
                    <nav className="navbar mr-auto d-flex justify-content-between">
                        <p className="orderTitle">Order</p>
                        <p className="customerName">{loggedInUser.displayName}</p>
                    </nav>
                    <div className="order-form">
                        <div className="pb-5">
                            <div className="row p-5">
                                <div className="col-md-8 text-white">
                                    <form action="" onSubmit={handleSubmit}>
                                        <input type="text" name="name" placeholder="Your name / company's name" onBlur={handleBlur} className="input-field pl-3 mb-3" required /><br />
                                        <input type="text" name="email" placeholder="Your email address" onBlur={handleBlur} className="input-field pl-3 mb-3" required /><br />
                                        <input type="text" name="orderName" placeholder="Order Name" onBlur={handleBlur} className="input-field pl-3 mb-3" required /><br />
                                        <input type="text" name="projectDetails" placeholder="Project Details" onBlur={handleBlur} className="input-field project pl-3 mb-3" required /><br />
                                        <p>
                                            <input type="text" name="price" placeholder="Price" onBlur={handleBlur} className="price-field pl-3 mb-3" required />

                                            <label htmlFor="file-upload" className="custom-file-upload px-5 ml-5 w-48 py-2">
                                                <FontAwesomeIcon icon={faCloudUploadAlt} /> <span>Upload project file</span>
                                            </label>
                                            <input id="file-upload" name="image" type="file" onChange={handleFileChange} />

                                        </p>
                                        <button className="btn text-brand mt-2" type="submit">Send</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerOrder;