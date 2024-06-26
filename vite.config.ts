import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import loadVersion from 'vite-plugin-package-version';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), loadVersion()],
})
