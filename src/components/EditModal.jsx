import { useEffect, useState } from "react";

export function EditModal(props) {
    const { doits, selectedTask, handleEditTask } = props
    const [editValue, setEditValue] = useState("");

    useEffect(() => {
        const initial = selectedTask != null ? doits[selectedTask].input : '';
        setEditValue(initial);
    }, [selectedTask]);
    
    return (
        <div className="edit-modal finished" id="edit-modal">
            <textarea rows={5} onChange={(e) => {setEditValue(e.target.value)}} value={editValue}></textarea>
            <button onClick={() => {
                if (!editValue) { return }
                handleEditTask(selectedTask, editValue);
                document.getElementById("edit-modal").classList.add("finished");
            }}>Finished</button>
        </div>
    )
}