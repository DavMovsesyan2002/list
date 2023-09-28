import React, {createContext, useContext, useState} from 'react'
import {IContextProps, IListProps} from './listContext.props'
import {IList} from '../../shared/types/list/list'
import {listData} from '../../data'

const ListContext = createContext<IListProps | null>(null)

const ListPageProvider = ({children}: IContextProps) => {
  const [list, setList] = useState<IList[]>(listData)
  const [mode, setMode] = useState<boolean>(false)
  const [name, setName] = useState<string>('')
  const [age, setAge] = useState<number>(0)
  const [subscription, setSubscription] = useState<string>('')
  const [employment, setEmployment] = useState<boolean>(true)
  const [id, setId] = useState<string | null>(null)

  const contextValues = React.useMemo(
    () => ({
      list,
      setList,
      mode,
      setMode,
      name,
      setName,
      age,
      setAge,
      subscription,
      setSubscription,
      employment,
      setEmployment,
      setId,
      id,
    }),
    [list, mode, name, age, subscription, subscription, employment, id],
  )

  return <ListContext.Provider value={contextValues}>{children}</ListContext.Provider>
}

export default ListPageProvider
export const UseListContext = () => useContext(ListContext)
