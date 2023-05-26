const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // html 파일을 템플릿으로 사용하여 동적으로 번들링된 JavaScript 파일을 추가해주는 플러그인

module.exports = {
  mode: 'development',
  entry: {
    index: './source/index.js',
    about: './source/about.js',
  }, // 웹팩으로 빌드할 파일
  output: {
    path: path.resolve(__dirname, 'public'), // 빌드한 파일을 저장할 경로
    filename: '[name]_bundle.js', // 빌드한 파일의 이름
  },
  module: {
    rules: [
      {
        test: /\.css$/, // 정규 표현식에 해당하는 파일을 만나면
        use: [
          'style-loader', // style-loader(style 태그로 만들어 head 태그 안에 넣어준다.)를 적용하고
          'css-loader', // css-loader(css 파일을 webpack으로 가져온다.)를 적용한다.
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './source/index.html', // template에 해당하는 html 파일을
      filename: './index.html', // filename에 해당하는 이름으로 빌드한 파일을 저장한다.
      chunks: ['index'], // index.html에는 index.js를 넣어준다.
    }),
    new HtmlWebpackPlugin({
      template: './source/about.html', // template에 해당하는 html 파일을
      filename: './about.html', // filename에 해당하는 이름으로 빌드한 파일을 저장한다.
      chunks: ['about'], // about.html에는 about.js를 넣어준다.
    }),
  ],
};
