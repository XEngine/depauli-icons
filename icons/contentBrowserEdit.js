
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
            children.concat([_c('path',{attrs:{"d":"M2.244 22.5a2.252 2.252 0 01-2.25-2.25V3.75a2.252 2.252 0 012.25-2.25h16.5a.75.75 0 010 1.5h-16.5a.75.75 0 00-.75.75V6h12a.75.75 0 010 1.5h-12v12.75c0 .414.336.75.75.75h18a.75.75 0 00.75-.75v-9a.75.75 0 011.5 0v9a2.252 2.252 0 01-2.25 2.25h-18z"}}),_c('path',{attrs:{"d":"M14.244 13.5a.75.75 0 01-.735-.898l.563-2.812a.749.749 0 01.205-.383L20 3.685a2.318 2.318 0 011.652-.684 2.32 2.32 0 011.641.673l.022.021a2.341 2.341 0 01-.004 3.3l-5.723 5.723a.74.74 0 01-.384.205l-2.813.562a.726.726 0 01-.147.015zm.957-1.706l1.487-.297 5.562-5.562a.84.84 0 00.011-1.172l-.018-.017a.834.834 0 00-1.182 0l-5.563 5.563-.297 1.485zM5.244 13.5a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-4.5zM5.244 18a.75.75 0 010-1.5h9.75a.75.75 0 010 1.5h-9.75z"}})])
          )
        }
      }
    