
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
            children.concat([_c('path',{attrs:{"d":"M6.75 23.25a.75.75 0 010-1.5h1.615l.5-3H3.75A3.754 3.754 0 010 15V4.5A3.754 3.754 0 013.75.75h16.5A3.754 3.754 0 0124 4.5V15a3.754 3.754 0 01-3.75 3.75h-5.115l.5 3h1.615a.75.75 0 010 1.5H6.75zm7.365-1.5l-.5-3h-3.229l-.5 3h4.229zM3.75 2.25A2.252 2.252 0 001.5 4.5V15a2.252 2.252 0 002.25 2.25h16.5A2.252 2.252 0 0022.5 15V4.5a2.252 2.252 0 00-2.25-2.25H3.75z"}}),_c('path',{attrs:{"d":"M8.25 14.25A2.252 2.252 0 016 12V7.5c0-.531.19-1.046.536-1.453l.013-.019a.714.714 0 01.054-.056A2.243 2.243 0 018.25 5.25h7.5c.639 0 1.25.275 1.678.755l.027.031c.348.398.545.922.545 1.464V12a2.252 2.252 0 01-2.25 2.25h-7.5zM7.5 12c0 .414.336.75.75.75h7.5a.75.75 0 00.75-.75V7.777l-4.024 3.303a.752.752 0 01-.952 0L7.5 7.777V12zM12 9.53l3.387-2.78H8.613L12 9.53z"}})])
          )
        }
      }
    