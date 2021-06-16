<template>
    <component :is="getIcon"></component>
</template>

<script>
    import Library from '../library'

    export default /*#__PURE__*/{
        name: 'DpIcon',
        props: {
            icon: {
                type: String,
                required: true,

            }
        },
        computed: {
            getIcon() {
                console.log(Library)
                return Library.get(this.icon)
            }
        }
    };
</script>
