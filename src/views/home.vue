<template>
  <div>
    <div class="box2">
      <div class="box1" v-for="(item,index) in list" :key="index">
        <input type="checkbox">
        <p class="p2">
          <img :src="`https://api.aslegou.top/${item.img}`" alt="" />
        </p>
        <div>
        <p>
        阿道夫修护滋养洗发香乳
      </p>
      <p>￥123.00</p>
      </div>
        <p class="p1">
          <button class="but1" @click="item.number--">-</button>
          <input
            v-model="item.number"
            type="text"
            class="inp1"
            style="width: 30px; height: 30px"
            value="1"
          />
          <button class="but2" @click="item.number++">+</button>
        </p>
      </div>
      
      
      <div class="box1" v-for="(item,index) in list" :key="index">
        <input type="checkbox">
        <p class="p2">
          <img :src="`https://api.aslegou.top/${item.img}`" alt="" />
        </p>
        <div>
        <p>
        滋养洗发水
      </p>
      <p>￥123.00</p>
      </div>
        <p class="p1">
          <button class="but1" @click="item.number--">-</button>
          <input
            v-model="item.number"
            type="text"
            class="inp1"
            style="width: 30px; height: 30px"
            value="1"
          />
          <button class="but2" @click="item.number++">+</button>
        </p>
      </div>

      <div class="box3">
        <input type="checkbox">
        <p>总计：</p>
        <button class="gou">立即购买</button>
      </div>
    </div>
 
  </div>
</template>

<script>
export default {
  data() {
    // 定义返回值
    return {
      list: [],
    };
  },
  created() {
    // 请求接口
    this.$axios
      .get("https://api.aslegou.top/api/getgoodsinfo?id=10", {
      })
      .then((res) => {
        // 输出
        console.log(res);
        // 渲染
        this.list = res.data.list;
      });
  },
};
</script>

<style lang="scss" scoped>
.box2{
    width: 500px;
    height: 600px;
    border: 1px solid #000;
    justify-content: space-around;

}
.box1 {
  display: flex;
  width: 100%;
  justify-content: space-between;
  .p2 {
    img {
      width: 100px;
      height: 100px;
    }
  }
}
.but1 {
  width: 30px;
  height: 30px;

  line-height: 30px;

}
.but2 {
  width: 30px;
  height: 30px;

  line-height: 30px;
}

.gou {
  width: 50%;
  height: 100%;
  background: red;
  color: #fff;
  text-align: center;
  line-height: 50px;
  border: 1px solid #fff;
  font-size: 25px;
}
.box3{
  width: 100%;
  height: 100px;
  margin-top: 290px;
  display: flex;
  justify-content: space-between;
}
</style>