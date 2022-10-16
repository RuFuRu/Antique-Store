function ShoppingCardForm() {
    return (
        <>
            <form className="scf-form">
                <div className="form-fullname">
                    <label htmlFor="fullname">Name & Surname</label>
                    <input type="text" id="fullname" name="fullname"/>
                </div>
                <div className="form-country-of-residence">
                    <label htmlFor="country-of-residence">Country of Residence</label>
                    <input type="text" id="country-of-residence" name="country-of-residence"/>
                </div>
                <div className="form-address">
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" name="address"/>
                </div>
                <div className="form-postal-code">
                    <label htmlFor="postal-code">Postal Code</label>
                    <input type="text" id="postal-code" name="postal-code"/>
                </div>
                <div className="form-phone-number">
                    <label htmlFor="phone-number">Phone Number</label>
                    <input type="text" id="phone-number" name="phone-number"/>
                </div>
                <div className="form-email">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email"/>
                </div>
            </form>
            <div className="scf-amount-to-be-payed">
                <div className="scf-delivery">
                    <h4>Delivery:</h4>
                </div>
                <div className="scf-total">
                    <h4>Total: </h4>
                </div>
            </div>
            <div className="scf-payment">
                <button>Proceed to payment</button>
            </div>
        </>
    )
}

export default ShoppingCardForm;