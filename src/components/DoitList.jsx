import { DoitCard } from "./DoitCard";

export function DoitList(props) {
    //destructure
    const {doits, selectedTab} = props;
    const filterDoitsList = selectedTab === 'All' ? doits : selectedTab === 'Completed' ? doits.filter( val => val.complete) : doits.filter(val => !val.complete)
    return (
        <>
            {filterDoitsList.map((task, taskIndex) => {
                return (
                    <DoitCard 
                        key = {taskIndex} 
                        taskIndex = {doits.findIndex(val => val.input == task.input)}
                        {...props}
                        task = {task}
                    />
                )
            })}
        </>
    )
}