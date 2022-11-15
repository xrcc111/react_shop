import React from 'react'
import './index.less'

export default function BackTop(props) {
  const { visible, back } = props
  return (
    <div className='back-top'
    onClick={ () => back() }
    style={
      visible ? { visibility: 'visible' } : { visibility: 'hidden' }
    }>
      <i className='iconfont icon-arrowup'></i>
    </div>
  )
}
