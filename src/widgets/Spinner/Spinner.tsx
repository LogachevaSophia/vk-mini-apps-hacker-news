
import React from "react";
import { useState, CSSProperties } from "react";
import {BeatLoader} from "react-spinners";
const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

const Spinner = ({loading}) => {
    // let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#0077FF");
    return (
        <>
            <BeatLoader
                color={color}
                loading={loading}
                cssOverride={override}
                size={15}
                aria-label="Loading Spinner"
                data-testid="loader"
            /></>)
}

export default Spinner;