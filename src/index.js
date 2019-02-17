import React from 'react'
import { render } from 'react-dom'
import MessageModal from './MessageModal'
import styled from 'styled-components'

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.div`
  padding: 20px;
  padding-bottom: 50px;
  padding-top: 30px;
`

const Title = styled.h3`
  font-size: 20px;
  margin: 0;
  line-height: 34px;
  color: #5d3523;
  padding: 5px;
  margin-bottom: 20px;
  text-align: center;
  border-bottom: dashed 1px #ccc;
`

const Description = styled.p`
  font-size: 13px;
  line-height: 30px;
  margin: 0;
  padding: 5px;
  color: #5d3523;
  text-align: center;
  white-space: pre-wrap;
  word-wrap: break-word;
`

const title = 'はじめまして。'
const description = `
  はじめまして。yui540です。
  ここ最近は更新が止まっていましたが、
  個人活動は続けていきます。
  このコンポーネントは、npmで配布しています。
`.replace(/^\n/, '')

render(
  <Container>
    <MessageModal
      title='メッセージが届いています'
      onClose={() => console.log('close')}>
      <Wrapper>
        <Title>はじめまして。</Title>
        <Description>{description}</Description>
      </Wrapper>
    </MessageModal>
  </Container>,
  document.querySelector('#root')
)
