
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
            children.concat([_c('path',{attrs:{"d":"M12 8.25c-2.275 0-4.125-1.85-4.125-4.125S9.726 0 12 0s4.125 1.85 4.125 4.125S14.275 8.25 12 8.25zm0-6.75c-1.447 0-2.625 1.178-2.625 2.625S10.553 6.75 12 6.75c1.448 0 2.625-1.178 2.625-2.625S13.448 1.5 12 1.5z"}}),_c('path',{attrs:{"d":"M9.081 10.5a.75.75 0 01-.362-1.407c1.008-.555 2.142-.848 3.281-.848s2.274.293 3.281.847a.747.747 0 01.296 1.019.75.75 0 01-1.019.296c-.786-.432-1.67-.661-2.558-.661s-1.772.229-2.559.661a.745.745 0 01-.36.093z"}}),_c('path',{attrs:{"d":"M12 24a.544.544 0 01-.094-.011.697.697 0 01-.195-.051.728.728 0 01-.143-.081.429.429 0 01-.066-.048c-.033-.03-3.387-2.97-6.564-3.293A2.222 2.222 0 013 18.274v-5.512a2.217 2.217 0 012.454-2.246c2.745.307 5.488 2.073 6.546 2.824 1.058-.75 3.8-2.517 6.542-2.823.082-.009.161-.013.24-.013l.053.001a2.224 2.224 0 012.166 2.276v5.509a2.207 2.207 0 01-1.912 2.224c-3.211.327-6.556 3.267-6.59 3.296a.54.54 0 01-.063.046.731.731 0 01-.229.11.713.713 0 01-.11.022A.378.378 0 0112 24zm.75-2.294c1.453-1.05 3.775-2.438 6.16-2.681a.705.705 0 00.59-.719v-5.544a.73.73 0 00-.702-.758h-.017a.662.662 0 00-.077.004c-2.487.278-5.147 2.063-5.954 2.642v7.056zm-7.532-9.702a.718.718 0 00-.715.645c-.003.031-.004.063-.003.094v5.547a.72.72 0 00.616.738c2.364.24 4.682 1.628 6.134 2.678V14.65c-.808-.579-3.471-2.365-5.958-2.642a.58.58 0 00-.074-.004z"}})])
          )
        }
      }
    