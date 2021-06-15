
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
            children.concat([_c('path',{attrs:{"d":"M15.767 22.5a.75.75 0 01-.75-.75v-2.301a5.116 5.116 0 01-1.5-.009v2.31a.75.75 0 01-1.5 0v-1.265a5.177 5.177 0 01-4.5-.004v1.269a.75.75 0 01-1.5 0v-2.31a5.16 5.16 0 01-1.5.013v2.297a.75.75 0 01-1.5 0v-2.738a5.238 5.238 0 01-1.331-.893 5.237 5.237 0 01-.714-6.872A5.186 5.186 0 01.17 6.975a5.196 5.196 0 012.376-3.22 5.217 5.217 0 013.504-.688A5.227 5.227 0 019.771 1.5c.766 0 1.536.175 2.226.506a.742.742 0 01.383.427.745.745 0 01-.031.573.754.754 0 01-1.001.353A3.66 3.66 0 009.772 3a3.706 3.706 0 00-2.87 1.362.745.745 0 01-.761.253 3.72 3.72 0 00-2.821.426 3.705 3.705 0 00-1.694 2.295 3.717 3.717 0 00.863 3.408.746.746 0 01-.003 1.014 3.695 3.695 0 00-.979 2.673 3.695 3.695 0 001.195 2.584 3.7 3.7 0 001.202.742c.08.015.154.041.223.078a3.699 3.699 0 002.01.049.754.754 0 01.765.253 3.695 3.695 0 005.726 0 .746.746 0 01.767-.253 3.61 3.61 0 002.095-.09c.22-.078.418-.167.597-.269a.746.746 0 011.022.282.746.746 0 01-.282 1.023c-.097.055-.2.108-.313.161v2.757a.746.746 0 01-.747.752z"}}),_c('path',{attrs:{"d":"M14.642 10.5a.817.817 0 01-.131-.011 1.125 1.125 0 01-.982-.983.698.698 0 010-.26c.06-.513.47-.923.982-.983a.717.717 0 01.262 0c.513.06.922.47.983.983a.796.796 0 010 .26c-.061.513-.47.923-.983.983a.817.817 0 01-.131.011zM18.392 10.5a.817.817 0 01-.131-.011 1.125 1.125 0 01-.982-.983.698.698 0 010-.26c.06-.513.47-.923.982-.983a.717.717 0 01.262 0c.513.06.922.47.983.983a.796.796 0 010 .26c-.061.513-.47.923-.983.983a.817.817 0 01-.131.011z"}}),_c('path',{attrs:{"d":"M16.517 16.5c-2.75 0-5.019-3.335-5.749-6.15l-.377.566a.749.749 0 01-1.36-.269.747.747 0 01.111-.563l1.436-2.154a5.812 5.812 0 015.939-4.931 5.81 5.81 0 015.939 4.931l1.436 2.154a.748.748 0 01-.624 1.166.749.749 0 01-.624-.334l-.379-.569c-.732 2.816-3.002 6.153-5.748 6.153zm-.214-12.005a4.286 4.286 0 00-4.286 4.082c.005 2.404 2.187 6.423 4.5 6.423 2.32 0 4.5-4.024 4.5-6.45-.105-2.228-2.029-4.054-4.289-4.054a3.59 3.59 0 00-.179.004h-.065a3.612 3.612 0 00-.181-.005z"}})])
          )
        }
      }
    