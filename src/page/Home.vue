<template>
    <div class="home">
        <h1>首页</h1>
        //新增报表业务表格
        <TableComponent />
    </div>
</template>

<script>
import TableComponent from '../components/TableComponent.vue';

export default {
    name: 'Home',
    components: {
        TableComponent
    },
    data() {
        return {

        }
    },
}
</script>

<style scoped>
.home {
    padding: 20px;
}

h1 {
    margin-bottom: 20px;
}
</style>