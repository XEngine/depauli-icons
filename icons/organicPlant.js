
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
            children.concat([_c('path',{attrs:{"d":"M23.153 14.25a.753.753 0 01-.745-.848c.062-.463.093-.935.094-1.402 0-5.789-4.71-10.5-10.5-10.5C6.21 1.5 1.5 6.21 1.5 12c0 .467.032.938.093 1.401a.75.75 0 01-.743.849.752.752 0 01-.743-.651A12.064 12.064 0 010 12C0 5.383 5.383 0 12 0c6.618 0 12.002 5.383 12.002 12 0 .532-.036 1.07-.106 1.599a.753.753 0 01-.743.651z"}}),_c('path',{attrs:{"d":"M12.001 24a.75.75 0 01-.75-.75v-2.218a8.974 8.974 0 01-5.62-2.614A8.948 8.948 0 013 12.044a.75.75 0 01.75-.749 9.03 9.03 0 014.898 1.46A9.891 9.891 0 0111.48 4.72a.755.755 0 011.062 0 9.896 9.896 0 012.832 8.019 8.882 8.882 0 014.876-1.443.75.75 0 01.75.749 8.987 8.987 0 01-8.25 8.987v2.218a.749.749 0 01-.749.75zM4.54 12.838a7.482 7.482 0 002.153 4.521 7.491 7.491 0 004.517 2.164 7.472 7.472 0 00-6.67-6.685zm14.921 0a7.484 7.484 0 00-4.734 2.391 7.39 7.39 0 00-1.937 4.295 7.473 7.473 0 006.671-6.686zm-8.93 1.556A8.928 8.928 0 0112 16.71a9.087 9.087 0 011.503-2.358 8.404 8.404 0 00-1.493-7.986 8.4 8.4 0 00-1.479 8.028zM20.907 19.623a.751.751 0 01-.591-1.211 10.02 10.02 0 001.312-2.215.749.749 0 01.984-.394.752.752 0 01.395.986c-.391.91-.898 1.768-1.509 2.548a.752.752 0 01-.591.286zM16.338 23.128a.747.747 0 01-.694-.466.746.746 0 01.41-.978 9.863 9.863 0 002.23-1.274.748.748 0 011.198.698.745.745 0 01-.289.496 11.349 11.349 0 01-2.57 1.469.773.773 0 01-.285.055zM7.687 23.128a.749.749 0 01-.284-.056 11.264 11.264 0 01-2.571-1.469.751.751 0 01.455-1.347c.166 0 .323.053.454.154a9.754 9.754 0 002.229 1.274c.185.075.33.219.408.404a.746.746 0 01-.691 1.04zM3.115 19.623a.746.746 0 01-.591-.288 11.471 11.471 0 01-1.509-2.548.752.752 0 01.688-1.046c.301 0 .572.178.69.455.339.79.78 1.535 1.311 2.214a.744.744 0 01.154.553.746.746 0 01-.743.66z"}})])
          )
        }
      }
    