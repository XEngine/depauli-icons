
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
            children.concat([_c('path',{attrs:{"d":"M20.386 24.013c-.057 0-.114-.002-.171-.007-.726-.008-1.224-.258-1.624-.46-.346-.174-.596-.3-.984-.3s-.637.125-.982.299c-.401.202-.899.453-1.627.46a2.359 2.359 0 01-.372-.003 2.12 2.12 0 01-1.441-.768 2.113 2.113 0 01-.479-1.524c.016-1.337.967-1.897 1.536-2.233.128-.075.335-.198.398-.264.37-1.107.936-2.75 2.968-2.75 2.034 0 2.598 1.643 2.967 2.749.063.066.271.189.399.264.57.335 1.521.896 1.537 2.234a2.123 2.123 0 01-.771 1.815 2.134 2.134 0 01-1.354.488zm-2.779-2.267c.744 0 1.25.255 1.657.46.347.175.597.3.985.3a.6.6 0 01.074.004.618.618 0 00.461-.142.632.632 0 00.228-.549.855.855 0 01-.003-.073c0-.484-.259-.658-.798-.976-.409-.241-.871-.513-1.051-1.053-.424-1.272-.667-1.752-1.553-1.752-.886 0-1.13.48-1.555 1.752-.179.541-.662.825-1.051 1.053-.539.317-.798.492-.798.976a.6.6 0 01-.004.074c-.016.166.034.33.142.461a.629.629 0 00.549.228.849.849 0 01.072-.003c.39 0 .64-.126.986-.3.408-.205.914-.46 1.659-.46zM15.385 15.746a.796.796 0 01-.13-.011 1.126 1.126 0 01-.983-.983.796.796 0 010-.261c.06-.513.47-.923.983-.983a.808.808 0 01.262 0c.513.06.923.47.983.983a.808.808 0 010 .262 1.126 1.126 0 01-1.115.993zM12.385 18.746a.796.796 0 01-.13-.011 1.126 1.126 0 01-.983-.982.717.717 0 010-.262c.06-.513.47-.922.983-.983a.796.796 0 01.261 0c.513.06.923.47.983.983a.808.808 0 010 .262 1.126 1.126 0 01-1.114.993zM22.885 18.746a.796.796 0 01-.13-.011 1.126 1.126 0 01-.983-.983.796.796 0 010-.261c.06-.513.47-.923.983-.983a.808.808 0 01.262 0c.513.06.923.47.983.983a.808.808 0 010 .262 1.126 1.126 0 01-1.115.993zM19.885 15.746a.796.796 0 01-.13-.011 1.126 1.126 0 01-.983-.983.796.796 0 010-.261c.06-.513.47-.923.983-.983a.808.808 0 01.262 0c.513.06.923.47.983.983a.808.808 0 010 .262 1.126 1.126 0 01-1.115.993zM8.26 16.092c-2.054 0-8.25-2.926-8.25-8.25 0-2.815 1.22-5.421 3.185-6.802A5.589 5.589 0 016.421.01c.609 0 1.227.098 1.839.291A6.111 6.111 0 0110.099.01c1.151 0 2.267.356 3.226 1.031 1.965 1.381 3.185 3.987 3.185 6.802 0 5.323-6.197 8.249-8.25 8.249zM6.411 1.505c-.841 0-1.633.257-2.353.763C2.486 3.372 1.51 5.508 1.51 7.842c0 4.484 5.61 6.75 6.75 6.75s6.75-2.266 6.75-6.75c0-2.334-.976-4.47-2.547-5.574-.72-.506-1.512-.763-2.353-.763-.518 0-1.055.099-1.595.293a.768.768 0 01-.509 0 4.708 4.708 0 00-1.595-.293z"}}),_c('path',{attrs:{"d":"M8.466 13.1c-.068 0-.137-.002-.206-.006a3.398 3.398 0 01-3.225-1.853A4.723 4.723 0 013.01 7.447l.001-.054A5.052 5.052 0 018.26 2.592a5.06 5.06 0 015.25 4.848 4.729 4.729 0 01-2.026 3.806A3.398 3.398 0 018.466 13.1zm-.149-1.506a1.88 1.88 0 001.886-1.149.745.745 0 01.293-.344 3.218 3.218 0 001.514-2.656 3.559 3.559 0 00-3.715-3.354l-.034.001-.038-.001A3.557 3.557 0 004.51 7.445a3.217 3.217 0 001.514 2.652.746.746 0 01.294.346 1.88 1.88 0 001.884 1.151l.058-.002.057.002z"}}),_c('path',{attrs:{"d":"M6.385 8.592a.717.717 0 01-.131-.012 1.125 1.125 0 01-.982-.982.717.717 0 010-.262c.06-.513.47-.922.982-.982a.717.717 0 01.262 0c.513.06.922.47.982.982a.717.717 0 010 .262c-.06.513-.47.922-.982.982a.717.717 0 01-.131.012zM10.135 8.592a.717.717 0 01-.131-.012 1.125 1.125 0 01-.982-.982.717.717 0 010-.262c.06-.513.47-.922.982-.982a.717.717 0 01.262 0c.513.06.922.47.982.982a.717.717 0 010 .262c-.06.513-.47.922-.982.982a.717.717 0 01-.131.012z"}})])
          )
        }
      }
    