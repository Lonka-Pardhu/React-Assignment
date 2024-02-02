import { useState, useRef } from "react";
import './Booking-Form.css'

const BookingForm = ({ movieName, showBookingForm, setShowBookingForm }) => {

    const confirmButtonRef = useRef(null);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        numberOfTickets: 1,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        localStorage.setItem('bookingFormData', JSON.stringify(formData));

        if (confirmButtonRef.current) {
            confirmButtonRef.current.innerHTML = 'confirmed';
        }
        setTimeout(() => {
            setShowBookingForm(false)
        }, 1000)

    };

    const handleCancelClick = () => {
        setShowBookingForm(false)
    }

    return (
        <>
            {showBookingForm && (
                <div className="booking-form">
                    <h2>{movieName}</h2>
                    <form onSubmit={handleSubmit} className="main-form">
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="numberOfTickets">Number of Tickets:</label>
                            <input
                                type="number"
                                id="numberOfTickets"
                                name="numberOfTickets"
                                value={formData.numberOfTickets}
                                onChange={handleChange}
                                min="1"
                                required
                            />
                        </div>
                        <button ref={confirmButtonRef} type="submit">Confirm</button>
                        <p onClick={handleCancelClick} className="cancelBookingBtn">Cancel</p>
                    </form>
                </div>
            )}
        </>
    );
};

export default BookingForm;
