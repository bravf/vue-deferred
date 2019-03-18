# vue-deferred

## 安装
npm install --save vue-deferred

## 使用
```javascript
import Deferred from 'vue-deferred'

// 使用 Deferred
const doSomehings = () => {
  const defer = Deferred()

  setTimeout( () => {
    console.log('hello')
    defer.resolve() 
  })

  return defer.promise
}

// vs 直接使用 promise
const doSomethings = () => {
  return new Promise( (resolve, reject) => {
    setTimeout( () => {
      console.log('hello')
      resolve()
    })
  })
}
```

## 用途
使得可以从外部改变 promise 的状态，从而在逻辑体里使用`电话`，而不是在`电话`里写逻辑体。