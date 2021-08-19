import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { SideLeft } from '../../components/SideLeft'
import { AuthContext } from '../../context/AuthContext'

export const SimplePage = () => {
  const { data } = useContext(AuthContext)

  const history = useHistory()

  /*useEffect(() => {
    if (data?.access_token) {
      history.push('/')
    }
  })*/

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mx-auto">
      <SideLeft />
      <div>Aqui é uma simples página ^^</div>
    </div>
  )
}
