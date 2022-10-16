import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Image from "next/image"
import styled from "@emotion/styled"

function Page404() {
  const [countSecond, setCountSecond] = useState(5)
  const router = useRouter()

  useEffect(() => {
    const countdown = setInterval(() => {
      if (countSecond > 0) {
        setCountSecond(countSecond - 1)
      }
      if (countSecond === 1) {
        router.push("/")
      }
    }, 1000)
    return () => clearInterval(countdown)
  }, [countSecond])

  return (
    <Container>
      <Image src="/warning.svg" alt="경고" width={80} height={80} />
      <p>
        요청하신 페이지를 찾을 수 없습니다
        <br />
        <span>{countSecond}초 후에 메인 화면으로 이동합니다</span>
      </p>
    </Container>
  )
}

const Container = styled.section`
  padding: 80px 0;
  height: 60vh;
  text-align: center;
  p {
    margin: 20px 0 0;
    font-size: 1.6rem;
    line-height: 2.4rem;
    span {
      font-size: 1.3rem;
      opacity: 0.6;
    }
  }
`

export default Page404
