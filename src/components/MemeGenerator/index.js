import {Component} from 'react'

import {
  Appcontainer,
  MemeGeneratorContainer,
  Heading,
  FormMemeGenerator,
  MemeContainer,
  TextContent,
  MemeGeneratorForm,
  CustomLabel,
  CustomInput,
  CustomSelect,
  GenerateButton,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    activeFontSizeOptionId: fontSizesOptionsList[0].optionId,
    backgroundImageUrlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    backgroundImageUrl: '',
    topText: '',
    bottomText: '',
    activeFontSizeId: '',
  }

  onChangeBackGroundUrl = event => {
    this.setState({backgroundImageUrlInput: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeSelectOption = event => {
    this.setState({activeFontSizeOptionId: event.target.value})
  }

  onGenerate = event => {
    event.preventDefault()
    const {
      backgroundImageUrlInput,
      topTextInput,
      bottomTextInput,
      activeFontSizeOptionId,
    } = this.state

    this.setState({
      backgroundImageUrl: backgroundImageUrlInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      activeFontSizeId: activeFontSizeOptionId,
    })
  }

  renderMemeGenerator = () => {
    const {
      backgroundImageUrlInput,
      topTextInput,
      bottomTextInput,
      activeFontSizeOptionId,
    } = this.state

    return (
      <MemeGeneratorForm onSubmit={this.onGenerate}>
        <CustomLabel htmlFor="imageUrl">Image URL</CustomLabel>
        <CustomInput
          onChange={this.onChangeBackGroundUrl}
          value={backgroundImageUrlInput}
          type="text"
          id="imageUrl"
          placeholder="Enter the Image URL"
        />
        <CustomLabel htmlFor="topText">Top Text</CustomLabel>
        <CustomInput
          onChange={this.onChangeTopText}
          value={topTextInput}
          type="text"
          id="topText"
          placeholder="Enterthe Top Text"
        />
        <CustomLabel htmlFor="bottomText">Bottom Text</CustomLabel>
        <CustomInput
          onChange={this.onChangeBottomText}
          value={bottomTextInput}
          type="text"
          id="bottomText"
          placeholder="Enter the Bottom Text"
        />
        <CustomLabel htmlFor="fontSize">Font Size</CustomLabel>
        <CustomSelect
          id="fontSize"
          value={activeFontSizeOptionId}
          onChange={this.onChangeSelectOption}
        >
          {fontSizesOptionsList.map(each => (
            <option key={each.optionId} value={each.optionId}>
              {each.displayText}
            </option>
          ))}
        </CustomSelect>
        <GenerateButton type="submit">Generate</GenerateButton>
      </MemeGeneratorForm>
    )
  }

  renderMeme = () => {
    const {backgroundImageUrl, topText, bottomText, activeFontSizeId} =
      this.state

    return (
      <MemeContainer data-testid="meme" backgroundImage={backgroundImageUrl}>
        <TextContent fontSize={activeFontSizeId}>{topText}</TextContent>
        <TextContent fontSize={activeFontSizeId}>{bottomText}</TextContent>
      </MemeContainer>
    )
  }

  render() {
    return (
      <Appcontainer>
        <MemeGeneratorContainer>
          <Heading>Meme Generator</Heading>
          <FormMemeGenerator>
            {this.renderMeme()}
            {this.renderMemeGenerator()}
          </FormMemeGenerator>
        </MemeGeneratorContainer>
      </Appcontainer>
    )
  }
}
export default MemeGenerator
