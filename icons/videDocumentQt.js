
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
            children.concat([_c('path',{attrs:{"d":"M1.5 4.5a.75.75 0 010-1.5h21a.75.75 0 010 1.5h-21zM1.5 21a.75.75 0 010-1.5h21a.75.75 0 010 1.5h-21zM15 16.5a.75.75 0 01-.75-.75V9h-.75a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-.75v6.75a.75.75 0 01-.75.75zM10.5 18a.743.743 0 01-.53-.22l-1.307-1.307A2.264 2.264 0 016.75 14.25v-4.5C6.75 8.509 7.759 7.5 9 7.5s2.25 1.009 2.25 2.25v4.5a2.25 2.25 0 01-.895 1.795l.675.675a.744.744 0 010 1.06.743.743 0 01-.53.22zM9 9a.75.75 0 00-.75.75v4.5a.75.75 0 001.5 0v-4.5A.75.75 0 009 9z"}})])
          )
        }
      }
    