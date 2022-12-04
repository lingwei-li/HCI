<template>
    <z-view style="border-width: 12px" label="Details">
        <ul>
            <li v-for="(log, index) in console" :key="index">
                {{ log }}
            </li>
        </ul>
        <div slot="extension">
            <z-spot v-show="console.length > 1" button :angle="45" size="s" :distance="120" label="Reset"
                @click.native="openDialog = true">
                <i class="fas fa-trash"></i>
            </z-spot>
            <z-dialog v-if="openDialog" self-close v-on:done="openDialog = false">
                Are your sure?
                <div slot=extension>
                    <z-spot class="success" button :angle="45" size="s" :distance="120" @click.native="reset">
                        <i class="fas fa-check"></i>
                    </z-spot>
                    <z-spot class="danger" button :angle="135" size="s" :distance="120"
                        @click.native="openDialog = false">
                        <i class="fas fa-times"></i>
                    </z-spot>
                </div>
            </z-dialog>
        </div>
    </z-view>
</template>
<script>
export default {
    data() {
        return {
            openDialog: false,
            console: [
                '12:30pm - Some people is around yard',
                '12:34pm - The smoke in the kitchen is heavy',
                '1:50pm - The main entrance is not closed',
            ]
        }
    },
    methods: {
        reset() {
            this.console = ['No warnings available']

            this.openDialog = false
        }
    }
}
</script>
<style>
li {
    line-height: 40px;
    border-bottom: 1px solid white
}
</style>
