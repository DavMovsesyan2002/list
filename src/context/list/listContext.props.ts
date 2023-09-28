import React, {Dispatch} from 'react'
import {IList} from '../../shared/types/list/list'

export interface IListProps {
  list: IList[]
  setList: Dispatch<React.SetStateAction<IList[]>>
  mode: boolean
  setMode: Dispatch<React.SetStateAction<boolean>>
  name: string
  setName: Dispatch<React.SetStateAction<string>>
  age: number
  setAge: Dispatch<React.SetStateAction<number>>
  subscription: string
  setSubscription: Dispatch<React.SetStateAction<string>>
  employment: boolean
  setEmployment: Dispatch<React.SetStateAction<boolean>>
  setId:  Dispatch<React.SetStateAction<string | null>>
  id: string | null
}

export interface IContextProps {
  children?: JSX.Element | JSX.Element[]
}
