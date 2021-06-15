
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
            children.concat([_c('path',{attrs:{"d":"M12 23.741c-4.963 0-9-4.037-9-9 0-2.123.663-4.151 1.919-5.863L10.795.872l.018-.023c.091-.118.188-.212.297-.292a1.48 1.48 0 011.113-.278c.396.059.746.269.984.59l5.874 8.009A9.845 9.845 0 0121 14.741a8.903 8.903 0 01-.039.819 8.94 8.94 0 01-1.979 4.854.688.688 0 01-.088.106A8.985 8.985 0 0112 23.741zM6.129 9.766A8.352 8.352 0 004.5 14.741c0 4.135 3.365 7.5 7.5 7.5a7.442 7.442 0 004.494-1.5H12.75a.75.75 0 010-1.5h5.243a7.482 7.482 0 001.354-3H12.75a.75.75 0 010-1.5h6.75a8.365 8.365 0 00-.55-3h-6.2a.75.75 0 010-1.5h5.444a7.9 7.9 0 00-.323-.475L16.02 7.241h-3.27a.75.75 0 010-1.5h2.17l-2.917-3.978-5.874 8.003z"}})])
          )
        }
      }
    