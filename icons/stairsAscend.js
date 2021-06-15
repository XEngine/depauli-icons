
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
            children.concat([_c('path',{attrs:{"d":"M12.777 24a.748.748 0 01-.75-.749c0-.2.078-.389.219-.531l9.196-9.219H17.25a.75.75 0 010-1.5h5.999a.746.746 0 01.286.056.744.744 0 01.419.44.73.73 0 01.046.251v6.002a.75.75 0 01-1.5 0v-4.185l-9.192 9.215a.743.743 0 01-.531.22zM.75 24a.75.75 0 01-.75-.75v-6a.75.75 0 01.75-.75H6v-5.25a.75.75 0 01.75-.75H12V5.25a.75.75 0 01.75-.75H18V.75a.75.75 0 011.5 0v4.5a.75.75 0 01-.75.75H13.5v5.25a.75.75 0 01-.75.75H7.5v5.25a.75.75 0 01-.75.75H1.5v5.25a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    