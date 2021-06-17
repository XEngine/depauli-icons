<template>
    <component :is="getIcon"></component>
</template>

<script>
    import Library from './library'

    export default {
        name: 'DpIcon',
        props: {
            icon: {
                type: String,
                required: true,

            }
        },
        computed: {
            getIcon() {
                return Library.get(this.icon)
            }
        }
    };
</script>
