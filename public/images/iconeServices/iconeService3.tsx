import { ComponentPropsWithoutRef } from "react";

export const Icone3 = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) => {
  return (
    <svg height={props.size} width={props.size} viewBox="0 0 60 60" {...props}>
      <g id="Page-1" fill="none" fillRule="evenodd">
        <g id="015---Landscape-Planning" fill="#3c786e" fillRule="nonzero">
          <path
            id="Shape"
            d="m53.612 49.007c-2.923 2.481-11.801 4.993-23.112 4.993-1.748 0-3.521-.062-5.42-.189-.2654657-.021151-.5282285.0657593-.7287265.2410303-.2004981.1752711-.3217509.424059-.3362735.6899697-.0365652.5508493.3801717 1.02712.931 1.064 1.944.131 3.761.194 5.554.194 12.409 0 21.2-2.746 24.407-5.467.4213932-.3576044.4731043-.9891067.1155-1.4105-.3576044-.4213932-.9891067-.4731043-1.4105-.1155z"
          />
          <path
            id="Shape"
            d="m20.254 53.286c-1.105-.163-2.182-.353-3.2-.565-.5356176-.1006499-1.0531999.246122-1.1638528.7797629-.1106528.5336409.2263754 1.0576201.7578528 1.1782371 1.057.219 2.171.416 3.314.586.04904.0067788.0984939.0101203.148.01.5229618-.0015101.956442-.405708.9944656-.9272878.0380237-.5215798-.3322521-.9843723-.8494656-1.0617122z"
          />
          <path
            id="Shape"
            d="m7 35.923v6.31c-3.821 1.858-6 4.197-6 6.767 0 6.885 15 11 29.5 11 11.8 0 22.4-2.519 27-6.417.4213932-.3589851.471985-.9916067.113-1.413-.3589851-.4213932-.9916067-.4719851-1.413-.113-4.187 3.555-14.516 5.943-25.7 5.943-16.206 0-27.5-4.743-27.5-9 0-1.59 1.469-3.157 4-4.526v1.526c0 .5522847.44771525 1 1 1s1-.4477153 1-1v-2.467c2.899763-1.1593184 5.9177465-1.9976472 9-2.5v2.967c0 .5522847.4477153 1 1 1s1-.4477153 1-1v-3.276c.589-.083 1.184-.162 1.792-.23.548971-.0618559.9438559-.557029.882-1.106s-.557029-.9438559-1.106-.882c-.535.061-1.05.133-1.568.2v-4.783c2.459-.362 7-2.332 7-11.923-.1295693-6.3438651-2.4229267-12.45301632-6.5-17.315-.3861293-.41272131-.9255874-.64762087-1.490771-.6491356s-1.105893.2304899-1.494229.6411356c-1.8769413 2.20951463-3.3877551 4.70548027-4.475 7.393-.9599628-1.9356905-2.1495256-3.74874133-3.543-5.4-.38815246-.41039512-.92812259-.64291785-1.493-.64291785s-1.10484754.23252273-1.493.64291785c-4.07805775 4.8680858-6.3747086 10.9809655-6.511 17.33 0 9.591 4.541 11.561 7 11.923zm2 5.442v-5.442c2.2576916-.3363195 4.2191169-1.7303842 5.279-3.752 1.0232066.9647642 2.3259628 1.5802561 3.721 1.758v5.082c-3.0721048.4772424-6.0876488 1.2659747-9 2.354zm9.992-35.365c3.7693185 4.4917615 5.8892715 10.1374419 6.008 16 0 5.774-1.81 9.3-5 9.9v-3.9c0-.5522847-.4477153-1-1-1s-1 .4477153-1 1v3.9c-1.127347-.211769-2.1405969-.8227721-2.854-1.721.6104293-2.0013706.8986959-4.0870845.854-6.179-.0175175-3.1884241-.6278967-6.3457801-1.8-9.311 1.0333003-3.1733896 2.6593972-6.12187789 4.792-8.689zm-10.992 2c1.79612604 2.1429407 3.233394 4.5625895 4.256 7.165l.007.014c1.1328229 2.8036723 1.7222886 5.7971532 1.737 8.821 0 5.774-1.81 9.3-5 9.9v-3.486l2.707-2.707c.3789722-.3923789.3735524-1.0160848-.0121814-1.4018186s-1.0094397-.3911536-1.4018186-.0121814l-2.293 2.293-2.293-2.293c-.39237889-.3789722-1.01608478-.3735524-1.40181858.0121814-.38573379.3857338-.39115363 1.0094397-.01218142 1.4018186l2.707 2.707v3.486c-3.19-.6-5-4.125-5-9.9.12928842-5.8591187 2.24483787-11.5005839 6-16z"
          />
          <path
            id="Shape"
            d="m58.079 49.391c.1569486.3694477.5195969.6092446.921.609.1344297.0003217.2674996-.0269049.391-.08.5083377-.2157069.7456106-.8026214.53-1.311l-11.277-26.65c.2370436-.7707179.3570475-1.5726535.356-2.379.0014062-2.4903371-1.0964233-4.8543299-3-6.46v-2.12c-.0052514-1.26678543-.8056491-2.39374545-2-2.816v-4.684c0-1.93299662-1.5670034-3.5-3.5-3.5s-3.5 1.56700338-3.5 3.5v4.684c-1.1943509.42225455-1.9947486 1.54921457-2 2.816v2.12c-1.9031305 1.606011-3.0008578 3.9697839-3 6.46-.0010797.8066023.1185793 1.6088232.355 2.38l-11.275 26.649c-.2157285.5081039.0210513 1.0949062.529 1.311.1235004.0530951.2565703.0803217.391.08.4010396-.0001567.7631935-.2398869.92-.609l1.07-2.529 5.559-2.385c.923441-.4006771 1.6636074-1.1322827 2.075-2.051l6.52-14.68c1.5345357.448725 3.1654643.448725 4.7 0l6.53 14.686c.4116743.9189829 1.1527094 1.6503849 2.077 2.05l5.554 2.383zm-15.079-29.631c0 .893164-.4764973 1.7184816-1.25 2.1650636s-1.7264973.446582-2.5 0-1.25-1.2718996-1.25-2.1650636c.0030303-.2587663.0475978-.5153667.132-.76h4.735c.0855487.2443679.1304772.5011025.133.76zm-4-16.26c0-.82842712.6715729-1.5 1.5-1.5s1.5.67157288 1.5 1.5v4.5h-3zm-2 7.5c0-.5522847.4477153-1 1-1h5c.5522847 0 1 .4477153 1 1v5c0 .5522847-.4477153 1-1 1h-5c-.5522847 0-1-.4477153-1-1zm-8.245 31.641-3.64 1.559 8.385-19.822c.7258878 1.0625447 1.6832129 1.9467028 2.8 2.586l-6 13.524-.5 1.122c-.1544938.3441117-.4017201.6384287-.714.85-.104321.0707309-.2151573.1313392-.331.181zm9.235-17.062c-1.7168169-.7227141-3.0398903-2.1488794-3.632-3.915-.2412123-.6681415-.3624105-1.3736642-.358-2.084-.0013753-1.2304312.3494386-2.4355516 1.011-3.473.030815.9110142.4760648 1.7580568 1.209 2.3-.1428041.436923-.2170185.8933416-.22 1.353 0 2.4852814 2.0147186 4.5 4.5 4.5s4.5-2.0147186 4.5-4.5c-.0014147-.4616707-.0753147-.9202559-.219-1.359.7307152-.5410491 1.1753263-1.3853684 1.208-2.294.6615614 1.0374484 1.0123753 2.2425688 1.011 3.473.0037592.7202702-.1208551 1.4354479-.368 2.112-.5911446 1.7577331-1.9131622 3.1741806-3.626 3.885-1.6056082.6656627-3.4098615.6663821-5.016.002zm14.259 17.064c-.4658957-.19997-.8400997-.5670395-1.049-1.029l-6.5-14.649c1.1182791-.635961 2.0760885-1.5195402 2.8-2.583l8.384 19.818z"
          />
        </g>
      </g>
    </svg>
  );
};
