
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
            children.concat([_c('path',{attrs:{"d":"M17.249 18.751c-1.241 0-2.25-1.009-2.25-2.25s1.009-2.25 2.25-2.25 2.25 1.009 2.25 2.25-1.009 2.25-2.25 2.25zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5z"}}),_c('path',{attrs:{"d":"M17.252 24c-.202 0-.404-.03-.6-.089a2.073 2.073 0 01-1.395-1.395l-.441-1.45a.247.247 0 00-.289-.168l-1.47.341a2.087 2.087 0 01-.463.052 2.104 2.104 0 01-2.038-1.63 2.087 2.087 0 01.508-1.882l1.03-1.111a.252.252 0 00.001-.341l-1.031-1.112a2.069 2.069 0 01-.557-1.498c.02-.558.257-1.074.665-1.454a2.077 2.077 0 011.882-.508l1.477.342a.247.247 0 00.287-.167l.442-1.454a2.096 2.096 0 011.992-1.477 2.083 2.083 0 011.993 1.486l.441 1.45a.246.246 0 00.287.169l1.472-.341c.154-.035.309-.052.463-.052.968 0 1.825.685 2.038 1.629a2.088 2.088 0 01-.508 1.882l-1.031 1.111a.251.251 0 000 .341l1.031 1.112a2.092 2.092 0 01-.108 2.952 2.08 2.08 0 01-1.422.559c-.155 0-.309-.017-.46-.052l-1.476-.342a.245.245 0 00-.287.168l-.442 1.449a2.06 2.06 0 01-1.005 1.23c-.306.163-.646.25-.986.25zm-2.672-4.608c.764 0 1.451.51 1.671 1.239l.442 1.452a.58.58 0 001.112.003l.443-1.451a1.756 1.756 0 012.059-1.193l1.474.342a.586.586 0 00.526-.144.59.59 0 00.03-.832l-1.031-1.112a1.757 1.757 0 010-2.383l1.031-1.11a.59.59 0 00-.116-.899.585.585 0 00-.444-.076l-1.468.34c-.128.03-.26.045-.391.045-.763 0-1.449-.51-1.67-1.24l-.445-1.463a.585.585 0 00-.554-.409.585.585 0 00-.556.412l-.442 1.454a1.755 1.755 0 01-2.06 1.194l-1.473-.342a.586.586 0 00-.526.145.588.588 0 00-.031.832l1.032 1.112a1.757 1.757 0 010 2.383l-1.03 1.111a.588.588 0 00.56.975l1.467-.34a1.71 1.71 0 01.39-.045z"}}),_c('path',{attrs:{"d":"M2.203 21.001a2.196 2.196 0 01-1.517-.61A2.197 2.197 0 010 18.732V3.857c-.042-1.249.955-2.312 2.223-2.356H4.5v-.75a.75.75 0 011.5 0v.75h3v-.75a.75.75 0 011.5 0v.75h3v-.75a.75.75 0 011.5 0v.75h2.25c1.289.045 2.292 1.114 2.25 2.382v2.868a.75.75 0 01-1.5 0V3.858A.819.819 0 0017.223 3H15v2.25a.75.75 0 01-1.5 0V3h-3v2.25a.75.75 0 01-1.5 0V3H6v2.25a.75.75 0 01-1.5 0V3H2.25c-.423.015-.765.389-.75.832v14.972a.707.707 0 00.222.5.698.698 0 00.49.197H8.25a.75.75 0 010 1.5H2.203z"}})])
          )
        }
      }
    