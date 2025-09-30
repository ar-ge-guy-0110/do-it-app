export function DoitCard(props) {
    const { task, handleDeleteTask, taskIndex, handleCompleteTask, selectedTask, setSelectedTask } = props;
    return (
        <div className="card todo-item">
            <p>{task.input}</p>
            <div className="todo-buttons">
                <button disabled={task.complete} onClick={() => {
                    handleCompleteTask(taskIndex);
                }}>
                    <h6>Done</h6>
                </button>
                <button onClick={() => {
                    handleDeleteTask(taskIndex);
                }}>
                    <h6>Delete</h6>
                </button>
                <button onClick={() => {
                    setSelectedTask(taskIndex);
                    document.getElementById("edit-modal").classList.remove("finished");
                }}>
                    <h6>Edit</h6>
                </button>
            </div>
        </div>
    )
}