
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
            children.concat([_c('path',{attrs:{"d":"M17.26 15.003a.75.75 0 010-1.5h4.5a.75.75 0 00.75-.75v-6.75h-15v5.25a.75.75 0 01-1.5 0v-9A2.252 2.252 0 018.26.003h13.5a2.252 2.252 0 012.25 2.25v10.5a2.252 2.252 0 01-2.25 2.25h-4.5zm5.25-10.5v-2.25a.75.75 0 00-.75-.75H8.26a.75.75 0 00-.75.75v2.25h15zM1.51 24.003c-.827 0-1.5-.673-1.5-1.5v-1.5c0-.827.673-1.5 1.5-1.5h7.5c.827 0 1.5.673 1.5 1.5v1.5c0 .827-.673 1.5-1.5 1.5h-7.5zm0-1.5h7.5v-1.5h-7.5v1.5z"}}),_c('path',{attrs:{"d":"M7.135 17.628a.752.752 0 01-.53-1.281l5.845-5.845H9.76a.75.75 0 010-1.5h4.5a.735.735 0 01.293.06.75.75 0 01.4.404l.01.026a.73.73 0 01.047.26v4.5a.75.75 0 01-1.5 0v-2.689l-5.845 5.845a.744.744 0 01-.53.22z"}})])
          )
        }
      }
    