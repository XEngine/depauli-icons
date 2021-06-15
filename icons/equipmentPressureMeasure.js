
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
            children.concat([_c('path',{attrs:{"d":"M4.75 24C3.785 24 3 23.215 3 22.25V1.75C3 .785 3.785 0 4.75 0h14.5C20.215 0 21 .785 21 1.75v20.5c0 .965-.785 1.75-1.75 1.75H4.75zm-.25-1.75c0 .138.112.25.25.25h14.5a.25.25 0 00.25-.25V13.5h-15v8.75zM19.5 12V4.5h-15V12h3.827a3.743 3.743 0 015.086-2.721l2.463-3.695a.749.749 0 111.247.832l-2.463 3.695c.517.52.867 1.174 1.013 1.889H19.5zm-5.379 0c-.313-.879-1.159-1.5-2.121-1.5s-1.808.621-2.121 1.5h4.242zM19.5 3V1.75a.25.25 0 00-.25-.25H4.75a.25.25 0 00-.25.25V3h15z"}}),_c('path',{attrs:{"d":"M9.75 21c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z"}}),_c('circle',{attrs:{"cx":"16.5","cy":"16.5","r":"1.125"}}),_c('circle',{attrs:{"cx":"16.5","cy":"19.5","r":"1.125"}})])
          )
        }
      }
    