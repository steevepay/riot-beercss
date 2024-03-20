import { defineConfig } from 'vite'
import riot from 'rollup-plugin-riot'

export default defineConfig({
  root       : process.cwd() + '/client',
  plugins    : [riot()],
  build: { 
    minify       : 'esbuild',
    target       : 'esnext'
  }
})
