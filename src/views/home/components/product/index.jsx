import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux/es/exports'
import { Image, Swiper, Button } from 'antd-mobile'
import { getProductById } from '@/api/home'
import Style from './style.module.less'

export default function Product() {
  // 从redux数组中获取数据
  const { menuArray } = useSelector(state => state.menu)
 
  const [productTypes, setProductTypes] = useState([])
  // 设置默认的属性状态Tab栏切换
  const [currentIndex, setCurrentIndex] = useState(0)

  // 存走马灯的list
  const [ products, setProducts] = useState([])

  // 获取产品类型并做过滤
  const getProductTypes =  (list = menuArray || []) => {
    const arr = list.filter(i => i.catalogName === '产品')
    if(arr.length > 0 ) {
      return arr[0].children.filter(i => i.catalogName !== '其他产品')
    }
  }
  useEffect(() => {
    if(menuArray.length === 0) {
      return
    }else {
      setProductTypes(getProductTypes())
      const currentCatalogId = getProductTypes()[0].catalogId
      _getProductDetailInfo(currentCatalogId)
    }
  },[menuArray])

  // 获取数据
   const _getProductDetailInfo = (catalogId) => {
    getProductById(catalogId).then(res => {
      if(res.code === 200) {
        const { rows } = res
        setProducts(rows)
      }
    }).catch(err => {
      throw new Error(err)
    })
   }

  // 点击切换获取产品详情
  const handleClick = (current, index) => {
    setCurrentIndex(index)
    const { catalogId } = current
    _getProductDetailInfo(catalogId)
  }
  return (
    <div className= { Style.product }>
      <h1 className={ Style.title }>产品</h1>
      <div className={ Style.info }> 多年的行业积累和开拓创新，已具备一站式、全链条产品 </div>
      <div className= { Style.flex }>
        { 
        productTypes.map((item,index) => 
            <div 
              className={`${Style.block} ${ currentIndex === index ? Style.active : '' }`} 
              key={ item.catalogId } 
              onClick= {() => handleClick(item, index)}
              >
              <Image className= { Style.icon } src= { import.meta.env.VITE_BASEURL + item.icon }></Image>
              <div className= { Style.catalogName }>{ item.catalogName }</div>
            </div>)
        }
      </div>
      {
        products.length !== 0 && (
          <Swiper>
              { products.map((i, index) => <Swiper.Item key={ index }>
                <div className= { Style.content }>
                  <div className= { Style.desc }>
                    <p className= { Style.title }>{ i.mainTitle }</p>
                    <p className= { Style.detail }>{ i.content }</p>
                    <p className= { Style.button }><Button size='small' color='primary'>了解详情</Button></p>
                  </div>
                  <div className= {Style.pic}>
                    <Image src={import.meta.env.VITE_BASEURL + i.photo}></Image>
                  </div>
                </div>
              </Swiper.Item>)}
          </Swiper>)
       }
    </div>
  )
}
