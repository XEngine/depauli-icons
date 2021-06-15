
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
            children.concat([_c('path',{attrs:{"d":"M13.5 22.497a.75.75 0 010-1.5c4.963 0 9-4.037 9-9s-4.037-9-9-9c-4.546 0-8.361 3.447-8.925 7.865L6.22 9.217a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53l-2.986 2.986c-.127.145-.331.237-.544.237s-.417-.092-.56-.253l-2.971-2.97C.078 10.136 0 9.948 0 9.747s.078-.389.22-.53c.141-.142.33-.22.53-.22s.389.078.53.22l1.771 1.771C3.566 5.682 8.085 1.497 13.5 1.497c5.79 0 10.5 4.71 10.5 10.5s-4.71 10.5-10.5 10.5z"}}),_c('path',{attrs:{"d":"M13.5 14.997c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z"}})])
          )
        }
      }
    