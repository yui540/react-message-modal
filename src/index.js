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
  margin-bottom: 10px;
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

const description = `
  はじめまして。yui540です。
  ここ最近は更新が止まっていましたが、
  個人活動は続けていきます。
  このコンポーネントは、npmで配布しています。
`.replace(/^\n/, '')

// props
const className = 'message-modal'
const title = 'メッセージが届いています。'
const fontColor = '#5d3523'
const okColor = '#90bdbd'
const cancelColor = '#ea8b98'
const mainColor = '#e4d6ce'
const subColor = '#ffffff'
const onClose = () => console.log('close')
const sp = !(window.innerWidth > 760)
const props = {
  title, // [type: string] メッセージモーダルのタイトル
  fontColor, // [type: string][options] モーダルのタイトル色
  okColor, // [type: string][options] OKボタンの色
  cancelColor, // [type: string][options] キャンセルボタンの色
  mainColor, // [type: string][options] モーダルのメインカラー
  subColor, // [type: string][options] モーダルのサブカラー
  onClose, // [type: func][options] モーダルを閉じた時に呼ばれる関数
  sp, // [type: bool][options] スマートフォンか否か
}
/*
各色のデフォルトの値は下記の通り

fontColor = '#5d3523
okColor = '#90bdbd'
cancelColor = '#ea8b98'
mainColor = '#e4d6ce'
subColor = '#ffffff'
*/

render(
  <Container>
    <MessageModal {...props}>
      <Wrapper>
        <Title>はじめまして。</Title>
        <Description>{description}</Description>
      </Wrapper>
    </MessageModal>
  </Container>,
  document.querySelector('#root')
)
