
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
            children.concat([_c('path',{attrs:{"d":"M12 24c-6.841 0-12-2.257-12-5.25V5.251C0 2.258 5.159.001 12 .001s12 2.257 12 5.25V18.75C24 21.743 18.841 24 12 24zM1.5 18.75c0 1.533 3.739 3.75 10.5 3.75s10.5-2.217 10.5-3.75v-4.137c-2.053 1.622-6.023 2.637-10.5 2.637s-8.446-1.016-10.5-2.637v4.137zm0-6.75c0 1.533 3.739 3.75 10.5 3.75S22.5 13.533 22.5 12V7.863C20.446 9.485 16.477 10.5 12 10.5S3.554 9.485 1.5 7.863V12zM12 1.501c-6.761 0-10.5 2.217-10.5 3.75s3.739 3.75 10.5 3.75 10.5-2.217 10.5-3.75-3.739-3.75-10.5-3.75z"}})])
          )
        }
      }
    