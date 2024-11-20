import { ComponentPropsWithoutRef } from "react";

export const Icone4 = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) => {
  return (
    <svg
      id="Layer_5"
      enableBackground="new 0 0 64 64"
      height={props.size}
      width={props.size}
      viewBox="0 0 64 64"
      fill="#3c786e"
      {...props}
    >
      <g>
        <path d="m60 49h-5.142c-.447-1.721-1.999-3-3.858-3v-7.026c.838.635 1.87 1.026 3 1.026 2.757 0 5-2.243 5-5 0-.313-.032-.628-.096-.943 1.311-.929 2.096-2.419 2.096-4.057 0-1.411-.584-2.717-1.602-3.652.392-.724.602-1.531.602-2.348 0-1.241-.466-2.422-1.298-3.336.198-.541.298-1.098.298-1.664 0-2.56-1.933-4.676-4.416-4.966-.775-1.819-2.565-3.034-4.584-3.034s-3.809 1.215-4.584 3.034c-2.483.29-4.416 2.406-4.416 4.966 0 .566.1 1.123.298 1.664-.524.575-.882 1.262-1.091 1.997-1.224-1.046-2.663-1.661-4.207-1.661-1.904 0-3.652.922-5.027 2.455-.128-1.34-.724-2.62-1.68-3.576l-2.879-2.879h4.586v-2.014c0-.938-.467-1.833-1.249-2.393-3.617-2.592-6.535-6.087-8.436-10.109-.433-.916-1.321-1.484-2.315-1.484s-1.882.568-2.315 1.484c-1.9 4.022-4.818 7.518-8.437 10.109-.781.56-1.248 1.455-1.248 2.393v2.014h4.586l-2.879 2.879c-1.085 1.085-1.707 2.587-1.707 4.121v1h4.586l-2.879 2.879c-1.085 1.085-1.707 2.587-1.707 4.121v1h11v4c-2.56 0-4.676 1.933-4.966 4.416-1.819.775-3.034 2.565-3.034 4.584 0 1.105.369 2.167.997 3-1.653.002-2.997 1.347-2.997 3 0 .552-.448 1-1 1h-3c-1.654 0-3 1.346-3 3s1.346 3 3 3h5.184c-.112.314-.184.648-.184 1 0 1.654 1.346 3 3 3h39c1.654 0 3-1.346 3-3s-1.346-3-3-3h-2-1c-.552 0-1-.448-1-1s.448-1 1-1h12c1.654 0 3-1.346 3-3s-1.346-3-3-3zm-7.29 0h-13.415c.236-.396.593-.718 1.052-.878l.694-.242-.024-.735c-.002-.064-.009-.126-.017-.145 0-1.654 1.346-3 3-3 1.068 0 2.064.59 2.6 1.539l.237.421.478.075c.77.122 1.4.689 1.605 1.446l.294 1.086 1.044-.42c.962-.384 1.971.062 2.452.853zm-15.71-6.095c2.23-.385 4.173-2.035 5.444-4.413.925.936 2.198 1.508 3.556 1.508 1.13 0 2.162-.391 3-1.026v5.592c-.284-.166-.582-.31-.904-.402-.93-1.346-2.46-2.164-4.096-2.164-2.601 0-4.744 1.996-4.979 4.536-.94.536-1.619 1.429-1.89 2.464h-.131zm6.129-21.226.649-.524-.399-.732c-.251-.463-.379-.942-.379-1.423 0-1.654 1.346-3 2.935-3.003l.971.05.2-.786c.339-1.331 1.53-2.261 2.894-2.261s2.555.93 2.895 2.261l.2.786.812-.034c.053-.002.106-.008.093-.013 1.654 0 3 1.346 3 3 0 .481-.128.96-.379 1.422l-.399.732.649.524c.718.58 1.129 1.426 1.129 2.322 0 .888-.395 1.538-.726 1.928l-.765.901 1.016.604c.923.552 1.475 1.511 1.475 2.567 0 1.151-.652 2.183-1.704 2.69l-.823.398.323.855c.136.36.204.715.204 1.057 0 1.654-1.346 3-3 3s-3-1.346-3-3v-2.648l3.781-4.727-1.563-1.25-2.218 2.773v-10.148h-2v6.148l-2.219-2.773-1.563 1.25 3.782 4.727v6.648c0 1.654-1.346 3-3 3-1.123 0-2.152-.647-2.662-1.631.424-1.341.662-2.817.662-4.369 0-2.779-.759-5.313-2-7.251v-.749c0-.896.411-1.742 1.129-2.321zm-7.129 1.321c3.309 0 6 4.037 6 9 0 4.451-2.167 8.147-5 8.865v-7.513l3.781-4.727-1.563-1.25-2.218 2.773v-3.148h-2v7.697l-2.168-3.252-1.664 1.109 3.832 5.749v2.562c-2.833-.717-5-4.414-5-8.865 0-4.963 2.691-9 6-9zm-6.166 2c-.428.711-.784 1.503-1.072 2.347l-2.348-2.347zm-19.713 4.293 4.293-4.293h1.586v-2h-6.865c.175-.641.514-1.234.986-1.707l4.293-4.293h1.586v-2h-7v-.014c0-.299.15-.579.413-.768 3.895-2.788 7.034-6.551 9.08-10.879.197-.42.816-.42 1.014 0 2.046 4.328 5.186 8.091 9.079 10.879.264.189.414.47.414.768l-7 .014v2h1.586l4.293 4.293c.473.473.812 1.066.986 1.707h-6.865v2h1.586l4.293 4.293c.112.112.214.23.31.353-.07.442-.122.893-.152 1.354h-18.902c.175-.641.513-1.234.986-1.707zm9.879 3.707h8.037c.339 5.142 3.261 9.266 6.963 9.905v6.095h-4.016c.647-.86 1.016-1.907 1.016-3 0-2.757-2.243-5-5-5-.313 0-.629.032-.943.096-.929-1.311-2.418-2.096-4.057-2.096-.007 0-.015 0-.021 0-.519-.691-1.206-1.223-1.979-1.566zm-5.739 10.105.786-.2-.034-.812c-.002-.048-.007-.096-.012-.096 0 0-.001.001-.001.002 0-1.654 1.346-3 3-3 1.071 0 2.067.591 2.602 1.542l.421.584.677-.095c.098-.012.197-.03.3-.03 1.152 0 2.183.652 2.69 1.703l.398.826.857-.326c2.058-.78 4.056.798 4.055 2.797 0 .86-.37 1.681-1.017 2.25l-.579.75h-14.687l-.701-.75c-.646-.569-1.016-1.39-1.016-2.25 0-1.364.93-2.555 2.261-2.895zm45.739 9.895h-12c-1.654 0-3 1.346-3 3 0 .352.072.686.184 1h-2.184v2h5 1 2c.552 0 1 .448 1 1s-.448 1-1 1h-39c-.552 0-1-.448-1-1s.448-1 1-1h3 3v-2h-3-3-8c-.552 0-1-.448-1-1s.448-1 1-1h3c1.654 0 3-1.346 3-3 0-.552.448-1 1-1h49c.552 0 1 .448 1 1s-.448 1-1 1z" />
        <path d="m24 55.5c0-1.379-1.121-2.5-2.5-2.5h-3.5v2h3.5c.275 0 .5.225.5.5 0 1.379 1.121 2.5 2.5 2.5h3.5v-2h-3.5c-.275 0-.5-.225-.5-.5z" />
      </g>
    </svg>
  );
};