<template>
  <z-view>
    <section slot="extension">
      <z-list
        :items="devices"
        :per-page="5">
          <z-spot
            slot-scope="props"
            :index="props.index"
            :distance="60"
            :to-view="{ name: 'device', params: {category: props.category, qty: props.qty}}"
            :label="props.category">
            <span style="color: white;">{{props.qty}}</span>
            <z-spot slot="extension"
              :style="props.category === 'care' ? 'background-color: red; border: none;': 'background-color: green; border: none;'"
              :angle='-45'
              size='xxs'>
            </z-spot>
          </z-spot>
      </z-list>
    </section>
</z-view>
</template>
<script>
export default {
  data () {
    return {
      devices: [

        { category: 'climate', qty: 2 },
        { category: 'energy', qty: 1 },
        { category: 'smoke & co', qty: 3 },
        { category: 'water', qty: 1 },
        { category: 'windows & blinds', qty: 3 }
      ]
    }
  }
}
</script>
