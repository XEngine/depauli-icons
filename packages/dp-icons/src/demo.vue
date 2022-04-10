<template>
    <div>
        bok
        <dp-icon icon="bin-1" size="1.5x" style="color: red" class="red" @click="lol"></dp-icon>
    </div>
</template>
<script>
    export default {
        methods: {
            lol(){
                console.log('lol')
            }
        }
    }
</script>
