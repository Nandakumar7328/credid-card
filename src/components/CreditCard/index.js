import {useState} from 'react'
import {
  MainContainer,
  CardContainer,
  CardContainerHeading,
  HrLine,
  CardImageContainer,
  NumberHeading,
  NameTitle,
  Name,
  InputFormContainer,
  InputCard,
  CardHeading,
  InputNumberText,
  InputNameText,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardHolderName, setCardHolderName] = useState('')

  const onChangeNumber = event => {
    setCardNumber(event.target.value)
  }

  const onChangeName = event => {
    setCardHolderName(event.target.value)
  }

  return (
    <MainContainer>
      <CardContainer>
        <CardContainerHeading>CREDIT CARD</CardContainerHeading>
        <HrLine />
        <CardImageContainer data-testid="creditCard">
          <NumberHeading>{cardNumber}</NumberHeading>
          <NameTitle>CARDHOLDER NAME</NameTitle>
          <Name>{cardHolderName.toUpperCase()}</Name>
        </CardImageContainer>
      </CardContainer>
      <InputFormContainer>
        <InputCard>
          <CardHeading>Payment Method</CardHeading>
          <InputNumberText
            value={cardNumber}
            onChange={onChangeNumber}
            placeholder="Card Number"
            type="text"
          />
          <InputNameText
            value={cardHolderName}
            onChange={onChangeName}
            placeholder="Cardholder Name"
            type="text"
          />
        </InputCard>
      </InputFormContainer>
    </MainContainer>
  )
}

export default CreditCard
