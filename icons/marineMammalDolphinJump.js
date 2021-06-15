
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
            children.concat([_c('path',{attrs:{"d":"M19.5 24c-.977 0-1.706-.486-2.291-.876-.503-.335-.936-.624-1.459-.624s-.956.289-1.458.624c-.586.39-1.315.876-2.292.876-.977 0-1.706-.486-2.291-.876-.502-.335-.936-.624-1.459-.624s-.957.289-1.459.624c-.585.39-1.314.876-2.291.876s-1.706-.486-2.291-.876c-.502-.335-.936-.624-1.459-.624a.75.75 0 010-1.5c.977 0 1.706.486 2.291.876.502.335.936.624 1.459.624s.957-.289 1.459-.624C6.544 21.486 7.273 21 8.25 21s1.706.486 2.291.876c.502.335.936.624 1.459.624s.956-.289 1.458-.624c.586-.39 1.315-.876 2.292-.876s1.706.486 2.291.876c.503.335.936.624 1.459.624s.956-.289 1.458-.624c.586-.39 1.315-.876 2.292-.876a.75.75 0 010 1.5c-.523 0-.956.289-1.458.624-.586.39-1.315.876-2.292.876zM13.5 19.5c-.797 0-1.453-.671-1.949-1.994a.749.749 0 111.403-.526c.249.663.46.91.551.992.293-.261 1.022-1.74 1.342-4.964a19.9 19.9 0 00-2.471.18c-.534 1.862-1.029 2.562-1.794 2.562-.377 0-.93-.156-1.91-1.311a9.16 9.16 0 00-.657.421c-1.914 1.367-3.724 2.659-5.168 2.66-.232 0-.453-.034-.657-.1-.617-.201-1.073-.697-1.319-1.436-.488-1.467.72-2.874 1.408-3.527-.07-.688-.06-2.059.827-3.383.97-1.447 2.677-2.393 5.076-2.813 1.049-1.667 2.108-2.512 3.15-2.512.475 0 .883.179 1.179.517.35.4.519 1.009.506 1.814.616.054 1.223.138 1.813.251-.328-3.115-1.038-4.549-1.325-4.805-.091.081-.301.326-.548.985a.753.753 0 01-.966.439.75.75 0 01-.438-.965C12.048.668 12.703 0 13.5 0c2.027 0 2.674 4.493 2.869 6.702 1.619.477 2.975 1.181 4.039 2.096l1.759-1.172a.748.748 0 011.041.208c.557.836 1.292 2.754.275 4.252a4.037 4.037 0 01-1.416 5.035.746.746 0 01-1.077-.26l-1.898-3.45a19.897 19.897 0 00-2.744-.365c-.214 2.199-.881 6.454-2.848 6.454zM11.333 5.25c-.404 0-1.193.643-2.045 2.08a.743.743 0 01-.534.359c-2.142.321-3.621 1.065-4.395 2.212-.852 1.263-.549 2.659-.546 2.673a.753.753 0 01-.261.758c-.631.506-1.467 1.548-1.257 2.178.137.411.304.465.359.483a.644.644 0 00.202.028c.952 0 2.801-1.32 4.287-2.381.443-.313.911-.591 1.392-.829a.747.747 0 01.927.216c.48.625.798.937.985 1.09.129-.251.342-.767.611-1.789a.75.75 0 01.605-.55 21.361 21.361 0 013.294-.271 35.479 35.479 0 00-.005-3.62 17.225 17.225 0 00-2.777-.36.751.751 0 01-.707-.849c.122-.91-.002-1.329-.085-1.423a.146.146 0 00-.05-.005zm5.122 6.301c1.118.072 2.223.228 3.291.467.21.047.39.182.494.37l1.6 2.908a2.54 2.54 0 00.11-2.895.746.746 0 01.103-.932c.634-.634.487-1.501.244-2.127l-1.548 1.032a.747.747 0 01-.947-.094c-.84-.84-1.959-1.503-3.332-1.974a34.85 34.85 0 01-.015 3.245z"}}),_c('path',{attrs:{"d":"M6.375 12a.717.717 0 01-.131-.012 1.125 1.125 0 01-.982-.982.717.717 0 010-.262c.06-.513.47-.922.982-.982a.717.717 0 01.262 0c.513.06.922.47.982.982a.717.717 0 010 .262c-.06.513-.47.922-.982.982a.717.717 0 01-.131.012z"}})])
          )
        }
      }
    