import React from 'react'
import "../loading.css"
function Loading() {
  return (
    <div className="cs-loader show">
    <div className="cs-loader__media"><img loading="lazy" src="https://www.bigmpizza.com/static/media/loader.dcda44e4fa1c198431d4.gif" alt=""/></div>
  <div className="waviy">
    <span>L</span>
    <span>O</span>
    <span>A</span>
    <span>D</span>
    <span>I</span>
    <span>N</span>
    <span>G</span>
    </div>
  </div>
  )
}

export default Loading