
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
            children.concat([_c('path',{attrs:{"d":"M8.25 24a.75.75 0 010-1.5h3v-6H4.5c-.4 0-.777-.156-1.06-.44a1.491 1.491 0 01-.427-1.259L4.42 4.3c.1-.742.739-1.301 1.487-1.301h5.343V.75a.75.75 0 011.5 0v2.249h5.343c.748 0 1.387.56 1.487 1.301l1.406 10.5a1.502 1.502 0 01-1.486 1.699h-3.75v2.25a.75.75 0 01-1.5 0V16.5h-1.5v6h3a.75.75 0 010 1.5h-7.5zM4.5 15h15L18.094 4.5l-6.068-.001L12 4.5l-.03-.001H5.907L4.5 15z"}})])
          )
        }
      }
    