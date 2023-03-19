import React from "react";
import homePageImg from "./img.png";

import StaticExample from "./StaticExample"

export default function Home (props){

    
   





  

    const add =() => {
        // event.preventDefault()
        
        props.setStoredData([...props.storedData, props.formData]);
        props.setFormData({
            word:"",
            meaning:""

        })
        
    } 

    function handle(e){
        props.setFormData(function(prevState){

            return{
                ...prevState,
            [e.target.name]: e.target.value
            }
        })

    }
    const exists = props.storedData.some((function (item){
        
        // let data = 
        
            if (item.word.toLowerCase().replace(/\s/g, '') === props.formData.word?.toLowerCase()) {
                return true

            } else if (item.meaning.toLowerCase().replace(/\s/g, '') === props.formData.word?.toLowerCase()){
                return true

            }
        else{
            return false
        }
    }));


    React.useEffect(() => {
       localStorage.setItem("storedData", JSON.stringify(props.storedData))
     }, [props.storedData])

       
 

    //  const handleDelete = (index) => {
     
    //     setStoredData(storedData.filter((item, i) => );
    //     setStoredData(storedData.filter(function(item, i){
    //         if(i !== index){
    //             return true
    //         }
    //     }));

    //   };
   


            


    return(
        <div className="main" >
                <StaticExample/>

            <h1 id="app-name">Vocabulary Checker</h1>
        <img alt="home Page " className="homePageImg" src={homePageImg}/><br></br>
        <section>
         
      {/* )} */}
            <br></br>

           <input
           
            onChange={handle}
            name="word"
             type="text"
             value={props.formData.word}
              placeholder="Write a word"

              />
              <br></br>
            <input 
            onChange={handle}
            name="meaning"
            value={props.formData.meaning}

            type="text" 
            placeholder="Write a meaning"
            />

        <span>{exists  ? "It's available ✅" : ""}</span>
 
        <br></br>
             <button onClick={add}>Add</button> 


        </section>
       
        
        </div>

    )
}

