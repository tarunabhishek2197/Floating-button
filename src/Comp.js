import React,{useState, useEffect} from "react";
import './Comp.css'
import { AiOutlinePlus } from "react-icons/ai";

import { Container, Button, Link } from 'react-floating-action-button';


const Comp = ()=>{
  let deleteUserId = null;
  const [isShown, setIsShown] = useState(false);
  const [records, setRecords] = useState([]);
  const [selectednotes, setSelectednotes] = useState({});
 // const[renderdbdata, setrenderDbdata]= useState({});
  const [userInput, setUserInput] = useState({
    id : new Date().getTime().toString(),
    notes: "",
    

});




const handleInput = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  setUserInput({ ...userInput, [name]: value });

};





const eUser = (id)=>{
  const record = records.find((record)=>{ 
    if(record.id==id)  return true})
  setUserInput(record);
}

const dUser = (event,id)=>{
  deleteUserId = id;
  if (confirm("Are you sure you want to delete")) {
    let modifiedRecords = records.filter((record)=>{
      return record.id!=deleteUserId
    });
  
    setRecords(modifiedRecords);
  } 
  
}

const handleClick = event => {

    setIsShown(current => !current);

   
  };
  const handleSearch = (e) => {
	setUserInput(e.target.value);
    let temp = {...records}
    temp = Object.keys(temp).
    filter((key)=> key.includes(e.target.value)).
    reduce((cur, key) => { return Object.assign(cur, { [key]: temp[key] })}, {});

 
};



const handleSubmit = (event) => {
  event.preventDefault();
 
      var newRecord = { ...userInput, id: new Date().getTime().toString() };
      setRecords([...records, newRecord]);
    
  
    setUserInput({
      ...setUserInput, notes: "" });
    

        





  
};



const DataN=(props)=>{
    
    
    return(
        <div className="sect">
        {records.map((ce) => {
              return (
                <div className="column">
                <tr key={ce.id}>
                  <td className="card">
                    {ce.notes}
                  
                    <button onClick={()=>eUser(ce.id)}>Edit</button>{" "}
                    <button onClick={(event)=>dUser(event,ce.id)}>Delete</button>
                  </td>
                </tr>
                </div>
              );
            })}
                
               
                </div>)               
                
            
                
             
        


}







    return (
      
      <div className="backg">
    
    <div className="search_input">
    <form onSubmit={DataN}>
		<input onChange={handleSearch} placeholder="Search Notes" />
		<br />
		<button type="submit">Search</button>
        </form>
		
	</div>


  













        
    <Container>
            
            <Button
               
                rotate={true}
                onClick={handleClick} ><AiOutlinePlus style={{fontSize:"30px"}}/></Button>
        </Container>
         



{isShown && (
         <div className="column1">
         <div>
       </div>
           <div>
           <div>Notes</div>  
             <input type="text" name="notes" id="notes" className="notes_input" value={userInput.notes} onChange={handleInput}  ></input>
           </div>
           
           <button type="submit" onClick={handleSubmit}>Save</button>
           <br/>
      
     </div>
      )}
        
    <DataN/>
      
        
       
         
      </div>
    
    );
  };
  
export default Comp;






























// import React from 'react';

// import { AiOutlinePlus } from "react-icons/ai";
// import { RiSubtractFill } from "react-icons/ri";
// import { Container, Button, Link } from 'react-floating-action-button';
// const Comp = () => {
//     const [notes, setNotes] = useState([]);
    
    
//     // const textHandler = (e) => {
//     //     setInputText(e.target.value);
//     //   };
//     const handleInput = (e) => {;
//         const value = e.target.value;
//         setNotes({ ...notes, value });
//         console.log(userInput);
//       };
//       const handleSubmit = (event) => {
//         event.preventDefault();
    
//     }




//     return (
//         <div>
//             <div className='section' style>
                
//                 <input value={notes}/>
//                 <button type="submit" onClick={handleSubmit}>Save</button>
//         </div>


//         <Container>
//             <Link href="#"
//                 tooltip="Create note"
//                 icon="far fa-sticky-note" ><AiOutlinePlus style={{fontSize:"20px"}}/></Link>
//             <Link href="#"
//                 tooltip="Add user"
//                 icon="fas fa-user-plus" ><AiOutlinePlus style={{fontSize:"20px"}}/></Link>
//             <Link href="#"
//                 tooltip="Delete user"
//                 icon="fas fa-user-plus" >    
//                 <RiSubtractFill style={{fontSize:"20px"}}/></Link>
//             <Button
               
//                 rotate={true}
//                 onClick={() => alert('FAB Rocks!')} ><AiOutlinePlus style={{fontSize:"30px"}}/></Button>
//         </Container>
//         </div>
//     )
// }
// export default Comp;