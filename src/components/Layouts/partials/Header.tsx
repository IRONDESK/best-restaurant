import React from "react"
import styled from "@emotion/styled"
import Link from "next/link"

function Header() {
  return (
    <Container>
      <Name>
        AWESOME
        <br />
        FOOD STORE
      </Name>
      <Menu>
        <li>
          <Link href="/about">
            <span>about</span>
          </Link>
        </li>
        <li>
          <Link href="/store">
            <span>store</span>
          </Link>
        </li>
      </Menu>
    </Container>
  )
}

const Container = styled.header`
  display: flex;
  padding: 24px 20px;
  justify-content: space-between;
  align-items: center;
`
const Name = styled.h1`
  font-size: 1.6rem;
  font-weight: 900;
`
const Menu = styled.ul`
  display: flex;
  span {
    cursor: pointer;
    padding: 12px 20px;
    &:hover {
      color: #000;
    }
  }
  &:hover {
    color: #888;
  }
`

export default Header
