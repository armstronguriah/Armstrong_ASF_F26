import {CartSummary} from '../components/CartSummary.jsx'
import {
    Button, Modal, ModalHeader, ModalBody, ModalFooter,
    Container, Row, Col, Card, CardBody, CardTitle
} from "reactstrap";
import {useState} from "react";
import {useNavigate} from "react-router";

export const CartPage = ({cart, clearCart}) => {

    const [cancelModalOpen, setCancelModalOpen] = useState(false)
    const [thankYouModalOpen, setThankYouModalOpen] = useState(false)

    const [orderMessage, setOrderMessage] = useState("")

    const navigate = useNavigate()

    const handleCancelClick = () => {
        setCancelModalOpen(true)
    }

    const handleConfirmCancel = () => {
        setCancelModalOpen(false)
        clearCart()
        setOrderMessage("Your order has been canceled. ")
        setThankYouModalOpen(true)
    }

    const handleSubmitOrder = () => {
        setOrderMessage("Your order has been submitted successfully. ")
        setThankYouModalOpen(true)
    }

    const handleCloseThankYou = () => {
        setThankYouModalOpen(false)
        clearCart()
        navigate("/menu")
    }

    return (
        <main>
            <Container className={"container mt-4"}>
                <h1 className="text-center mb-4">Your Cart</h1>

                <Row className="g-4">
                    <Col md="7">
                        <Card className="h-100">
                            <CardBody>
                                <CardTitle tag="h4" className="mb-4">
                                    Order Items
                                </CardTitle>
                                {cart.length === 0 ? (
                                    <p>Your cart is empty.</p>
                                ) : (
                                    cart.map((item) => (
                                        <div key={item.id} className="mb-3">
                                            <div className="d-flex justify-content-between align-items-center">

                                                <div>
                                                    <h5 className="mb-1">{item.name}</h5>
                                                    <p className="text-muted mb-1">Quantity: {item.quantity}</p>
                                                    <p className="text-muted mb-0">${item.price.toFixed(2)} each</p>
                                                </div>

                                                <div className="text-end">
                                                    <span className="fw-bold">
                                                        ${(item.price * item.quantity).toFixed(2)}
                                                    </span>
                                                </div>
                                            </div>
                                            <hr/>
                                        </div>
                                    ))
                                )}
                            </CardBody>
                        </Card>
                    </Col>


                    <Col md="5">
                        <CartSummary cart={cart} />

                        {cart.length > 0 && (
                            <div className="d-grid gap-2 mt-3">
                                <Button
                                    className="submit-order-btn"
                                    size="lg"
                                    onClick={handleSubmitOrder}
                                >
                                    Submit Order
                                </Button>

                                <Button
                                    color="danger"
                                    onClick={handleCancelClick}
                                >
                                    Cancel Order
                                </Button>
                            </div>
                        )}
                    </Col>
                </Row>
            </Container>

            <Modal
                isOpen={cancelModalOpen}
                toggle={() => setCancelModalOpen(false)}
            >
                <ModalHeader toggle={() => setCancelModalOpen(false)}>
                    Cancel Order
                </ModalHeader>

                <ModalBody>
                    Are you sure you want to cancel your order?
                </ModalBody>

                <ModalFooter>
                    <Button
                        color={"secondary"}
                        onClick={() => setCancelModalOpen(false)}
                    >
                        Go Back
                    </Button>

                    <Button
                        color={"danger"}
                        onClick={handleConfirmCancel}
                    >
                        Yes, Cancel Order
                    </Button>
                </ModalFooter>
            </Modal>

            <Modal
                isOpen={thankYouModalOpen}
                backdrop={"static"} // prevents accidental dismissal to ensure redirect flow to menu page
                keyboard={false} // same
            >
                <ModalHeader>
                    Thank you!
                </ModalHeader>

                <ModalBody>
                    {orderMessage}
                    Thank you for visiting Brass Bulldog!
                </ModalBody>

                <ModalFooter>
                    <Button color={"primary"}
                            onClick={handleCloseThankYou}
                    >
                        Return to Menu
                    </Button>
                </ModalFooter>
            </Modal>
        </main>

    )
}

