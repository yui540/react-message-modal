import { keyframes } from 'styled-components'

export const slideRight = keyframes`
  from { transform: translateX(-100%); }
  to   { transform: translateX(0%); }
`

export const slideLeft = keyframes`
  from { transform: translateX(100%); }
  to   { transform: translateX(0%); }
`

export const slideTop = keyframes`
  from { transform: translateY(100%); }
  to   { transform: translateY(0%); }
`

export const slideBottom = keyframes`
  from { transform: translateY(-100%); }
  to   { transform: translateY(0%); }
`

export const popupModal = keyframes`
  0%   { transform: translateY(50%); opacity: 0; }
  50%  { transform: translateY(-10%); opacity: 1; }
  100% { transform: translateY(0%); opacity: 1; }
`

export const popupTitle = keyframes`
  0%   { transform: translateY(100%); opacity: 0; }
  50%  { transform: translateY(-25%); opacity: 1; }
  100% { transform: translateY(0%); opacity: 1; }
`

export const popupButton = keyframes`
  0%   { transform: translateY(50%); opacity: 0; }
  50%  { transform: translateY(-70%); opacity: 1; }
  100% { transform: translateY(-50%); opacity: 1; }
`

export const hiddenOkButton = keyframes`
  from { transform: translateY(-50%) scale(1); opacity: 1; }
  to   { transform: translateY(-50%) scale(0); opacity: 0; }
`

export const slideCancelButton = keyframes`
  from { transform: translate(0, -50%); opacity: 1; }
  to   { transform: translate(100%, -50%); opacity: 1; }
`
