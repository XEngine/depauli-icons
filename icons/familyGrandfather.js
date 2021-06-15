
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
            children.concat([_c('path',{attrs:{"d":"M15 7.5c-2.068 0-3.75-1.682-3.75-3.75S12.932 0 15 0s3.75 1.682 3.75 3.75S17.068 7.5 15 7.5zm0-6c-1.241 0-2.25 1.009-2.25 2.25S13.759 6 15 6s2.25-1.009 2.25-2.25S16.241 1.5 15 1.5zM12.75 24a.748.748 0 01-.746-.676l-.683-6.824H10.5a.75.75 0 01-.75-.75v-3A5.256 5.256 0 0115 7.5a5.256 5.256 0 015.25 5.25v3a.75.75 0 01-.75.75h-.821l-.683 6.825a.747.747 0 01-.746.675h-4.5zm3.821-1.5l.683-6.825A.747.747 0 0118 15h.75v-2.25c0-1.781-1.288-3.32-3-3.672v5.172a.75.75 0 01-1.5 0V9.078c-1.712.352-3 1.892-3 3.672V15H12c.387 0 .708.291.746.676l.683 6.824h3.142zM7.5 24a.75.75 0 01-.75-.75v-9a.75.75 0 00-1.5 0V15a.75.75 0 01-1.5 0v-.75C3.75 13.009 4.759 12 6 12s2.25 1.009 2.25 2.25v9a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    