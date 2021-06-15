
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
            children.concat([_c('path',{attrs:{"d":"M21.75 24a2.252 2.252 0 01-2.25-2.25V16.5H15a.75.75 0 010-1.5h4.5V1.5H15A.75.75 0 0115 0h5.25A3.754 3.754 0 0124 3.75v18A2.252 2.252 0 0121.75 24zM21 21.75a.75.75 0 001.5 0v-18c0-.962-.621-1.808-1.5-2.121V21.75z"}}),_c('path',{attrs:{"d":"M15 4.5A.75.75 0 0115 3h2.25a.75.75 0 010 1.5H15zM15 7.5A.75.75 0 0115 6h2.25a.75.75 0 010 1.5H15zM15 10.5A.75.75 0 0115 9h2.25a.75.75 0 010 1.5H15zM15 13.5a.75.75 0 010-1.5h2.25a.75.75 0 010 1.5H15zM12.749 24a3.016 3.016 0 01-2.611-1.525A2.994 2.994 0 017.5 19.5v-5.536l-1.5.75V19.5c0 1.654-1.346 3-3 3s-3-1.346-3-3a3.004 3.004 0 014.5-2.598V11.25c0-.036.003-.072.008-.108L6.008.644C6.06.277 6.379 0 6.75 0s.69.277.742.644l1.5 10.5c.005.034.008.07.008.106v5.652a3.004 3.004 0 014.5 2.598c0 1.15-.662 2.184-1.666 2.684.259.202.579.316.915.316a.75.75 0 11.001 1.5h-.001zM10.5 18c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zM3 18c-.827 0-1.5.673-1.5 1.5S2.173 21 3 21s1.5-.673 1.5-1.5S3.827 18 3 18zm3-4.964l1.5-.75v-.983l-.75-5.25-.75 5.25v1.733z"}})])
          )
        }
      }
    