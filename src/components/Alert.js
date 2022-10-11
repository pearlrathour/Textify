import React from 'react'

function Alert(props) {
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
            //if 1st condition is false next is not evaluated
            //equivalent to if(props.alert !=NULL) div class....
            props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible show" role="alert`}>
                <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
                <button type="button" onClick={props.cancelAlert} className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
    )
}

export default Alert
