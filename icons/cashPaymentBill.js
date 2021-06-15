
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
            children.concat([_c('path',{attrs:{"d":"M.75 24a.75.75 0 01-.75-.75v-9a.75.75 0 011.5 0V15h6c1.8 0 3.324 1.268 3.675 3h3.075A3.754 3.754 0 0118 21.75a.75.75 0 01-.75.75H1.5v.75a.75.75 0 01-.75.75zm15.621-3a2.264 2.264 0 00-2.121-1.5h-7.5a.75.75 0 010-1.5h2.868A2.262 2.262 0 007.5 16.5h-6V21h14.871z"}}),_c('circle',{attrs:{"cx":"7.875","cy":"3.375","r":"1.125"}}),_c('circle',{attrs:{"cx":"20.625","cy":"9.375","r":"1.125"}}),_c('path',{attrs:{"d":"M6.635 12.75A2.158 2.158 0 014.5 10.591V2.156A2.154 2.154 0 016.627 0h15.238A2.158 2.158 0 0124 2.159v8.435a2.155 2.155 0 01-2.127 2.156H6.635zM6.64 1.5a.652.652 0 00-.64.653v8.441a.652.652 0 00.643.656h15.222a.65.65 0 00.635-.653V2.156a.653.653 0 00-.643-.656H6.64z"}}),_c('path',{attrs:{"d":"M14.25 9c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z"}})])
          )
        }
      }
    