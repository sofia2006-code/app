import React, { useState } from "react";


const TaskInput = ({ addTask }) => {
  const [taskName, setTaskName] = useState("");

  const handleInputChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() !== "") {
      addTask({ name: taskName, displayTime: 5000 }); // Set default display time here
      setTaskName("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task"
        value={taskName}
        onChange={handleInputChange}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskInput;
