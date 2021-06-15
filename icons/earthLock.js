
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
            children.concat([_c('path',{attrs:{"d":"M11.159 23.971a11.917 11.917 0 01-8.283-4.177l-.039-.047a12.976 12.976 0 01-.206-.249l-.106-.133a12.043 12.043 0 01-.631-.888l-.035-.055a11.95 11.95 0 01-.558-.975l-.015-.029A11.995 11.995 0 01.238 9.601a.497.497 0 01.018-.061C1.412 4.011 6.345.001 11.996.001c.277 0 .559.01.836.029 5.664.395 10.316 4.767 11.062 10.395a.746.746 0 01-.645.842.75.75 0 01-.842-.644 10.483 10.483 0 00-1.805-4.622h-3.684a.75.75 0 00-.728.568l-.75 3a.749.749 0 11-1.454-.365l.75-3A2.248 2.248 0 0116.919 4.5h2.411a10.41 10.41 0 00-7.339-3A10.472 10.472 0 001.939 9h4.388c1.034 0 1.932.701 2.183 1.704l.75 3a2.235 2.235 0 01-.592 2.137c-.425.425-.99.659-1.591.659h-.465l-.796 3.981a10.438 10.438 0 005.452 1.994.751.751 0 11-.109 1.496zM1.59 10.631a5.676 5.676 0 00-.057.539l-.012.153c-.01.149-.016.299-.02.448l-.001.096a10.45 10.45 0 002.76 7.219l.059.064a8.357 8.357 0 00.193.203l.75-3.75A.752.752 0 015.997 15h1.079a.749.749 0 00.727-.933l-.75-2.999a.75.75 0 00-.728-.568H1.609a14.05 14.05 0 00-.019.131z"}}),_c('path',{attrs:{"d":"M15.247 24.001c-.965 0-1.75-.785-1.75-1.75v-5.5c0-.88.653-1.611 1.5-1.732v-.768c0-2.068 1.682-3.75 3.75-3.75s3.75 1.682 3.75 3.75v.768c.847.122 1.5.852 1.5 1.732v5.5c0 .965-.785 1.75-1.75 1.75h-7zm0-7.5a.25.25 0 00-.25.25v5.5c0 .138.112.25.25.25h7a.25.25 0 00.25-.25v-5.5a.25.25 0 00-.25-.25h-7zm5.75-1.5v-.75c0-1.24-1.009-2.25-2.25-2.25s-2.25 1.009-2.25 2.25l4.5.75z"}}),_c('path',{attrs:{"d":"M18.747 20.655a.68.68 0 01-.164-.02 1.118 1.118 0 01-.948-.969.696.696 0 01-.013-.136v-.004c0-.045.004-.091.013-.136.064-.508.473-.914.982-.974a.798.798 0 01.262 0c.513.06.923.47.983.983a.702.702 0 010 .261 1.123 1.123 0 01-1.115.995z"}})])
          )
        }
      }
    