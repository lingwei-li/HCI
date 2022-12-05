<template>
    <z-view style="border-width: 8px" slider :progress="progress">
        <span style="color: var(--accent-text-color)">Bedroom
            <h1>{{ activeScene }}</h1>
            {{ msg }}
        </span>
        <img slot="image" src="living.jpg" width="100%" height="100%" style="opacity: 0.3">
        <div slot="extension">
            <z-spot v-for="(device, index) in devices" :button="device.name !== 'AC1'" :knob="device.name === 'AC1'"
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
                { name: 'Relgular', state: 'deactive', icon: 'fas fa-sun' },
                { name: 'Theatre', state: 'deactive', icon: 'fas fa-film' },
                { name: 'Night', state: 'deactive', icon: 'fas fa-moon' }
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
                        if (scene === 'Regular') {
                            vm.devices = [
                                { name: 'AC', state: 'on', vol: 14, bright: 30, source: 'youtube', icon: 'fas fa-tv', view: 'ac' },
                                { name: 'TV', state: 'off', vol: 14, bright: 30, source: 'youtube', icon: 'fas fa-tv', view: 'tv' },
                                { name: 'Blind', state: 'on', vol: 14, bright: 30, source: 'youtube', icon: 'fas fa-braille', view: 'blind' },
                                { name: 'Light', state: 'on', vol: 14, bright: 30, source: 'youtube', icon: 'far fa-lightbulb', view: 'light' }
                            ]
                        } else if (scene === 'Theatre') {
                            vm.devices = [
                                { name: 'AC', state: 'on', vol: 14, bright: 30, source: 'youtube', icon: 'fas fa-tv', view: 'ac' },
                                { name: 'TV', state: 'on', vol: 14, bright: 30, source: 'youtube', icon: 'fas fa-tv', view: 'tv' },
                                { name: 'Blind', state: 'off', vol: 14, bright: 30, source: 'youtube', icon: 'fas fa-braille', view: 'blind' },
                                { name: 'Light', state: 'off', vol: 14, bright: 30, source: 'youtube', icon: 'far fa-lightbulb', view: 'light' }
                            ]
                        } else if (scene === 'Night') {
                            vm.devices = [
                                { name: 'AC', state: 'off', vol: 14, bright: 30, source: 'youtube', icon: 'fas fa-tv', view: 'ac' },
                                { name: 'TV', state: 'off', vol: 14, bright: 30, source: 'youtube', icon: 'fas fa-tv', view: 'tv' },
                                { name: 'Blind', state: 'off', vol: 14, bright: 30, source: 'youtube', icon: 'fas fa-braille', view: 'blind' },
                                { name: 'Light', state: 'off', vol: 14, bright: 30, source: 'youtube', icon: 'far fa-lightbulb', view: 'light' }
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
        this.showMe('Regular')
    }
}
</script>

