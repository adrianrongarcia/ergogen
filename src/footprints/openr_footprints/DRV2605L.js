module.exports = {
  params: {
    designator: 'DRV2605L',
    side: 'F',
    legends: true,
    Vin: undefined,
    GND: undefined,
    SCL: undefined,
    SDA: undefined,
    INT: undefined,
    MOTOR_PLUS: {type: 'net', value: 'MOTOR_PLUS'},
    MOTOR_MINUS: {type: 'net', value: 'MOTOR_MINUS'}
  },
  body: p => {
    const standard = `
      (module DRV2605L (layer F.Cu) (tedit 5970F8E5)

      ${p.at /* parametric position */}   

      ${'' /* footprint reference */}
      (fp_text reference "${p.ref}" (at 0 0) (layer Dwgs.User) (effects (font (size 1 1) (thickness 0.15))))
      (fp_text value "" (at 0 0) (layer F.Fab) (effects (font (size 1 1) (thickness 0.15))))
      
      ${'' /* footprint outline */}
      (fp_line (start -8.89 5.755) (end -8.89 -5.755) (stroke (width 0.1) (type default)) (layer ${p.side}.SilkS))
      (fp_line (start -6.42 7.68) (end -6.42 6.35) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
      (fp_line (start -6.39 -8.255) (end 6.39 -8.255) (stroke (width 0.1) (type default)) (layer ${p.side}.SilkS))
      (fp_line (start -6.39 8.255) (end 6.39 8.255) (stroke (width 0.1) (type default)) (layer ${p.side}.SilkS))
      (fp_line (start -5.09 7.68) (end -6.42 7.68) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
      (fp_line (start -3.82 5.02) (end 6.4 5.02) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
      (fp_line (start -3.82 7.68) (end -3.82 5.02) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
      (fp_line (start -3.82 7.68) (end 6.4 7.68) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
      (fp_line (start -2.1232 -3.95) (end -2.9169 -3.95) (stroke (width 0.3048) (type solid)) (layer ${p.side}.SilkS))
      (fp_line (start 2.1232 -3.9217) (end 2.9169 -3.9217) (stroke (width 0.3048) (type solid)) (layer ${p.side}.SilkS))
      (fp_line (start 2.52 -3.5249) (end 2.52 -4.3185) (stroke (width 0.3048) (type solid)) (layer ${p.side}.SilkS))
      (fp_line (start 6.4 7.68) (end 6.4 5.02) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
      (fp_line (start 8.89 5.755) (end 8.89 -5.755) (stroke (width 0.1) (type default)) (layer ${p.side}.SilkS))
      (fp_rect (start -3.66 -7.5) (end -1.35 -5.2) (stroke (width 0.1) (type default)) (fill none) (layer ${p.side}.SilkS))
      (fp_rect (start 1.33 -7.51) (end 3.64 -5.21) (stroke (width 0.1) (type default)) (fill none) (layer ${p.side}.SilkS))
      (fp_arc (start -8.89 -5.755) (mid -8.157767 -7.522767) (end -6.39 -8.255) (stroke (width 0.1) (type default)) (layer ${p.side}.SilkS))
      (fp_arc (start -6.39 8.255) (mid -8.157767 7.522767) (end -8.89 5.755) (stroke (width 0.1) (type default)) (layer ${p.side}.SilkS))
      (fp_arc (start 6.39 -8.255) (mid 8.157767 -7.522767) (end 8.89 -5.755) (stroke (width 0.1) (type default)) (layer ${p.side}.SilkS))
      (fp_arc (start 8.89 5.755) (mid 8.157767 7.522767) (end 6.39 8.255) (stroke (width 0.1) (type default)) (layer ${p.side}.SilkS))
      (fp_circle (center -6.39 -5.755) (end -4.39 -5.755) (stroke (width 0.1) (type default)) (fill none) (layer ${p.side}.SilkS))
      (fp_circle (center -2.52 -3.95) (end -1.7383 -3.95) (stroke (width 0.2032) (type solid)) (fill none) (layer ${p.side}.SilkS))
      (fp_circle (center 2.52 -3.9217) (end 3.3017 -3.9217) (stroke (width 0.2032) (type solid)) (fill none) (layer ${p.side}.SilkS))
      (fp_circle (center 6.39 -5.755) (end 8.39 -5.755) (stroke (width 0.1) (type default)) (fill none) (layer ${p.side}.SilkS))
    
      (fp_line (start -12.125 5.217) (end -12.125 -5.217) (stroke (width 0.1) (type default)) (layer ${p.side}.SilkS))
      (fp_line (start 9.622 -7.72) (end -9.622 -7.72) (stroke (width 0.1) (type default)) (layer ${p.side}.SilkS))
      (fp_line (start 9.622 7.72) (end -9.622 7.72) (stroke (width 0.1) (type default)) (layer ${p.side}.SilkS))
      (fp_line (start 12.125 5.217) (end 12.125 -5.217) (stroke (width 0.1) (type default)) (layer ${p.side}.SilkS))
      (fp_arc (start -9.622 -5.217) (end -12.125 -5.217) (angle 90) (stroke (width 0.1) (type default)) (layer ${p.side}.SilkS))
      (fp_arc (start -9.622 5.217) (end -9.622 7.72) (angle 90) (stroke (width 0.1) (type default)) (layer ${p.side}.SilkS))
      (fp_arc (start 9.622 -5.217) (end 9.622 -7.72) (angle 90) (stroke (width 0.1) (type default)) (layer ${p.side}.SilkS))
      (fp_arc (start 9.622 5.217) (end 12.125 5.217) (angle 90) (stroke (width 0.1) (type default)) (layer ${p.side}.SilkS))
      
      ${'' /* footprint Symbols */}
      
      ${'' /* footprint limits */}
      (fp_line (start -12.625 5.217) (end -12.625 -5.217) (stroke (width 0.05) (type solid)) (layer ${p.side}.CrtYd))
      (fp_line (start -9.622 -8.22) (end 9.622 -8.22) (stroke (width 0.05) (type solid)) (layer ${p.side}.CrtYd))
      (fp_line (start -9.622 8.22) (end 9.622 8.22) (stroke (width 0.05) (type solid)) (layer ${p.side}.CrtYd))
      (fp_line (start 12.625 5.217) (end 12.625 -5.217) (stroke (width 0.05) (type solid)) (layer ${p.side}.CrtYd))
      (fp_arc (start -9.622 -5.217) (end -9.622 -8.22) (angle -90) (stroke (width 0.05) (type default)) (layer ${p.side}.CrtYd))
      (fp_arc (start -9.622 5.217) (end -12.625 5.217) (angle -90) (stroke (width 0.05) (type default)) (layer ${p.side}.CrtYd))
      (fp_arc (start 9.622 -5.217) (end 12.625 -5.217) (angle -90) (stroke (width 0.05) (type default)) (layer ${p.side}.CrtYd))
      (fp_arc (start 9.622 5.217) (end 9.622 8.22) (angle -90) (stroke (width 0.05) (type default)) (layer ${p.side}.CrtYd))
   
      ${'' /* fooptrint mounting holes */}
      (pad "" thru_hole circle (at 9.622 -5.334) (size 3 3) (drill 2.2) (layers "*.Cu" "*.Mask") (solder_mask_margin 0.0508))
      (pad "" thru_hole circle (at 9.622 5.334) (size 3 3) (drill 2.2) (layers "*.Cu" "*.Mask") (solder_mask_margin 0.0508))
      `
    function pins(def_neg, def_pos) {
      return `
        (pad "+" thru_hole circle (at 8.479 ${def_neg}1.673 90) (size 2.1844 2.1844) (drill 1) (layers "*.Cu" "*.Mask") (solder_mask_margin 0.0508) ${p.PLUS.str})
        (pad "-" thru_hole circle (at 8.479 ${def_pos}1.827 90) (size 2.1844 2.1844) (drill 1) (layers "*.Cu" "*.Mask") (solder_mask_margin 0.0508) ${p.MINUS.str})
        (pad "A+" thru_hole circle (at -8.92 ${def_neg}5.08 180) (size 1.778 1.778) (drill 1) (layers "*.Cu" "*.Mask") (solder_mask_margin 0.0508) ${p.A_PLUS.str})
        (pad "A-" thru_hole circle (at -8.92 ${def_neg}2.54 180) (size 1.778 1.778) (drill 1) (layers "*.Cu" "*.Mask") (solder_mask_margin 0.0508) ${p.A_MINUS.str})
        (pad "GND" thru_hole rect (at -8.92 ${def_pos}5.08 180) (size 1.778 1.778) (drill 1) (layers "*.Cu" "*.Mask") (solder_mask_margin 0.0508) ${p.GND.str})
        (pad "SD" thru_hole circle (at -8.92 0 180) (size 1.778 1.778) (drill 1) (layers "*.Cu" "*.Mask") (solder_mask_margin 0.0508) ${p.SD.str})
        (pad "Vin" thru_hole circle (at -8.92 ${def_pos}2.54 180) (size 1.778 1.778) (drill 1) (layers "*.Cu" "*.Mask") (solder_mask_margin 0.0508) ${p.Vin.str})
        `
    }
    function outline(def_neg, def_pos) {
      return `
        ${''/* output symbols */}
        (fp_circle (center 5.31 ${def_neg}1.673) (end 6.0917 ${def_neg}1.673) (stroke (width 0.2032) (type solid)) (fill none) (layer ${p.side}.SilkS))
        (fp_line (start 4.9132 ${def_neg}1.673) (end 5.7069 ${def_neg}1.673) (stroke (width 0.3048) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start 5.31 ${def_neg}1.2762) (end 5.31 ${def_neg}2.0698) (stroke (width 0.3048) (type solid)) (layer ${p.side}.SilkS))
        
        (fp_circle (center 5.36 ${def_pos}1.827) (end 6.1417 ${def_pos}1.827) (stroke (width 0.2032) (type solid)) (fill none) (layer ${p.side}.SilkS))
        (fp_line (start 5.7568 ${def_pos}1.827) (end 4.9631 ${def_pos}1.827) (stroke (width 0.3048) (type solid)) (layer ${p.side}.SilkS))
      
        ${''/* Pin_Header 1X05 representation*/}
        (fp_line (start -10.25 ${def_pos}3.81) (end -10.25 ${def_neg}6.41) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS)) 
        (fp_line (start -7.59 ${def_neg}6.41) (end -10.25 ${def_neg}6.41) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start -7.59 ${def_pos}3.81) (end -10.25 ${def_pos}3.81) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start -7.59 ${def_pos}3.81) (end -7.59 ${def_neg}6.41) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start -7.59 ${def_pos}5.08) (end -7.59 ${def_pos}6.41) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start -7.59 ${def_pos}6.41) (end -8.92 ${def_pos}6.41) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        
        ${''/* Pin_Header 1X05 fab info*/} 
        (fp_line (start -10.19 ${def_neg}6.35) (end -7.65 ${def_neg}6.35) (stroke (width 0.1) (type solid)) (layer ${p.side}.Fab))
        (fp_line (start -10.19 ${def_pos}6.35) (end -10.19 ${def_neg}6.35) (stroke (width 0.1) (type solid)) (layer ${p.side}.Fab))
        (fp_line (start -8.285 ${def_pos}6.35) (end -10.19 ${def_pos}6.35) (stroke (width 0.1) (type solid)) (layer ${p.side}.Fab))
        (fp_line (start -7.65 ${def_neg}6.35) (end -7.65 ${def_pos}5.715) (stroke (width 0.1) (type solid)) (layer ${p.side}.Fab))
        (fp_line (start -7.65 ${def_pos}5.715) (end -8.285 ${def_pos}6.35) (stroke (width 0.1) (type solid)) (layer ${p.side}.Fab))
        `
    }
    function legend(def_neg, def_pos, def_text_mirror) {
      return `
        ${''/* pin names */}
        (fp_text user SD (at -11.21 0 ${p.rot + 270}) (layer ${p.side}.SilkS) (effects (font (size 1.0795 1.0795) (thickness 0.1905)) ${def_text_mirror}))
        (fp_text user Gnd (at -11.14 ${def_pos}5.07 ${p.rot + 270}) (layer ${p.side}.SilkS) (effects (font (size 1.0795 1.0795) (thickness 0.1905)) ${def_text_mirror}))
        (fp_text user Vin (at -6.87 ${def_pos}2.54 ${p.rot + 270}) (layer ${p.side}.SilkS) (effects (font (size 0.8636 0.8636) (thickness 0.1524)) ${def_text_mirror}))
        (fp_text user "A+" (at -11.16 ${def_neg}5.087 ${p.rot + 270}) (layer ${p.side}.SilkS) (effects (font (size 1.0795 1.0795) (thickness 0.1905)) ${def_text_mirror}))
        (fp_text user "A-" (at -6.77 ${def_neg}2.5 ${p.rot + 270}) (layer ${p.side}.SilkS) (effects (font (size 1.0795 1.0795) (thickness 0.1905)) ${def_text_mirror}))
        (fp_text user "PAM8302A" (at -0.78 0 ${p.rot}) (layer ${p.side}.SilkS) (effects (font (size 1.0795 1.0795) (thickness 0.1905)) ${def_text_mirror}))
        `
    }
    if(p.side == 'F') {
      if(p.legends == true) {
        return `
          ${standard}
          ${pins('-', '')}
          ${outline('-','')}
          ${legend('-','','')})
        `
      } else {
        return `
          ${standard}
          ${pins('-', '')}
          ${outline('-','')})
        `
      }
    } else {
      if(p.legends == true) {
        return `
          ${standard}
          ${pins('', '-')}
          ${outline('','-')}
          ${legend('','-','(justify mirror)')})
        `
      } else {
        return `
          ${standard}
          ${pins('', '-')}
          ${outline('','-')})
        `
      }
    }
  }
}

