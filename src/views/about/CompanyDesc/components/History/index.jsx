import React, { useEffect, useState } from 'react'
import './history.less'

export default function History() {

  const events = [
    {
      year: '2022年',
      events: ['泰凌携手达朴汇联共推基于蓝牙低功耗的区块链数据上链方案', '达朴汇联荣获“瞪羚培育企业”称号', '达朴汇联入选“全球高相关度区块链授']
    },
    {
      year: '2021年',
      events: ['获得中国最具价值的数据智能产品/解决方案20强', '隐私计算平台完成国家网信办备案', '中标加拿大联邦政府第一个区块链项目', '获得全球高度相关区块链授权发明专利Top81']
    },
    {
      year: '2020年',
      events: ['开发智慧城市车路协同系统', '获得中国隐私计算30强', '获得区块链+隐私计算创新十强', '进入安徽省新基建名录']
    },
    {
      year: '2019年',
      events: ['达朴链网成为国家网信办备案的首个链网类项目', '行业内首次将区块链技术应用于联通eSIM', '成为中国联通5G战略合作伙伴', '推出基于达朴链网的供应链金融系统']
    },
    {
      year: '2018年',
      events: ['获得首个物联网隐私保护项目', '获得首个智慧城市物联网项目', '自主研发区块链框架Dappley', '撰稿首份国家级行业白皮书', '完成千万天使轮融资']
    },
    {
      year: '2017年',
      events: ['合肥达朴汇联科技有限公司成立', '加拿大温哥华研发中心成立']
    },
    {
      year: '2015年',
      events: ['切入边缘计算与区块链', '开发世界首家基于区块链的智慧照明系统']
    },
  ]

  const listEvents = events.map(event => {
    return (
      <div className='history-content' key={event.year.toString()}>
        <div className='history-title'>{event.year}</div>
        <div>{event.events.map((i, index) => <div key={index}>{i}</div>)}</div>
      </div>
    )
  })

  return (
    <div>
      <div>{listEvents}</div>
    </div>
  )
}
