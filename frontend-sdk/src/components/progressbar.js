import React from 'react'
  
const Progress_bar = ({bgcolor,progress,height,text,value}) => {
     
    const Parentdiv = {
        height: height,
        width: "100%",
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
      }
      
      const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        borderRadius:40,
        textAlign: 'right',
       
        
      }
      
      const progresstext = {
        padding: 10,
        color: 'black',
        fontWeight: 900
      }
        
    return (
    <div >
    <p>{text}</p>
    <div style={Parentdiv} class="bg-phorange hover:bg-blue-300 duration-300 transition ease-in-out delay-150 hover:-translate-x-5">
      <div style={Childdiv} class="bg-phorange hover:bg-blue-300 transition ease-in-out">
       
        <span style={progresstext}>{`${value}`}</span>
      </div>
    </div>
    </div>  
    )
}
  
export default Progress_bar;