import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, clickImage, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails

  const onClickImage = () => {
    clickImage(id)
  }

  const classNameActive = isActive ? 'open' : 'close'

  return (
    <li className="list">
      <button onClick={onClickImage}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={classNameActive}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
