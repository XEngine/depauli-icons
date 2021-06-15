
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
            children.concat([_c('path',{attrs:{"d":"M9 24a.748.748 0 01-.735-.897l.75-3.75a.75.75 0 011.359-.269c.111.167.151.367.111.563l-.57 2.853h4.17l-.57-2.853a.747.747 0 01.734-.896c.357 0 .667.254.736.603l.75 3.75A.75.75 0 0115 24H9z"}}),_c('path',{attrs:{"d":"M12 18.75a.743.743 0 01-.523-.213l-.015-.014a21.404 21.404 0 01-2.026-2.482C8.151 14.196 7.5 12.584 7.5 11.25c0-2.628 1.328-4.199 3.75-4.459V5.25a.75.75 0 011.5 0v1.541c2.422.259 3.75 1.831 3.75 4.459 0 1.334-.652 2.946-1.937 4.791a21.305 21.305 0 01-2.026 2.482l-.011.011a.748.748 0 01-.108.088.729.729 0 01-.418.128zm-.75-10.452C9.698 8.508 9 9.433 9 11.25c0 1.525 1.283 3.469 2.25 4.717V8.298zm1.5 7.669c.967-1.249 2.25-3.193 2.25-4.717 0-1.817-.698-2.742-2.25-2.952v7.669zM16.875 6.75a.817.817 0 01-.131-.011 1.125 1.125 0 01-.982-.983.698.698 0 010-.26c.06-.513.47-.923.982-.983.043-.009.087-.013.131-.013s.088.004.131.011c.513.06.922.47.983.983a.817.817 0 010 .261c-.061.513-.47.923-.983.983a.717.717 0 01-.131.012zM12 2.25a.717.717 0 01-.131-.012 1.125 1.125 0 01-.982-.982.717.717 0 010-.262c.06-.513.47-.922.982-.982a.717.717 0 01.262 0c.513.06.922.47.983.983a.796.796 0 010 .26c-.061.513-.47.922-.983.983A.717.717 0 0112 2.25zM19.125 11.25a.817.817 0 01-.131-.011 1.125 1.125 0 01-.982-.983.717.717 0 01-.001-.261c.06-.513.47-.923.982-.983a.737.737 0 01.263-.001c.513.06.922.47.983.983a.796.796 0 010 .26c-.061.513-.47.923-.983.983a.64.64 0 01-.131.013zM20.625 3.75a.817.817 0 01-.131-.011 1.125 1.125 0 01-.982-.983.717.717 0 01-.001-.261c.06-.513.47-.923.982-.983a.737.737 0 01.263-.001c.513.06.922.47.983.983a.796.796 0 010 .26c-.061.513-.47.923-.983.983a.64.64 0 01-.131.013zM22.875 11.25a.817.817 0 01-.131-.011 1.125 1.125 0 01-.982-.983.698.698 0 010-.26c.06-.513.47-.923.982-.983.043-.009.087-.013.131-.013s.088.004.131.011c.513.06.922.47.983.983a.817.817 0 010 .261c-.061.513-.47.923-.983.983a.717.717 0 01-.131.012zM7.125 6.75a.717.717 0 01-.131-.012 1.125 1.125 0 01-.982-.982.701.701 0 010-.262c.06-.513.47-.922.982-.982a.701.701 0 01.262 0c.513.06.922.47.982.982a.701.701 0 010 .262c-.06.513-.47.922-.982.982a.701.701 0 01-.131.012zM4.875 11.25a.717.717 0 01-.131-.012 1.125 1.125 0 01-.982-.982.701.701 0 010-.262c.06-.513.47-.922.982-.982a.701.701 0 01.262 0c.513.06.922.47.982.982a.701.701 0 010 .262c-.06.513-.47.922-.982.982a.701.701 0 01-.131.012zM3.375 3.75a.717.717 0 01-.131-.012 1.125 1.125 0 01-.982-.982.701.701 0 010-.262c.06-.513.47-.922.982-.982a.701.701 0 01.262 0c.513.06.922.47.982.982a.701.701 0 010 .262c-.06.513-.47.922-.982.982a.701.701 0 01-.131.012zM1.125 11.25a.717.717 0 01-.131-.012 1.125 1.125 0 01-.982-.982.701.701 0 010-.262c.06-.513.47-.922.982-.982a.701.701 0 01.262 0c.513.06.922.47.982.982a.71.71 0 010 .262c-.06.513-.47.922-.982.982a.701.701 0 01-.131.012z"}})])
          )
        }
      }
    