(footprint "DRV2605L" (version 20221018) (generator pcbnew)
  (layer "F.Cu")
  (attr through_hole)
  (fp_text reference "REF**" (at -0.09 -1.55 unlocked) (layer "F.SilkS") hide
      (effects (font (size 1 1) (thickness 0.1)))
    (tstamp b6f35f46-1dac-4943-9dcf-0e8e47e6a4d4)
  )
  (fp_text value "DRV2605L" (at 0 1.51 unlocked) (layer "F.Fab") hide
      (effects (font (size 1 1) (thickness 0.15)))
    (tstamp b75f586a-f23c-4e86-b4b2-b28d4ed73644)
  )
  (fp_text user "Vin" (at -5.12 3.25 90 unlocked) (layer "F.SilkS")
      (effects (font (size 1.0795 1.0795) (thickness 0.1905) bold))
    (tstamp 26e12692-585c-4629-9ac4-3139fec5330a)
  )
  (fp_text user "SCL" (at -0.04 3.17 90 unlocked) (layer "F.SilkS")
      (effects (font (size 1.0795 1.0795) (thickness 0.1905)))
    (tstamp 66ad9358-9853-4385-b9e3-dcb2512873d3)
  )
  (fp_text user "SDA" (at 2.54 3.17 90 unlocked) (layer "F.SilkS")
      (effects (font (size 1.0795 1.0795) (thickness 0.1905)))
    (tstamp 8a2283e6-54b2-4198-81aa-14425bbcedeb)
  )
  (fp_text user "Gnd" (at -2.62 3.16 90 unlocked) (layer "F.SilkS")
      (effects (font (size 1.0795 1.0795) (thickness 0.1905)))
    (tstamp 99f6d231-c70b-422d-81e7-b18631df4317)
  )
  (fp_text user "IN" (at 5.1 3.86 90 unlocked) (layer "F.SilkS")
      (effects (font (size 1.0795 1.0795) (thickness 0.1905)))
    (tstamp f997fc38-f52b-40f6-9d5c-02f80ae370f8)
  )

  (fp_line (start -9.39 5.755) (end -9.39 -5.755)
    (stroke (width 0.05) (type default)) (layer "F.CrtYd") (tstamp bb43dffb-cec9-4982-afa8-86af8bb6b237))
  (fp_line (start -6.39 -8.755) (end 6.39 -8.755)
    (stroke (width 0.05) (type default)) (layer "F.CrtYd") (tstamp 70435042-0307-4e94-a8ee-d219706f82f1))
  (fp_line (start -6.39 8.755) (end 6.39 8.755)
    (stroke (width 0.05) (type default)) (layer "F.CrtYd") (tstamp 11dea275-5759-4d2c-8c01-092337b5152f))
  (fp_line (start 9.39 5.755) (end 9.39 -5.755)
    (stroke (width 0.05) (type default)) (layer "F.CrtYd") (tstamp e663563f-49f5-4e8b-9e9d-ee665d9c7b64))
  (fp_arc (start -9.39 -5.755) (mid -8.511322 -7.876322) (end -6.39 -8.755)
    (stroke (width 0.05) (type default)) (layer "F.CrtYd") (tstamp fa295929-a57b-4280-ab8a-3efe0872a1f0))
  (fp_arc (start -6.39 8.755) (mid -8.511321 7.876321) (end -9.39 5.755)
    (stroke (width 0.05) (type default)) (layer "F.CrtYd") (tstamp 8e7201c7-562b-4300-a840-ae30b864628f))
  (fp_arc (start 6.39 -8.755) (mid 8.511321 -7.876321) (end 9.39 -5.755)
    (stroke (width 0.05) (type default)) (layer "F.CrtYd") (tstamp 30080dff-1422-4e35-a8b8-f6f1c91ad6f6))
  (fp_arc (start 9.39 5.755) (mid 8.511321 7.876321) (end 6.39 8.755)
    (stroke (width 0.05) (type default)) (layer "F.CrtYd") (tstamp 52eccd1a-2b5a-49aa-8889-786c75234dd5))
  (fp_line (start -6.36 5.08) (end 6.34 5.08)
    (stroke (width 0.1) (type solid)) (layer "F.Fab") (tstamp 406df04d-67e5-47c2-a701-bc2c094b1984))
  (fp_line (start -6.36 6.985) (end -6.36 5.08)
    (stroke (width 0.1) (type solid)) (layer "F.Fab") (tstamp 332d638f-66e7-40a1-83c4-0d21f4489f0f))
  (fp_line (start -5.725 7.62) (end -6.36 6.985)
    (stroke (width 0.1) (type solid)) (layer "F.Fab") (tstamp efba6869-9907-4c71-9f78-50626882ade2))
  (fp_line (start 6.34 5.08) (end 6.34 7.62)
    (stroke (width 0.1) (type solid)) (layer "F.Fab") (tstamp 618d6902-b600-42a3-9d0f-fb0132942399))
  (fp_line (start 6.34 7.62) (end -5.725 7.62)
    (stroke (width 0.1) (type solid)) (layer "F.Fab") (tstamp 55612ae1-4379-4c6e-b92a-ea3f647e6fcf))
  (pad "+" thru_hole rect (at 2.5 -6.35 90) (size 2 2) (drill 1) (layers "*.Cu" "*.Mask") (tstamp 4c826923-ec9a-4101-8341-f186a2cfdcac))
  (pad "-" thru_hole rect (at -2.5 -6.35 90) (size 2 2) (drill 1) (layers "*.Cu" "*.Mask") (tstamp d09a7aa2-3c01-403d-8876-9b548f85f941))
  (pad "1" thru_hole rect (at -5.09 6.35 90) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask") (tstamp cdae244e-103f-48b2-814a-f82e95fdbf2a))
  (pad "2" thru_hole oval (at -2.55 6.35 90) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask") (tstamp a54a7357-e22a-4e37-a284-43e7c05eee61))
  (pad "3" thru_hole oval (at -0.01 6.35 90) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask") (tstamp 0c3a7657-4d9c-45c3-b5e9-8c13e0f9a852))
  (pad "4" thru_hole oval (at 2.53 6.35 90) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask") (tstamp deef23ff-90c4-4ca9-b1b0-79086d89013c))
  (pad "5" thru_hole oval (at 5.07 6.35 90) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask") (tstamp aef11b8e-ca88-496f-829a-4dedf14daee9))
  (pad "P$1" thru_hole circle (at -6.39 -5.755) (size 3.5 3.5) (drill 2.2) (layers "*.Cu" "*.Mask")
    (solder_mask_margin 0.0508) (thermal_bridge_angle 0) (tstamp 16dcadfe-bbb8-4166-880d-f8ca02d494aa))
  (pad "P$1" thru_hole circle (at 6.39 -5.755) (size 3.5 3.5) (drill 2.2) (layers "*.Cu" "*.Mask")
    (solder_mask_margin 0.0508) (thermal_bridge_angle 0) (tstamp 42fb7b4b-a573-4696-b4e0-0ba5b85ee401))
)
