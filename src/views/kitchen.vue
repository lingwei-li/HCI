<template>
    <z-view style="border-width: 8px">
        <span style="color: var(--accent-text-color)">Kitchen room
        </span>
        <img slot="image" src="kitchen.jpg" width="100%" height="100%" style="opacity: 0.3">
        <div slot="extension">
            <!-- family-->
            <z-spot :angle="-30" size="s" :distance="120" label="Refrigerator" label-pos="right" to-view="refrigerator">
                <i class="fas fa-window-maximize"></i>
            </z-spot>
            <!-- scenes-->
            <z-spot :angle="0" size="s" :distance="120" label="Light" label-pos="right" to-view="light">
                <i class="fas fa-lightbulb"></i>
            </z-spot>
            <!-- rooms-->
            <z-spot :angle="30" size="s" :distance="120" label="Air fryer" label-pos="right" to-view="airfryer">
                <i class="fas fa-drum-steelpan"></i>
            </z-spot>
            <!-- devices-->
            <z-spot :angle="60" :distance="120" size="s" label="Microwave oven" label-pos="right" to-view="microwave">
                <i class="fas fa-columns"></i>
            </z-spot>
        </div>
    </z-view>
</template>
