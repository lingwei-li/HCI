<template>
    <z-view style="border-width: 8px">
        <span style="color: var(--accent-text-color)">Doors
        </span>
        <img slot="image" src="door.jpg" width="100%" height="100%" style="opacity: 0.3">
        <div slot="extension">

            <z-spot button @click.native="onClick1" v-bind:class="status1 ? 'success' : 'fail'" :distance="130"
                :angle="-45" size="s" label="door1" label-pos="right">
                <i class="fa fa-power-off"></i>
            </z-spot>
            <z-spot button @click.native="onClick2" v-bind:class="status2 ? 'success' : 'fail'" :distance="130"
                :angle="45" size="s" label="door2" label-pos="right">
                <i class="fa fa-power-off"></i>
            </z-spot>
            <z-spot button @click.native="onClick3" v-bind:class="status3 ? 'success' : 'fail'" :distance="130"
                :angle="0" size="s" label="door3" label-pos="right">
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
            status1: false,
            status2: false,
            status3: false
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
        onClick1(e) {
            this.status1 = !this.status1;
        },
        onClick2(e) {
            this.status2 = !this.status2;
        },
        onClick3(e) {
            this.status3 = !this.status3;
        },
    },
};
</script>

