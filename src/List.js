import React from "react";

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

export default function List (props){
    
  const [isFlipped, setIsFlipped] = React.useState(false)
  const [giveup, setGiveup] = React.useState(false)
  const [practise, setPractise] = React.useState(false)
    function handleDelete (index){
        // const newItems = [...storedData];
        // newItems.splice(index, 1);
        // setStoredData(newItems);

        confirmAlert({
            title: 'Confirm to delete',
            message: 'Are you sure you want to do this?',
            buttons: [
              {
                label: 'Yes',

                onClick: () =>{
                    const newItems = [...props.storedData];
                    newItems.splice(index, 1);
                    props.setStoredData(newItems);
                    
                    
                                                                   
                    
                }
                
              },
              

              {
                label: 'No',
                onClick: () => false
              }
            ]
          });
      
}
React.useEffect(() => {
    localStorage.setItem("storedData", JSON.stringify(props.storedData))
  }, [props.storedData])
  
function changeMind() {
    setIsFlipped(prevState => !prevState)
    setGiveup(false)
    setPractise(prevState => !prevState)

//   setTimeout(() => setIsClicked(prevState => !prevState), 0);
    

}
const GetRandom = () => {
    if (props.storedData.length === 0) return;

    const randomIndex = Math.floor(Math.random() * props.storedData.length);
    props.setRandomWord( props.storedData[randomIndex]);
// setIsClicked(prevState => !prevState)
setTimeout(() => setGiveup(prevState => !prevState), 5000);
//   clearTimeout(() => setIsClicked(prevState => prevState));
setIsFlipped(false)
setPractise(false)



    return setGiveup(false)
};

function toggle (){
    props.setShow(function(prevShow){
      if(!prevShow){
        return true
      }else{
        return false
      }
    })
      }
    return(
        <>
           <button onClick={GetRandom}> GET</button> 
        
        <br></br>

        {/* {randomWord.word !== "" && randomWord.meaning !== "" && ( */}
   <div  onClick={changeMind} className="randomDiv">
   {giveup? <p className="span">Give up😅? Check the answer</p>: null}
    {practise? <p className="span"> Click again to Pracise more😃</p>: null}
  {isFlipped?  <p className="meaningP">
      {props.randomWord.meaning}  
    </p> :<p className="wordP">
    {props.randomWord.word}
    </p>}
  
   {/* <p>
      {randomWord.word}  
    </p>
    <p>
    {randomWord.meaning}
    </p> */}
   </div>
   <button onClick={toggle}>Show</button>
      
      <table style={props.styles}>
          <thead>
          <tr>
              <td> Word</td>
              <td> Meaning</td>

          </tr>
          </thead>
          
          <tbody>

          {props.storedData.map((item , index) => (

                <tr key={index}>

                    <td> {item.word}</td>
                    <td> {item.meaning}</td>
                    {/* <td className="delete-td"> */}
                    <button 
                  className="delete-btn"
                  // onClick={handleDelete}
                  onClick={() => handleDelete(index)}

              >
                  <i className="gg-trash trash-icon"></i>
              </button>
                    {/* </td> */}
                   
    
                </tr>
      ))}
                </tbody>

        
      </table>
        
        </>
    )
}