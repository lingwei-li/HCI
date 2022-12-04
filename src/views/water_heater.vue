<template>
    <z-view style="border-width: 8px">
        <span style="color: var(--accent-text-color)">Water heater
        </span>
        <img slot="image" src="heater.jpg" width="100%" height="100%" style="opacity: 0.3">
        <div slot="extension">
            <z-spot :button="device.name !== 'Temperature'" :knob="device.name === 'Temperature'"
                v-bind.sync="device.temp" :angle="0" :distance="180" size="l" :to-view="device.view" :label="channel"
                :key="'dev_' + index">
                <i :class="device.icon"></i>
                <z-spot slot="extension" button :angle="-45" size="xxs" :style="
                    device.state === 'on'
                        ? 'border-color: green; background-color: green;'
                        : 'border-color: red; background-color: red;'
                ">
                </z-spot>
            </z-spot>
            <z-spot button @click.native="onClick" v-bind:class="status ? 'success' : 'fail'" :distance="110"
                :angle="-45" size="s">
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
            status: true,
            device:
            {
                name: "Temperature",
                state: "on",
                temp: { qty: 24, unit: "f", min: 18, max: 32 },
            },

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

