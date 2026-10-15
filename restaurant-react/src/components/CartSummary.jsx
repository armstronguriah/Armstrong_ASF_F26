import {Card, CardBody, CardTitle} from "reactstrap";

export const CartSummary = ({cart}) => {
    const TAX_RATE= 0.0825;

    const subtotal = cart.reduce((total,item) => {
        return total + (item.price * item.quantity)
    }, 0);

    const tax = subtotal * TAX_RATE;

    const total = subtotal + tax;


    return (
        <Card>
            <CardBody>
                <CardTitle tag="h4" className="mb-4">
                    Order Summary
                </CardTitle>

                <div className="d-flex justify-content-between mb-2">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                </div>

                <div className="d-flex justify-content-between mb-3">
                    <span>Tax (8.25%)</span>
                    <span>${tax.toFixed(2)}</span>
                </div>

                <hr />

                <div className="d-flex justify-content-between fw-bold fs-5">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                </div>
            </CardBody>
        </Card>
    );

}