import React from "react"
import styled from "@emotion/styled"
import useSWR from "swr"

import Card from "./Card"
import { ICardItemDtosType } from "../../types/ItemType"

function Stores() {
  const { data, error } = useSWR("http://localhost:9000/stores", (url) =>
    fetch(url).then((r) => r.json())
  )
  return (
    <Container>
      {data?.map((value: ICardItemDtosType, idx: number) => (
        <Card
          key={idx}
          id={value.id}
          name={value.name}
          description={value.description}
          image={value.image}
          thumb={value.thumb}
          url={value.url}
        />
      ))}
    </Container>
  )
}

const Container = styled.ul`
  display: grid;
  padding: 24px;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 864px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export default Stores
