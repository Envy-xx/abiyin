import React, { memo} from 'react'
import { HomeLongForWrapper } from './style'
import SectionHeader from '@/components/section-header'
import ScrollView from '@/base-ui/scroll-view'

const HomeLongFor = memo((props) => {
  const {longFor} = props
  const displayData = longFor?.list || []
  return (
    <HomeLongForWrapper>
     <SectionHeader title={longFor?.title } subtitle={longFor?.subtitle} />
      <ScrollView>
          {
            displayData.map((item) => {
              return (
                <div key={item.id} className="longfor-item">
                  <div className="inner">
                    <div className="cover">
                      <img src={item.picture_url} alt="" />
                    </div>
                    <div className="info">
                      <div className="city">{item.city}</div>
                      <div className="price">均价{item.price}</div>
                    </div>
                  </div>
                </div>
              )
            })
          }
      </ScrollView>
    </HomeLongForWrapper>
  )
})

export default HomeLongFor