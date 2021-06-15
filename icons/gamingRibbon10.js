
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
            children.concat([_c('path',{attrs:{"d":"M18 23.999a.747.747 0 01-.635-.35l-3.664-5.813a8.979 8.979 0 01-3.404 0l-3.664 5.813a.746.746 0 01-.721.345.754.754 0 01-.624-.508l-1.362-4.087-3.323-.665a.754.754 0 01-.559-.482.757.757 0 01.125-.728l3.746-4.578A9.008 9.008 0 013 8.999c0-4.963 4.037-9 9-9s9 4.037 9 9a9.015 9.015 0 01-.915 3.948l3.746 4.577a.752.752 0 01-.434 1.21l-3.323.665-1.362 4.087a.75.75 0 01-.712.513zm-.21-2.49l.999-2.997a.75.75 0 01.564-.498l2.526-.505-2.619-3.2a9.063 9.063 0 01-4.056 3.1l2.586 4.1zM4.647 18.014a.75.75 0 01.564.498l.999 2.996 2.584-4.101a9.064 9.064 0 01-4.056-3.099l-2.619 3.2 2.528.506zM12 1.499c-4.135 0-7.5 3.365-7.5 7.5s3.365 7.5 7.5 7.5 7.5-3.365 7.5-7.5-3.365-7.5-7.5-7.5z"}}),_c('path',{attrs:{"d":"M15 11.999a2.252 2.252 0 01-2.25-2.25v-1.5c0-1.241 1.009-2.25 2.25-2.25s2.25 1.009 2.25 2.25v1.5a2.252 2.252 0 01-2.25 2.25zm0-4.5a.75.75 0 00-.75.75v1.5a.75.75 0 001.5 0v-1.5a.75.75 0 00-.75-.75zM8.25 11.999a.75.75 0 010-1.5H9v-3h-.75a.75.75 0 010-1.5H9c.827 0 1.5.673 1.5 1.5v3h.75a.75.75 0 010 1.5h-3z"}})])
          )
        }
      }
    