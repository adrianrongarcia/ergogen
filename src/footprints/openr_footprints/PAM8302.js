
module.exports = {
  params: {
    designator: 'PAM8302',
    side: 'F',
    legends: true,
    A_PLUS: undefined,
    A_MINUS: undefined,
    SD: undefined,
    Vin: undefined,
    GND: undefined,
    PLUS: {type: 'net', value: 'PLUS'},
    MINUS: {type: 'net', value: 'MINUS'}
  },
  body: p => {
    const standard = `
      (module PAM8302 (layer F.Cu) (tedit 5970F8E5)

      ${p.at /* parametric position */}   

      ${'' /* footprint reference */}
      (fp_text reference "${p.ref}" (at 0 0) (layer Dwgs.User) (effects (font (size 1 1) (thickness 0.15))))
      (fp_text value "" (at 0 0) (layer F.Fab) (effects (font (size 1 1) (thickness 0.15))))
      
      ${'' /* footprint outline */}
      (fp_line (start -12.125 5.217) (end -12.125 -5.217) (stroke (width 0.1) (type default)) (layer ${p.side}.SilkS))
      (fp_line (start 9.622 -7.72) (end -9.622 -7.72) (stroke (width 0.1) (type default)) (layer ${p.side}.SilkS))
      (fp_line (start 9.622 7.72) (end -9.622 7.72) (stroke (width 0.1) (type default)) (layer ${p.side}.SilkS))
      (fp_line (start 12.125 5.217) (end 12.125 -5.217) (stroke (width 0.1) (type default)) (layer ${p.side}.SilkS))
      (fp_arc (start -9.622 -5.217) (end -12.125 -5.217) (angle 90) (stroke (width 0.1) (type default)) (layer ${p.side}.SilkS))
      (fp_arc (start -9.622 5.217) (end -9.622 7.72) (angle 90) (stroke (width 0.1) (type default)) (layer ${p.side}.SilkS))
      (fp_arc (start 9.622 -5.217) (end 9.622 -7.72) (angle 90) (stroke (width 0.1) (type default)) (layer ${p.side}.SilkS))
      (fp_arc (start 9.622 5.217) (end 12.125 5.217) (angle 90) (stroke (width 0.1) (type default)) (layer ${p.side}.SilkS))
      
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