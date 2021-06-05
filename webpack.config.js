// Через терминал установаливаем Webpack (npm i -D webpack) и Webpack-cli (npm i webpack-cli@^3.3.11 - устанавливаем
// более старую версию, из-за ошибки При ошибке Cannot find module 'webpack/bin/config-yargs). Webpack-cli необходим для работы через командную строку

//Производим настройку Webpack

//Выполняем установку пакета Babel (это неоходима для компилирования нашего современногог jsx кода в старый, понятных компьютеру)
// используем для системы webpack (npm install --save-dev babel-loader @babel/core), так же утсанавливаем пресеты (npm install @babel/preset-env --save-dev)
// далее пишем rules в свойстве module

// Устанавливаем покеты react и react-dom (npm i --save react react-dom)
// Меняем раширение indexReducers.js на index.jsx и создаем компоненту App.js. Работа с index.jsx


const path = require('path') // для Output импортируем библиотеку path из Node, которая позволит указать путь к папке
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "development",   // прилижение находится в разработке и выходные данные надо сжимать
    entry: ["@babel/polyfill", "./src/index.jsx"], // входной путь файла. Устанавливаем полифил (npm install --save @babel/polyfill), и добавляем его входным параметром
    // Output - указываем куда webpack будет собирать файлы
    output: {
        path: path.resolve(__dirname, "dist"), // Папка dist куда webpack будет делать сборку
        filename: "[name].[hash].js", // указываем имя файла куда будет делать сборка все js файлов.
        // Используем регулярные выражения которые помогут избаыаиться от проблем с хэшированием при разработке.
        // Это необходима для того чтобы WP отслеживал js файлы и делал уникальные названия
        // Подробнее можно прочитать в документации Webpack
        publicPath: "/", // параметр необходимый для правильного перехода на страницы и не возникания проблем с хэшированием
    },
    // Устанаваливаем npm i -g webpack-dev-server для автозапуска сборки и в package.json прописываем скрипт для закпуска
    devServer: {
        port: 3000,
        historyApiFallback: true, // необхсдимый параметр для history API browser
    },
    // добавляем с какими расширениями булет работать webpack
    resolve: {
        extensions: ['.js', '.jsx'],

    },
    // Устанавливаем WP плагины (npm i -D html-webpack-plugin clean-webpack-plugin)
    // HTML plugin - необходим для переноса html шаблона в папку dist и импортирует в него все соответствующие js bundlы которые собирает WP
    // Clean plugin - очищает неиспользуемые bundlы которые создаются в результате использования
    plugins: [
        new HTMLWebpackPlugin({template: "./src/index.html"}), //прописываем опцию template где указываем путь к html файлу
        new CleanWebpackPlugin()
    ],
    // Устанавливаем стили npm i -D style-loader less-loader css-loader file-loader
    module: {
        rules: [
            {
                test: /\.(css|less)$/, //регулярное выражение для обработки loaders
                use: ["style-loader", "css-loader", "less-loader"] // использование происходит с парва на лево, поэтому прописываем в таком порядке
            },
            {
                test: /\.(jpg|jpeg|png|svg)/,
                use: ["file-loader"] // позволяет имопртировать файлы, изображения прямо в js код
            },
            // используем данные правила из документации Babel
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            // Устанавливаем пресет который будет понимать jsx (npm install --save-dev @babel/preset-react) и пришем для него правила
            {
                test: /\.m?jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-react", '@babel/preset-env']
                    }
                }
            }
        ]
    }
}