import { ComponentPropsWithoutRef } from "react";

export const Icone1 = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) => {
  return (
    <svg height={props.size} width={props.size} viewBox="0 0 60 60" {...props}>
      <g id="Page-1" fill="none" fillRule="evenodd">
        <g id="020---Landscape-Plan" fill="#3c786e" fillRule="nonzero">
          <path
            id="Shape"
            d="m9 54h-3v-3c0-.5522847-.44771525-1-1-1s-1 .4477153-1 1v4c0 .5522847.44771525 1 1 1h4c.55228475 0 1-.4477153 1-1s-.44771525-1-1-1z"
          />
          <path
            id="Shape"
            d="m54 11c-2.9246159.0054296-5.4201335 2.1166966-5.91 5h-16.179c-.5485811-5.6337675-2.782781-10.97131314-6.411-15.316-.386524-.41361274-.9268805-.64897699-1.4929852-.65030277-.5661047-.00132577-1.1075578.23150497-1.4960148.64330277-1.8768891 2.20973743-3.3880015 4.70563855-4.476 7.393-.9597932-1.93555719-2.1490079-3.74858922-3.542-5.4-.3881525-.41039512-.9281226-.64291785-1.493-.64291785s-1.1048475.23252273-1.493.64291785c-3.18197515 3.82975945-5.30695787 8.4251552-6.164 13.33h-1.343c-2.209139 0-4 1.790861-4 4v36c0 2.209139 1.790861 4 4 4h50c3.3123376-.0033074 5.9966926-2.6876624 6-6v-37c-.0033074-3.3123376-2.6876624-5.9966926-6-6zm0 2c2.209139 0 4 1.790861 4 4v32.54c-2.2714348-2.0532429-5.7285652-2.0532429-8 0v-32.54c0-2.209139 1.790861-4 4-4zm-10 5h4v36c.0002927 1.4782155.5494479 2.9036672 1.541 4h-25.541v-3c0-1.1045695.8954305-2 2-2h8c5.5203344-.0060624 9.9939376-4.4796656 10-10zm-20.008-16c3.7693185 4.49176153 5.8892715 10.1374419 6.008 16 0 5.774-1.81 9.3-5 9.9v-3.9c0-.5522847-.4477153-1-1-1s-1 .4477153-1 1v3.9c-1.127347-.211769-2.1405969-.8227721-2.854-1.721.6104293-2.0013706.8986959-4.0870845.854-6.179-.0176181-3.1880899-.627996-6.3450997-1.8-9.31 1.033252-3.17371338 2.6593474-6.12253834 4.792-8.69zm-10.992 2c1.7954084 2.14216049 3.232316 4.56075794 4.255 7.162l.008.018c1.132722 2.8033531 1.7221862 5.7964874 1.737 8.82 0 5.774-1.81 9.3-5 9.9v-3.486l2.707-2.707c.3789722-.3923789.3735524-1.0160848-.0121814-1.4018186s-1.0094397-.3911536-1.4018186-.0121814l-2.293 2.293-2.293-2.293c-.3923789-.3789722-1.01608478-.3735524-1.40181858.0121814-.38573379.3857338-.39115363 1.0094397-.01218142 1.4018186l2.707 2.707v3.486c-3.19-.6-5-4.125-5-9.9.13007815-5.8589665 2.24553299-11.50017936 6-16zm-11 52v-36c0-1.1045695.8954305-2 2-2h1.09c-.055.653-.09 1.318-.09 2 0 9.591 4.541 11.561 7 11.923v10.077c0 .5522847.4477153 1 1 1s1-.4477153 1-1v-10.077c2.2574299-.3362588 4.2187515-1.7298783 5.279-3.751 1.0235356.9641119 2.3261795 1.5792007 3.721 1.757v10.071c0 .5522847.4477153 1 1 1s1-.4477153 1-1v-10.077c2.459-.362 7-2.332 7-11.923h3v25c0 1.1045695-.8954305 2-2 2h-8c-5.5203344.0060624-9.9939376 4.4796656-10 10v3h-11c-1.1045695 0-2-.8954305-2-2zm15 2v-3c.0049599-4.4162219 3.5837781-7.9950401 8-8h8c2.209139 0 4-1.790861 4-4v-25h5v25c-.0049599 4.4162219-3.5837781 7.9950401-8 8h-8c-2.209139 0-4 1.790861-4 4v3zm37 0c-2.209139 0-4-1.790861-4-4s1.790861-4 4-4 4 1.790861 4 4-1.790861 4-4 4z"
          />
        </g>
      </g>
    </svg>
  );
};
