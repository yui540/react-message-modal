import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import MessageModal from '../src/MessageModal'

const Content = () => (
  <div>
    <h1>はじめまして。</h1>
    <p>はじめして。yui540です。</p>
  </div>
)
const className = 'message-modal'
const title = 'メッセージが届いています。'
const fontColor = '#5d3523'
const okColor = '#90bdbd'
const cancelColor = '#ea8b98'
const mainColor = '#e4d6ce'
const subColor = '#ffffff'
const onClose = () => console.log('close')
const sp = true
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

storiesOf('MessageModal', module)
  .add('最低限のprops渡す', () => (
    <MessageModal title={title}>
      <Content />
    </MessageModal>
  ))
  .add('全てのpropsを付与（かつsp版）', () => (
    <MessageModal {...props}>
      <Content />
    </MessageModal>
  ))
