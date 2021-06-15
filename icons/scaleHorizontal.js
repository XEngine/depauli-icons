
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
            children.concat([_c('path',{attrs:{"d":"M19.5 23.998a.75.75 0 01-.623-1.166l2.223-3.334H2.901l2.223 3.334a.751.751 0 01-1.248.832L.877 19.166l-.013-.021a.675.675 0 01-.073-.158l-.015-.049a.743.743 0 01.001-.384l.011-.037a.817.817 0 01.075-.165l3.013-4.521a.75.75 0 111.248.832l-2.223 3.334h18.197l-2.223-3.334a.748.748 0 01.624-1.166.75.75 0 01.624.333s3.008 4.512 3.011 4.519c.031.049.054.1.074.158l.016.052a.71.71 0 01-.002.381l-.011.038a.827.827 0 01-.088.185l-3 4.5a.744.744 0 01-.623.335zM9 12.748a.75.75 0 010-1.5h2.25v-9.75H7.5a.75.75 0 00-.75.75V4.5a.75.75 0 01-1.5 0V2.248A2.252 2.252 0 017.5-.002h9a2.252 2.252 0 012.25 2.25V4.5a.75.75 0 01-1.5 0V2.248a.75.75 0 00-.75-.75h-3.75v9.75H15a.75.75 0 010 1.5H9z"}})])
          )
        }
      }
    