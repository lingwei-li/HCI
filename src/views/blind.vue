<template>
    <z-view style="border-width: 8px" slider :progress="progress">
        <span style="color: var(--accent-text-color)">Blind
            <h1>{{ activeScene }}</h1>
            {{ msg }}
        </span>
        <img slot="image" src="curtain.jpg" width="100%" height="100%" style="opacity: 0.3">

        <div slot="extension">

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
            items: [

            ],
            status: true,
            devices: [

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

