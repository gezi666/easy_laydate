# easy-laydate

You can use [laydate](http://www.layui.com/laydate/) through import

# Install with npm
```
npm i --save easy-laydate
```

# In Code
```
<input type="text" id="mydate">
```
```
import laydate from "easy-laydate"
import "easy-laydate/lib/theme/default/laydate.css"

// init date
laydate.render({
    elem:"#mydate"
});

// reset
laydate.reset();
```

# Options supported
```
{
  elem: '#id', //需显示日期的元素选择器
  event: 'click', //触发事件
  format: 'YYYY-MM-DD hh:mm:ss', //日期格式
  istime: false, //是否开启时间选择
  isclear: true, //是否显示清空
  istoday: true, //是否显示今天
  issure: true, 是否显示确认
  festival: true //是否显示节日
  min: '1900-01-01 00:00:00', //最小日期
  max: '2099-12-31 23:59:59', //最大日期
  start: '2014-6-15 23:00:00',  //开始日期
  fixed: false, //是否固定在可视区域
  zIndex: 99999999, //css z-index
  choose: function(dates){ //选择好日期的回调
  
  }
}
```




