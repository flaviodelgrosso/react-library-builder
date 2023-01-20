import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import peerDeps from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import visualizer from 'rollup-plugin-visualizer';
import { typescriptPaths } from 'rollup-plugin-typescript-paths';
import { getFiles } from './scripts/buildUtils';

const extensions = ['.js', '.ts', '.jsx', '.tsx'];
const excludeExtensions = [
  'test.js',
  'test.ts',
  'test.jsx',
  'test.tsx',
  'spec.js',
  'spec.ts',
  'spec.jsx',
  'spec.tsx',
  'story.js',
  'story.ts',
  'story.jsx',
  'story.tsx',
];

/** @type {import('postcss').PostCSSPluginConf} */
const postcssConfig = {
  minimize: true,
  sourceMap: true,
  extract: true,
  config: {
    path: './postcss.config.js',
    ctx: null,
  },
};

/** @type {import('rollup').RollupOptions} */
export default {
  input: ['./src/index.ts', ...getFiles('./src/components', extensions, excludeExtensions)],
  output: {
    dir: 'dist',
    format: 'esm',
    preserveModules: true,
    preserveModulesRoot: 'src',
    sourcemap: true,
  },
  plugins: [
    peerDeps(),
    postcss(postcssConfig),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.build.json',
      declaration: true,
      declarationDir: 'dist',
    }),
    typescriptPaths(),
    visualizer({
      filename: 'bundle-analysis.html',
      open: false,
    }),
  ],
};
