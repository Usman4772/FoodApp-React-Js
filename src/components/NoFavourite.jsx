import React from 'react'
import "../no-content.css"

function NoFavourite() {
  return (
    <div className="empty-state">
    <div className="empty-state__content">
      <div className="empty-state__icon overflow-hidden">
        <img src="https://th.bing.com/th/id/OIP.UEHx1i3yXdh_74Rh8xJHhQHaFj?rs=1&pid=ImgDetMain"  alt=""/>
      </div>
      <div className="empty-state__message">No Favourites Found</div>
      <div className="empty-state__help">
      Please add some favourites  !!!
      </div>
    </div>
  </div>
  )
}

export default NoFavourite