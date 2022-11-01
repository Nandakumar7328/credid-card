import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
`
export const CardContainer = styled.div`
  background-color: #3b4b69;
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
`
export const CardContainerHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 35px;
  padding-top: 40px;
  margin-bottom: 0px;
`
export const HrLine = styled.hr`
  margin-top: 7px;
  border: #ffd773 solid 2px;
  outline: none;
  width: 150px;
`
export const CardImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  height: 300px;
  width: 100%;
  background-size: cover;
  border-radius: 13px;
  margin-top: 80px;
`
export const NumberHeading = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 37px;
  margin-bottom: 10px;
  margin-top: 6px;
`
export const NameTitle = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 20px;
  margin-bottom: 0px;
  margin-top: 10px;
`
export const Name = styled.p`
  color: #ffffff;
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-size: 30px;
  margin-top: 5px;
`
export const InputFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`
export const InputCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: #c3cad9 1px 1px 3px 1px;
  border-radius: 10px;
  padding: 20px;
  width: 500px;
  height: 300px;
`
export const CardHeading = styled.h1`
  color: #344e7a;
  font-family: 'Roboto';
  font-size: 28px;
`
export const InputNumberText = styled.input`
  width: 100%;
  height: 35px;
  outline: none;
  border: #c3cad9 1px solid;
  color: #475569;
  margin-bottom: 20px;
  padding-left: 10px;
  border-radius: 7px;
`
export const InputNameText = styled.input`
  width: 100%;
  height: 35px;
  outline: none;
  border: #c3cad9 1px solid;
  color: #475569;
  margin-bottom: 20px;
  padding-left: 10px;
  border-radius: 7px;
`
