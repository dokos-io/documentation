<template>
    <figure>
        <hr />
        <ContentSlot :use="$slots.default" unwrap="p" />
        <figcaption>
            <Icon name="material-symbols:image-outline" class="icon" />
            <ContentSlot :use="$slots.caption" unwrap="p" />
        </figcaption>
        <hr />
    </figure>
</template>

<script setup>
</script>

<style>
figure {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
}

figure > hr {
    border-top-width: 4px;
    width: 4px;
    border-radius: 4px;
}

figure > img {
    width: 100%;
    margin: 0px !important;
}

figure > figcaption {
    font-weight: 500;
    font-size: 0.9rem;
}

figure > figcaption > .icon {
    font-size: 1.4rem;
    margin-right: 0.25rem;
}
</style>