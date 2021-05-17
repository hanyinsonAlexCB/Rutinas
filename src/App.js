import { useRef, useState } from 'react';
import Modal from 'react-modal';
import ReactPlayer from 'react-player';
import './App.css';



const App = ()=> {

  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const countRef = useRef(null)

  //button start rutina
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleStart = () => {
    //start button logic here
    setIsActive(true);
    setIsPaused(true);
    countRef.current = setInterval(()=>{
      setTimer((timer) => timer+1)
    }, 1000)
  }
  const handlePause = () => {
    //Puase button logic here
    clearInterval(countRef.current)
    setIsPaused(false)
  }
  const handleResume = () => {
    //Resume button logic here
    setIsPaused(true)
    countRef.current = setInterval(() => {
      setTimer((timer) => timer+1)
    }, 1000)
  }
  const handleReset = () => {
    //Reset butoon logic
    clearInterval(countRef.current)
    setIsActive(false)
    setIsPaused(false)
    setTimer(0)
  }


  return (
    <div className="app">
      <button onClick={() => setModalIsOpen(true)}>Iniciar Rutina</button>
     <Modal 
      isOpen={modalIsOpen}
      style={
        {
          overlay:{
            backgroundColor:'grey'
          }
        }
      }
      >
       
        <div className='stopwatch-card'>
          <h3>React Stopwatch</h3>
          <p>{timer}</p>
          <div className='buttons'>
            <button onClick={handleStart}>Start</button>
            <button onClick={handlePause}>Pause</button>
            <button onClick={handleResume}>Resume</button>
            <button onClick={handleReset}>Reset</button>
          </div>

          <div>
            <ReactPlayer url='https://www.youtube.com/watch?v=LMvOxgnFLRA'></ReactPlayer>
          </div>

        </div>
        <div>
          <button onClick={()=> setModalIsOpen(false)}>Close</button>
        </div>
     </Modal>

    </div>
    
  );
}

export default App;
