import React from 'react'

export default function LogoMark({ party, large = false }) {
  return <img className={large ? 'logoMark large' : 'logoMark'} src={party.logo} alt={`Merki ${party.name}`} />
}
