import { Result, Button, FloatingPanel, List } from 'antd-mobile'
import {
  FrownFill,
  FrownOutline,
  SmileOutline,
  SmileFill,
} from 'antd-mobile-icons'
import { fieldNameMap } from './const'

export function S3(props) {
  const { result, fields } = props.result
  const retMap = val => {
    if (val <= 0.8) {
      return {
        icon: <FrownFill color='#333' />,
        title: '很惨',
        description: '你是真的很惨，这个B班今天就上到这里⑧',
      }
    }
    if (val <= 1.5) {
      return {
        icon: <FrownOutline />,
        title: '一般',
        description: '一般般，只有上这个班才能维持生活这样子',
      }
    }
    if (val <= 2.0) {
      return {
        icon: <SmileOutline />,
        title: '爽',
        description: '爽，但不是很爽，辞职的时候可能会多犹豫一会儿',
      }
    }
    return {
      icon: <SmileFill />,
      title: '爽飞了',
      description: '爽爆，公司倒闭了我都不会辞职！',
    }
  }

  const anchors = [100, window.innerHeight * 0.4, window.innerHeight * 0.8]

  return (
    <div className='s3'>
      <Result {...retMap(result)} />
      <Button block onClick={props.init}>
        返回首页
      </Button>
      <FloatingPanel anchors={anchors}>
        <div style={ {textAlign: 'center', color: '#999', padding: '1em'} }>查看提交结果</div>
        <List>
          {Object.keys(fields).map(key => {
            return (
              <List.Item key={key}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}>
                  <span>{fieldNameMap[key].label}</span>
                  <span>{fieldNameMap[key].formatter(+fields[key])}</span>
                </div>
              </List.Item>
            )
          })}
        </List>
      </FloatingPanel>
    </div>
  )
}

export default {
  S3,
}
