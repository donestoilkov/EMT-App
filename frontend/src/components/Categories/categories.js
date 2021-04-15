import React from "react";
import {Dropdown, DropdownButton} from "react-bootstrap";

const categories = (props) => {

    return (
        <div>
            <DropdownButton id="dropdown-basic-button" title="Select category">
                {props.categories.map((term) => {
                    return (
                        <Dropdown.Item>{term}</Dropdown.Item>
                    )
                })}
            </DropdownButton>
        </div>
    );
}

export default categories;