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

            return {
                lol,
                icon,
                type
            }
        },
    }
</script>
