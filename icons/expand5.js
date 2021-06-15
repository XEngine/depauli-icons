
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
            children.concat([_c('path',{attrs:{"d":"M23.25 7.498a.75.75 0 01-.75-.75V2.559l-3.97 3.97a.746.746 0 01-1.06-.001c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53l3.97-3.97h-4.19a.75.75 0 010-1.5h6a.735.735 0 01.293.06.75.75 0 01.4.404l.01.026c.03.082.047.17.047.26v6a.75.75 0 01-.75.75zM.75 23.998a.755.755 0 01-.26-.047l-.022-.008A.754.754 0 010 23.248v-6a.75.75 0 011.5 0v4.189l3.97-3.97a.744.744 0 011.06 0 .752.752 0 010 1.061l-3.97 3.97h4.19a.75.75 0 010 1.5h-6zM.75 7.498a.75.75 0 01-.75-.75v-6A.74.74 0 01.048.487L.055.466a.754.754 0 01.41-.411L.49.045a.737.737 0 01.26-.047h6a.75.75 0 010 1.5H2.561l3.97 3.97c.142.141.22.33.22.53s-.078.389-.22.53a.747.747 0 01-1.061 0L1.5 2.559v4.189a.75.75 0 01-.75.75zM17.25 23.998a.75.75 0 010-1.5h4.189l-3.97-3.97a.752.752 0 01.53-1.281c.2 0 .389.078.53.22l3.97 3.97v-4.189a.75.75 0 011.501 0v6a.767.767 0 01-.046.258l-.006.017a.763.763 0 01-.412.419l-.026.01a.73.73 0 01-.259.047H17.25zM9 16.498c-.827 0-1.5-.673-1.5-1.5v-6c0-.827.673-1.5 1.5-1.5h6c.827 0 1.5.673 1.5 1.5v6c0 .827-.673 1.5-1.5 1.5H9zm0-1.5h6v-6H9v6z"}})])
          )
        }
      }
    