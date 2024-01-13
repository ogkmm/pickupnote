import * as React from 'react';
import { SVGProps, memo } from 'react';

const Redbook = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#2A2D25"
      d="M16.16 10.89h.204a.138.138 0 0 1 .132.132l.001.25v.002l.002.307c.002.05-.02.076-.074.076h-.218l-.218-.001c-.077 0-.09-.016-.09-.095l-.001-.148-.001-.149c0-.103 0-.206-.002-.31 0-.044.014-.065.062-.065h.203Z"
    />
    <path
      fill="#2A2D25"
      fillRule="evenodd"
      d="M5.125 2.625h13.75a2.5 2.5 0 0 1 2.5 2.5v13.75a2.5 2.5 0 0 1-2.5 2.5H5.125a2.5 2.5 0 0 1-2.5-2.5V5.125a2.5 2.5 0 0 1 2.5-2.5Zm1.556 9.32v-.002l.005-.07.039-.587.02-.307c.003-.046-.011-.066-.06-.066-.225.002-.449.002-.674.002-.036 0-.055.012-.058.052-.006.082-.014.165-.022.249l-.022.244-.016.243-.012.184-.015.205c-.01.117-.018.234-.026.352l-.002.03a1.076 1.076 0 0 1-.076.405c-.011.022-.004.057.007.081l.301.683.058.123.04.083.065-.094c.038-.055.073-.105.102-.16.17-.337.255-.7.298-1.075.021-.19.034-.383.048-.575Zm1.2 2.182a.668.668 0 0 0 .255-.478c.014-.177.014-.356.014-.534v-.083c0-.294-.002-.588-.004-.882l-.002-.575c-.002-.552-.002-1.105-.002-1.658 0-.107-.001-.11-.106-.11h-.594c-.087 0-.09.003-.09.09v1.745c-.001 0-.003 0-.006-.003v1.48l-.001.28c-.002.123-.053.174-.174.174h-.283c-.092.001-.094.004-.06.088l.01.032c.003.013.007.026.013.039a67.162 67.162 0 0 0 .21.467c.016.04.042.052.083.052H7.5c.14.002.269-.035.38-.124Zm1.575-.574a35.855 35.855 0 0 0 .22-.496v-.002l.003-.005v-.001l.001-.002.001-.003c.025-.055.054-.12.038-.165-.049-.138-.056-.28-.063-.421-.004-.072-.008-.145-.017-.216-.013-.09-.017-.182-.022-.274a5.672 5.672 0 0 0-.008-.146c-.007-.102-.017-.205-.027-.308l-.002-.02a6.97 6.97 0 0 0-.021-.233 16.988 16.988 0 0 0-.018-.284c-.002-.041-.02-.061-.064-.061l-.24.002c-.154.001-.307.003-.462.003-.034 0-.042.013-.04.044a49.69 49.69 0 0 1 .079.989c.01.153.022.307.034.46a8.16 8.16 0 0 1 .005.07v.001c.007.101.013.203.033.303l.011.06a1.6 1.6 0 0 0 .102.366c.029.062.052.127.075.192.023.066.046.131.075.194.027.057.065.11.105.166l.06.086.021-.038c.012-.021.021-.037.027-.052l.094-.209Zm1.822.202c.037-.082.075-.163.11-.246.028-.06.021-.069-.043-.069a17.383 17.383 0 0 0-.409 0h-.048c-.241.004-.483.007-.72-.053-.012-.004-.035.01-.041.023-.014.027-.026.056-.038.084a75.244 75.244 0 0 1-.298.65c-.015.036-.007.057.03.064l.06.015c.052.012.103.025.155.027.107.004.214.003.32.002H10.949c.097 0 .123-.019.16-.11a280197751415.493 280197751415.493 0 0 0 .098-.23c.023-.052.047-.105.072-.157Zm.133-.662a.091.091 0 0 0 .056-.029.451.451 0 0 0 .048-.088 59.18 59.18 0 0 0 .22-.506c.022-.046 0-.058-.042-.058h-.367c-.097-.002-.124-.045-.085-.13.043-.094.085-.187.126-.281l.07-.163c.036-.087.073-.174.111-.26.09-.2.18-.397.273-.595.02-.04.013-.06-.034-.062l-.039-.003c-.02-.002-.042-.003-.062-.003h-.498c-.081 0-.098-.013-.103-.092.001-.035.01-.069.025-.1l.239-.553.146-.338c.03-.068.028-.075-.046-.075h-.669c-.04 0-.064.013-.079.05a26.79 26.79 0 0 1-.155.353l-.016.036-.163.363a9.065 9.065 0 0 1-.074.158c-.034.07-.067.141-.098.213-.058.134-.115.269-.16.408a.243.243 0 0 0 .054.25c.071.077.163.087.254.098.056.007.111.006.167.005h.083a.855.855 0 0 1 .102.006l-.06.143-.185.431a18.12 18.12 0 0 0-.195.49c-.035.094-.001.175.067.244a.333.333 0 0 0 .239.087c.283.004.567.003.85.001Zm.248 1.166h2.55c.044 0 .076-.006.076-.064v-.335l-.001-.335c-.002-.07-.011-.077-.08-.077h-.64c-.078 0-.085-.01-.085-.086-.002-.426-.002-.85-.002-1.275l-.002-1.122c0-.049.02-.07.067-.07l.16-.001h.001c.08 0 .161-.002.242 0 .042 0 .057-.016.057-.057 0-.234 0-.466.002-.698.001-.041-.015-.058-.056-.058h-1.746c-.076 0-.078 0-.078.08v.164c0 .168 0 .336-.002.504 0 .054.02.064.067.064h.374c.081 0 .083.002.083.083v2.372c0 .092-.005.097-.097.097h-.584c-.045 0-.075.012-.097.06-.06.135-.123.27-.185.406v.001l-.1.219c-.012.025-.021.053-.033.088a3.638 3.638 0 0 1-.011.035c.05 0 .085 0 .12.005Zm6.056-.041a.684.684 0 0 0 .537-.67c.003-.364.003-.728.001-1.092a.9.9 0 0 0-.015-.17.72.72 0 0 0-.48-.57.988.988 0 0 0-.388-.063c-.065.001-.08-.016-.083-.08l-.002-.046c-.003-.049-.006-.099-.006-.148v-.19c0-.11.001-.22-.006-.33a.76.76 0 0 0-.187-.45.957.957 0 0 0-.753-.331c-.117 0-.232 0-.347-.002-.068-.002-.086-.02-.088-.089l.001-.074c.001-.025.002-.05.001-.074-.003-.082-.004-.082-.085-.082h-.1c-.185 0-.371 0-.556-.002-.047 0-.07.014-.068.064.002.036.001.072 0 .107v.054c-.002.09-.006.096-.092.096h-.386c-.048 0-.07.012-.07.067.004.23.004.457.002.686 0 .044.015.06.059.06h.419c.048 0 .07.015.07.065v.605c-.002.083-.007.086-.09.086h-.326c-.108 0-.217 0-.326.002-.073.001-.08.01-.08.083v.607c0 .074-.003.106.012.12.014.014.046.01.115.01.129 0 .258-.002.386-.004h.001l.236-.002c.04 0 .077.003.077.06v.833c-.001 0-.003 0-.004-.002v.812c0 .081.006.087.088.087h.635c.085 0 .086-.001.086-.085l-.004-1.578c0-.109.007-.12.115-.12l1.145-.001.056.003c.1.006.24.127.238.238-.001.107 0 .213.002.32.002.118.004.236.002.354-.004.118-.052.17-.167.176a7.967 7.967 0 0 1-.4.005h-.178c-.066 0-.074.012-.05.074l.014.032c.02.05.042.098.063.147.05.113.098.226.146.339.031.078.055.095.142.095h.12c.1 0 .2.002.299-.002.09-.003.181-.009.27-.03Zm-.035-3.33c.143.001.267.002.386-.075a.42.42 0 0 0 .177-.451.407.407 0 0 0-.393-.292.376.376 0 0 0-.359.248c-.058.157-.044.322-.031.485l.004.05c.001.013.027.031.042.033.045.002.091.002.13.002H17.682Z"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M18.252 13.548a.684.684 0 0 1-.537.67 1.328 1.328 0 0 1-.27.03 7.825 7.825 0 0 1-.418.002c-.087 0-.11-.017-.142-.095a31.563 31.563 0 0 0-.146-.338v-.001c-.02-.05-.042-.098-.063-.147l-.014-.032c-.024-.062-.016-.073.05-.073h.177c.134 0 .268 0 .4-.006.116-.006.164-.058.167-.176a10.2 10.2 0 0 0 0-.354 11.343 11.343 0 0 1-.003-.32c.002-.111-.139-.232-.238-.238a.654.654 0 0 0-.056-.003l-1.145.001c-.108 0-.115.011-.115.12l.004 1.578c0 .084-.002.085-.086.085h-.635c-.082 0-.088-.006-.088-.087v-.813c.001.003.003.003.004.003v-.834c0-.056-.037-.06-.077-.06l-.236.003c-.13.002-.258.004-.387.004-.07 0-.101.004-.115-.01-.015-.014-.011-.046-.012-.12v-.607c0-.073.007-.082.08-.084h.326l.326-.001c.083 0 .088-.003.09-.086v-.605c0-.05-.022-.065-.07-.065h-.419c-.044 0-.06-.016-.06-.06.003-.23.003-.457 0-.686 0-.055.02-.067.069-.067h.386c.086 0 .09-.006.092-.096v-.054c.001-.035.002-.07 0-.107-.002-.05.021-.064.068-.064.185.002.37.002.555.002h.101c.08 0 .082 0 .085.082v.074c-.002.025-.002.05-.002.074.002.07.02.087.088.09h.347a.957.957 0 0 1 .753.332.76.76 0 0 1 .187.45c.007.11.006.22.006.33a8.592 8.592 0 0 0 .006.338l.002.046c.003.064.018.081.083.08a.988.988 0 0 1 .387.064.72.72 0 0 1 .481.57.9.9 0 0 1 .015.17c.002.363.002.727-.001 1.091ZM16.16 10.89l.204.001a.138.138 0 0 1 .132.132l.001.25v.002l.002.307c.002.05-.02.076-.074.076h-.218l-.218-.001c-.077 0-.09-.016-.09-.095l-.001-.148-.001-.149c0-.103 0-.206-.002-.31 0-.044.014-.065.062-.065h.203Z"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      d="M18.066 10.813c-.119.077-.243.076-.386.075H17.637c-.04 0-.086 0-.13-.002-.016-.002-.042-.02-.043-.032l-.004-.05c-.013-.164-.027-.329.031-.486a.376.376 0 0 1 .359-.248.407.407 0 0 1 .393.292.42.42 0 0 1-.177.45ZM14.21 14.26h-2.55c-.036-.005-.072-.005-.121-.005l.011-.036c.012-.035.02-.063.032-.088l.1-.219.186-.408c.021-.047.052-.06.097-.06h.584c.092 0 .097-.004.097-.096v-2.372c0-.081-.002-.083-.083-.083h-.374c-.047 0-.067-.01-.067-.064.003-.168.002-.336.002-.504v-.165c0-.08.002-.08.079-.08h1.485l.086.001h.174c.041 0 .057.017.056.058-.002.232-.002.464-.002.698 0 .041-.015.056-.057.056h-.242l-.16.002c-.047 0-.068.021-.068.07l.002 1.122c0 .424 0 .849.002 1.275 0 .076.008.086.085.086h.64c.069 0 .078.007.08.077v.335l.001.335c0 .058-.032.064-.075.064ZM11.467 13.064a.091.091 0 0 1-.056.03c-.283 0-.567.002-.85-.002a.333.333 0 0 1-.24-.088c-.067-.068-.1-.15-.066-.242a18.12 18.12 0 0 1 .38-.922l.06-.143a4.156 4.156 0 0 1-.102-.006h-.083c-.056.001-.111.002-.167-.005-.09-.01-.183-.021-.254-.098a.243.243 0 0 1-.053-.25c.044-.14.101-.274.159-.408.03-.072.064-.143.098-.213l.074-.158.162-.363.017-.036.155-.353c.015-.037.038-.05.08-.05h.668c.074 0 .075.007.046.075l-.146.337-.24.555a.234.234 0 0 0-.024.099c.005.08.022.092.103.092h.498l.062.003.04.003c.046.001.052.021.033.062a50.5 50.5 0 0 0-.273.595c-.038.086-.075.173-.111.26l-.07.163c-.041.094-.083.187-.126.28-.039.086-.012.13.085.13l.122.001h.245c.043 0 .064.012.043.058l-.115.262-.106.244a.451.451 0 0 1-.048.088ZM11.389 13.509c-.036.083-.074.164-.111.246a12.065 12.065 0 0 0-.155.352l-.014.034c-.038.092-.064.11-.16.11h-.454l-.138.001c-.107.001-.214.002-.32-.002-.053-.002-.104-.015-.156-.027l-.06-.015c-.037-.007-.045-.028-.03-.063a75.244 75.244 0 0 0 .298-.651c.012-.028.024-.057.038-.084.006-.013.029-.027.04-.023.238.06.48.057.721.054h.048c.136-.003.272-.003.409 0 .064 0 .07.008.043.068ZM6.686 11.873l-.005.07v.002c-.014.192-.027.384-.048.575a3.134 3.134 0 0 1-.298 1.076c-.029.054-.064.104-.102.159-.021.03-.043.06-.065.094l-.04-.083-.058-.123a64.838 64.838 0 0 1-.3-.683c-.012-.024-.02-.06-.008-.08.06-.13.068-.268.076-.406l.002-.03.026-.352.015-.206c.005-.06.008-.122.012-.183l.016-.243.022-.244c.008-.083.016-.167.022-.25.003-.04.022-.051.058-.051.225 0 .45 0 .675-.002.048 0 .062.02.059.066l-.02.307-.04.587Z"
    />
    <path
      fill="#2A2D25"
      fillRule="evenodd"
      d="M9.676 13.057v-.002.002Z"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      d="M9.456 13.553c.073-.164.147-.327.218-.492l.002-.004v-.003l.003-.004v-.001l.001-.002.001-.003c.025-.055.054-.12.038-.165-.049-.138-.056-.28-.063-.421-.004-.072-.008-.145-.017-.216-.013-.09-.017-.182-.022-.274a5.672 5.672 0 0 0-.008-.146c-.007-.102-.017-.205-.027-.308l-.002-.02a6.97 6.97 0 0 0-.021-.233 16.988 16.988 0 0 0-.018-.284c-.002-.041-.02-.061-.064-.061l-.24.002c-.154.001-.307.003-.462.003-.034 0-.042.013-.04.044a49.69 49.69 0 0 1 .079.989c.01.153.022.307.034.46l.004.058v.013c.008.101.014.203.034.303l.011.06a1.6 1.6 0 0 0 .102.366c.029.062.052.127.075.192.023.066.046.131.075.194.027.057.065.11.105.166l.06.086.021-.038c.012-.021.021-.037.027-.052l.094-.209ZM8.136 13.65a.668.668 0 0 1-.256.477.577.577 0 0 1-.38.124h-.356c-.041 0-.067-.012-.083-.052a63.624 63.624 0 0 0-.21-.467c-.006-.013-.01-.026-.013-.039l-.01-.032c-.034-.084-.032-.087.06-.088h.283c.121 0 .172-.05.174-.175l.001-.28v-1.48c.003.004.005.004.006.004V9.897c0-.087.003-.09.09-.09h.594c.105 0 .106.003.106.11a586.406 586.406 0 0 0 .004 2.232c.002.295.004.589.004.883v.083c0 .178 0 .357-.014.534Z"
    />
  </svg>
);

export default memo(Redbook);
