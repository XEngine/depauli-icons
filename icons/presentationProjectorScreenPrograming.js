
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
            children.concat([_c('path',{attrs:{"d":"M.75 18a.75.75 0 010-1.5h.75v-12C.673 4.5 0 3.827 0 3V1.5C0 .673.673 0 1.5 0H21c.827 0 1.5.673 1.5 1.5V3c0 .827-.673 1.5-1.5 1.5v3.75a.75.75 0 01-1.5 0V4.5H3v12h5.25a.75.75 0 010 1.5H.75zM1.5 3H21V1.5H1.5V3z"}}),_c('path',{attrs:{"d":"M17.25 24c-3.722 0-6.75-3.028-6.75-6.75s3.028-6.75 6.75-6.75S24 13.528 24 17.25 20.972 24 17.25 24zm0-12C14.355 12 12 14.355 12 17.25s2.355 5.25 5.25 5.25 5.25-2.355 5.25-5.25S20.145 12 17.25 12z"}}),_c('path',{attrs:{"d":"M15.75 19.5a.743.743 0 01-.53-.22l-1.5-1.5a.752.752 0 010-1.061l1.5-1.5a.744.744 0 011.06 0 .752.752 0 010 1.061l-.97.97.97.97a.752.752 0 010 1.061.746.746 0 01-.53.219zM18.75 19.5a.752.752 0 01-.53-1.281l.97-.97-.97-.97a.752.752 0 01.53-1.281c.2 0 .389.078.53.22l1.5 1.5a.752.752 0 010 1.061l-1.5 1.5a.74.74 0 01-.53.221z"}})])
          )
        }
      }
    