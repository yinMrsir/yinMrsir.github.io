<template>
  <div>
    <FromInput v-model="nickname" :options="{
      title: '昵称',
      textAlign: 'right'
    }"></FromInput>
    <FromSwitch v-model="sex" :options="{
      title: '性别',
      defaultValue: sex,
      list: [
        {name: '男', value: 1, icon: require('../../assets/images/icon_male_n@3x.png'), activeIcon: require('../../assets/images/icon_male_h@3x.png')},
        {name: '女', value: 2, icon: require('../../assets/images/icon_female_n@3x.png'), activeIcon: require('../../assets/images/icon_female_h@3x.png')}
      ]
    }"></FromSwitch>
    <FromSelect v-model="age" :slots="ageList" title="年龄"></FromSelect>
    <FromSelect v-model="height" :slots="heightList" title="身高"></FromSelect>
    <FromSelect v-model="weight" :slots="weightList" title="体重"></FromSelect>
    <FromSelect v-model="stature" :slots="statureList" title="三围" placeholder="胸围/腰围/臀围"></FromSelect>
    <FromSelect v-model="education" :slots="educationList" title="学历" valueKey="name"></FromSelect>
    <FromSelect v-model="obtain" :slots="obtainList" title="从业年龄"></FromSelect>
    <FromInput v-model="speciality" :options="{
      title: '特长',
      placeholder: '仅限3个词，用；隔开',
      textAlign: 'right'
    }"></FromInput>
    <FromTextArea v-model="say" :options="{
      title: '媒主说',
      disabled: false,
      placeholder: '介绍下自己，让金主更了解你~'
    }"></FromTextArea>
    <FromUploadImg v-model="imgList" :multiple="true" :max="4"></FromUploadImg>
    <div class="padding flex flex-direction">
      <button @click="submit" class="cu-btn bg-red margin-tb-sm lg">提交</button>
    </div>
  </div>
</template>

<script>
  import {FromInput, FromSwitch, FromSelect, FromTextArea, FromUploadImg} from '@/components'

  export default {
    components: {
      FromInput,
      FromSwitch,
      FromSelect,
      FromTextArea,
      FromUploadImg
    },
    data() {
      return {
        nickname: '',
        sex: 1,
        age: '',
        ageList: [
          {
            flex: 1,
            defaultIndex: 3,
            values: ['18', '19', '20', '21', '22', '23'],
            textAlign: 'center'
          }
        ],
        height: '',
        heightList: [
          {
            flex: 1,
            defaultIndex: 3,
            values: ['160', '165', '170', '175', '180', '185以上'],
            textAlign: 'center'
          }
        ],
        weight: '',
        weightList: [
          {
            flex: 1,
            defaultIndex: 3,
            values: ['45', '46', '47', '48', '49', '50'],
            textAlign: 'center'
          }
        ],
        stature: '',
        statureList: [
          {
            flex: 1,
            defaultIndex: 3,
            values: ['50', '51', '52', '53', '54', '55'],
            textAlign: 'center'
          },
          {
            flex: 1,
            defaultIndex: 3,
            values: ['30', '31', '32', '33', '34', '35'],
            textAlign: 'center'
          },
          {
            flex: 1,
            defaultIndex: 3,
            values: ['40', '41', '42', '43', '44', '45'],
            textAlign: 'center'
          }
        ],
        education: '',
        educationList: [
          {
            flex: 1,
            defaultIndex: 1,
            values: [{v: 0, name: '大专'}, {v: 1, name: '本科'}, {v: 2, name: '研究生'}],
            textAlign: 'center'
          }
        ],
        obtain: '',
        obtainList: [
          {
            flex: 1,
            defaultIndex: 3,
            values: ['1', '2', '3', '4', '5', '6'],
            textAlign: 'center'
          }
        ],
        speciality: '',
        say: '',
        imgList: []
      }
    },
    methods: {
      submit() {
        console.log(this.$data)
      }
    }
  }
</script>