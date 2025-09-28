import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { DoitList } from "./components/DoitList";
import { DoitInput } from "./components/DoitInput";

import { useState, useEffect } from "react";

function App() {
  const [doits, setDoits] = useState([]);

  const [selectedTab, setSelectedTab] = useState("All");

  function handleAddTask(newTask) {
    const newTaskList = [...doits, {input: newTask, complete: false}];
    setDoits(newTaskList);
    handleSaveData(newTaskList);
  }

  function handleCompleteTask(index) {
    let newTaskList = [...doits];
    let completedTask = doits[index];
    completedTask['complete'] = true;
    newTaskList[index] = completedTask;
    setDoits(newTaskList);
    handleSaveData(newTaskList);
  }

  function handleDeleteTask(index) {
    let newTaskList = doits.filter((val, valIndex) => {
      return valIndex !== index
    })
    setDoits(newTaskList);
  }

  function handleSaveData(currTasks) {
    localStorage.setItem('doit-app', JSON.stringify({ doits: currTasks }));
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem('doit-app')) { return }
    let db = JSON.parse(localStorage.getItem('doit-app'));
    setDoits(db.doits);
  }, []);

  return (
    <>
      <Header doits = { doits } />
      <Tabs selectedTab = { selectedTab } setSelectedTab = { setSelectedTab } doits = { doits } />
      <DoitList doits = { doits } selectedTab = { selectedTab } handleDeleteTask = { handleDeleteTask } handleCompleteTask = { handleCompleteTask } />
      <DoitInput handleAddTask = { handleAddTask } />
    </>
  )
}

export default App;