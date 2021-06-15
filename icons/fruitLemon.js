
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
            children.concat([_c('path',{attrs:{"d":"M9.75 21.75C4.374 21.75 0 17.376 0 12s4.374-9.75 9.75-9.75C18.273 2.25 24 6.168 24 12s-5.727 9.75-14.25 9.75zm0-18C5.201 3.75 1.5 7.451 1.5 12s3.701 8.25 8.25 8.25S18 16.549 18 12s-3.701-8.25-8.25-8.25zm6.473.967C18.281 6.549 19.5 9.191 19.5 12s-1.219 5.451-3.277 7.283C20.192 17.941 22.5 15.308 22.5 12c0-3.308-2.308-5.941-6.277-7.283z"}}),_c('path',{attrs:{"d":"M9.75 10.5A.75.75 0 019 9.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75zM9.75 16.5a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75zM7.801 11.625a.75.75 0 01-.375-.101l-1.299-.75a.743.743 0 01-.349-.455.74.74 0 01.075-.569.754.754 0 011.025-.274l1.299.75c.173.1.298.262.349.455a.744.744 0 01-.075.569.754.754 0 01-.65.375zM12.997 14.625a.748.748 0 01-.375-.101l-1.299-.75a.743.743 0 01-.349-.455.745.745 0 01.075-.569.754.754 0 011.024-.274l1.299.75a.74.74 0 01.349.455.751.751 0 01-.724.944zM6.502 14.625a.754.754 0 01-.65-.375.745.745 0 01.274-1.024l1.299-.75a.75.75 0 11.751 1.298l-1.299.75a.748.748 0 01-.375.101zM11.698 11.625a.754.754 0 01-.65-.375.747.747 0 01.274-1.024l1.299-.75a.748.748 0 011.025.274.749.749 0 01-.274 1.025l-1.299.75a.757.757 0 01-.375.1z"}})])
          )
        }
      }
    