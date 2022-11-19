import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux/es/exports'
import { useNavigate } from 'react-router-dom'
import { Image, Swiper, Button, Ellipsis } from 'antd-mobile'
import { getProductById } from '@/api/home'
import { rootRouter } from '@/routers'
import Style from './style.module.less'

export default function Product() {
  // 从redux数组中获取数据
  const { menuArray } = useSelector(state => state.menu)
  
  const [productTypes, setProductTypes] = useState([])
  // 设置默认的属性状态Tab栏切换
  const [currentIndex, setCurrentIndex] = useState(0)

  // 存走马灯的list
  const [ products, setProducts] = useState([])

  // 存其他产品的
  const [otherProducts, setOtherProducts] = useState([])

  const navigate = useNavigate();

  // 获取产品类型并做过滤
  const getProductTypes =  (list = menuArray || []) => {
    const arr = list.filter(i => i.catalogName === '产品')
    if(arr.length > 0 ) {
      const other =  arr[0].children.filter(i => i.catalogName === '其他产品')
      _getOtherProducts(other[0].catalogId)
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

  // 获取核心产品数据
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

  //  获取其他产品
  const _getOtherProducts = (catalogId) => {
    getProductById(catalogId).then(res => {
      if(res.code === 200) {
        const { rows } = res
        setOtherProducts(rows)
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

  // 跳转详情页普通产品
  const goDetail = (item) => {
    const { catalogId } = item
    navigate(`/detail?id=${catalogId}`)
  }
  // 其他产品
  const goDetailbyOther = (item) => {
    const {catalogId} = item
    navigate(`/detail?id=${catalogId}`)
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
          <Swiper style={{minHeight:'40px'}}>
              { products.map((i, index) => <Swiper.Item key={ index } onClick={ ()=> goDetail(i) } >
                <div className= { Style.content }>
                  <div className= { Style.desc }>
                    <p className= { Style.title }>{ i.mainTitle }</p>
                    <p className= { Style.detail }>{ i.content }</p>
                  </div>
                  <div className= {Style.pic}>
                    <Image src={import.meta.env.VITE_BASEURL + i.photo}></Image>
                  </div>
                </div>
              </Swiper.Item>)}
          </Swiper>)
       }
       {
        otherProducts.length !== 0 && (
          <Swiper indicator={() => null} className= { Style.swiperOther}  stuckAtBoundary={false} slideSize={70} defaultIndex={3}>
            {
              otherProducts.map((i, index) => <Swiper.Item 
                onClick={ () => goDetailbyOther(i) }
                key={ index }>
                <div className= { Style.other }>
                  <div className={ Style.info }>
                    <p className= {Style.title}>{ i.mainTitle }</p>
                    <Ellipsis direction='end' rows={2} content={ i.content} />
                    <div className={Style.flex}>
                      <Image className={ Style.image } src={ import.meta.env.VITE_BASEURL + i.photo }></Image>
                      <i className={ Style.count }>{ index + 1 }</i>
                    </div>
                  </div>
                </div>
              </Swiper.Item>)
            }
          </Swiper>
        )
       }
    </div>
  )
}
