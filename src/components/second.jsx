import React from "react";
// import Frame16 from '../assets/Frame_16.png';


function Second() {

    return(
        <div  style={{ display: 'flex', flexDirection: 'row', alignSelf: 'center', alignItems: 'center',padding:'2vw',justifyContent:'center' }} className="container half-container everything-will-be-revealed-soon">
            <div className="everything-container"  style={{display:'flex',border:'none',height:'90%',width:'85%',marginLeft:'-5vw',justifyContent:'center',alignSelf:'center',alignItems:"center"}}>
                <h1 style={{color:'white'}}>Everything will be revealed soon</h1>

            </div>
        {/* <img src={Frame16} alt="Logo" style={{ margin: 'auto', width: '88vw', maxHeight: '90%' }} /> */}
    </div>
    
    )
    
}

export default Second;