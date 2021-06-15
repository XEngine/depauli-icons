
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
            children.concat([_c('path',{attrs:{"d":"M12 19.5c-6.35 0-10.27-4.508-11.66-6.446a1.806 1.806 0 010-2.109C1.731 9.007 5.652 4.5 12 4.5c6.347 0 10.269 4.508 11.66 6.446a1.806 1.806 0 010 2.109C22.27 14.992 18.351 19.5 12 19.5zm-4.019-2.23A11.38 11.38 0 0012 18c5.655 0 9.186-4.07 10.442-5.82a.308.308 0 000-.359c-.783-1.09-2.452-3.085-4.975-4.433L7.981 17.27zm-6.418-5.084c.784 1.091 2.451 3.081 4.969 4.427l9.487-9.882A11.363 11.363 0 0012 6c-5.653 0-9.185 4.07-10.442 5.82a.308.308 0 000 .359l.005.007z"}}),_c('path',{attrs:{"d":"M12 16.5a.75.75 0 010-1.5c1.654 0 3-1.346 3-3a.75.75 0 011.5 0c0 2.481-2.019 4.5-4.5 4.5zM8.25 12.75A.75.75 0 017.5 12c0-2.481 2.019-4.5 4.5-4.5A.75.75 0 0112 9c-1.654 0-3 1.346-3 3a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    