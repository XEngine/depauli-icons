
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
            children.concat([_c('path',{attrs:{"d":"M9.694 22.408C3.894 21.937 0 19.865 0 17.251v-12C0 2.258 5.159.001 12 .001s12 2.257 12 5.25v3.03a.75.75 0 01-1.5 0v-.402c-.691.544-1.607 1.023-2.735 1.427a.753.753 0 01-.959-.453.75.75 0 01.452-.959c2.03-.728 3.241-1.716 3.241-2.643 0-1.533-3.739-3.75-10.5-3.75s-10.5 2.217-10.5 3.75 3.739 3.75 10.5 3.75a.75.75 0 010 1.5c-4.477 0-8.446-1.016-10.5-2.637v3.387c0 1.253 2.342 2.855 6.817 3.495a.751.751 0 01-.21 1.486c-2.903-.415-5.202-1.241-6.608-2.358v3.377c0 1.468 3.109 3.239 8.311 3.661.412.034.72.396.687.808a.753.753 0 01-.747.689c-.017.001-.036 0-.055-.001z"}}),_c('path',{attrs:{"d":"M23.25 24.001a.756.756 0 01-.459-.157l-1.817-1.408A3.886 3.886 0 0118.036 24l-.035.001-.034-.001a3.89 3.89 0 01-2.94-1.564l-1.817 1.408a.749.749 0 11-.918-1.185l2.077-1.609a3.829 3.829 0 01-.117-1.115v-.683h-1.5a.75.75 0 010-1.5h1.5v-1.217c-.02-.444.043-.894.186-1.332l-2.135-1.601a.75.75 0 11.899-1.2l1.974 1.479a3.862 3.862 0 012.792-1.378l.035-.001.033.001a3.864 3.864 0 012.792 1.38l1.975-1.48a.747.747 0 011.05.151.746.746 0 01-.151 1.05l-2.138 1.603c.145.443.208.9.188 1.363v1.184h1.5a.75.75 0 010 1.5h-1.5v.708c.015.358-.024.726-.117 1.09l2.077 1.609a.751.751 0 01.134 1.052.762.762 0 01-.596.288zm-7.258-2.854A2.395 2.395 0 0018 22.499a2.398 2.398 0 002.005-1.34.738.738 0 01.119-.281A2.35 2.35 0 0020.25 20v-2.249h-4.5v2.216a2.44 2.44 0 00.132.919.74.74 0 01.11.261zm4.255-4.896a2.379 2.379 0 00-.206-.83l-.006-.008a.715.715 0 01-.114-.221A2.387 2.387 0 0018 14.002a2.39 2.39 0 00-1.918 1.182.723.723 0 01-.116.228l-.011.013a2.359 2.359 0 00-.203.825h4.495z"}})])
          )
        }
      }
    