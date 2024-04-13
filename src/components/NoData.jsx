import React from 'react'
import "../no-content.css"

function NoData() {
  return (
    <div className="empty-state">
    <div className="empty-state__content">
      <div className="empty-state__icon overflow-hidden">
        <img src="https://th.bing.com/th/id/OIP.UEHx1i3yXdh_74Rh8xJHhQHaFj?rs=1&pid=ImgDetMain"  alt=""/>
      </div>
      <div className="empty-state__message">Nothing to show</div>
      <div className="empty-state__help">
      Try to search something !!!
      </div>
    </div>
  </div>
  )
}

export default NoData