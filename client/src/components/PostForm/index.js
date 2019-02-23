import React from "react";

export function Input(props) {
    return (
        <div className="form-group">
            <input className="form-control"
                {...props} />
        </div>
    );
}

export function TextArea(props) {
    return (
        <div className="form-group">
            <textarea className="form-control" rows="3" {...props}
            />
        </div>
    )
}

export function Type(props) {
    return (
        <div className="form-group">
            <select className="form-control" {...props}>
                <option>-</option>
                <option value="Rent">Rent</option>
                <option value="Sale">Sell</option>
                <option value="Request">Request</option>
            </select>
        </div>
    )
}

export function Category(props) {
    return (
        <div className="form-group">
            <select className="form-control" {...props}>
                <option>-</option>
                <option value="Cleaning">Cleaning</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Fitness">Fitness</option>
                <option value="Kitchen">Kitchen</option>
                <option value="Miscellaneous">Miscellaneous</option>
                <option value="Tools">Tools</option>
                <option value="Yard">Yard</option>
            </select>
        </div>
    )
}