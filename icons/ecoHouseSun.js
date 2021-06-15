
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
            children.concat([_c('path',{attrs:{"d":"M5.736 21a.751.751 0 01-.748-.815c.054-.613.151-1.193.29-1.726-.808-.638-1.295-1.389-1.413-2.184-.129-.871.182-1.749.899-2.54a7.722 7.722 0 015.513-2.338c.359 0 .722.026 1.077.077a.749.749 0 01.6.994c-.158.442-.138 1.18-.116 1.962.05 1.839.118 4.358-2.305 5.414a2.568 2.568 0 01-1.03.213c-.745 0-1.417-.312-1.903-.622a9.515 9.515 0 00-.117.881.745.745 0 01-.747.684zm1.314-3.092c.286.236.869.646 1.455.646.152 0 .297-.029.431-.087 1.493-.651 1.449-2.276 1.403-3.997-.015-.554-.029-1.084.014-1.573h-.074a6.192 6.192 0 00-4.421 1.864c-.396.438-.57.876-.508 1.294.044.295.212.599.493.895.703-1.377 1.575-1.825 1.682-1.876.1-.05.209-.074.321-.074a.752.752 0 01.328 1.425s-.627.353-1.124 1.483zM21.053 14.303a.743.743 0 01-.53-.22l-1.627-1.627a5.24 5.24 0 01-.525.342.751.751 0 01-.743-1.304 3.656 3.656 0 00.732-.546.364.364 0 01.108-.102 3.728 3.728 0 00.987-1.889c.033-.168.053-.348.062-.549a.698.698 0 01.004-.327 3.73 3.73 0 00-.632-1.937 3.574 3.574 0 00-.354-.443.65.65 0 01-.237-.237 3.733 3.733 0 00-2.424-.976.659.659 0 01-.242.002 3.726 3.726 0 00-1.947.633.753.753 0 01-1.042-.205.747.747 0 01.204-1.041A5.257 5.257 0 0115 3.044V.75a.75.75 0 011.5 0v2.287a5.234 5.234 0 012.412.991l1.611-1.61a.744.744 0 011.06 0 .744.744 0 010 1.06l-1.609 1.609a5.235 5.235 0 01.997 2.414h2.278A.749.749 0 1123.25 9h-2.281a5.23 5.23 0 01-1.007 2.4l1.622 1.622a.744.744 0 010 1.06.752.752 0 01-.531.221z"}}),_c('path',{attrs:{"d":"M2.25 24A2.252 2.252 0 010 21.75v-8.379c0-.601.234-1.165.658-1.59l6-6c.425-.425.99-.658 1.592-.658.602 0 1.167.234 1.591.658l6 6c.425.425.659.99.659 1.59v8.379A2.252 2.252 0 0114.25 24h-12zm6-17.378c-.2 0-.389.078-.53.219l-6.001 6a.748.748 0 00-.219.53v8.379c0 .414.336.75.75.75h12a.75.75 0 00.75-.75v-8.379c0-.2-.078-.388-.219-.53l-6-6a.748.748 0 00-.531-.219z"}})])
          )
        }
      }
    