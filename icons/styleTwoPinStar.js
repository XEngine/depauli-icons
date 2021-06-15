
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
            children.concat([_c('path',{attrs:{"d":"M14.479 15.308c-.199 0-.399-.049-.577-.143L12 14.171l-1.904.993a1.235 1.235 0 01-1.792-1.289l.365-2.114-1.546-1.499A1.23 1.23 0 016.812 9a1.23 1.23 0 01.994-.842l2.137-.309.949-1.911a1.238 1.238 0 012.212-.006l.952 1.922 2.135.308a1.225 1.225 0 01.684 2.095l-1.545 1.498.365 2.116c.08.464-.118.938-.502 1.208a1.21 1.21 0 01-.714.229zM12 12.637c.2 0 .4.049.577.143l1.548.809-.297-1.722a1.23 1.23 0 01.355-1.087l1.25-1.212-1.726-.249a1.238 1.238 0 01-.928-.667L12 7.08l-.776 1.562a1.244 1.244 0 01-.931.672l-1.735.25 1.259 1.221c.29.281.422.687.355 1.084l-.296 1.718 1.55-.809a1.24 1.24 0 01.574-.141z"}}),_c('path',{attrs:{"d":"M11.999 23.901c-.261 0-.518-.068-.743-.197a21.007 21.007 0 01-5.142-4.209c-2.564-2.922-3.864-6.2-3.864-9.743 0-5.376 4.374-9.75 9.75-9.75s9.75 4.374 9.75 9.75c0 3.544-1.3 6.822-3.865 9.744a21.008 21.008 0 01-5.142 4.208 1.5 1.5 0 01-.744.197zM12 1.503c-4.549 0-8.25 3.701-8.25 8.25 0 1.861.595 8.272 8.25 12.649 7.655-4.372 8.25-10.787 8.25-12.649 0-4.549-3.701-8.25-8.25-8.25z"}})])
          )
        }
      }
    