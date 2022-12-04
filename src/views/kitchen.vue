<template>
    <z-view style="border-width: 8px">
        <span style="color: var(--accent-text-color)">Kitchen room
        </span>
        <img slot="image" src="kitchen.jpg" width="100%" height="100%" style="opacity: 0.3">
        <div slot="extension">
            <!-- family-->
            <z-spot :angle="-30" size="s" :distance="120" label="Refrigerator" label-pos="right" to-view="refrigerator">
                <i class="fa-solid fa-refrigerator"></i>
            </z-spot>
            <!-- scenes-->
            <z-spot :angle="0" size="s" :distance="120" label="scenes" label-pos="right" to-view="scenes">
                <i class="fas fa-angle-down"></i>
            </z-spot>
            <!-- rooms-->
            <z-spot :angle="30" size="s" :distance="120" label="Rooms" label-pos="right" to-view="rooms">
                <i class="fas fa-angle-down"></i>
            </z-spot>
            <!-- devices-->
            <z-spot :angle="60" :distance="120" size="s" label="Devices" label-pos="right" to-view="devices">
                <i class="fas fa-angle-down"></i>
            </z-spot>
        </div>
    </z-view>
</template>
