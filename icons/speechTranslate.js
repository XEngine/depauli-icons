
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
            children.concat([_c('path',{attrs:{"d":"M16.5 24a.75.75 0 01-.75-.75V18h-7.5v5.25a.75.75 0 01-1.5 0v-10.5A5.256 5.256 0 0112 7.5a5.256 5.256 0 015.25 5.25v10.5a.75.75 0 01-.75.75zm-.75-7.5v-3.75A3.754 3.754 0 0012 9a3.754 3.754 0 00-3.75 3.75v3.75h7.5zM3.75 9.75A.75.75 0 013 9a6.009 6.009 0 016-6 .75.75 0 010 1.5A4.507 4.507 0 004.5 9a.75.75 0 01-.75.75zM20.25 9.75A.75.75 0 0119.5 9c0-2.481-2.019-4.5-4.5-4.5A.75.75 0 0115 3c3.308 0 6 2.692 6 6a.75.75 0 01-.75.75z"}}),_c('path',{attrs:{"d":"M23.25 9.75A.75.75 0 0122.5 9c0-4.135-3.365-7.5-7.5-7.5A.75.75 0 0115 0c4.963 0 9 4.037 9 9a.75.75 0 01-.75.75zM.75 9.75A.75.75 0 010 9c0-4.963 4.037-9 9-9a.75.75 0 010 1.5C4.865 1.5 1.5 4.865 1.5 9a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    