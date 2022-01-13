<template>
    <component :is="getIcon" :size="size"></component>
</template>

<script>
    import Library from './library'

    export default {
        name: 'DpIcon',
        props: {
            icon: {
                type: String,
                required: true,
            },
            size: {
                type: String,
                default: "24",
                required: false
            }
        },
        computed: {
            getIcon() {
                return Library.get(this.icon)
            }
        }
    };
</script>
