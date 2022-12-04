<template>
    <z-view style="border-width: 8px">
        <span style="color: var(--accent-text-color)">Monitors
        </span>
        <img slot="image" src="monitor.jpg" width="100%" height="100%" style="opacity: 0.3">
        <div slot="extension">
            <!-- family-->
            <z-spot :angle="-30" size="s" :distance="120" label="Front door" label-pos="right">
                <i class="fa-solid fa-refrigerator"></i>
            </z-spot>
            <!-- scenes-->
            <z-spot :angle="0" size="s" :distance="120" label="Backdoor" label-pos="right">
                <i class="fas fa-angle-down"></i>
            </z-spot>
            <!-- rooms-->
            <z-spot :angle="30" size="s" :distance="120" label="Garden" label-pos="right">
                <i class="fas fa-angle-down"></i>
            </z-spot>
        </div>
    </z-view>
</template>
