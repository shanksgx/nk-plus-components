// vitest.config.ts
import { defineConfig } from 'vitest/config'
import path from 'path'

export default defineConfig({
  resolve: {  
    alias: {  
      '@': path.resolve(__dirname, './src'),  
    },  
  },
  test: {
    environment: 'jsdom', // or 'happy-dom', 'node'
    // reporters: ['json'], // 报告器
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
})