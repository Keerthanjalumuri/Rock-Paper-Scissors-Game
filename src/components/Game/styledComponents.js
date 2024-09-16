import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #223a5f;
  height: 100vh;
  padding: 30px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const ScoreContainer = styled.div`
  padding: 20px;
  border: 2px solid #ffffff;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const Heading = styled.h1`
  font-family: 'roboto';
  font-size: 20px;
`

export const ItemsContainer = styled.div``

export const ScoreCardContainer = styled.div`
  margin: 15px;
  background-color: #ffffff;
  border-radius: 10px;
  width: 100px;
  padding: 5px;
`
export const ScoreSpan = styled.p`
  color: #000000;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  font-family: 'Roboto';
  margin: 0;
`

export const ParagraphScore = styled.p`
  font-family: 'roboto';
  color: #000000;
  font-weight: bold;
  text-align: center;
  margin: 0;
  font-size: 25px;
`
export const ItemsImagesContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  height: 50%;
  list-style-type: none;
  align-items: center;
`
export const PlayAgainButton = styled.button`
  border: 0;
  background-color: #ffffff;
  color: #000000;
  font-family: 'roboto';
  font-size: 15px;
  padding: 10px;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
`
export const PopUpContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
export const PopUpButton = styled(PlayAgainButton)`
  width: 100px;
`
export const RulesImageContainer = styled.div``

export const RulesImage = styled.img`
  width: 100%;
  height: 100%;
`
export const CloseLineButton = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
  font-size: 25px;
`
export const CloseLineContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`