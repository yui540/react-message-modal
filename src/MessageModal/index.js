import React, { Component } from 'react'
import PropTypes from 'proptypes'
import {
  Container,
  HeaderWrapper,
  Title,
  MainColumnWrapper,
  Inner,
  FooterWrapper,
  OkButton,
  CancelButton,
} from './styles'
import {
  $fontColor,
  $okColor,
  $cancelColor,
  $mainColor,
  $subColor,
} from './colors'

const Header = ({
  title,
  fontColor = $fontColor,
  mainColor = $mainColor,
  subColor = $subColor,
  isOpenMessage,
}) => (
  <HeaderWrapper
    data-open={isOpenMessage}
    mainColor={mainColor}
    subColor={subColor}>
    <Title data-open={isOpenMessage} subColor={subColor} fontColor={fontColor}>
      {title}
    </Title>
  </HeaderWrapper>
)

const MainColumn = ({
  subColor = $subColor,
  fontColor = $fontColor,
  isOpenMessage,
  children,
  getMessageHeight,
  messageHeight,
}) => (
  <MainColumnWrapper
    messageHeight={messageHeight}
    data-open={isOpenMessage}
    subColor={subColor}
    fontColor={fontColor}>
    <Inner className='message-modal__inner'>{children}</Inner>
  </MainColumnWrapper>
)

const Footer = ({
  fontColor = $fontColor,
  okColor = $okColor,
  cancelColor = $cancelColor,
  mainColor = $mainColor,
  subColor = $subColor,
  isOpenMessage,
  closeModal,
  openMessage,
  sp,
}) => (
  <FooterWrapper mainColor={mainColor} subColor={subColor}>
    <CancelButton
      sp={sp}
      data-open={isOpenMessage}
      onClick={closeModal}
      cancelColor={cancelColor}
      subColor={subColor}
      fontColor={fontColor}>
      <div className='line-box'>
        <div className='line' />
        <div className='line' />
      </div>
    </CancelButton>
    <OkButton
      sp={sp}
      data-open={isOpenMessage}
      onClick={openMessage}
      okColor={okColor}
      subColor={subColor}
      fontColor={fontColor}>
      <div className='line-box'>
        <div className='line' />
        <div className='line' />
      </div>
    </OkButton>
  </FooterWrapper>
)

export default class MessageModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      messageHeight: 0,
      isClose: false,
      isOpenMessage: false,
    }
  }

  componentDidMount() {
    const height = document
      .querySelector('.message-modal__inner')
      .getBoundingClientRect().height

    this.setState({ messageHeight: height })
  }

  getMessageHeight(height) {
    this.setState({ messageHeight: height })
  }

  openMessage() {
    this.setState({ isOpenMessage: true })
  }

  closeModal() {
    if (this.state.isOpenMessage) this.setState({ isOpenMessage: false })
    else this.setState({ isClose: true })
  }

  onCloseModal() {
    this.setState({ isClose: 'delete' })

    this.props.onClose && this.props.onClose()
  }

  render() {
    const { sp = false, className = 'message-modal' } = this.props
    const { isClose } = this.state

    return (
      <Container
        className={className}
        sp={sp}
        data-close={isClose}
        onAnimationEnd={e => {
          if (e.animationName === 'message-modal__close') this.onCloseModal()
        }}>
        <Header {...this.props} {...this.state} />
        <MainColumn
          {...this.props}
          {...this.state}
          getMessageHeight={this.getMessageHeight.bind(this)}
        />
        <Footer
          {...this.props}
          {...this.state}
          openMessage={this.openMessage.bind(this)}
          closeModal={this.closeModal.bind(this)}
        />
      </Container>
    )
  }
}

MessageModal.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  fontColor: PropTypes.string,
  okColor: PropTypes.string,
  cancelColor: PropTypes.string,
  mainColor: PropTypes.string,
  subColor: PropTypes.string,
  onClose: PropTypes.func,
  sp: PropTypes.bool,
}
