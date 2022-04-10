// vscode 配置
// {
//     // vscode默认启用了根据文件类型自动设置tabsize的选项
//     "editor.detectIndentation": false,
//     // 重新设定tabsize
//     "editor.tabSize": 4,
//     // #每次保存的时候自动格式化
//     "editor.formatOnSave": true,
//     // #每次保存的时候将代码按eslint格式进行修复,vscode es6语法检测配置
//     "editor.codeActionsOnSave": {
//         "source.fixAll.eslint": true
//     },
//     // "eslint.autoFixOnSave": true,
//     "explorer.confirmDragAndDrop": false,
//     //  #让函数(名)和后面的括号之间加个空格
//     "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
//     // #这个按用户自身习惯选择
//     "vetur.format.defaultFormatter.html": "js-beautify-html",
//     "vetur.format.defaultFormatterOptions": {
//         "js-beautify-html": {
//             "wrap_line_length": 300,
//             "wrap_attributes": "auto",
//             "end_with_newline": false
//         }
//     },
//     // #让vue中的js按编辑器自带的ts格式进行格式化
//     "vetur.format.defaultFormatter.js": "vscode-typescript",
//     // // 使能每一种语言默认格式化规则
//     // "[html]": {
//     //   "editor.defaultFormatter": "esbenp.prettier-vscode"
//     // },
//     // "[css]": {
//     //   "editor.defaultFormatter": "esbenp.prettier-vscode"
//     // },
//     // "[less]": {
//     //   "editor.defaultFormatter": "esbenp.prettier-vscode"
//     // },
//     // "[javascript]": {
//     //   "editor.defaultFormatter": "esbenp.prettier-vscode"
//     // },
//     /*  prettier的配置 */
//     "prettier.printWidth": 100, // 超过最大值换行
//     "prettier.tabWidth": 2, // 缩进字节数
//     "prettier.useTabs": false, // false缩进不使用tab，使用空格
//     "prettier.semi": true, // true句尾添加分号
//     "prettier.singleQuote": true, // true使用单引号代替双引号
//     "prettier.proseWrap": "preserve", // 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
//     "prettier.arrowParens": "avoid", //  (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
//     "prettier.bracketSpacing": true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
//     "prettier.endOfLine": "auto", // 结尾是 \n \r \n\r auto
//     "prettier.eslintIntegration": false, //不让prettier使用eslint的代码格式进行校验
//     "prettier.htmlWhitespaceSensitivity": "ignore",
//     "prettier.ignorePath": ".prettierignore", // 不使用prettier格式化的文件填写在项目的.prettierignore文件中
//     "prettier.jsxBracketSameLine": false, // 在jsx中把'>' 是否单独放一行
//     "prettier.jsxSingleQuote": false, // 在jsx中使用单引号代替双引号
//     "prettier.requireConfig": false, // Require a 'prettierconfig' to format prettier
//     "prettier.stylelintIntegration": false, //不让prettier使用stylelint的代码格式进行校验
//     "prettier.trailingComma": "es5", // 在对象或数组最后一个元素后面是否加逗号（在ES5中加尾逗号）
//     "prettier.tslintIntegration": false, // 不让prettier使用tslint的代码格式进行校验
//     // ===========以下4个是控制保存时自动格式化的，并且以4格缩进================
//     "editor.tabCompletion": "on",
//     // ===========以下是根据自己需求配置的============================
//     "editor.suggest.snippetsPreventQuickSuggestions": true, //自动补全的
//     "explorer.confirmDelete": true, // 自动补全
//     "[json]": {},
//     "workbench.sideBar.location": "left",
//     "editor.wordWrap": "on", // 控制折行方式。可以选择： - “off” （禁用折行）， - “on” （视区折行）， - “wordWrapColumn”（在“editor.wordWrapColumn”处折行）或 - “bounded”（在视区与“editor.wordWrapColumn”两者的较小者处折行）。
//     "editor.fontSize": 16,
//     // 两个选择器中是否换行
//     "editor.formatOnType": true,
//     "editor.parameterHints": true,
//     "editor.quickSuggestions": {
//         "other": true,
//         "comments": true,
//         "strings": true
//     },
//     "git.confirmSync": true, // *** 这个是提示空格的点点
//     "typescript.format.insertSpaceAfterSemicolonInForStatements": false,
//     "search.exclude": {
//         "**/node_modules": true,
//         "**/bower_components": true,
//         "**/dist": true
//     },
//     "emmet.includeLanguages": {
//         "vue-html": "html",
//         "vue": "html",
//         "javascript": "javascriptreact",
//         "wxml": "html"
//     },
//     // "editor.fontFamily": "'Droid Sans Mono', 'Courier New', monospace, 'Droid Sans Fallback'", //  这个是控制字体样式的
//     "auto-close-tag.activationOnLanguage": [
//         "xml",
//         "php",
//         "blade",
//         "ejs",
//         "jinja",
//         "javascript",
//         "javascriptreact",
//         "typescript",
//         "typescriptreact",
//         "plaintext",
//         "markdown",
//         "vue",
//         "liquid",
//         "erb",
//         "lang-cfml",
//         "cfml",
//         "HTML (Eex)"
//     ],
//     "eslint.options": {
//         "extensions": [
//             ".js",
//             ".vue"
//         ]
//     },
//     "editor.mouseWheelZoom": true,
//     "editor.suggestSelection": "first",
//     "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
//     "files.exclude": {
//         "**/.classpath": true,
//         "**/.project": true,
//         "**/.settings": true,
//         "**/.factorypath": true
//     },
//     "launch": {},
//     "workbench.editorAssociations": {},
//     "terminal.integrated.env.osx": {},
//     "files.autoSave": "off",
//     "workbench.iconTheme": "material-icon-theme",
//     "[vue]": {
//         "editor.defaultFormatter": "octref.vetur"
//     }
// }
