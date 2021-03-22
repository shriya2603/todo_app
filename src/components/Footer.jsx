import React from 'react';

  
  function Footer() {

    var style = {
        borderTop: "1px solid #E7E7E7",
        padding: "20px",
        position: "fixed",
        left: "0",
        bottom: "0",
        height: "60px",
        width: "100%",
    }
    return (
          <div>
                <div style={style}>
                <p className="black-text"> Created by - Shriya Sundriyal </p>
                </div>
                
            
          </div>
      )
  }
  
  export default Footer