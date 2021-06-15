
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
            children.concat([_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}}),_c('path',{attrs:{"d":"M12 19.511a7.42 7.42 0 01-5.005-1.95c-.148-.135-.235-.319-.244-.52s.06-.392.195-.54a.75.75 0 011.059-.049C9.107 17.457 10.526 18.01 12 18.01s2.893-.553 3.995-1.557a.749.749 0 111.01 1.108A7.416 7.416 0 0112 19.511zM6.75 9.75A.75.75 0 016 9V6.75a.75.75 0 011.5 0V9a.75.75 0 01-.75.75zM17.25 9.75A.75.75 0 0116.5 9V6.75a.75.75 0 011.5 0V9a.75.75 0 01-.75.75zM9.75 14.25a.75.75 0 010-1.5h.75a.75.75 0 00.75-.75V6.75a.75.75 0 011.5 0V12a2.252 2.252 0 01-2.25 2.25h-.75z"}})])
          )
        }
      }
    