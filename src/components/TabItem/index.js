import './index.css'

const TabItem = props => {
  const {tabDetails, updateActivetabId, isActive} = props
  const {tabId, displayText} = tabDetails
  
  const activeTabClassname = isActive ? 'active-tab-btn' : " "
  const onClickTabItem = () => {
    updateActivetabId(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button type="button" className={`tab-btn ${activeTabClassname}`} onClick={onClickTabItem}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
