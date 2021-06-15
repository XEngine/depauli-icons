
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
            children.concat([_c('path',{attrs:{"d":"M12.024 23.998a12.14 12.14 0 01-2.535-.27 11.923 11.923 0 01-7.562-5.213A11.921 11.921 0 01.266 9.482a.756.756 0 01.891-.576.752.752 0 01.577.891c-.587 2.742-.071 5.549 1.453 7.904s3.874 3.974 6.617 4.561a10.444 10.444 0 007.904-1.453 10.432 10.432 0 004.561-6.616 10.424 10.424 0 00-.002-4.403.746.746 0 01.104-.565.745.745 0 01.63-.343c.35 0 .658.249.732.592.359 1.669.359 3.362.002 5.032a11.923 11.923 0 01-5.213 7.562 11.942 11.942 0 01-6.498 1.93zM8.5 2.056a.748.748 0 01-.668-1.09.747.747 0 01.437-.373 12.028 12.028 0 013.729-.595c1.254 0 2.501.198 3.709.588a.75.75 0 01-.462 1.427 10.536 10.536 0 00-3.247-.515c-1.103 0-2.202.175-3.265.521a.772.772 0 01-.233.037z"}}),_c('path',{attrs:{"d":"M11.993 21.005a8.208 8.208 0 01-2.737-.47 8.215 8.215 0 01-5.036-5.036 1.49 1.49 0 01.061-1.146 1.492 1.492 0 011.354-.854h12.732a1.502 1.502 0 011.415 1.999 8.27 8.27 0 01-7.789 5.507zM5.634 15a6.721 6.721 0 004.121 4.121 6.698 6.698 0 002.239.385 6.765 6.765 0 006.372-4.505L5.634 15zM5.25 12a.75.75 0 01-.728-.568A7.026 7.026 0 00.459 6.69a.75.75 0 01-.001-1.381A7.03 7.03 0 004.522.567a.75.75 0 011.456 0 7.032 7.032 0 004.064 4.742.749.749 0 010 1.382 7.023 7.023 0 00-4.064 4.741.75.75 0 01-.728.568zM2.345 5.999A8.562 8.562 0 015.25 9.173a8.562 8.562 0 012.905-3.174A8.562 8.562 0 015.25 2.825a8.562 8.562 0 01-2.905 3.174zM18.75 12a.75.75 0 01-.728-.568 7.026 7.026 0 00-4.064-4.741.75.75 0 010-1.382A7.03 7.03 0 0018.022.567a.75.75 0 011.456 0 7.032 7.032 0 004.064 4.742.749.749 0 010 1.382 7.028 7.028 0 00-4.064 4.741.75.75 0 01-.728.568zm-2.905-6.001a8.562 8.562 0 012.905 3.174 8.562 8.562 0 012.905-3.174 8.562 8.562 0 01-2.905-3.174 8.562 8.562 0 01-2.905 3.174z"}})])
          )
        }
      }
    