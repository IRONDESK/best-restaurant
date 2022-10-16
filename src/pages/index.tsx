import type { NextPage } from "next"
import styled from "@emotion/styled"
import { keyframes } from "@emotion/react"

const Home: NextPage = () => {
  return (
    <Container>
      <p className="head-slogan">
        THE FOOD AND LIFE,
        <br />
        EVERYTHING IS
        <br />
        <strong>FRESH</strong>
      </p>
      <p className="sub-message">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        <br />
        Fugit atque quae voluptatibus excepturi quisquam incidunt, reiciendis
        beatae dolores quas quibusdam?
      </p>
    </Container>
  )
}

const Move = keyframes`
  0% {background-position: 0 0;}
  15% {background-position: 15% 0;}
  50% {background-position: 40% 50%;
  background-size: 140%;}
  95% {background-position: 20% 100%;
  background-size: 120%;}
  100% {background-position: 20% 100%;
    background-size: 120%;}
`

const Container = styled.main`
  padding: 32px;
  height: 84vh;
  background-image: url("/main_background.jpeg");
  background-size: 100%;
  transition: all 0.3s;
  animation: ${Move} 5s ease-in-out infinite alternate;
  .head-slogan {
    color: #fff;
    font-size: 5.8rem;
    text-align: left;
    line-height: 6rem;
    text-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    strong {
      font-size: 7rem;
      font-weight: 800;
    }
  }
  .sub-message {
    margin: 24px 0 0;
    color: #fff;
    font-size: 1.5rem;
    line-height: 2.2rem;
  }
  @media (max-width: 864px) {
    .head-slogan {
      font-size: 2rem;
      line-height: 3rem;
      strong {
        font-size: 2.5rem;
      }
    }
  }
`

export default Home
