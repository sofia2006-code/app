import { data } from "autoprefixer";
import React, { useState, useEffect, Fragment } from "react";
import Navigations from "../../components/navigations";
import Footer from "../../components/footer";
import { RxCrossCircled } from "react-icons/rx";

export default function Tasks() {
  const [date, setDate] = useState("");
  const [task, setTask] = useState("");
  const [tasksArray, setTasksArray] = useState([]);
  const [selectedClass, setSelectedClass] = useState("Seleccionar Clase");
  const [classText, setClassText] = useState({
    A: "",
    B: "",
    C: "",
  });
  const [formVisible, setFormVisible] = useState(true);
  /*
  useEffect(() => {
    const getTasks = async () => {
      const response = await fetch('../api/toDoList', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    getTasks();
  }, []);
  */

  useEffect(() => {
    fetch("http://localhost:3000/api/toDoList", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((task) => {
        if (task && task.tareas && Array.isArray(task.tareas)) {
          const updatedTasksArray = task.tareas.map((taskObj) => ({
            class: taskObj.clase,
            task: taskObj.tarea,
            date: taskObj.fecha,
          }));

          setTasksArray(updatedTasksArray);
        } else {
          console.log("The 'tareas' property is not in the expected format.");
        }
      })
      .catch((error) => {
        console.log("Error fetching tasks:", error);
      });
  }, []);

  const submitTask = async () => {
    if (date) {
      const response = await fetch("../api/toDoList", {
        method: "POST",
        body: JSON.stringify({
          dato: task,
          tipo: "tarea",
          clase: selectedClass,
          date: date,
        }), //en dato poner classText[selectedClass]
        headers: {
          "Content-Type": "application/json",
        },
      });

      const dato = await response.json();
      console.log(dato);
    } else {
      alert("Porfavor complete el campo de fecha");
      return;
    }
    setFormVisible(true);

    /*
    const respone = await fetch(endpoint, options)

    if(!response.ok){
      console.log("ERROR")
      const result =await response.json()
      alert()
    }
    */
  };
  const inputChange = (e) => {
    setTask(e.target.value);
  };

  const dateChange = (e) => {
    setDate(e.target.value);
  };

  const inputSubmit = (e) => {
    e.preventDefault();
    if (task.trim() && selectedClass !== "Seleccionar Clase" && date) {
      const updatedClassText = { ...classText, [selectedClass]: task };
      setClassText(updatedClassText);
      setTasksArray([...tasksArray, { class: selectedClass, task, date }]);
      setTask("");
    }
  };

  const handleDelete = async (classType, taskText) => {
    const updatedTasks = tasksArray.filter(
      (taskObj) => !(taskObj.class === classType && taskObj.task === taskText)
    );
    setTasksArray(updatedTasks);

    // Perform the delete action here
    const response = await fetch("../api/toDoList", {
      method: "DELETE",
      body: JSON.stringify({ tarea: taskText }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    console.log(result); // Handle the result as needed
  };

  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
  };

  return (
    <div
      className="flex flex-col justify-center font-Quattrocento bg-gradient-to-b from-[#1D1261] to-[#1B153F] text-white h-screen relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <Navigations openConf={false} />
      <h1 className="grid justify-items-center text-xl mt-3"> Mis tareas </h1>

      {formVisible && (
        <form
          onSubmit={inputSubmit}
          className="flex flex-col m-8 rounded-lg p-5 z-20 ml-14 absolute w-[80%] h-[50%] bg-gradient-to-b from-[#2200FF] to-[#7795ff]"
        >
          <div className="flex w-full items-center justify-between">
            <p className="text-xl ml-8"> Nombre</p>
            <div className="text-right">
              <button
                className="text-white"
                onClick={() => setFormVisible(false)}
              >
                ✕
              </button>
            </div>
          </div>
          <input
            className="pl-2  text-white rounded-lg text-lg bg-[#3B355A] shadow-inner py-2 mx-auto my-min mt-3"
            type="text"
            value={task}
            onChange={inputChange}
            placeholder="Agregar Tarea"
            id="NombreTarea"
          />
          <p className="ml-8 mt-3 text-xl"> Prioridad</p>
          <select
            id="SelectClases"
            onChange={handleClassChange}
            value={selectedClass}
            className="justify-start pl-2 text-gray-400 mt-3 rounded-lg text-lg bg-[#3B355A] shadow-inner py-2 mx-auto pr-12"
          >
            <option value="Seleccionar Clase">Seleccionar Clase</option>
            <option value="A">Clase A</option>
            <option value="B">Clase B</option>
            <option value="C">Clase C</option>
          </select>
          <br />
          <p className=" text-xl ml-8"> Fecha</p>
          <input
            className=" pl-2 justify-start text-gray-400 mt-2 rounded-lg text-lg bg-[#3B355A] shadow-inner py-2 mx-auto pr-14"
            onChange={dateChange}
            type="date"
          />
          <button
            onClick={submitTask}
            type="submit"
            className="bg-white text-blue-700 text-center align-items-center rounded-md py-2 mt-3 mx-auto px-4"
          >
            Agregar Tarea
          </button>
        </form>
      )}
      <div className="font-Quattrocento bg-gradient-to-b from-[#1D1261] to-[#1B153F] text-white h-screen">
        <div className="flex flex-col h-3/4">
          <div className="flex flex-col border-r border-dashed border-gray-300 p-4">
            <p className="text-3xl font-bold text-[#DF6B00] font-Quattrocento-bold">
              A
            </p>
            <div id="ClaseA" className="w-full">
              {tasksArray.map(
                (taskObj, index) =>
                  taskObj.class === "A" && (
                    <div
                      className="bg-white w-full rounded-xl pt-2 pb-0 mt-2 "
                      id="ClaseB"
                    >
                      <div className="ml-5 mb-0 " key={index}>
                        {" "}
                        {/* Added margin left and bottom */}
                        <div className="text-slate-600">{taskObj.date}</div>
                        <div className="flex flex-col-2 justify-items-stretch">
                          <div className="text-slate-800 font-bold font-Quattrocento text-2xl">
                            {taskObj.task}
                          </div>
                          <div>
                            <button
                              onClick={() => handleDelete("A", taskObj.task)}
                            >
                              <RxCrossCircled color="black" size="35" />
                            </button>{" "}
                          </div>
                        </div>
                        <br />
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
          <div className="flex flex-col border-r border-dashed border-gray-300 p-4">
            <p className="text-3xl font-bold text-[#00A3FF] font-Quattrocento-bold">
              B
            </p>

            {tasksArray.map(
              (taskObj, index) =>
                taskObj.class === "B" && (
                  <div
                    className="bg-white rounded-xl pt-2 pb-0 mt-2 "
                    id="ClaseB"
                  >
                    <div className="ml-5 mb-0 " key={index}>
                      {" "}
                      {/* Added margin left and bottom */}
                      <div className="text-slate-600">{taskObj.date}</div>
                      <div className="">
                        <div className="text-slate-800 font-bold font-Quattrocento text-2xl">
                          {taskObj.task}
                        </div>
                        <div className="flex flex-col-2 justify-items-stretch">
                          <button
                            onClick={() => handleDelete("B", taskObj.task)}
                          >
                            <RxCrossCircled color="black" size="35" />
                          </button>{" "}
                        </div>
                      </div>
                      <br />
                    </div>
                  </div>
                )
            )}
          </div>
          <div className="flex flex-col border-r border-dashed border-gray-300 p-4">
            <p className="text-3xl font-bold text-[#00A3FF] font-Quattrocento-bold">
              C
            </p>
            <div id="ClaseC">
              {tasksArray.map(
                (taskObj, index) =>
                  taskObj.class === "C" && (
                    <div
                      className="bg-white rounded-xl pt-2 pb-0 mt-2 "
                      id="ClaseB"
                    >
                      <div className="ml-5 mb-0 " key={index}>
                        {" "}
                        {/* Added margin left and bottom */}
                        <div className="text-slate-600">{taskObj.date}</div>
                        <div className="flex flex-col-2 justify-items-stretch">
                          <div className="text-slate-800 font-bold font-Quattrocento text-2xl">
                            {taskObj.task}
                          </div>
                          <button
                            onClick={() => handleDelete("C", taskObj.task)}
                          >
                            <RxCrossCircled color="black" size="35" />
                          </button>{" "}
                        </div>
                        <br />
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer buttonAppear={true} setFormVisible={setFormVisible} />
    </div>
  );
}
