import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux/es/exports'
import { useNavigate } from 'react-router-dom'
import { Collapse, Image, Swiper } from 'antd-mobile'
import { getSceneById } from '@/api/home'
import { rootRouter } from '@/routers'
import './index.less'

export default function Scenario() {
  const navigate = useNavigate();
  // 从redux数组中获取数据
  const { menuArray } = useSelector(state => state.menu)
  const [scenarios, setScenario] = useState([])

  // 存储应用场景的轮播list
  const [sceneWipers, setSceneWipers] = useState([])
  useEffect(() => {
    if(menuArray.length === 0) {
      return
    }else {
      const scenarioList = menuArray.filter(i => i.catalogName === '应用场景')
      scenarioList.length !== 0 && setScenario(scenarioList[0].children)
      const catalogId = scenarioList[0].children.catalogId || 75
      _getSceneById(catalogId)
    }
  },[menuArray])

  // 获取应用场景详情
  const  _getSceneById = (catalogId) => {
    getSceneById(catalogId).then(res => {
      if(res.code === 200) {
        const { rows } = res
        setSceneWipers(rows)
      }
    }).catch(err => {
      throw new Error(err)
    })
  }
  // 控制面板改变
  const handelChange = (v) => {
    if(!v) return
     _getSceneById(v)
  }

  // 轮播
  const handleScenes = (value) => {
    const { catalogId } = value
    navigate(`/scene?id=${catalogId}`)
  }
  return (
    <div className= 'scenario'>
      <h1 className='title'>应用场景</h1>
      <div className='info'> 针对不同的行业属性和业务需求，打造专属的、个性化应用场景 </div>
      <Collapse className= 'collapse' accordion defaultActiveKey={'75'}  onChange = { handelChange }>
        {
          scenarios.map( i => <Collapse.Panel 
           title = { 
             <div className= 'usePanel'> 
             <Image className='image' src= {import.meta.env.VITE_BASEURL + i.icon}></Image>
             <p className= 'desc'>{i.catalogName}</p>
             </div>
             } 
             key={ i.catalogId }
             >
        {
          sceneWipers.length !== 0 && (
            <Swiper>
              {
                sceneWipers.map(i => <Swiper.Item 
                  key={ i.photo }
                  onClick = { () => handleScenes(i)}
                  >
                  <div className='banner'>
                    <Image src={ import.meta.env.VITE_BASEURL + i.photo }></Image>
                    <div className= 'bannerInfo'>
                      <p className='mainTitle'>{ i.mainTitle }</p>
                      <p className='subTitle'>{ i.subTitle }</p>
                  </div>
                  </div>
                  </Swiper.Item>
                  )
              }
            </Swiper>
          )
        }
       </Collapse.Panel>)
        }
      </Collapse>
    </div>
  )
}
