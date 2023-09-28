import React, {useEffect} from 'react'
import InsertRow from './components/InsertRows/InsertRow'
import List from './components/List/List'
import {UseListContext} from './context/list/listContext'
import {IListProps} from './context/list/listContext.props'

const App = () => {
  const {mode, list} = UseListContext() as IListProps

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  return (
    <div className={`container ${mode ? 'day color-white-input' : 'night color-dark-input'}`}>
      <div className="app-container">
        <InsertRow />
        <List />
      </div>
    </div>
  )
}

export default App
