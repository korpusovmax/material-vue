import { defaultTheme } from 'vuepress'
import { getDirname, path } from '@vuepress/utils'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'



const __dirname = getDirname(import.meta.url)
export default  {
    theme: defaultTheme({
        sidebar: [
            {
                text: 'MaterialVue',
                collapsible: true,
                children: ['/README.md'],
            },
            {
                text: 'Get started',
                collapsible: true,
                children: [
                    '/guide/get_started/installation.md',
                    '/guide/get_started/setup.md',
                ]
            },
            {
                text: 'Components',
                collapsible: true,
                children: [
                    '/components/button.md',
                    '/components/radio_button.md',
                    '/components/navigation_drawer.md',
                    '/components/top_bar.md',
                ]
            },
            {
                text: 'Api',
                collapsible: true,
                children: [
                    '/api/icons.md',
                    '/api/material_colors.md',
                    '/api/typography.md',
                ]
            },
        ],
    }),
    plugins: [
        registerComponentsPlugin({
            components: {
                Load: path.resolve(__dirname, './components/load.vue'),
                ExampleUsage: path.resolve(__dirname, './components/ExampleUsage.vue'),
                MButton: path.resolve(__dirname, '../../lib/material-vue/src/components/action/MButton.vue'),
                MRadioButton: path.resolve(__dirname, '../../lib/material-vue/src/components/action/MRadioButton.vue'),
                MRadioGroup: path.resolve(__dirname, '../../lib/material-vue/src/components/action/MRadioGroup.vue'),
            },
            componentsDir: path.resolve(__dirname, '../../lib/material-vue/src/components/navigation'),
        }),
    ],
    base: '/material-vue/'
}
