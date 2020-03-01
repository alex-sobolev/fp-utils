import typescript from '@rollup/plugin-typescript';
 
export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    file: 'bundle.js',
    format: 'cjs'
  },
  plugins: [typescript()]
};
