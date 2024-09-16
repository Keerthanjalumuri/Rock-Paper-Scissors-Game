import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import Buttons from '../Buttons'
import GameResultView from '../GameResultView'
import 'reactjs-popup/dist/index.css'
import {
  MainContainer,
  ScoreContainer,
  ItemsContainer,
  Heading,
  ScoreCardContainer,
  ScoreSpan,
  ParagraphScore,
  ItemsImagesContainer,
  PlayAgainButton,
  PopUpContainer,
  PopUpButton,
  RulesImageContainer,
  RulesImage,
  CloseLineContainer,
  CloseLineButton,
} from './styledComponents'

class Game extends Component {
  state = {
    showResult: false,
    myChoice: {},
    apponentChoice: {},
    score: 0,
    resultMessage: '',
  }

  onClickPlayAgain = () => {
    this.setState({showResult: false})
  }

  onGetResult = () => {
    const {myChoice, apponentChoice, resultMessage} = this.state
    return (
      <GameResultView
        myChoice={myChoice}
        apponentChoice={apponentChoice}
        resultMessage={resultMessage}
        playAgain={this.onClickPlayAgain}
      />
    )
  }

  onGetButtonId = (id, image) => {
    const {choicesList} = this.props
    const randomNumber = Math.floor(Math.random() * choicesList.length)
    const opponentChoice = choicesList[randomNumber]
    const {id: opponentId} = opponentChoice

    let resultMessage = ''
    let scoreChange = 0

    if (id === opponentId) {
      resultMessage = 'IT IS DRAW'
    } else if (
      (id === 'ROCK' && opponentId === 'SCISSORS') ||
      (id === 'PAPER' && opponentId === 'ROCK') ||
      (id === 'SCISSORS' && opponentId === 'PAPER')
    ) {
      resultMessage = 'YOU WON'
      scoreChange = 1
    } else {
      resultMessage = 'YOU LOSE'
      scoreChange = -1
    }

    this.setState(prevState => ({
      showResult: true,
      myChoice: {id, image},
      apponentChoice: opponentChoice,
      score: prevState.score + scoreChange,
    }))
  }

  onGetImages = () => {
    const {choicesList} = this.props
    return (
      <ItemsImagesContainer>
        {choicesList.map(eachItem => (
          <Buttons
            key={eachItem.id}
            buttonDetails={eachItem}
            onGetId={this.onGetButtonId}
          />
        ))}
      </ItemsImagesContainer>
    )
  }

  render() {
    const {showResult, score, myChoice, apponentChoice} = this.state
    return (
      <MainContainer>
        <ScoreContainer>
          <ItemsContainer>
            <Heading>
              Rock <br /> Paper <br /> Scissors <br />
            </Heading>
          </ItemsContainer>
          <ScoreCardContainer>
            <ParagraphScore>Score</ParagraphScore>
            <ScoreSpan>{score}</ScoreSpan>
          </ScoreCardContainer>
        </ScoreContainer>
        {showResult ? this.onGetResult() : this.onGetImages()}
        <PopUpContainer>
          <Popup modal trigger={<PopUpButton type="button">Rules</PopUpButton>}>
            {close => (
              <RulesImageContainer>
                <CloseLineContainer>
                  <CloseLineButton type="button" onClick={() => close()}>
                    <RiCloseLine />
                  </CloseLineButton>
                </CloseLineContainer>
                <RulesImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </RulesImageContainer>
            )}
          </Popup>
        </PopUpContainer>
      </MainContainer>
    )
  }
}

export default Game
