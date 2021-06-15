
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
            children.concat([_c('path',{attrs:{"d":"M3.75 18.75A3.754 3.754 0 010 15V9a3.754 3.754 0 013.75-3.75h16.5A3.754 3.754 0 0124 9v6a3.754 3.754 0 01-3.75 3.75H3.75zm0-12A2.252 2.252 0 001.5 9v6a2.252 2.252 0 002.25 2.25h16.5A2.252 2.252 0 0022.5 15V9a2.252 2.252 0 00-2.25-2.25H3.75z"}}),_c('path',{attrs:{"d":"M6.75 15.75A3.754 3.754 0 013 12c0-2.068 1.682-3.75 3.75-3.75S10.5 9.932 10.5 12a3.754 3.754 0 01-3.75 3.75zm0-6A2.252 2.252 0 004.5 12c0 1.241 1.009 2.25 2.25 2.25S9 13.241 9 12a2.252 2.252 0 00-2.25-2.25zM17.25 15.75A3.754 3.754 0 0113.5 12c0-2.068 1.682-3.75 3.75-3.75S21 9.932 21 12a3.754 3.754 0 01-3.75 3.75zm0-6A2.252 2.252 0 0015 12c0 1.241 1.009 2.25 2.25 2.25S19.5 13.241 19.5 12a2.252 2.252 0 00-2.25-2.25z"}})])
          )
        }
      }
    