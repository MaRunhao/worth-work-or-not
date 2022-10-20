export const fieldNameMap = {
  dailySalary: {
    label: '平均日薪',
    formatter: val => `${val}元`,
  },
  workHours: {
    label: '工作时长',
    formatter: val => `${val}小时`,
  },
  trafficHours: {
    label: '通勤时长',
    formatter: val => `${val}小时`,
  },
  touchFishHours: {
    label: '摸鱼时长',
    formatter: val => `${val}小时`,
  },
  eduRatio: {
    label: '学历',
    formatter: val =>
      new Map([
        [0.8, '专科及以下'],
        [1.0, '普通本科'],
        [1.2, '211本及以上'],
        [1.4, '普通硕士'],
        [1.6, '211硕及以上'],
        [1.8, '普通博士'],
        [2.0, '211博及以上'],
      ]).get(val) || '没有学历',
  },
  envRatio: {
    label: '工作环境',
    formatter: val =>
      new Map([
        [0.8, '偏僻地区'],
        [0.9, '工厂户外'],
        [1.0, '普通'],
        [1.1, '体制内'],
      ]).get(val) || '没有工作环境',
  },
  sexRatio: {
    label: '异性环境',
    formatter: val =>
      new Map([
        [0.9, '没有'],
        [1.0, '不多不少'],
        [1.1, '很多'],
      ]).get(val) || '没有异性环境',
  },
  mateRatio: {
    label: '同事环境',
    formatter: val =>
      new Map([
        [0.95, 'SB很多'],
        [1.0, '一般'],
        [1.1, '优秀很多'],
      ]).get(val) || '没同事环境',
  },
  before830: {
    label: '8点30以前上班',
    formatter: val => val === 0.95 ? '是' : '否'
  },
  before800: {
    label: '8点以前上班',
    formatter: val => val === 0.95 ? '是' : '否'
  },
}
