# @yui540/react-message-modal

『メッセージが届いています。』

デモサイトは[こちら](https://yui540-react-message-modal.netlify.com/)

![demo](./res/demo.gif)

- npm
  - [@yui540/react-message-modal](https://www.npmjs.com/package/@yui540/react-message-modal)
- 開発者
  - yui540
  - [Twitter: @yui540](https://twitter.com/yui540)
  - [HP](https://yui540.graphics/)

## 使い方

まず、自身のプロジェクトに`@yui540/react-message-modal`をインストールしてください。

```bash
$ npm i @yui540/react-message-modal -S
```

あとは、自身のプロジェクトの組み込みたい箇所にコンポーネントをマウントしてください。

props 等の詳細は下記のソースコードのコメントをご参考ください。

```javascript
import React from 'react'
import { render } from 'react-dom'

// MessageModalに渡すprops一覧です
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
  title,       // [type: string] メッセージモーダルのタイトル
  fontColor,   // [type: string][options] モーダルのタイトル色
  okColor,     // [type: string][options] OKボタンの色
  cancelColor, // [type: string][options] キャンセルボタンの色
  mainColor,   // [type: string][options] モーダルのメインカラー
  subColor,    // [type: string][options] モーダルのサブカラー
  onClose,     // [type: func][options] モーダルを閉じた時に呼ばれる関数
  sp,          // [type: bool][options] スマートフォンか否か
  className,   // [type: string][options] class名
}

/*
各色のデフォルトの値は下記の通り

fontColor   = '#5d3523
okColor     = '#90bdbd'
cancelColor = '#ea8b98'
mainColor   = '#e4d6ce'
subColor    = '#ffffff'
*/

render(
  <MessageModal {...props}> // MessageModalの子要素がメッセージの内容になります
    <div>
      <h1>はじめまして。</h1>
      <p>はじめまして。yui540です。</p>
    </div>
  </MessageModal>,
  document.querySelector('#root')
)
```
