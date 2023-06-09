# MaterialVue
Visit https://material-vyou.web.app/ for actual documentation, guides.

## About library
MaterialVue is a component library based on the Material3 design system for Vue3, which can significantly simplify and speed up the web application development process. The library provides a wide range of components that can be easily customized and adapted to different projects.

## Get started
### Installation
```sh
npm install @korpusovmax/material-vue@latest
```
### Project quick setup
Simply add some lines to your main.js file
```js
import { createApp } from 'vue'
import App from './App.vue'
// importing the main plugin for vue
import material from '@korpusovmax/material-vue'
// importing styles
import '@korpusovmax/material-vue/dist/style.css'

const app = createApp(App)
// adding plugin to the Vue app
app.use(material)
app.mount('#app')
```

## Examples
All examples will be placed to the `/examples/` in the future.

## Open-source
Our component library is fully open sourced. Join us and help make our library even better!
### Installation of the project
#### Cloning the repository
```sh
git clone https://github.com/korpusovmax/material-vue
cd material-vue
```
#### Setting up
```sh
cd lib\material-vue
npm install
```

#### Testing your updates in playground
Playground is a sample setup of the vue app with imported MaterialVue. So
playground is just ready to use project.

To play:
Open new tab in console, go to the playground dir.
```sh
cd playground
npm run serve
```
You should import all new components and functionality to the playground
from the library dir.