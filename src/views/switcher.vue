<template>
    <div class="m-switch-wrap">
        <div @click="disabled ? e => e.preventDefault() : onSwitch()"
            :class="['m-switch', { 'switch-checked': checked, 'disabled': disabled }]">
            <div :class="['u-switch-inner', checked ? 'inner-checked' : 'inner-unchecked']">{{ checked ? checkedInfo :
                    uncheckedInfo
            }}</div>
            <div :class="['u-node', { 'node-checked': checked }]"></div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Switcher',
  props: {
    defaultChecked: { // ��ʼ�Ƿ�ѡ��
      type: Boolean,
      default: false
    },
    checkedInfo: { // ѡ��ʱ������
      type: [Number, String],
      default: null
    },
    uncheckedInfo: { // δѡ��ʱ������
      type: [Number, String],
      default: null
    },
    disabled: { // �Ƿ����
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      checked: this.defaultChecked
    }
  },
  methods: {
    onSwitch () {
      this.checked = !this.checked
      console.log('checked:', this.checked)
    }
  }
}
</script>
<style lang="less" scoped>
@themeColor: #1890FF;

.m-switch-wrap {
    height: 22px;
    min-width: 44px;
    display: inline-block;

    .m-switch {
        position: relative;
        height: 22px;
        color: rgba(0, 0, 0, .65);
        font-size: 14px;
        background: rgba(0, 0, 0, .25);
        border-radius: 100px;
        cursor: pointer;
        transition: background .36s;

        .u-switch-inner {
            display: inline-block;
            color: #fff;
            font-size: 14px;
            line-height: 22px;
            padding: 0 8px;
            transition: all .36s;
        }

        .inner-checked {
            margin-right: 18px;
        }

        .inner-unchecked {
            margin-left: 18px;
        }

        .u-node {
            position: absolute;
            top: 2px;
            left: 2px;
            width: 18px;
            height: 18px;
            background: #FFF;
            border-radius: 100%;
            cursor: pointer;
            transition: all .36s;
        }

        .node-checked {
            // ����ȼ���right: 2px; Ϊ�˻���Ч���������Ϊ��׼����ƫ��
            left: 100%;
            margin-left: -2px;
            transform: translateX(-100%);
        }
    }

    .switch-checked {
        background: @themeColor;
    }

    .disabled {
        cursor: not-allowed;
        opacity: .4;
    }
}
</style>
