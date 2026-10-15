import {
    Card, CardBody, CardTitle, CardText, CardImg, Button, Label, Input, Toast,
    ToastBody, ToastHeader
} from "reactstrap";
import {useState, useEffect} from "react";


export const MenuItemCard = ({item, addToCart}) => {

    const [quantity, setQuantity] = useState(1); //initialize quantity to 1 as that is the minimum
    const [showAdded, setShowAdded] = useState(false);

    useEffect(() => {
        if (!showAdded) return;

        const timer = setTimeout(() => {
            setShowAdded(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, [showAdded]);

    const handleAddToCart = () => {
        addToCart(item, quantity);
        setShowAdded(true)
    }

    return (
        <>
            <Card className="h-100">
                <CardImg
                    top
                    src={item.img}
                    alt={item.name}
                    className="menu-item-image"
                />

                <CardBody className="d-flex flex-column">
                    <CardTitle tag={"h5"}> {/* Gives h5 to menu item names */}
                        {item.name}
                    </CardTitle>

                    <CardText>
                        {item.description}
                    </CardText>

                    <CardText>
                        ${item.price.toFixed(2)}
                    </CardText>

                    <div className="d-flex justify-content-between align-items-end mt-auto gap-3">

                        <div style={{width: "90px"}}>
                            <Label for={`quantity-${item.id}`}>
                                Quantity
                            </Label>

                            <Input
                                id={`quantity-${item.id}`}
                                type="select"
                                value={quantity}
                                onChange={(event) => setQuantity(Number(event.target.value))}
                            >
                                {[1, 2, 3, 4, 5].map((num) => (
                                    <option key={num} value={num}>
                                        {num}
                                    </option>
                                ))}
                            </Input>
                        </div>
                        <Button
                            color={"primary"}
                            onClick={handleAddToCart}
                        >
                            Add to Cart
                        </Button>
                    </div>
                </CardBody>
            </Card>

            {showAdded && (
                <div
                    className="position-fixed top-0 end-0 p-3"
                    style={{zIndex: 1050}}
                >
                    <Toast>
                        <ToastHeader icon="success">
                            Cart Updated
                        </ToastHeader>
                        <ToastBody>
                            {item.name} — Cart updated!
                        </ToastBody>
                    </Toast>
                </div>
            )}
        </>
    )
}