<template>
  <z-view>
    <iframe slot="media" width="100%" height="100%" src="https://www.youtube.com/embed/aJOTlE1K90k" frameborder="0"
      allowfullscreen></iframe>
    Channel 9

    <div slot="extension">
      <z-spot v-for="(device, index) in devices" :button="(device.name !== 'AC' && device.name !== 'vol')"
        :knob="(device.name === 'AC' || device.name === 'vol')" v-bind.sync="device.temp"
        :angle="1 + (180 / (devices.length - 1) * index)" :distance="180" size="l" :to-view="device.view"
        :label="channel" :key="'dev_' + index">
        <i :class="device.icon"></i>
        <z-spot slot="extension" button :angle="-45" size="xxs" :style="
          device.state === 'on'
            ? 'border-color: green; background-color: green;'
            : 'border-color: red; background-color: red;'
        ">
        </z-spot>
      </z-spot>
      <z-spot button @click.native="onClick" v-bind:class="status ? 'success' : 'fail'" :distance="110" :angle="-45"
        size="s">
        <i class="fa fa-power-off"></i>
      </z-spot>

    </div>
  </z-view>
</template>
<script>
/*eslint-disable*/
export default {
  data() {
    return {
      items: [
        { name: "tv", state: "on", vol: 14, bright: 30, channel: "3" },
        { name: "lights", state: "on", color: "red" },
        { name: "lights", state: "on", color: "green" },
        { name: "lights", state: "off", color: "white" },
        { name: "Air", state: "on", temp: 29 },
        { name: "Camera", state: "off" },
      ],
      status: true,
      devices: [
        {
          name: "AC",
          state: "on",
          temp: { qty: 24, unit: "channel", min: 1, max: 32 },
        },
        {
          name: "vol",
          state: "on",
          temp: { qty: 5, unit: "vol", min: 1, max: 10 },
        }

      ]

    };
  },
  computed: {
    retrieveParams() {
      if (this.$zircle.getParams() !== undefined) {
        return this.$zircle.getParams().room;
      }
    },
  },

  methods: {
    onClick(e) {
      this.status = !this.status;
    },
  },
};
</script>

