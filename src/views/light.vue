<template>
    <z-view>
        <iframe slot="media" width="100%" height="100%" src="https://www.youtube.com/embed/aJOTlE1K90k" frameborder="0"
            allowfullscreen></iframe>
        Channel 9

        <div slot="extension">
            <z-spot button :distance='130' :angle='-15' size='s'>
                +
            </z-spot>
            <button :distance='130' :angle='-15' size='s'>+
            </button>
            <z-spot button :distance='130' :angle='15' size='s'>
                -
            </z-spot>
            <z-spot button @click.native="onClick" v-bind:class="status ? 'success' : 'fail'" :distance='110'
                :angle='-45' size='s'>
                <i class="fa fa-power-off"></i>
            </z-spot>
            <z-spot button :distance='100' :angle='135' :progress="14" size='s' label="vol">
            </z-spot>
            <z-spot button :distance='100' :angle='45' size='s' label="channel">
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
                { name: 'light', state: "status ? 'success' : 'fail'", vol: 14, bright: 30, channel: '3' }
            ],
            status: false,
        }
    },
    methods: {
        onClick(e) {
            this.status = !this.status;
        }
    },
    computed: {
        retrieveParams() {
            if (this.$zircle.getParams() !== undefined) {
                return this.$zircle.getParams().room
            }
        }
    }
}
</script>

