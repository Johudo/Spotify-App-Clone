import React from "react";
import { useDispatch } from "react-redux";
import { toLogOut } from "../../store/creators/isLoggedInCreator";

function HomeHeader() {
    const dispatch = useDispatch();

    const logOutCallback = (event: React.MouseEvent) => {
        event.preventDefault();
        localStorage.removeItem("username");
        dispatch(toLogOut());
    };

    return (
        <div className="header">
            <p>Username: {localStorage.getItem("username")}</p>
            <button
                type="submit"
                className="button white-button"
                onClick={logOutCallback}
            >
                Выйти
            </button>
        </div>
    );
}

export default HomeHeader;
