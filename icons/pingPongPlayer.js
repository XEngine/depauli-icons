
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
            children.concat([_c('path',{attrs:{"d":"M4.496 23.254c-.422 0-.836-.12-1.196-.347-.509-.32-.863-.82-.996-1.406s-.031-1.19.29-1.699l3.51-5.614.365-2.187h-.688a.742.742 0 00-.696.469l-.747 1.865a2.242 2.242 0 01-2.092 1.415 2.24 2.24 0 01-2.065-1.363 2.235 2.235 0 01-.021-1.722l.743-1.863a5.199 5.199 0 014.859-3.301h3.237c.447 0 .877.13 1.247.375l2.73 1.823.974-1.298a2.235 2.235 0 011.802-.9c.336 0 .665.076.967.221l1.064-1.065c-.531-1.107-.179-2.606.9-3.685.727-.727 1.666-1.143 2.576-1.143.679 0 1.294.241 1.733.68 1.06 1.06.852 2.993-.464 4.309-.727.727-1.666 1.143-2.576 1.143a2.57 2.57 0 01-1.11-.242L17.78 8.781a2.238 2.238 0 01-.23 2.321l-1.4 1.863a3.77 3.77 0 01-3.004 1.501c-.74 0-1.457-.217-2.074-.627l-.312-.208-.065.392.705.527a5.296 5.296 0 012.101 4.199V21a2.252 2.252 0 01-2.25 2.25A2.252 2.252 0 019.001 21v-2.25a.76.76 0 00-.156-.456l-2.437 3.903A2.245 2.245 0 015 23.196a2.26 2.26 0 01-.504.058zm2.857-12.753a.75.75 0 01.74.873l-.535 3.208a.738.738 0 01-.104.274l-3.59 5.742a.75.75 0 00.235 1.04.745.745 0 00.568.097.747.747 0 00.469-.333l2.884-4.618a.754.754 0 011.085-.204l.494.37c.563.425.899 1.097.901 1.799v2.252a.75.75 0 001.5 0v-2.25a3.784 3.784 0 00-1.501-3.001l-1.069-.798a.748.748 0 01-.291-.724l.331-1.987a.748.748 0 011.155-.501l1.277.851c.37.246.8.376 1.243.376.707 0 1.381-.337 1.803-.901l1.401-1.864a.747.747 0 00-.147-1.048.74.74 0 00-.559-.144.736.736 0 00-.493.291l-1.4 1.866a.753.753 0 01-1.016.174l-3.32-2.216a.721.721 0 00-.406-.124H5.781a3.715 3.715 0 00-3.485 2.355l-.744 1.865a.75.75 0 00.695 1.029c.31 0 .584-.185.698-.472l.746-1.863a2.23 2.23 0 012.084-1.414h1.578zm13.901-7.18c-.5 0-1.065.266-1.511.712-.719.718-.931 1.72-.464 2.188.206.205.482.248.677.248.5 0 1.065-.266 1.511-.712.719-.719.931-1.721.464-2.188-.205-.205-.481-.248-.677-.248z"}}),_c('path',{attrs:{"d":"M10.499 7.501c-1.861 0-3.375-1.514-3.375-3.375S8.638.751 10.499.751s3.375 1.514 3.375 3.375-1.514 3.375-3.375 3.375zm0-5.25c-1.034 0-1.875.841-1.875 1.875s.841 1.875 1.875 1.875 1.875-.841 1.875-1.875-.841-1.875-1.875-1.875zM20.249 23.251a.75.75 0 01-.75-.75v-6.75h-2.25a.75.75 0 010-1.5h6a.75.75 0 010 1.5h-2.25v6.75c0 .413-.337.75-.75.75zM21.749 13.126a.796.796 0 01-.13-.011 1.126 1.126 0 01-.983-.983.796.796 0 010-.26c.06-.513.47-.923.983-.983a.717.717 0 01.262 0c.513.06.922.47.982.983a.702.702 0 010 .261 1.126 1.126 0 01-1.114.993z"}})])
          )
        }
      }
    