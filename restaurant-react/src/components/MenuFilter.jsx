
import {FormGroup, Label, Input} from "reactstrap";

export const MenuFilter = ({category, setCategory}) => {

    return (
        <FormGroup>
            <Label for="category" className="menu-filter-label">
                Filter by Category
            </Label>

            <Input
                id="category"
                type="select"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
            >
                <option value="All">All</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
            </Input>
        </FormGroup>
    );
};
