export function Header(props) {
    const {doits} = props;
    const doitsLength = doits.length;

    const isTasksPlural = doitsLength != 1;
    const taskOrTasks = isTasksPlural ? 'tasks' : 'task';
    return (
        <header>
            <h1 className="text-gradient">You have {doitsLength} open {taskOrTasks}.</h1>
        </header>
    )
}