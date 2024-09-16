import React from 'react'
import {
  ShowResultContainer,
  ResultImagesContainer,
  ResultTextImageContainer,
  ResultText,
  ResultImageItem,
  ResultButtonContainer,
  PlayAgainButton,
} from './styledComponents'

const GameResultView = ({
  myChoice,
  apponentChoice,
  resultMessage,
  playAgain,
}) => (
  <ShowResultContainer>
    <ResultImagesContainer>
      <ResultTextImageContainer>
        <ResultText>Your Choice</ResultText>
        <ResultImageItem src={myChoice.image} alt="your choice" />
      </ResultTextImageContainer>
      <ResultTextImageContainer>
        <ResultText>Opponent Choice</ResultText>
        <ResultImageItem src={apponentChoice.imageUrl} alt="opponent choice" />
      </ResultTextImageContainer>
    </ResultImagesContainer>
    <ResultText>{resultMessage}</ResultText>
    <ResultButtonContainer>
      <PlayAgainButton type="button" onClick={playAgain}>
        PLAY AGAIN
      </PlayAgainButton>
    </ResultButtonContainer>
  </ShowResultContainer>
)

export default GameResultView
