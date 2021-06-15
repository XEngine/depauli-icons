
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
            children.concat([_c('path',{attrs:{"d":"M10.5 17.2a.75.75 0 01-.75-.75v-.75a.75.75 0 011.5 0v.75a.75.75 0 01-.75.75zM13.5 17.2a.75.75 0 01-.75-.75v-.75a.75.75 0 011.5 0v.75a.75.75 0 01-.75.75z"}}),_c('path',{attrs:{"d":"M17.599 19.801c-.225 0-.449-.036-.666-.107-.632-.207-1.107-.685-1.437-1.148-.767.6-1.94.904-3.496.904-1.555 0-2.728-.304-3.496-.904-.33.463-.805.941-1.437 1.148a2.137 2.137 0 01-.665.107c-.475 0-.957-.161-1.432-.477-.719-.479-1.153-1.126-1.289-1.922-.295-1.721.961-3.459 1.105-3.652a.748.748 0 011.13-.08l1.76 1.76A4.808 4.808 0 0112 11.95l.058.002a4.805 4.805 0 014.266 3.478l1.761-1.761a.738.738 0 01.591-.217.749.749 0 01.54.297c.145.193 1.4 1.934 1.105 3.652-.136.796-.57 1.443-1.29 1.922-.475.318-.957.478-1.432.478zm-1.082-2.442c.223.4.544.799.885.91a.627.627 0 00.196.031c.176 0 .378-.075.602-.224.372-.248.577-.542.643-.926.101-.583-.133-1.245-.377-1.74l-1.949 1.949zM5.536 15.411c-.243.495-.477 1.156-.377 1.74.066.383.27.677.643.926.226.15.423.223.601.223.067 0 .131-.01.197-.031.339-.11.664-.52.884-.91l-1.948-1.948zM9 16.475c.012.677.546 1.475 3 1.475 2.454 0 2.988-.798 3-1.475a3.32 3.32 0 00-3-3.023 3.32 3.32 0 00-3 3.023zM11.685 23.958a7.335 7.335 0 01-4.663-1.679.751.751 0 01.956-1.156 5.832 5.832 0 003.986 1.329h.068a5.831 5.831 0 003.989-1.329.75.75 0 01.957 1.156 7.34 7.34 0 01-4.669 1.679c-.103 0-.206-.002-.309-.007a6.62 6.62 0 01-.315.007z"}}),_c('path',{attrs:{"d":"M19.501 24a.751.751 0 01-.457-1.345c2.454-1.882 3.456-4.115 3.456-7.705a14.338 14.338 0 00-1.394-5.947.752.752 0 01-.051-.505c.694-2.793.892-5.114.503-5.914-.014-.03-.016-.03-.042-.038a.547.547 0 00-.146-.017c-.824 0-2.547 1.076-3.283 1.536-.175.109-.327.204-.453.279a.747.747 0 01-.915-.114l-1.118-1.118-1.017.508a.748.748 0 01-.858-.133L12 1.799l-1.726 1.687a.745.745 0 01-.859.135l-1.017-.508L7.28 4.23a.744.744 0 01-.913.115c-.121-.072-.267-.163-.433-.266-.756-.47-2.497-1.552-3.334-1.552-.06 0-.11.006-.151.018-.027.008-.029.008-.043.038-.448.921-.065 3.656.514 5.959a.752.752 0 01-.05.503 14.162 14.162 0 00-1.37 5.914c0 3.583 1.001 5.812 3.456 7.692a.751.751 0 01-.912 1.192C.48 21.114 0 17.816 0 14.95a15.65 15.65 0 011.401-6.302C.938 6.738.316 3.453 1.057 1.929a1.53 1.53 0 01.976-.824c.167-.05.353-.075.549-.075 1.167 0 2.699.88 4.056 1.721L7.72 1.67a.743.743 0 01.865-.141l1.023.511L11.476.213a.748.748 0 011.048 0l1.868 1.827 1.022-.511a.747.747 0 01.866.141l1.08 1.08c1.406-.877 2.869-1.719 4.017-1.719.197 0 .383.025.553.074.439.126.777.411.977.824.733 1.51.122 4.774-.333 6.672A15.886 15.886 0 0124 14.94c0 2.873-.48 6.173-4.042 8.906a.747.747 0 01-.457.154z"}}),_c('path',{attrs:{"d":"M7.125 10.45a.717.717 0 01-.131-.012 1.125 1.125 0 01-.982-.982.717.717 0 010-.262c.06-.513.47-.922.982-.982a.717.717 0 01.262 0c.513.06.922.47.982.982a.717.717 0 010 .262c-.06.513-.47.922-.982.982a.717.717 0 01-.131.012zM16.875 10.45a.817.817 0 01-.131-.011 1.125 1.125 0 01-.982-.983.698.698 0 010-.26c.06-.513.47-.923.982-.983.043-.009.087-.013.131-.013s.088.004.131.011c.513.06.922.47.983.983a.817.817 0 010 .261c-.061.513-.47.923-.983.983a.717.717 0 01-.131.012z"}})])
          )
        }
      }
    