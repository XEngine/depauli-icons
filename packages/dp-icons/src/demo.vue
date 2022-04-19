<template>
    <div>
        bok
        <dp-icon :icon="icon" :type="type" size="1.5x" style="color: red" class="red" @click="lol"></dp-icon>
    </div>
</template>
<script>
    import {ref} from "vue";

    export default {
        setup(){
            const icon = ref('bin-1')
            const type = ref('regular')

            const lol = () => {
                console.log('lol')
            }

            setTimeout(() => {
                icon.value = 'bin-1'
                type.value = 'regular'
            }, 3000)
            setTimeout(() => {
                icon.value = 'arrow-right'
                type.value = 'bold'
            }, 6000)

            return {
                lol,
                icon,
                type
            }
        },
    }
</script>
