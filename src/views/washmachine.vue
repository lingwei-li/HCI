<template>
    <z-view style="border-width: 8px" slider :progress="progress">
        <span style="color: var(--accent-text-color)">Washing machine
            <h1>{{ activeScene }}</h1>
            {{ msg }}
        </span>
        <img slot="image" src="laundry.jpg" width="100%" height="100%" style="opacity: 0.3">
        <div slot="extension">
            <z-spot v-for="(device, index) in devices" :button="device.name !== 'AC'"
                :knob="(device.name == 'Temperature' || device.name == 'Velocity')" v-bind.sync="device.temp"
                :angle="1 + (180 / (devices.length - 1) * index)" :distance="150" size="l" :to-view="device.view"
                :label="device.name" :key="'dev_' + index">
                <i :class="device.icon"></i>
                <z-spot slot="extension" button :angle="-45" size="xxs" @click="changeState(device)"
                    :style="device.state === 'on' ? 'border-color: green; background-color: green;' : 'border-color: red; background-color: red;'">
                    <button>

                    </button>
                </z-spot>
            </z-spot>
            <z-spot v-for="(scene, index) in scenes" button size="s" :angle="225 + (90 / (scenes.length - 1) * index)"
                :distance="125" :label="scene.name" label-pos="top" :key="'scn_' + index"
                @click.native="showMe(scene.name)">
                <i :class="scene.icon"></i>
            </z-spot>
        </div>
    </z-view>
</template>
<script>
/*eslint-disable*/
export default {

    data() {
        return {
            progress: 0,
            msg: '',
            activeScene: '',
            devices: [

            ],
            scenes: [
                { name: 'Regular mode', state: 'deactive', icon: 'fas fa-sort' },
                { name: 'Drying mode', state: 'deactive', icon: 'fas fa-sort' },
                { name: 'Powerful mode', state: 'deactive', icon: 'fas fa-sort' },
                { name: 'OFF', state: 'deactive', icon: 'fas fa-sort' }
            ]
        }
    },
    computed: {
        retrieveParams() {
            if (this.$zircle.getParams() !== undefined) {
                return this.$zircle.getParams().room
            }
        }
    },
    methods: {
        changeState(device) {
            device.state = (device.state == 'on') ? 'off' : 'on';
        },
        log(data) {
            console.log(data)
        },
        showMe(scene) {
            if (this.activeScene !== scene) {
                this.progress = 5
                this.activeScene = scene
                this.msg = 'Activating devices...'
                var vm = this
                var id = setInterval(function () {
                    if (vm.progress >= 100) {
                        clearInterval(id)
                        vm.progress = 0
                        vm.msg = scene.msg
                    } else if (vm.progress === 40) {
                        vm.msg = 'Applying rules...'
                        if (scene === 'Regular mode') {
                            vm.devices = [
                                { name: 'Temperature', state: 'on', temp: { qty: 0, unit: 'F', min: 122, max: 176 } },
                                { name: 'Velocity', state: 'on', temp: { qty: 1, unit: 'settings', min: 1, max: 2 } },


                            ]
                        } else if (scene === 'Drying mode') {
                            vm.devices = [
                                { name: 'Temperature', state: 'on', temp: { qty: 150, unit: 'F', min: 122, max: 176 } },
                                { name: 'Velocity', state: 'off', temp: { qty: 0, unit: 'settings', min: 1, max: 2 } },


                            ]
                        } else if (scene === 'Powerful mode') {
                            vm.devices = [
                                { name: 'Temperature', state: 'on', temp: { qty: 0, unit: 'F', min: 122, max: 176 } },
                                { name: 'Velocity', state: 'on', temp: { qty: 2, unit: 'settings', min: 1, max: 2 } },


                            ]
                        } else if (scene === 'OFF') {
                            vm.devices = [
                                { name: 'Temperature', state: 'off', temp: { qty: 0, unit: 'F', min: 122, max: 176 } },
                                { name: 'Velocity', state: 'off', temp: { qty: 0, unit: 'settings', min: 1, max: 2 } },


                            ]
                        }
                        vm.progress++
                    } else {
                        vm.progress++
                    }
                }, 20)
            } else {
                this.msg = 'This scene is already activated'
            }
        }
    },
    created() {
        this.showMe('OFF')
    }
}
</script>

