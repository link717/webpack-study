const path = require('path');

module.exports = {
  mode: 'development',
  entry: './source/index.js', // 웹팩으로 빌드할 파일
  output: {
    path: path.resolve(__dirname, 'public'), // 빌드한 파일을 저장할 경로
    filename: 'index_bundle.js', // 빌드한 파일의 이름
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
};
