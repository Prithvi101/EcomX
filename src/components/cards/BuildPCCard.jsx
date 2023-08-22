import React, { useContext, useState } from 'react'
import { MyContext } from '../../myContext'
import { useDispatch, useSelector } from 'react-redux';


import { CiNoWaitingSign } from 'react-icons/ci';
import { getAllCategories } from '../../redux/actions/filters/buildPCFilters';
const BuildPCCard = ({ }) => {
    const { loading, setLoading } = useContext(MyContext);
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.user);
    const [delivery, setSDelivery] = useState("");
    const [alert, setAlert] = useState(null);
    const [disabbleButton, setDisabelButton] = useState(true)
    const { subTotal } = useSelector(state => state.buildPC)
    const orderConfirmationHandler = () => {

        dispatch(getAllCategories())




    }


    return (
        <div className='mt-4 w-full flex justify-center'>

            <div className="block max-w-sm text-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Total: {subTotal}</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>



                {/* Open the modal using ID.showModal() method */}

                {

                    loading ? <button className="btn bg-primary mt-4 text-textColor  rounded-md font-bold  " disabled >Please Wait!!!</button>
                        : <button disabled={subTotal === 0} className={`btn bg-primary mt-4 text-textColor  rounded-md font-bold  `} onClick={() => window.my_modal_1.showModal()}>Order Now</button>
                }
                <dialog id="my_modal_1" className="modal">
                    <form method="dialog" className="modal-box">
                        <h3 className="font-bold text-lg">Confirm!!!</h3>
                        <p className="py-4">Are you sure to continue the Order?</p>
                        <div className='text-left md:w-[70%] m-auto space-y-2'>



                            <p>Placed By: <strong>{user ? user.first_name : ""}</strong></p>
                            <p>Email: <strong>{user ? user.email : ""}</strong></p>
                            <p >Mobile: <strong>{user ? user.contact_number : ""}</strong></p>
                            <input type="text" placeholder="Enter delivery address" className="input input-bordered input-sm w-full max-w-xs" value={user.address ? user.address : ""} onChange={(e) => { setSDelivery(e.target.value) }} />
                        </div>

                        <div className="modal-action">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-success" onClick={orderConfirmationHandler}>Yes</button>
                            <button className="btn">Cancel</button>
                        </div>
                    </form>
                </dialog>
            </div>

        </div>
    )
}

export default BuildPCCard