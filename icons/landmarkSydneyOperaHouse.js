
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
            children.concat([_c('path',{attrs:{"d":"M21.745 18a.75.75 0 01-.75-.75V15l-8.963-.001a.785.785 0 01-.214-.04.473.473 0 01-.072-.031.53.53 0 01-.095-.048l-3.326-2.13h-5.33v4.5a.75.75 0 01-1.5 0V12.5c0-.367.158-.704.423-.937l-1.75-3.1a1.202 1.202 0 01-.144-.915 1.244 1.244 0 01.792-.896 5.429 5.429 0 013.463-.147l-.283-1.052a1.226 1.226 0 01.109-.936 1.24 1.24 0 011.096-.648c.042 0 .085.002.128.007 1.245.139 2.44.494 3.554 1.055.343.159.67.354.979.583L9.441 2.96a1.247 1.247 0 011.582-1.411c2.416.652 4.6 2.106 6.143 4.091a8.322 8.322 0 011.528 3.42 8.658 8.658 0 014.22-.35c.196.026.403.114.573.244.265.203.435.498.478.829.042.316-.038.632-.224.891l-1.888 2.983c.386.212.643.621.643 1.094v2.5a.752.752 0 01-.751.749zm-1.57-4.5l2.128-3.36a7.2 7.2 0 00-3.884.642l-.023.011A5.266 5.266 0 0016.06 13.5h4.115zm-5.696 0a6.703 6.703 0 012.801-3.781 6.774 6.774 0 00-1.305-3.167 10.19 10.19 0 00-4.991-3.453l.791 4.814a.78.78 0 01.026.157l.892 5.43h1.786zm-5.935-2.25c.144 0 .284.041.405.118l2.095 1.342-.721-4.383a4.44 4.44 0 00-2.096-2.048 9.015 9.015 0 00-2.688-.863l1.573 5.834h1.432zm-2.986 0l-.754-2.798a2.908 2.908 0 00-1.39-.61 3.95 3.95 0 00-1.806.121l1.854 3.286h2.096zM23.245 22.5c-1.548 0-2.935-.493-3.75-1.311-.815.818-2.202 1.311-3.75 1.311s-2.935-.493-3.75-1.311c-.815.818-2.202 1.311-3.75 1.311s-2.935-.493-3.75-1.311C3.68 22.007 2.293 22.5.745 22.5a.75.75 0 010-1.5c1.717 0 3-.792 3-1.5a.75.75 0 011.5 0c0 .708 1.283 1.5 3 1.5s3-.792 3-1.5a.75.75 0 011.5 0c0 .708 1.283 1.5 3 1.5s3-.792 3-1.5a.75.75 0 011.5 0c0 .708 1.283 1.5 3 1.5a.75.75 0 010 1.5z"}})])
          )
        }
      }
    