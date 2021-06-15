
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
            children.concat([_c('path',{attrs:{"d":"M9.5 24a.749.749 0 01-.711-.512l-.781-2.342a1.239 1.239 0 01.068-.955 1.239 1.239 0 011.118-.69h2.556v-1.076a4.586 4.586 0 01-2.842-1.713.752.752 0 011.184-.923 3.118 3.118 0 001.659 1.104V15.75a.75.75 0 011.5 0v1.142a3.112 3.112 0 001.658-1.103.751.751 0 011.184.922 4.59 4.59 0 01-2.842 1.713V19.5h2.556a1.252 1.252 0 011.186 1.647l-.781 2.341a.75.75 0 01-1.424-.475L15.46 21H9.54l.671 2.013A.746.746 0 019.5 24z"}}),_c('path',{attrs:{"d":"M18.054 17.938a.746.746 0 01-.731-.584.747.747 0 01.566-.898 1.74 1.74 0 001.362-1.707c0-.307-.195-.68-.521-.996-.451-.437-1.089-.709-1.665-.709l-.076.002a.732.732 0 01-.639-.381.747.747 0 01.021-.775 8.722 8.722 0 001.381-4.647l.003-.064c.001-.017.177-2.533-1.332-4.174-.921-.998-2.305-1.505-4.117-1.505-1.797 0-3.139.498-3.988 1.48-1.411 1.632-1.079 4.138-1.076 4.163a.763.763 0 01.008.118 7.62 7.62 0 00.455 2.734A.752.752 0 017 11c-1.748 0-2.75.82-2.75 2.25 0 .68 0 2.75 2.25 2.75a.75.75 0 010 1.5c-2.348 0-3.75-1.589-3.75-4.25 0-1.969 1.238-3.345 3.263-3.674a9.164 9.164 0 01-.264-2.282C5.696 6.858 5.432 4.024 7.182 2 8.33.673 10.053 0 12.306 0c2.252 0 4.01.672 5.225 1.996 1.883 2.053 1.747 4.905 1.719 5.286a10.277 10.277 0 01-1.064 4.44 4.081 4.081 0 011.588.954c.63.611.977 1.347.977 2.073a3.232 3.232 0 01-2.53 3.169.675.675 0 01-.167.02z"}}),_c('path',{attrs:{"d":"M12.5 13.773a.75.75 0 01-.75-.75v-.784h-1.295a.75.75 0 010-1.5h3.068c.037 0 .073.003.11.008l.1.371-.056-.371a.15.15 0 00.127-.17.691.691 0 01-.008-.111c-.043-.299-1.214-1.087-1.714-1.423-1.222-.823-2.376-1.6-2.376-2.668 0-.809.307-1.773 1.772-1.773h.273v-.784a.75.75 0 011.5 0v.784h1.295a.75.75 0 010 1.5h-3.068a1.42 1.42 0 00-.254.015 1.221 1.221 0 00-.019.258c.043.299 1.214 1.087 1.714 1.423 1.2.808 2.333 1.571 2.375 2.61.049.418-.062.834-.313 1.173a1.64 1.64 0 01-1.505.658h-.226v.784a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    