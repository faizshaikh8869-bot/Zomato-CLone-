import React from 'react'

function AlignImage({top='auto', bottom='auto', left='auto', right='auto' ,Image}) {
  return (
    <>
    <img src={Image} alt=""  
        className={`absolute top-${top} left-${left} right-${right} bottom-${bottom}`}/>
    </>
  )
}

export default AlignImage