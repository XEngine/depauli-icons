
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
            children.concat([_c('path',{attrs:{"d":"M19.5 24a.753.753 0 01-.249-.042L12 21.42l-7.252 2.538a.751.751 0 01-.496-1.416l5.477-1.917-5.477-1.917a.744.744 0 01-.428-.383.75.75 0 01.923-1.033l6.502 2.276v-3.102a8.237 8.237 0 01-7.5-8.216C3.75 3.701 7.451 0 12 0s8.25 3.701 8.25 8.25a8.237 8.237 0 01-7.5 8.216v3.102l6.502-2.276a.751.751 0 01.496 1.417l-5.477 1.917 5.477 1.917a.744.744 0 01.428.383A.752.752 0 0119.5 24zM12 1.5c-3.722 0-6.75 3.028-6.75 6.75S8.278 15 12 15s6.75-3.028 6.75-6.75S15.722 1.5 12 1.5z"}}),_c('path',{attrs:{"d":"M12 13.5c-2.895 0-5.25-2.355-5.25-5.25S9.105 3 12 3s5.25 2.355 5.25 5.25S14.895 13.5 12 13.5zm0-9c-2.068 0-3.75 1.682-3.75 3.75S9.932 12 12 12s3.75-1.682 3.75-3.75S14.068 4.5 12 4.5z"}})])
          )
        }
      }
    