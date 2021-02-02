import * as React from "react";

import "./InputBlock.scss";

export function InputBlock(props: any) {
    return (
        <div className="input-block">
            <label className="input-block__label" htmlFor={props.id}>
                {props.label}
            </label>

            <input
                className="input-block__input"
                type={props.type || "text"}
                placeholder={props.label}
                id={props.id}
                onChange={props.onChange}
            />
        </div>
    );
}
