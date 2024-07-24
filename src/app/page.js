'use client'
import React, { useEffect, useState } from 'react';
import Task from './task';

const Home = () => {
  // localStorage से tasks प्राप्त करें और JSON.parse का उपयोग करके इसे एक array में बदलें
  // अगर tasks मौजूद नहीं हैं, तो [] (खाली array) का उपयोग करें
  const initialArray = JSON.parse(localStorage.getItem('tasks')) || [];

  // tasks state को प्रारंभ करें
  const [tasks, setTasks] = useState(initialArray);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // फॉर्म सबमिट हैंडलर
  const submitHandler = (e) => {
    console.log('hello')
    e.preventDefault();
    setTasks([...tasks, { title, description }]);
    // setTitle('');
    // setDescription('');
  };

  // टास्क हटाने का फंक्शन
  const deleteTask = (index) => {
    const filteredArr = tasks.filter((val, i) => i !== index);
    setTasks(filteredArr);
  };

  // जब tasks बदलते हैं, तो उन्हें localStorage में अपडेट करें
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className='container'>
      <h1>DAILY GOALS</h1>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          placeholder='Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder='Description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <button type='submit'>ADD</button>
      </form>

      {tasks && tasks.map((item, index) => (
        <Task
          key={index}
          title={item.title}
          description={item.description}
          deleteTask={deleteTask}
          index={index}
        />
      ))}
    </div>
  );
};

export default Home;
