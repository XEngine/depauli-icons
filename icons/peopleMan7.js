
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
            children.concat([_c('path',{attrs:{"d":"M21.75 24a.75.75 0 01-.75-.75 8.945 8.945 0 00-4.522-7.804C16.253 17.719 14.331 19.5 12 19.5s-4.253-1.781-4.478-4.054A8.944 8.944 0 003 23.25a.75.75 0 01-1.5 0 10.488 10.488 0 016.506-9.709A10.381 10.381 0 0112 12.75a10.424 10.424 0 014.07.822 10.48 10.48 0 016.43 9.678.75.75 0 01-.75.75zM9 15c0 1.654 1.346 3 3 3s3-1.346 3-3v-.233c-.966-.343-1.973-.517-3-.517s-2.035.174-3 .517V15zM12 12.005a6.008 6.008 0 01-4.959-9.383l.016-.024A5.984 5.984 0 0111.996 0c5.667 0 6.673 4.057 7.407 7.019l.074.299a.753.753 0 01-.538.907c-.589.154-1.222.254-1.883.299a.484.484 0 01-.073.009c-.229.014-.464.021-.698.021-3.497 0-7.081-1.601-8.624-3.755a4.486 4.486 0 001.798 4.915 4.487 4.487 0 002.541.791 4.49 4.49 0 002.496-.76.75.75 0 01.832 1.248A5.983 5.983 0 0112 12.005zm4.293-4.952l-.003.375.01-.375h.037a9.594 9.594 0 001.499-.124C17.148 4.196 16.288 1.5 12 1.5a4.51 4.51 0 00-3.511 1.686c.283.783 1.038 1.595 2.106 2.266a10.01 10.01 0 001.772.876l.035.013a11.613 11.613 0 002.617.634l.121.014a11.177 11.177 0 00.669.054l.014.375.016-.375c.146.006.29.009.435.009h.014l.005.001z"}})])
          )
        }
      }
    