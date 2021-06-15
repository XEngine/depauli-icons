
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
            children.concat([_c('path',{attrs:{"d":"M5.546 17.328a.752.752 0 01-.53-1.281l3-3a.744.744 0 011.06 0 .752.752 0 010 1.061l-3 3a.744.744 0 01-.53.22zM8.546 20.328a.752.752 0 01-.53-1.281l3-3a.744.744 0 011.06 0 .752.752 0 010 1.061l-3 3a.744.744 0 01-.53.22z"}}),_c('path',{attrs:{"d":"M4.046 23.328a2.252 2.252 0 01-2.25-2.25V9.916a2.25 2.25 0 012.515-2.235c1.111.132 2.21.389 3.27.765l6.515-7.276a1.502 1.502 0 012.118-.117l.559.5c.299.267.475.635.497 1.035.022.4-.113.785-.381 1.083l-3.507 3.917.617.554c.597.545.711 1.429.274 2.103-.035.055-.051.081-1.326 1.51.232.223.459.456.678.697l1.396-1.558.031-.031 3.976-4.441a1.506 1.506 0 012.115-.114l.559.5c.613.549.667 1.496.122 2.112l-3.508 3.918.615.55c.597.545.712 1.428.277 2.102-.037.058-.064.099-2.336 2.639.271.88.463 1.781.57 2.682a2.24 2.24 0 01-.643 1.857c-.425.425-.99.659-1.591.659H4.046zM4.045 9.165a.75.75 0 00-.749.751v11.162c0 .414.336.75.75.75h11.162a.75.75 0 00.746-.836 13.513 13.513 0 00-2.86-6.852.365.365 0 01-.065-.081 13.55 13.55 0 00-1.542-1.606.575.575 0 01-.103-.072.56.56 0 01-.074-.083 13.43 13.43 0 00-3.767-2.265l-.023-.01a13.553 13.553 0 00-3.387-.852.662.662 0 00-.088-.006zm10.546 4.457a14.94 14.94 0 011.692 2.916c.875-.979 1.513-1.697 1.676-1.884a.138.138 0 00-.035-.153l-2.287-2.048-1.046 1.169zm2.611-1.787l3.502-3.911-.562-.497-3.499 3.908.559.5zM9.05 9.053a14.942 14.942 0 012.763 1.719c.733-.821 1.1-1.236 1.213-1.366a.136.136 0 00-.034-.153l-2.285-2.052L9.05 9.053zm3.219-2.471l3.502-3.911-.559-.5-3.502 3.911.559.5z"}})])
          )
        }
      }
    