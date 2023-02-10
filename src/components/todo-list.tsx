"use client";
import { useState } from 'react';
import styles from './page.module.css'

export default function TodoList(){


    const [todoArr, setTodos]  = useState([
        
        {text: "Todo 1", completedtask : false},
    
    
    ]);

    const [todo, setTodo] = useState("Todo List");

    const completedTodoTasks = (params : any) => {
    
        // map returns new array and return value
        const newTodos = todoArr.map((todos) => {
            if(todos.text == params.text){
                todos.completedtask = !todos.completedtask
            }

            return todos;
        });

        setTodos(newTodos);

    }


    // const onChangeHandler = (e:any) =>{
    //     setVal(e.target.value);
    // }

    const addValue = () => {
        const newTodo = {text: todo, completedtask : false};

        const newTodosUpdate = [...todoArr , newTodo];

        setTodos(newTodosUpdate);
        setTodo("");
       
    };


    const deleteTodo = (params : any) => {

        const deleteTodoValue = todoArr.filter((todo)=>{
            if(todo.text == params.text) return false;
                return true;
        })

        setTodos(deleteTodoValue);
    }

    return (
      <>
        <section className={styles.section}>
          <h1 style={{color:'white', fontSize:'48px', textAlign:'center'}}>Todo List </h1>
          <input
            type="text"
            className={styles.input}
            value={todo}
            onChange={(e) => {
              setTodo(e.target.value);
            }}
          ></input>
          <button className={styles.primary} onClick={addValue}>
            Add
          </button>

          <ul className={styles.list}>
            {todoArr.map((element) => {
              return (
                <li
                  style={{
                    color: element.completedtask ? "#013364" : "#fff",
                    fontSize: "24px",
                    listStyle: "none",
                    fontWeight:'bold',
                    textDecoration:element.completedtask ? "line-through " : "none",
                    padding:'10px'
                  }}
                >
                  <input
                    type="checkbox"
                    checked={element.completedtask}
                    onChange={() => {
                      completedTodoTasks(element);
                    }}
                  />
                  {element.text}

                  <button className={styles.delete}
                    onClick={() => {
                      deleteTodo(element);
                    }}
                  >
                    {" "}
                    Delete{" "}
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      </>
    );
}