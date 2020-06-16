<h5 align="center"><img src="demo.gif" /></h5>

> A Medium like clap button. Inspired by [react-clap-button](https://github.com/Kikobeats/react-clap-button)

### Install
The recommended way is using `npm`
``` bash
npm install vue-clap-button --save
```
Also you can insert script tag in your html file after vue script
```html
<script src="dist/vue-clap-button.js"></script>
```


### Usage
In your entry script
```javascript
import Vue from 'vue'
import vueClapButton from 'vue-clap-button'
Vue.use(vueClapButton);
```

Then in your `.vue` file
```vue
<vue-clap-button />
```
It is done! Really simple to use ? Yes ❤

Want a complex example ? see following guide

#### Attributes
| parameter   | description                                    | type   | enum value       | default value |
|-------------|------------------------------------------------|--------|------------------|---------------|
| icon        | specify a icon                                 | String | good, star, love | good          |
| size        | change the size of icon, in pixel              | Number | -                | 50            |
| maxClick    | How many times can I love/like it?             | Number | -                | 1             |
| bgColor     | background color of icon                       | String | -                | #FFF          |
| colorActive | color for icon with claps                | String | -                | #F56C6C       |
| colorNormal | normal or initial color for icon without claps | String | -                | #909399       |
| supportCancel | support cancel function                      | Boolean | -               | true       |

#### Events
| event name | description              | callback parameter                    |
|------------|--------------------------|---------------------------------------|
| cancel     | user cancel all claps on it  | -                                     |
| clap       | user give one love on it | total claps given now (type : number) |


#### Methods
| method name | description      | return value |
|-------------|------------------|--------------|
| getClaps    | get total claps  | type:Number  |

#### License

MIT
