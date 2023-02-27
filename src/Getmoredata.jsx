import React from 'react'
import { useState } from 'react';

export default function Getmoredata({res}) {
    const [toggleClass,setToggleClass] = useState('')
    function showMore (){
        console.log("Clicked");
        setToggleClass("popup-message-details msg_active")
      }
  return (
    <div>
    <div key={res.id} className='msg-details'>
      <h3>Title: {res.subject}</h3>
      <br />
      <b>About this Artile:</b>
      <div dangerouslySetInnerHTML={{ __html: res.subject }}></div>
      <br />
      <button key={res.id} onClick={showMore}>Get more data</button>

    </div>{toggleClass&&(<div className='popup-modal'>
    <div >
        <div className={toggleClass} >   
        {/* <div key={res.id}>{res.body}</div> */}
        <input type="text" name="" id=""  value={res.author.login}/>
        {/* <div dangerouslySetInnerHTML={{ __html: res.body }}></div> */}
        <textarea name="" id="msg-body" cols="30" rows="10" >{res.body}</textarea>
        <button type='cancel' className='cancel-btn' onClick={()=>setToggleClass('popup-message-details')}>X</button>
    </div></div>
    </div>)

   } 
    </div>
  )
}
