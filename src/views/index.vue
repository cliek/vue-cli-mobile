<template>
    <div class="content">
        <van-nav-bar
            title="主页导航"
        >
            <template #right>
                <van-icon name="wap-home-o" size="20"/>
            </template>
        </van-nav-bar>
        <Hello />
        <h1>恭喜您安装成功！</h1>
    </div>
</template>
<script>
import Hello from "../components/HelloWorld"
export default {
    name: "index",
    components: {
        Hello
    },
    data(){
        return {
           
        }
    },
    created(){
        
    },
    mounted(){
       
    },
    methods: {
        
    }
}
</script>
<style lang="css" scoped>

</style>