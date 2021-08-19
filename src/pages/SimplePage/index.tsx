import React from 'react'
import { SideLeft } from '../../components/SideLeft'

export const SimplePage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mx-auto">
      <SideLeft />
      <div>Aqui é uma simples página ^^</div>
    </div>
  )
}
