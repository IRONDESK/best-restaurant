import React from "react"
import styled from "@emotion/styled"
import Link from "next/link"

import { ICardItemDtosType } from "../../types/ItemType"
import Image from "next/image"

interface ICardItemDtosTypeWithModal extends ICardItemDtosType {
  setViewModal: React.Dispatch<React.SetStateAction<boolean>>
}
function Modal({
  name,
  description,
  thumb,
  image,
  url,
  setViewModal,
}: ICardItemDtosTypeWithModal) {
  const [descript, lastOrder] = description.split("LAST ORDER : ")
  return (
    <>
      <Backdrop onClick={() => setViewModal(false)} />
      <Container>
        <Close onClick={() => setViewModal(false)} />
        <ImgWrap>
          <img src={image} alt={name} />
        </ImgWrap>
        <InfoWrap>
          <h5 className="info-card">{name}</h5>
          <p className="info-card">{descript}</p>
          <div className="info-card">
            <Image src="/store.png" alt="오픈 시간" width={20} height={20} />
            {lastOrder}까지 주문
          </div>
          {url ? (
            <Link href={url}>
              <div className="info-card link-card">
                <Image
                  src="/globe.png"
                  alt="사이트 링크"
                  width={20}
                  height={20}
                />
                {url}
              </div>
            </Link>
          ) : null}
        </InfoWrap>
      </Container>
    </>
  )
}

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
`
const Container = styled.div`
  position: fixed;
  display: flex;
  margin: 0 32px;
  top: 50%;
  left: 0;
  min-width: 800px;
  height: 80%;
  gap: 20px;
  transform: translateY(-50%);
  @media (max-width: 864px) {
    position: absolute;
    flex-direction: column;
    margin: 0;
    top: 0;
    min-width: 100%;
    height: 90%;
    transform: translateY(0);
  }
`
const Close = styled.button`
  position: absolute;
  padding: 20px;
  top: -40px;
  right: 0;
  background-image: url("/close.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 20px;
  background-color: #fff;
  &:hover {
    filter: invert(100%);
  }
  @media (max-width: 864px) {
    padding: 28px;
    top: 0;
  }
`
const ImgWrap = styled.div`
  flex: 1.5;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 864px) {
    height: 360px;
  }
`
const InfoWrap = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  .info-card {
    padding: 20px;
    background-color: #fff;
  }
  h5 {
    font-size: 1.65rem;
    font-weight: 700;
  }
  p {
    flex: 1;
    white-space: pre-line;
    line-height: 1.5rem;
  }
  div {
    display: flex;
    padding: 4px 0;
    gap: 4px;
    align-items: center;
  }
  .link-card {
    cursor: pointer;
    &:hover {
      filter: invert(100%);
    }
  }
`

export default Modal