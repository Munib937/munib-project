


import React from 'react'

function Alert(Props) {
    const capitilized = (word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <div>
        { Props.alert &&  <div className="alert alert-success alert-dismissible fade show" role="alert">
        <strong>{capitilized(Props.alert.type)}:</strong> {Props.alert.msg}
   </div> }
    </div>
  )
}

export default Alert



