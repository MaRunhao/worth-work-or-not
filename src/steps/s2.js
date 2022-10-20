import { Form, Input, Selector, Checkbox, Button } from 'antd-mobile'
import { useState } from 'react';
import { fieldNameMap } from './const';

export function S2 (props) {
  const [form] = Form.useForm()

  const submit = (values) => {
    console.log(form)
    const zh = 1 * +values.envRatio * +values.sexRatio * +values.mateRatio
    let ret1 = (values.dailySalary * zh) / (35 * (+values.workHours + +values.trafficHours - 0.5 * +values.touchFishHours) * +values.eduRatio)
    let ret2 = ret1 * (values.before830 ? 0.95 : 1) * (values.before800 ? 0.95 : 1)
    props.submit({result: ret2, fields: form.getFieldsValue()})
    props.next()
  }

  const eduMap = [
    { label: '专科及以下', value: 0.8 },
    { label: '普通本科', value: 1.0 },
    { label: '211本及以上', value: 1.2 },
    { label: '普通硕士', value: 1.4 },
    { label: '211硕及以上', value: 1.6 },
    { label: '普通博士', value: 1.8 },
    { label: '211博及以上', value: 2.0 },
  ]

    return <div className="s2">
        <Form 
            form={form}
            layout='horizontal' 
            footer={
                <Button block type='submit' color='primary'>提交</Button>
            }
            style={{
                '--prefix-width': '4.5em'
            }}
            onFinish={submit}
        >
            <Form.Item name="dailySalary" label={fieldNameMap['dailySalary'].label} help="单位为元 (你又不是爽子)" rules={[{required: true, message: '不能为空'}].label}>
                <Input type="number" min={0} />
            </Form.Item>
            <Form.Item name="workHours" label={fieldNameMap['workHours'].label} rules={[{required: true, message: '不能为空'}].label}>
                <Input type="number" min={0} max={24} />
            </Form.Item>
            <Form.Item name="trafficHours" label={fieldNameMap['trafficHours'].label} rules={[{required: true, message: '不能为空'}].label}>
                <Input type="number" min={0} max={24} />
            </Form.Item>
            <Form.Item name="touchFishHours" label={fieldNameMap['touchFishHours'].label} rules={[{required: true, message: '不能为空'}].label}>
                <Input type="number" min={0} max={24} />
            </Form.Item>

            <Form.Item name="eduRatio" label={fieldNameMap['eduRatio'].label}>
                <Selector
                    options={eduMap}
                    initialValues={[1.0]}
                />
            </Form.Item>
            <Form.Item name="envRatio" label={fieldNameMap['envRatio'].label}>
                <Selector
                    options={[
                        {label: '偏僻地区', value: 0.8 },
                        {label: '工厂户外', value: 0.9 },
                        {label: '普通', value: 1.0 },
                        {label: '体制内', value: 1.1 },
                    ]}
                    initialValues={[1.0]}
                />
            </Form.Item>
            <Form.Item name="sexRatio" label={fieldNameMap['sexRatio'].label} help="得好看的异性.label">
                <Selector
                    options={[
                        {label: '没有', value: 0.9 },
                        {label: '不多不少', value: 1.0 },
                        {label: '很多', value: 1.1 },
                    ]}
                    initialValues={[1.0]}
                />
            </Form.Item>
            <Form.Item name="mateRatio" label={fieldNameMap['mateRatio'].label}>
                <Selector
                    options={[
                        {label: 'SB很多', value: 0.95 },
                        {label: '一般', value: 1.0 },
                        {label: '优秀很多', value: 1.1 },
                    ]}
                    initialValues={[1.0]}
                />
            </Form.Item>
            <Form.Item name="before830" label={fieldNameMap['before830'].label}>
                <Checkbox value={0.95} />
            </Form.Item>
            <Form.Item name="before800" label={fieldNameMap['before800'].label}>
                <Checkbox value={0.95} />
            </Form.Item>
        </Form>
    </div>
}
export default {
    S2
}