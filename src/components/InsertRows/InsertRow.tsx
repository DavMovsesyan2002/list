import React from 'react'
import ArrowChevronDownIcon from '../../assets/images/ArrowChevronDownIcon'
import ArrowChevronUpIcon from '../../assets/images/ArrowChevronUpIcon'
import {UseListContext} from '../../context/list/listContext'
import {IListProps} from '../../context/list/listContext.props'
import {v4 as uuidv4} from 'uuid'

const InsertRow = () => {
  const {
    setList,
    list,
    setMode,
    mode,
    setId,
    name,
    setName,
    setSubscription,
    subscription,
    employment,
    setEmployment,
    age,
    setAge,
    id,
  } = UseListContext() as IListProps

  const onInsertClick = () => {
    if (id) {
      setList([
        ...list.map((item) =>
          item.id === id ? {...item, name, age, subscription, employment} : item,
        ),
      ])
    } else {
      setList([
        ...list,
        {
          id: uuidv4(),
          name,
          age,
          subscription,
          employment,
        },
      ])
    }
    handleClearActiveItem()
  }

  const onDeleteClick = () => {
    setList([...list.filter((item) => item.id !== id)])
    handleClearActiveItem()
  }

  const handleClearActiveItem = () => {
    setId(null)
    setName('')
    setAge(0)
    setEmployment(true)
    setSubscription('')
  }

  return (
    <div className={`column-container ${mode ? 'color-dark' : 'color-white'}`}>
      <div className={`title ${mode ? 'day' : 'night'}`}>Insert Row</div>
      <input
        placeholder="Name"
        className={`${mode ? 'day color-dark' : 'night color-white'}`}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div className="number-input-container m-12">
        <div className="input-group">
          <input
            placeholder="Age"
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            className="styled-number-input"
            min="0"
            max="10"
            step="1"
          />
          <button className="minus-button" onClick={() => setAge(age > 0 ? age - 1 : 0)}>
            <ArrowChevronDownIcon />
          </button>
          <div className="line-vertical" />
          <button className="plus-button" onClick={() => setAge(age + 1)}>
            <ArrowChevronUpIcon />
          </button>
        </div>
      </div>
      <div className="custom-select-container m-12">
        <select onChange={(e) => setSubscription(e.target.value)}>
          <option>Subscribed</option>
          <option>No Subscribed</option>
          <option>Other</option>
        </select>
        <div className="custom-icon-container">
          <span className="custom-icon"></span>
        </div>
      </div>
      <div className="m-12">
        <label className="custom-checkbox">
          <input type="checkbox" checked={employment} onClick={() => setEmployment(!employment)} />
          <span className="checkmark"></span>
          <div className="ml-10">Employed</div>
        </label>
      </div>
      <button className="custom-button mt-16" type="button" onClick={onInsertClick}>
        Insert
      </button>
      <div className="m-12">
        <div className="line" />
      </div>
      <div className="switch-container m-12">
        <label className="switch">
          <input type="checkbox" onClick={() => setMode(!mode)} />
          <span className="slider" />
        </label>
        <div className="ml-10">Mode</div>
      </div>
      <button className="custom-button m-12" onClick={onDeleteClick} type="button">
        Delete
      </button>
    </div>
  )
}

export default InsertRow
