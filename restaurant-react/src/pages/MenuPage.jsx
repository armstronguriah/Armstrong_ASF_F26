import {Row, Col} from "reactstrap";
import {useState} from 'react'
import {menuData} from "../data/menuData";
import {MenuFilter} from "../components/MenuFilter.jsx"
import {MenuItemCard} from "../components/MenuItemCard";

export const MenuPage = ({addToCart}) => {

    const [category, setCategory] = useState("All")

    const filteredMenu = menuData.filter((item) =>
        category === "All" || item.category === category)

    return (
        <main className={"container mt-4"}>
            <h1 className="text-center mb-4">Our Menu</h1>

            <div className="d-flex justify-content-end mb-3">
                <div style={{ width: "160px" }}>
                    <MenuFilter
                        category={category}
                        setCategory={setCategory}
                    />
                </div>
            </div>

            <Row>
                {filteredMenu.map((item) => (
                    <Col md={"4"} className={"mb-4"} key={item.id}> {/* md is medium, when screen size is
                     passed 768px in width the column will take up 4/12 columns, below that it will
                     take up the whole row (12/12 columns)

                     mb-4 puts 1.5rem of margin below the element*/}
                        <MenuItemCard
                            item={item}
                            addToCart={addToCart}
                        />
                    </Col>
                ))}
            </Row>
        </main>
    )
}

