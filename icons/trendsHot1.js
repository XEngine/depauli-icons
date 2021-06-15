
      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M3.75 18.75A3.754 3.754 0 010 15V9a3.754 3.754 0 013.75-3.75h16.5A3.754 3.754 0 0124 9v6a3.754 3.754 0 01-3.75 3.75H3.75zm0-12A2.252 2.252 0 001.5 9v6a2.252 2.252 0 002.25 2.25h16.5A2.252 2.252 0 0022.5 15V9a2.252 2.252 0 00-2.25-2.25H3.75z"}}),_c('path',{attrs:{"d":"M18 15.75a.75.75 0 01-.75-.75V9.75h-.75a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-.75V15a.75.75 0 01-.75.75zM8.25 15.75A.75.75 0 017.5 15v-2.25H6V15a.75.75 0 01-1.5 0V9A.75.75 0 016 9v2.25h1.5V9A.75.75 0 019 9v6a.75.75 0 01-.75.75zM12.75 15.75a2.252 2.252 0 01-2.25-2.25v-3a2.252 2.252 0 012.25-2.25A2.252 2.252 0 0115 10.5v3a2.252 2.252 0 01-2.25 2.25zm0-6a.75.75 0 00-.75.75v3a.75.75 0 001.5 0v-3a.75.75 0 00-.75-.75z"}})])
          )
        }
      }
    