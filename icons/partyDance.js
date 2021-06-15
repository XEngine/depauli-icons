
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
            children.concat([_c('path',{attrs:{"d":"M10.874 24c-.444 0-.874-.13-1.244-.377a2.235 2.235 0 01-.96-1.431c-.118-.59 0-1.19.333-1.691l.835-1.252a.741.741 0 00.114-.542l-1.067-6.709h-.26a.755.755 0 00-.533.222l-2.118 2.12a2.235 2.235 0 01-1.591.658 2.239 2.239 0 01-1.592-.658 2.252 2.252 0 01.001-3.182l2.121-2.121a5.258 5.258 0 013.702-1.538h5.811a.761.761 0 00.645-.367l.128-.214-1.283-1.339a1.503 1.503 0 01.045-2.121l1.084-1.039c.281-.269.65-.416 1.038-.416.408 0 .803.169 1.084.463l1.243 1.299a2.234 2.234 0 012.055 1.439 3.81 3.81 0 011.127.799l1.821 1.902c.416.434.637 1.004.624 1.605a2.23 2.23 0 01-.694 1.576l-1.083 1.037c-.42.402-.973.624-1.556.624-.62 0-1.198-.246-1.625-.693l-1.257-1.312a5.329 5.329 0 01-3.395 1.256h-.987l.239 1.5h1.695a5.212 5.212 0 014.876 3.3l.755 1.892a2.241 2.241 0 01-1.191 2.791c-.296.135-.61.204-.932.204a2.258 2.258 0 01-2.049-1.318l-.76-1.897a.742.742 0 00-.692-.471H14.4a5.183 5.183 0 01-.814 3.748l-.835 1.251A2.25 2.25 0 0110.874 24zM9.525 10.499c.371 0 .682.266.741.632l1.165 7.327a2.22 2.22 0 01-.345 1.625l-.835 1.25c-.111.166-.15.367-.111.563a.747.747 0 00.735.604.75.75 0 00.627-.335l.837-1.253a3.704 3.704 0 00.575-2.704l-.134-.843a.75.75 0 01.74-.867h1.858c.93 0 1.748.555 2.09 1.415l.745 1.864c.071.153.221.29.406.359a.75.75 0 00.973-.944l-.736-1.839a3.711 3.711 0 00-3.467-2.355H13.04a.748.748 0 01-.741-.632l-.478-3a.747.747 0 01.74-.868h1.864a3.8 3.8 0 003.219-1.822l1.374-2.291a.74.74 0 00.075-.563.746.746 0 00-.722-.559.758.758 0 00-.644.356l-1.372 2.287a2.273 2.273 0 01-1.928 1.093H8.626c-.994 0-1.957.4-2.651 1.097l-2.122 2.122a.75.75 0 101.061 1.061l2.121-2.122a2.26 2.26 0 011.589-.659h.901zm10.638.518a.75.75 0 001.061.023l1.083-1.037a.75.75 0 00.023-1.06l-1.82-1.901a2.213 2.213 0 00-.098-.095 2.597 2.597 0 01-.105.203l-1.379 2.3a3.539 3.539 0 01-.106.167l1.341 1.4zM15 4.541l1 1.044.447-.744a2.24 2.24 0 01.43-.51l-.792-.828L15 4.541z"}}),_c('path',{attrs:{"d":"M10.5 6.749c-1.861 0-3.375-1.514-3.375-3.375S8.639-.001 10.5-.001s3.375 1.514 3.375 3.375-1.514 3.375-3.375 3.375zm0-5.25c-1.034 0-1.875.841-1.875 1.875s.841 1.875 1.875 1.875 1.875-.841 1.875-1.875-.841-1.875-1.875-1.875zM2.25 6.749a.75.75 0 01-.75-.75v-.75H.75a.75.75 0 010-1.5h.75v-.75a.75.75 0 011.5 0v.75h.75a.75.75 0 010 1.5H3v.75a.75.75 0 01-.75.75zM21.75 4.499a.75.75 0 01-.75-.75v-.75h-.75a.75.75 0 010-1.5H21v-.75a.75.75 0 011.5 0v.75h.75a.75.75 0 010 1.5h-.75v.75a.75.75 0 01-.75.75zM22.5 16.874a.817.817 0 01-.131-.011 1.126 1.126 0 01-.983-.983.808.808 0 010-.262c.06-.513.47-.923.983-.983a.808.808 0 01.262 0c.513.06.923.47.983.983a.808.808 0 010 .262c-.06.513-.47.923-.983.983a.808.808 0 01-.131.011zM5.25 7.874a.717.717 0 01-.131-.012 1.125 1.125 0 01-.982-.982.717.717 0 010-.262c.06-.513.47-.922.982-.982a.717.717 0 01.262 0c.513.06.922.47.982.982a.717.717 0 010 .262c-.06.513-.47.922-.982.982a.717.717 0 01-.131.012z"}})])
          )
        }
      }
    