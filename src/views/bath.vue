<template>
    <z-view style="border-width: 8px">
        <span style="color: var(--accent-text-color)">Bath room
        </span>
        <img slot="image" src="bathroom.jpg" width="100%" height="100%" style="opacity: 0.3">
        <div slot="extension">
            <!-- family-->
            <z-spot :angle="-30" size="s" :distance="120" label="Water heater" label-pos="right" to-view="water_heater">
                <i class="fas fa-weight"></i>
            </z-spot>
            <!-- scenes-->
            <z-spot :angle="0" size="s" :distance="120" label="Bath-shower" label-pos="right" to-view="bathshower">
                <i class="fas fa-bath"></i>
            </z-spot>
            <!-- rooms-->
            <z-spot :angle="30" size="s" :distance="120" label="Light" label-pos="right" to-view="light">
                <i class="fas fa-lightbulb"></i>
            </z-spot>
            <!-- devices-->
            <z-spot :angle="60" :distance="120" size="s" label="Washing machine" label-pos="right"
                to-view="washmachine">
                <i class="fas fa-wallet"></i>
            </z-spot>
        </div>
    </z-view>
</template>
