<template>
  <div>
    <el-row class="box-card">

      <el-col :span="24">
        <el-card>

          <!--<el-calendar v-model="value"></el-calendar>-->
          <el-calendar>
            <template
              slot="dateCell"
              slot-scope="{date, data}">
              <p :class="data.isSelected ? 'is-selected' : ''">
                <!--{{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : ''}}-->
                {{data.day}} {{ data.isSelected ? '😈' : ''}}

               <template v-if="data.day == '2020-01-17' ">
                 <br>
                  鸿达交货日期到
               </template>
                <!--<v-if data.day=={{task.date}}>{{task.thing}}</v-if>-->
              </p>
            </template>
          </el-calendar>
        </el-card>
      </el-col>

      <!--<el-col :span="8">-->

      <!--</el-col>-->

    </el-row>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        value: new Date(),
        task:
          {
            date: '2020-01-17',
            thing: "吃饭"
          }
      }
    }
  }
</script>

<style scoped>
  .box-card {
    margin: 10px;
  }

  .is-selected {
    color: #1989FA;
  }
</style>
