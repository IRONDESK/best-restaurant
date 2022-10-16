import React, { useState } from "react"
import styled from "@emotion/styled"

import Modal from "./Modal"
import { ICardItemDtosType } from "../../types/ItemType"

function Card({ id, name, description, thumb, image, url }: ICardItemDtosType) {
  const [viewModal, setViewModal] = useState(false)
  return (
    <>
      <Container onClick={() => setViewModal(true)}>
        <img src={image} alt={name} />
        <span className="a11y-hidden">{name}</span>
      </Container>
      {viewModal ? (
        <Modal
          id={id}
          name={name}
          description={description}
          thumb={thumb}
          image={image}
          url={url}
          setViewModal={setViewModal}
        />
      ) : null}
    </>
  )
}

const Container = styled.li`
  margin: 0;
  height: 240px;
  overflow: hidden;
  text-align: center;
  cursor: pointer;
  img {
    width: 100%;
    height: 240px;
    object-fit: cover;
    transition: all 0.3s;
    &:hover {
      transform: scale(1.2);
    }
  }
`

export default Card
