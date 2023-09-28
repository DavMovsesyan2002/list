import React from 'react'
import {UseListContext} from '../../context/list/listContext'
import {IListProps} from '../../context/list/listContext.props'
import {IList} from '../../shared/types/list/list'

const List = () => {
  const {list, setName, mode, id, setId, setAge, setEmployment, setSubscription} =
    UseListContext() as IListProps

  const onRowClick = (item: IList) => {
    setName(item.name)
    setAge(item.age)
    setEmployment(item.employment)
    setSubscription(item.subscription)
    setId(item.id)
  }

  return (
    <div className="column-container ml-10 overflow-y-auto">
      <table className="table-container">
        <thead className="table-row">
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Subscription</th>
            <th>Employment</th>
          </tr>
        </thead>
        <tbody className={`table-row ${mode ? 'color-dark' : 'color-white'}`}>
          {list.map((item, index) => (
            <tr
              className={`${id === item.id && 'active-color-gray'}`}
              onClick={() => onRowClick(item)}
              key={index}
            >
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.subscription}</td>
              <td>{item.employment ? 'Employed' : 'No employed'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default List
