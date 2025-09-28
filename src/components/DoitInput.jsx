import { useState } from "react";

export function DoitInput(props) {
    const { handleAddTask } = props;
    const [inputValue, setInputValue] = useState("");
    return (
        <div className="input-container">
            <input type="text" value={inputValue} onChange={(e) => {setInputValue(e.target.value)}} placeholder="Add task" />
            <button onClick={() => {
                if (!inputValue) { return }
                handleAddTask(inputValue);
                setInputValue('');
            }}>
                <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    )
}