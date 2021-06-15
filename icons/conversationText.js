
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
            children.concat([_c('path',{attrs:{"d":"M.751 21.003a.75.75 0 01-.678-1.072l2.5-5.25a9.787 9.787 0 01-.703-1.534 9.783 9.783 0 01.365-7.53A9.777 9.777 0 017.817.55a9.797 9.797 0 013.316-.579 9.879 9.879 0 019.281 6.526.752.752 0 01-.707 1.003.752.752 0 01-.706-.497 8.375 8.375 0 00-7.868-5.532c-.957 0-1.903.165-2.811.491a8.297 8.297 0 00-4.731 4.295 8.295 8.295 0 00-.309 6.383c.201.56.462 1.1.777 1.604a.747.747 0 01.041.72l-1.763 3.704 3.704-1.764a.75.75 0 01.719.041 8.287 8.287 0 003.108 1.159.742.742 0 01.49.3.74.74 0 01.134.558.744.744 0 01-.738.633.714.714 0 01-.121-.01 9.788 9.788 0 01-3.31-1.155l-5.25 2.5a.754.754 0 01-.322.073z"}}),_c('path',{attrs:{"d":"M6.75 7.503a.75.75 0 010-1.5h7.5a.75.75 0 010 1.5h-7.5zM6.75 12.003a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM22.579 24.003a.75.75 0 01-.394-.112l-3.247-2.002c-.35.062-.706.093-1.059.093-2.821 0-5.327-1.996-5.959-4.747a6.12 6.12 0 015.959-7.482h.001c1.637 0 3.167.627 4.316 1.765a6.058 6.058 0 011.805 4.301 6.105 6.105 0 01-1.294 3.783l.612 3.523a.749.749 0 01-.74.878zm-3.5-3.658a.75.75 0 01.394.112l2.082 1.284-.386-2.223a.741.741 0 01.178-.626 4.59 4.59 0 001.154-3.066 4.568 4.568 0 00-1.36-3.242 4.566 4.566 0 00-3.233-1.331h-.03a4.62 4.62 0 00-4.495 5.646 4.65 4.65 0 004.497 3.582c.345 0 .693-.04 1.032-.117a.725.725 0 01.167-.019z"}}),_c('path',{attrs:{"d":"M16.5 15.003a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM16.5 18.003a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3z"}})])
          )
        }
      }
    