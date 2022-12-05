<template>
    <z-view style="border-width: 8px" slider :progress="progress">
        <span style="color: var(--accent-text-color)">refrigerator
            <h1>{{ activeScene }}</h1>
            {{ msg }}
        </span>
        <img slot="image" src="fridge.jpg" width="100%" height="100%" style="opacity: 0.3">
        <div slot="extension">
            <z-spot v-for="(device, index) in devices" :button="device.name !== 'AC'"
                :knob="(device.name == 'Freezer layer' || device.name == 'Refrigerated layer' || device.name == 'Fresh-keeping layer')"
                v-bind.sync="device.temp" :angle="1 + (180 / (devices.length - 1) * index)" :distance="100" size="m"
                :to-view="device.view" :label="device.name" :key="'dev_' + index">
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
                { name: 'Refrigerate', state: 'deactive', icon: 'fas fa-sort' },
                { name: 'Freeze', state: 'deactive', icon: 'fas fa-sort' },
                { name: 'Thaw', state: 'deactive', icon: 'fas fa-sort' }
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
                        if (scene === 'Refrigerate') {
                            vm.devices = [
                                { name: 'Freezer layer', state: 'on', temp: { qty: 23, unit: 'F', min: 14, max: 32 } },
                                { name: 'Refrigerated layer', state: 'on', temp: { qty: 41, unit: 'F', min: 32, max: 50 } },
                                { name: 'Fresh-keeping layer', state: 'on', temp: { qty: 32, unit: 'F', min: 23, max: 41 } },

                            ]
                        } else if (scene === 'Freeze') {
                            vm.devices = [
                                { name: 'Freezer layer', state: 'on', temp: { qty: 23, unit: 'F', min: 14, max: 32 } },
                                { name: 'Refrigerated layer', state: 'on', temp: { qty: 41, unit: 'F', min: 32, max: 50 } },
                                { name: 'Fresh-keeping layer', state: 'on', temp: { qty: 32, unit: 'F', min: 23, max: 41 } },

                            ]
                        } else if (scene === 'Thaw') {
                            vm.devices = [
                                { name: 'Freezer layer', state: 'on', temp: { qty: 23, unit: 'F', min: 14, max: 32 } },
                                { name: 'Refrigerated layer', state: 'on', temp: { qty: 41, unit: 'F', min: 32, max: 50 } },
                                { name: 'Fresh-keeping layer', state: 'on', temp: { qty: 32, unit: 'F', min: 23, max: 41 } },
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
        this.showMe('Refrigerate')
    }
}
</script>

