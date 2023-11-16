import { useState } from "react"
import { Name } from "./Name";

export const Resume = () => {
    const [isVisible, setIsVisible] = useState(false);
    const clickHandler = () => {
        if (isVisible === false) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }
    return (
        <>
            <button className="resume" onClick={clickHandler}>CLICK ME! </button>
            {isVisible && <div>Resume</div>}
        </>

    )
}