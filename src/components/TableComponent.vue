<template>
  <div class="table-container">
    <el-table
      :data="tableData"
      style="width: 100%"
      border
      stripe>
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'TableComponent',
  data() {
    return {
      tableData: [{
        date: '2023-01-01',
        name: '张三',
        address: '北京市朝阳区'
      }, {
        date: '2023-01-02',
        name: '李四',
        address: '上海市浦东新区'
      }, {
        date: '2023-01-03',
        name: '王五',
        address: '广州市天河区'
      }, {
        date: '2023-01-04',
        name: '赵六',
        address: '深圳市南山区'
      }]
    }
  }
}
</script>

<style scoped>
.table-container {
  padding: 20px;
}
</style>
