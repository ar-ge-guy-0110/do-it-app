export function Tabs(props) {
    const { doits, selectedTab, setSelectedTab } = props;
    const tabs = ['All', 'Open', 'Completed'];
    return (
        <nav className="tab-container">
            {tabs.map((tab, tabIndex) => {
                const numOfTasks = tab === 'All' ? 
                    doits.length :
                    tab === 'Open' ? 
                    doits.filter(val => !val.complete).length : doits.filter(val => val.complete).length;
                return (
                    <button onClick={() => {
                        setSelectedTab(tab)
                    }} key={tabIndex} className={"tab-button " + (tab === selectedTab ? "tab-selected" : "")}>
                        <h4>{tab} <span>({numOfTasks})</span></h4>
                    </button>
                );
            })}
            <hr />
        </nav>
    )
}