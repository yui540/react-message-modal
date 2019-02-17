import styled from 'styled-components'
import {
  popupModal,
  hiddenModal,
  popupTitle,
  popupButton,
  slideTop,
  slideLeft,
  slideRight,
  slideBottom,
  hiddenOkButton,
  slideCancelButton,
} from './keyframes'

const RADIUS = 14
const PC_WIDTH = 380
const BAR_HEIGHT = 50
const PC_LINE_WIDTH = 4
const PC_BUTTON_SIZE = 55

export const Container = styled.div`
  width: ${PC_WIDTH}px;
  border-radius: ${RADIUS}px;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.1);
  opacity: 0;
  transition: all 0.4s ease-out 0s;

  &:hover {
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.15);
  }

  /* animation */
  animation: ${popupModal} 0.45s ease 0s forwards;

  /* モーダルを閉じる時 */
  &[data-close='true'] {
    animation: message-modal__close 0.45s ease 0s forwards;
  }
  @keyframes message-modal__close {
    from {
      transform: translateY(0%);
      opacity: 1;
    }
    to {
      transform: translateY(30%);
      opacity: 0;
    }
  }

  /* モーダルを非表示 */
  &[data-close='delete'] {
    display: none;
  }
`

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: ${BAR_HEIGHT / 2}px ${BAR_HEIGHT / 2}px ${BAR_HEIGHT}px
    ${BAR_HEIGHT / 2}px;
  border-radius: ${RADIUS}px ${RADIUS}px 0 0;
  background-color: ${props => props.mainColor};
  border-bottom: dashed ${PC_LINE_WIDTH / 2}px ${props => props.subColor};
  transition: all 0.4s cubic-bezier(0.68, 0.02, 0.25, 1) 0s;

  &[data-open='true'] {
    height: ${BAR_HEIGHT}px;
    padding: 0;
  }
`

export const Title = styled.h1`
  font-size: 14px;
  color: ${props => props.fontColor};
  line-height: 30px;
  letter-spacing: 0.2em;
  border-radius: 15px;
  padding: 0 14px;
  display: inline-block;
  background-color: ${props => props.subColor};
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.68, 0.02, 0.25, 1) 0s;

  /* animation */
  animation: ${popupTitle} 0.45s ease 0.3s forwards;

  /* メッセージを開いた時 */
  &[data-open='true'] {
    color: transparent;
    background-color: transparent;
  }
`

export const MainColumnWrapper = styled.div`
  max-height: 0;
  overflow: hidden;
  background-color: ${props => props.subColor};
  transition: all 0.4s cubic-bezier(0.68, 0.02, 0.25, 1) 0s;

  &[data-open='true'] {
    max-height: ${props => props.messageHeight}px;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
`

export const Inner = styled.div``

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${props => props.mainColor};
  height: ${BAR_HEIGHT}px;
  border-radius: 0 0 ${RADIUS}px ${RADIUS}px;
  border-top: dashed ${PC_LINE_WIDTH / 2}px ${props => props.subColor};
`

const Button = styled.button`
  appearance: none;
  border: none;
  padding: 0;
  margin: 0;
  position: relative;
  display: block;
  width: ${PC_BUTTON_SIZE}px;
  height: ${PC_BUTTON_SIZE}px;
  border-radius: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  opacity: 0;
  transition: all 0.4s ease-out 0s;

  .line {
    overflow: hidden;

    &::before,
    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    &::before {
      background-color: ${props => props.subColor};
    }
    &::after {
      background-color: ${props => props.fontColor};
    }
  }

  /* focus */
  &:focus {
    outline: none;
  }

  /* hover */
  &:hover {
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  }
`

export const OkButton = styled(Button)`
  background-color: ${props => props.okColor};
  margin-left: ${PC_BUTTON_SIZE}px;

  .line-box {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 42%;
    height: 42%;
    transform: translate(-50%, -75%) rotate(45deg);

    .line {
      position: absolute;
      right: 0;
      bottom: 0;
      border-radius: ${PC_LINE_WIDTH / 2}px;

      &:first-child {
        width: 80%;
        height: ${PC_LINE_WIDTH}px;

        &::before,
        &::after {
          transform: translateX(101%);
        }
      }
      &:last-child {
        width: ${PC_LINE_WIDTH}px;
        height: 100%;

        &::before,
        &::after {
          transform: translateY(-101%);
        }
      }
    }
  }

  /* hover */
  &:hover .line:first-child::after {
    animation: ${slideRight} 0.15s ease 0s forwards;
  }
  &:hover .line:last-child::after {
    animation: ${slideTop} 0.15s ease 0.15s forwards;
  }

  /* animation */
  animation: ${popupButton} 0.45s ease 0.4s forwards;
  .line:first-child::before {
    animation: ${slideRight} 0.2s ease 0.8s forwards;
  }
  .line:last-child::before {
    animation: ${slideTop} 0.2s ease 1s forwards;
  }

  /* メッセージを開いた時 */
  &[data-open='true'] {
    pointer-events: none;
    animation: ${hiddenOkButton} 0.4s ease 0s;
  }
`

export const CancelButton = styled(Button)`
  background-color: ${props => props.cancelColor};

  .line {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50%;
    height: ${PC_LINE_WIDTH}px;
    border-radius: ${PC_LINE_WIDTH / 2}px;

    &::before,
    &::after {
      transform: translateX(-101%);
    }
    &:first-child {
      transform: translate(-50%, -50%) rotate(45deg);
    }
    &:last-child {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }

  /* hover */
  &:hover .line:first-child::after {
    animation: ${slideRight} 0.15s ease 0s forwards;
  }
  &:hover .line:last-child::after {
    animation: ${slideRight} 0.15s ease 0.15s forwards;
  }

  /* animation */
  animation: ${popupButton} 0.45s ease 0.5s forwards;
  .line:first-child::before {
    animation: ${slideRight} 0.2s ease 1.1s forwards;
  }
  .line:last-child::before {
    animation: ${slideRight} 0.2s ease 1.3s forwards;
  }

  /* メッセージを開いた時 */
  &[data-open='true'] {
    opacity: 1;
    transform: translate(100%, -50%);
    animation: ${slideCancelButton} 0.4s ease 0s;
  }
`
