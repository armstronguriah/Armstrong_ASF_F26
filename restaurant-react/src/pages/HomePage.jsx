import {Link} from "react-router";
import {Container, Row, Col, Card, CardBody} from "reactstrap";

export const HomePage = () => {
    return (
        <main>
            <section className="home">
                <Container>
                    <Row className="align-items-center g-4">
                        <Col md="6" className="home-content">
                            <h1>The Brass Bulldog Sushi House</h1>

                            <p className="tagline">
                                Precision-crafted sushi for bulldogs,
                                humans, and travelers of the
                                steam-powered skies.
                            </p>

                            <Link to="/menu" className="button">
                                View Our Menu
                            </Link>
                        </Col>

                        <Col md="6" className="home-image">
                            <img
                                src="/images/sushi-platter.png"
                                alt="Brass Bulldog Sushi Platter"
                                className="img-fluid"
                            />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="welcome-section container">
                <div className="section-heading">
                    <h2>
                        Welcome to the Empire's Finest Sushi House
                    </h2>

                    <p>
                        Located beneath the great copper airship docks,
                        The Brass Bulldog Sushi House combines traditional
                        Japanese cuisine with the bold engineering of a
                        steam-powered world.
                    </p>
                </div>

                <Row className="g-4">
                    <Col md="4">
                        <Card className="h-100 d-flex flex column">
                            <i className="fa-solid fa-fish card-icon"></i>
                            <h3>Fresh Ingredients</h3>
                            <CardBody className="flex-grow-1">
                                <p>
                                    Our mechanical couriers deliver the
                                    freshest ingredients from across the
                                    empire every morning.
                                </p>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col md="4">
                        <Card className="h-100">
                            <i className="fa-solid fa-gear card-icon"></i>
                            <h3>Steam-Powered Precision</h3>
                            <CardBody className="flex-grow-1">
                                <p>
                                    Every item is carefully prepared with
                                    the precision of brass gears and
                                    master craftsmanship.
                                </p>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col md="4">
                        <Card className="h-100">
                            <i className="fa-solid fa-dog card-icon"></i>
                            <h3>All Are Welcome</h3>
                            <CardBody className="flex-grow-1">
                                <p>
                                    Bulldogs, humans, and every traveler
                                    of the steam-powered city are welcome
                                    at our table.
                                </p>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </section>

            <section className="feature-section">
                <Container>
                    <Row className="align-items-center g-4">
                        <Col md="6" className="feature-image">
                            <img
                                src="/images/restaurant-interior.jpg"
                                alt="Brass Bulldog Sushi House Interior"
                                className="img-fluid"
                            />
                        </Col>

                        <Col md="6" className="feature-text">
                            <h2>Dine Among the Gears</h2>

                            <p>
                                Enjoy your meal surrounded by copper
                                pipes, polished brass, glowing
                                lanterns, and the gentle rhythm
                                of steam engines.
                            </p>

                            <p>
                                Whether you are stopping by after an
                                airship voyage or enjoying an evening
                                in the city, our kitchen is ready
                                to serve you.
                            </p>

                            <Link
                                to="/reservations"
                                className="button"
                            >
                                Request a Reservation
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    );
};
