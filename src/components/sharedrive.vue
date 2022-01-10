<template>
<div>
    {{ param }}
</div>
</template>
<script>
export default {
    data(){
        return {
            param : ''
        }
    },
    mounted(){
        console.log(this.$route.params)
        this.param = this.$route.params
    }
}
</script>
