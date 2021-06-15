
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
            children.concat([_c('path',{attrs:{"d":"M.751 15a.751.751 0 01-.744-.844A6.763 6.763 0 016.709 8.25h.1c1.639 0 3.226.604 4.469 1.701a.751.751 0 01-.496 1.313.753.753 0 01-.496-.187A5.334 5.334 0 006.752 9.75h-.039a5.264 5.264 0 00-5.218 4.594.753.753 0 01-.744.656zM6.75 8.25c-2.275 0-4.125-1.85-4.125-4.125S4.476 0 6.75 0s4.125 1.85 4.125 4.125S9.025 8.25 6.75 8.25zm0-6.75c-1.447 0-2.625 1.178-2.625 2.625S5.303 6.75 6.75 6.75s2.625-1.178 2.625-2.625S8.197 1.5 6.75 1.5zM16.5 6.75c-1.861 0-3.375-1.514-3.375-3.375S14.639 0 16.5 0s3.375 1.514 3.375 3.375S18.361 6.75 16.5 6.75zm0-5.25c-1.034 0-1.875.841-1.875 1.875S15.466 5.25 16.5 5.25s1.875-.841 1.875-1.875S17.534 1.5 16.5 1.5z"}}),_c('path',{attrs:{"d":"M20.398 9.75a.751.751 0 01-.649-.375 3.723 3.723 0 00-2.278-1.747 3.75 3.75 0 00-3.794 1.156.752.752 0 01-.565.256.751.751 0 01-.565-1.243A5.258 5.258 0 0116.492 6c.458 0 .917.061 1.365.181a5.214 5.214 0 013.188 2.445.751.751 0 01-.647 1.124zM11.951 24c-.283 0-.556-.086-.789-.25l-3.718-2.61a1.133 1.133 0 01-.439-.768 1.077 1.077 0 01.232-.797l.016-.019a.518.518 0 01.038-.042c.008-.009.017-.016.026-.024.105-.099.42-.379 1.628-1.443.211-.173.462-.263.716-.263.123 0 .245.021.36.062a.763.763 0 01.132.062l1.542.918 1.148-.801-3.73-2.31a.727.727 0 01-.095-.07 1.18 1.18 0 01-.13-1.653c.067-.08.074-.089 1.341-1.033a1.172 1.172 0 011.109-.158l6.114 2.275 2.68-1.826a2.418 2.418 0 011.904-.358 2.51 2.51 0 011.424.902c.417.545.595 1.216.505 1.892a2.531 2.531 0 01-1.131 1.797l-10.158 6.31a1.362 1.362 0 01-.724.207h-.001zm.005-1.525l10.071-6.256a1.046 1.046 0 00.452-.731 1.046 1.046 0 00-.206-.777 1 1 0 00-.568-.356l-.01-.002a.921.921 0 00-.719.137l-3 2.044a.749.749 0 01-.684.083l-6.311-2.349-.613.458 4.234 2.622a.745.745 0 01.354.617.746.746 0 01-.32.635l-2.48 1.73a.75.75 0 01-.812.03L9.7 19.382l-.952.842 3.208 2.251z"}})])
          )
        }
      }
    