<template>
  <div class="about">
    <h1>关于页面</h1>
    <p>这是关于页面的内容</p>
    <div class="myDiv">12312312</div>
    <!-- 新增测试表单 -->
    <el-form class="form">
      <el-form-item>
        <el-input placeholder="请输入内容"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.form {
  margin: 20px;
  width: 500px; 
}
/* 
   新增form上面的div背景颜色天蓝色
*/
.myDiv{
  background-color: aqua;
}
.about {
  padding: 20px;
  text-align: center;
}
</style>
