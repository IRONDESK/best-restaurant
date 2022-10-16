import React from "react"
import styled from "@emotion/styled"

import Stores from "../components/Store/Stores"

function Store() {
  return (
    <>
      <Welcome>Here Are The Food Store You Want</Welcome>
      <Stores />
    </>
  )
}

const Welcome = styled.p`
  margin: 24px 0 0;
  text-align: center;
  font-size: 1.45rem;
`

export default Store
