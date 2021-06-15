
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
            children.concat([_c('path',{attrs:{"d":"M11.999 23.947c-.261 0-.518-.068-.743-.197-1.503-.855-9.006-5.551-9.006-13.951 0-5.376 4.374-9.75 9.75-9.75s9.75 4.374 9.75 9.75c0 3.544-1.3 6.822-3.865 9.744a21.008 21.008 0 01-5.142 4.208 1.51 1.51 0 01-.744.196zM12 1.549c-4.549 0-8.25 3.701-8.25 8.25 0 7.569 6.872 11.864 8.249 12.648 7.656-4.371 8.251-10.786 8.251-12.648 0-4.549-3.701-8.25-8.25-8.25z"}}),_c('path',{attrs:{"d":"M11.939 16.413a.754.754 0 01-.747-.686.748.748 0 01.683-.811c2.002-.172 2.682-1.473 2.902-2.519a3.128 3.128 0 01-.677.074l-.048.001c-.074 0-.149-.006-.223-.013l-5.647-.513a.746.746 0 01-.682-.747v-3.75c0-.391.293-.712.682-.747l5.636-.512a3.172 3.172 0 013.432 3.133 3.132 3.132 0 01-.879 2.18c-.025 1.059-.408 4.566-4.368 4.906a.449.449 0 01-.064.004zm2.015-5.449a1.643 1.643 0 001.311-.476 1.636 1.636 0 00.478-1.307 1.66 1.66 0 00-1.79-1.498L9 8.134v2.38l4.954.45z"}})])
          )
        }
      }
    