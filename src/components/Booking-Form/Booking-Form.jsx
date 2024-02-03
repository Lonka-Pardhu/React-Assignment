import { useState, useRef } from "react";
import { BookingFormStyled, FormHeadingStyled, MainFormStyled, FormEleWrapper, FormInputStyled, FormLabelStyled, ConfirmButtonStyled, CancelBookingStyled } from './Booking-Form-Styled'


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
                <BookingFormStyled>
                    <FormHeadingStyled>{movieName}</FormHeadingStyled>
                    <MainFormStyled onSubmit={handleSubmit}>
                        <FormEleWrapper>
                            <FormLabelStyled htmlFor="name">Name:</FormLabelStyled>
                            <FormInputStyled
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </FormEleWrapper>
                        <FormEleWrapper>
                            <FormLabelStyled htmlFor="email">Email:</FormLabelStyled>
                            <FormInputStyled
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </FormEleWrapper>
                        <FormEleWrapper>
                            <FormLabelStyled htmlFor="numberOfTickets">Number of Tickets:</FormLabelStyled>
                            <FormInputStyled
                                type="number"
                                id="numberOfTickets"
                                name="numberOfTickets"
                                value={formData.numberOfTickets}
                                onChange={handleChange}
                                min="1"
                                required
                            />
                        </FormEleWrapper>
                        <ConfirmButtonStyled ref={confirmButtonRef} type="submit">Confirm</ConfirmButtonStyled>
                        <CancelBookingStyled onClick={handleCancelClick} className="cancelBookingBtn">Cancel</CancelBookingStyled>
                    </MainFormStyled>
                </BookingFormStyled>
            )}
        </>
    );
};

export default BookingForm;
