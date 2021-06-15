
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
            children.concat([_c('path',{attrs:{"d":"M12 7.5c-2.068 0-3.75-1.682-3.75-3.75S9.932 0 12 0s3.75 1.682 3.75 3.75S14.068 7.5 12 7.5zm0-6c-1.241 0-2.25 1.009-2.25 2.25S10.759 6 12 6s2.25-1.009 2.25-2.25S13.241 1.5 12 1.5zM10.5 21a.751.751 0 01-.744-.657L9.088 15H8.25a.75.75 0 01-.75-.75V12c0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5v2.25a.75.75 0 01-.75.75h-.838l-.668 5.343A.751.751 0 0113.5 21h-3zm2.338-1.5l.668-5.343a.752.752 0 01.744-.657H15V12c0-1.654-1.346-3-3-3s-3 1.346-3 3v1.5h.75c.377 0 .697.282.744.657l.668 5.343h1.676zM4.5 9c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4.5C3.673 4.5 3 5.173 3 6s.673 1.5 1.5 1.5S6 6.827 6 6s-.673-1.5-1.5-1.5z"}}),_c('path',{attrs:{"d":"M3 19.5a.748.748 0 01-.74-.626L1.615 15H.75a.75.75 0 01-.75-.75v-.75c0-.488.08-.97.235-1.432a4.473 4.473 0 012.266-2.597 4.456 4.456 0 011.998-.472c.488 0 .972.08 1.44.237a.75.75 0 01-.477 1.422 2.971 2.971 0 00-2.294.156 2.984 2.984 0 00-1.511 1.732 2.977 2.977 0 00-.157.954h.75c.368 0 .679.263.74.626L3.635 18h1.729l.271-1.629a.747.747 0 01.863-.617.748.748 0 01.617.863l-.375 2.256A.749.749 0 016 19.5H3zM19.5 9c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5S21 6.827 21 6s-.673-1.5-1.5-1.5z"}}),_c('path',{attrs:{"d":"M18 19.5a.749.749 0 01-.74-.627l-.376-2.256a.746.746 0 01.739-.873c.368 0 .679.264.74.627L18.635 18h1.729l.646-3.873a.747.747 0 01.74-.627h.75c0-.325-.053-.646-.157-.954a2.984 2.984 0 00-1.511-1.732 2.971 2.971 0 00-2.293-.156.753.753 0 01-.95-.472.751.751 0 01.471-.95 4.523 4.523 0 011.44-.237c.696 0 1.368.159 1.998.472a4.477 4.477 0 012.266 2.597c.156.462.236.943.236 1.431v.751a.75.75 0 01-.75.75h-.865l-.646 3.873A.747.747 0 0121 19.5h-3zM12 24c-.966 0-4.352-.039-7.381-.539C1.511 22.948 0 22.143 0 21a.75.75 0 011.497-.062C1.904 21.417 5.372 22.5 12 22.5s10.096-1.083 10.502-1.562A.751.751 0 0124 21c0 1.143-1.511 1.948-4.619 2.461-3.029.5-6.415.539-7.381.539z"}})])
          )
        }
      }
    