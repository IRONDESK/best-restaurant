import React from "react"
import styled from "@emotion/styled"

function About() {
  return (
    <Container>
      <h3>AWESOME!</h3>
      <h4>맛집은 많지만 기억에 남는 맛집은 얼마나 될까요</h4>
      <p>
        어썸푸드스토어는 국내 유명 백화점의 식품관 MD 출신이 직접 엄선한 전국
        유명 맛집을 찾아내 한 곳에 모아놓은 서울의 대표적 명소입니다.
        <br />
        식당을 찾는 사람들은 맛있는 음식을 만드는 곳에서 식사하는 것을
        좋아합니다. <br />
        그들은 음식의 맛을 사랑하고 그것에 대해 기꺼이 지불합니다.
        <br />
        식품 사업체는 이러한 수요를 기꺼이 제공합니다. 고객이 제품을 구매하도록
        장려하고 비즈니스를 계속 운영합니다.
        <br />
        게다가 식당에서 식사를 하는 사람들은 자신에게 맞는 사업체에서 더 많이
        구매하는 경향이 있습니다.
        <br />
        이것은 좋은 음식을 만드는 기업을 위한 훌륭한 수익 모델로 이어집니다.
        좋은 비즈니스 모델은 판매를 촉진하고 고객 충성도를 장려합니다.
        <br />그 대가로 이러한 사업체는 근로자에게 좋은 급여와 복리후생을
        제공합니다.
        <br />
        좋은 음식을 만드는 사업체에서 일하는 사람들은 전공 없이 생활하기에
        충분한 돈을 벌고 있습니다.
        <br />
        그들은 친구 및 가족과 함께 보낼 시간도 있습니다.
        <br />
        이것은 차례로 반복적인 비즈니스와 만족한 고객에 대한 후속 판매를
        촉진합니다. 식당을 찾는 사람들은 음식이 훌륭할 때 식사가 훨씬 더
        맛있다는 것을 알게 됩니다.
        <br />
        재료의 품질이 세상의 모든 차이를 만듭니다.
        <br />
        여기에는 신선한 과일과 채소, 고품질 육류 및 기타 풍미 있는 첨가물이
        포함됩니다. 세심하게 준비된 음식은 접시에서도 인상적입니다. 모든 것이
        식탁에 오르기 전보다 더 맛있습니다.
        <br />
        추가 재료나 장식을 추가하면 제대로 된 경우 시각과 풍미가 모두
        향상됩니다. <br />
        좋은 음식을 즐길 때 외식은 즐거운 활동입니다. 훌륭한 취향 외에도 훌륭한
        비즈니스 모델은 직원에게 맛있는 보상과 임금을 제공하여 고객 충성도를
        높입니다.
        <br />
        외식을 좋아하는 사람들은 외식할 때 식사가 훨씬 더 맛있다고 합니다.
        맛있는 음식을 만들 때 사람을 기쁘게 하는 것은 쉽습니다!
      </p>
      <p>(AI 문장 생성기로 만든 문장입니다)</p>
    </Container>
  )
}

const Container = styled.main`
  margin: 24px 20px;
  h3 {
    font-size: 1.9rem;
    font-weight: 600;
    word-break: keep-all;
  }
  h4 {
    margin: 12px 0 0;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.7rem;
  }
  p {
    margin: 20px 0 0;
    font-size: 1.05rem;
    line-height: 1.75rem;
  }
`
export default About
