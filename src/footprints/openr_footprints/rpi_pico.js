// RPi Pico footprint with SMD option
// Params
// orientation: default is down
//    if down, power led will face the pcb
//    if up, power led will face away from pcb
// side: default is F (front)
// model: default is default (orginal rpi pico). The other valid value is vcc-gnd
// SMD: default is false (it is only possible when model is default
// legends: default is true. If you dont whant the silkscreen of each pin, set it to false

module.exports = {
  params: {
    designator: 'RPi_Pico',
    orientation: 'down',
    side: 'F',
    model: 'default',
    SMD: false,
    legends: true,
    VBUS: {type: 'net', value: 'VBUS'},
    VSYS: {type: 'net', value: 'VSYS'},
    Vin: {type: 'net', value: 'Vin'},
    Vout: {type: 'net', value: 'Vout'},
    GND: {type: 'net', value: 'GND'},
    V3_EN: {type: 'net', value: 'V3_EN'},
    V3: {type: 'net', value: 'V3'},
    ADC_VREF: {type: 'net', value: 'ADC_VREF'},
    GP29: {type: 'net', value: 'GP28'},
    GP28: {type: 'net', value: 'GP28'},
    AGND: {type: 'net', value: 'AGND'},
    GP27: {type: 'net', value: 'GP27'},
    GP26: {type: 'net', value: 'GP26'},
    RUN: {type: 'net', value: 'RUN'},
    GP23: {type: 'net', value: 'GP23'},
    GP22: {type: 'net', value: 'GP22'},
    GP21: {type: 'net', value: 'GP21'},
    GP20: {type: 'net', value: 'GP20'},
    GP19: {type: 'net', value: 'GP19'},
    GP18: {type: 'net', value: 'GP18'},
    GP17: {type: 'net', value: 'GP17'},
    GP16: {type: 'net', value: 'GP16'},
    GP15: {type: 'net', value: 'GP15'},
    GP14: {type: 'net', value: 'GP14'},
    GP13: {type: 'net', value: 'GP13'},
    GP12: {type: 'net', value: 'GP12'},
    GP11: {type: 'net', value: 'GP11'},
    GP10: {type: 'net', value: 'GP10'},
    GP9: {type: 'net', value: 'GP9'},
    GP8: {type: 'net', value: 'GP8'},
    GP7: {type: 'net', value: 'GP7'},
    GP6: {type: 'net', value: 'GP6'},
    GP5: {type: 'net', value: 'GP5'},
    GP4: {type: 'net', value: 'GP4'},
    GP3: {type: 'net', value: 'GP3'},
    GP2: {type: 'net', value: 'GP2'},
    GP1: {type: 'net', value: 'GP1'},
    GP0: {type: 'net', value: 'GP0'}
  },
  body: p => {
    const standard = `
      (module RPi_Pico_SMD_TH (layer F.Cu) (tedit 20221018)
      ${p.at /* parametric position */}
    
      ${'' /* footprint reference */}
      (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
      (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
      `
    function SMD(def_neg, def_pos) {
      return `
        ${''/* SMD Pads */}
        (pad 1 smd rect (at ${def_neg}8.89 -24.13 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_neg}0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
        (pad 2 smd rect (at ${def_neg}8.89 -21.59 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_neg}0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
        (pad 3 smd rect (at ${def_neg}8.89 -19.05 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_neg}0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
        (pad 4 smd rect (at ${def_neg}8.89 -16.51 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_neg}0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
        (pad 5 smd rect (at ${def_neg}8.89 -13.97 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_neg}0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
        (pad 6 smd rect (at ${def_neg}8.89 -11.43 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_neg}0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
        (pad 7 smd rect (at ${def_neg}8.89 -8.89 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_neg}0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
        (pad 8 smd rect (at ${def_neg}8.89 -6.35 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_neg}0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
        (pad 9 smd rect (at ${def_neg}8.89 -3.81 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_neg}0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
        (pad 10 smd rect (at ${def_neg}8.89 -1.27 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_neg}0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
        (pad 11 smd rect (at ${def_neg}8.89 1.27 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_neg}0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
        (pad 12 smd rect (at ${def_neg}8.89 3.81 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_neg}0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
        (pad 13 smd rect (at ${def_neg}8.89 6.35 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_neg}0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
        (pad 14 smd rect (at ${def_neg}8.89 8.89 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_neg}0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
        (pad 15 smd rect (at ${def_neg}8.89 11.43 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_neg}0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
        (pad 16 smd rect (at ${def_neg}8.89 13.97 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_neg}0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
        (pad 17 smd rect (at ${def_neg}8.89 16.51 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_neg}0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
        (pad 18 smd rect (at ${def_neg}8.89 19.05 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_neg}0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
        (pad 19 smd rect (at ${def_neg}8.89 21.59 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_neg}0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
        (pad 20 smd rect (at ${def_neg}8.89 24.13 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_neg}0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
      
        (pad 21 smd rect (at ${def_pos}8.89 24.13 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_pos}0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
        (pad 22 smd rect (at ${def_pos}8.89 21.59 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_pos}0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
        (pad 23 smd rect (at ${def_pos}8.89 19.05 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_pos}0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
        (pad 24 smd rect (at ${def_pos}8.89 16.51 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_pos}0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
        (pad 25 smd rect (at ${def_pos}8.89 13.97 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_pos}0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
        (pad 26 smd rect (at ${def_pos}8.89 11.43 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_pos}0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
        (pad 27 smd rect (at ${def_pos}8.89 8.89 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_pos}0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
        (pad 28 smd rect (at ${def_pos}8.89 6.35 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_pos}0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
        (pad 29 smd rect (at ${def_pos}8.89 3.81 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_pos}0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
        (pad 30 smd rect (at ${def_pos}8.89 1.27 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_pos}0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
        (pad 31 smd rect (at ${def_pos}8.89 -1.27 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_pos}0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
        (pad 32 smd rect (at ${def_pos}8.89 -3.81 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_pos}0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
        (pad 33 smd rect (at ${def_pos}8.89 -6.35 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_pos}0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
        (pad 34 smd rect (at ${def_pos}8.89 -8.89 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_pos}0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
        (pad 35 smd rect (at ${def_pos}8.89 -11.43 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_pos}0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
        (pad 36 smd rect (at ${def_pos}8.89 -13.97 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_pos}0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
        (pad 37 smd rect (at ${def_pos}8.89 -16.51 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_pos}0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
        (pad 38 smd rect (at ${def_pos}8.89 -19.05 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_pos}0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
        (pad 39 smd rect (at ${def_pos}8.89 -21.59 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_pos}0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
        (pad 40 smd rect (at ${def_pos}8.89 -24.13 ${p.rot}) (size 3.5 1.7) (drill (offset ${def_pos}0.9 0)) (layers ${p.side}.Cu ${p.side}.Mask))
        `
    }
    function SMD_up_EdgeCut() {
      return `
        ${'' /* edge cut for easy soldering of debug pins when soldering MCU via SMD*/}
        (fp_rect (start -4.65 23.05) (end 4.65 24.75) (stroke (width 0.12) (type solid)) (fill solid) (layer Edge.Cuts))
    
        ${'' /* clearance holes for USB solder pins protruding the back of MCU PCB*/}
        (pad "" np_thru_hole oval (at -2.725 -24) (size 1.8 1.8) (drill 1.8) (layers *.Cu *.Mask))
        (pad "" np_thru_hole oval (at -2.425 -20.97) (size 1.5 1.5) (drill 1.5) (layers *.Cu *.Mask))
        (pad "" np_thru_hole oval (at 2.425 -20.97) (size 1.5 1.5) (drill 1.5) (layers *.Cu *.Mask))
        (pad "" np_thru_hole oval (at 2.725 -24) (size 1.8 1.8) (drill 1.8) (layers *.Cu *.Mask))
        
        ${'' /* user drawings for some extra components */}
        (fp_poly
        (pts
          (xy -1.5 -16.5)
          (xy -3.5 -16.5)
          (xy -3.5 -18.5)
          (xy -1.5 -18.5)
        )
        (stroke (width 0.1) (type solid)) (fill solid) (layer Dwgs.User))
    
        (fp_poly
        (pts
          (xy -1.5 -14)
          (xy -3.5 -14)
          (xy -3.5 -16)
          (xy -1.5 -16)
        )
        (stroke (width 0.1) (type solid)) (fill solid) (layer Dwgs.User))
    
        (fp_poly
        (pts
          (xy -1.5 -11.5)
          (xy -3.5 -11.5)
          (xy -3.5 -13.5)
          (xy -1.5 -13.5)
        )
        (stroke (width 0.1) (type solid)) (fill solid) (layer Dwgs.User))
      `
    }
    function SMD_down_EdgeCut() {
      return `
        ${'' /* edge cut for allowing clearance of pcb elements*/}
        (fp_rect (start -7.5 -27.3) (end 7.5 24.75) (stroke (width 0.12) (type solid)) (fill solid) (layer Edge.Cuts))
      `
    }
    function default_common_elements(def_neg, def_pos) {
      return `
        ${'' /* component outline*/}
        (fp_line (start -10.5 -25.5) (end 10.5 -25.5) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start 10.5 25.5) (end -10.5 25.5) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        
        ${''/* extra border around "GP0", for extra distinctive info */}
        (fp_line (start ${def_neg}7.493 -22.833) (end ${def_neg}7.493 -25.5) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start ${def_neg}10.5 -22.833) (end ${def_neg}7.493 -22.833) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS)) 
        
        ${''/* footprint limits*/}
        (fp_line (start -11 -26) (end -4.16 -26) (stroke (width 0.12) (type solid)) (layer ${p.side}.CrtYd))
        (fp_line (start -11 26) (end -11 -26) (stroke (width 0.12) (type solid)) (layer ${p.side}.CrtYd))
        (fp_line (start -4.16 -27.3) (end -4.16 -26) (stroke (width 0.12) (type solid)) (layer ${p.side}.CrtYd))
        (fp_line (start -4.16 -27.3) (end 4.18 -27.3) (stroke (width 0.12) (type solid)) (layer ${p.side}.CrtYd))
        (fp_line (start 4.18 -27.3) (end 4.18 -26) (stroke (width 0.12) (type solid)) (layer ${p.side}.CrtYd))
        (fp_line (start 4.18 -26) (end 11 -26) (stroke (width 0.12) (type solid)) (layer ${p.side}.CrtYd))
        (fp_line (start 11 -26) (end 11 26) (stroke (width 0.12) (type solid)) (layer ${p.side}.CrtYd))
        (fp_line (start 11 26) (end -11 26) (stroke (width 0.12) (type solid)) (layer ${p.side}.CrtYd))
      
        ${''/* fabrication info*/}
        (fp_line (start -10.5 -25.5) (end 10.5 -25.5) (stroke (width 0.12) (type solid)) (layer ${p.side}.Fab))
        (fp_line (start ${def_neg}10.5 -24.2) (end ${def_neg}9.2 -25.5) (stroke (width 0.12) (type solid)) (layer ${p.side}.Fab))
        (fp_line (start -10.5 25.5) (end -10.5 -25.5) (stroke (width 0.12) (type solid)) (layer ${p.side}.Fab))
        (fp_line (start 10.5 -25.5) (end 10.5 25.5) (stroke (width 0.12) (type solid)) (layer ${p.side}.Fab))
        (fp_line (start 10.5 25.5) (end -10.5 25.5) (stroke (width 0.12) (type solid)) (layer ${p.side}.Fab))
        
        ${'' /* user drawings for USB area */}
        (fp_poly
        (pts
          (xy 3.7 -20.2)
          (xy -3.7 -20.2)
          (xy -3.7 -26.8)
          (xy 3.7 -26.8)
        )
        (stroke (width 0.1) (type solid)) (fill solid) (layer Dwgs.User))
        `
    }
    function vcc_gnd_general (def_neg, def_pos){
      return ` 
        ${'' /* footprint outline */}
        (fp_line (start ${def_neg}11.43 -26.67) (end ${def_neg}11.43 26.67) (stroke (width 0.12) (type default)) (layer ${p.side}.SilkS))
        (fp_line (start ${def_neg}11.43 -26.67) (end ${def_pos}11.43 -26.67) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start ${def_neg}10.16 -25.4) (end ${def_neg}7.62 -25.4) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start ${def_neg}10.16 -22.86) (end ${def_neg}10.16 -25.4) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start ${def_neg}10.16 -22.86) (end ${def_neg}7.62 -22.86) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start ${def_neg}7.62 -22.86) (end ${def_neg}7.62 -25.4) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start ${def_pos}11.43 26.67) (end ${def_neg}11.43 26.67) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start ${def_pos}11.43 26.67) (end ${def_pos}11.43 -26.67) (stroke (width 0.12) (type default)) (layer ${p.side}.SilkS))
        
        ${'' /* footprint user drawing for USB C */}
        (fp_poly
        (pts
          (xy 4.47 -19.32)
          (xy -4.47 -19.32)
          (xy -4.47 -26.67)
          (xy 4.47 -26.67)
        )
        (stroke (width 0.1) (type solid)) (fill solid) (layer Dwgs.User))
        
        ${'' /* footprint limits */}
        (fp_line (start -11.93 -27.17) (end 11.93 -27.17) (stroke (width 0.12) (type solid)) (layer ${p.side}.CrtYd))
        (fp_line (start -11.93 27.17) (end -11.93 -27.17) (stroke (width 0.12) (type solid)) (layer ${p.side}.CrtYd))
        (fp_line (start -11.93 27.17) (end 11.93 27.17) (stroke (width 0.12) (type solid)) (layer ${p.side}.CrtYd))
        (fp_line (start 11.93 27.17) (end 11.93 -27.17) (stroke (width 0.12) (type solid)) (layer ${p.side}.CrtYd))
        
        ${'' /* footprint fabrication info */}
        (fp_line (start ${def_neg}11.43 26.67) (end ${def_neg}11.43 -26.67) (stroke (width 0.12) (type default)) (layer ${p.side}.Fab))
        (fp_line (start ${def_neg}10.155 -24.125) (end ${def_neg}8.885 -25.395) (stroke (width 0.1) (type solid)) (layer ${p.side}.Fab))
        (fp_line (start ${def_neg}10.155 25.405) (end ${def_neg}10.155 -24.125) (stroke (width 0.1) (type solid)) (layer ${p.side}.Fab))
        (fp_line (start ${def_neg}8.885 -25.4) (end ${def_neg}7.62 -25.4) (stroke (width 0.1) (type solid)) (layer ${p.side}.Fab))
        (fp_line (start ${def_neg}7.62 -25.4) (end ${def_neg}7.62 25.4) (stroke (width 0.1) (type default)) (layer ${p.side}.Fab))
        (fp_line (start ${def_neg}7.62 25.405) (end ${def_neg}10.155 25.405) (stroke (width 0.1) (type default)) (layer ${p.side}.Fab))
        (fp_line (start ${def_pos}7.62 -25.5) (end ${def_pos}7.62 25.4) (stroke (width 0.1) (type default)) (layer ${p.side}.Fab))
        (fp_line (start ${def_pos}7.62 -25.5) (end ${def_pos}10.155 -25.5) (stroke (width 0.1) (type default)) (layer ${p.side}.Fab))
        (fp_line (start ${def_pos}7.62 25.4) (end ${def_pos}10.155 25.4) (stroke (width 0.1) (type default)) (layer ${p.side}.Fab))
        (fp_line (start ${def_pos}10.155 -25.5) (end ${def_pos}10.155 25.4) (stroke (width 0.1) (type default)) (layer ${p.side}.Fab))
        (fp_line (start ${def_pos}11.43 -26.67) (end ${def_pos}11.43 26.67) (stroke (width 0.12) (type default)) (layer ${p.side}.Fab))
        (fp_line (start ${def_pos}11.43 26.67) (end ${def_neg}11.43 26.67) (stroke (width 0.12) (type solid)) (layer ${p.side}.Fab))
        `
    }
    function common_pins(def_neg, def_pos) {
      return `
        ${''/* pin holes */}
        (pad 1 thru_hole oval (at ${def_neg}8.89 -24.13) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP0.str})
        (pad 2 thru_hole oval (at ${def_neg}8.89 -21.59) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP1.str})
        (pad 3 thru_hole rect (at ${def_neg}8.89 -19.05 ${p.rot}) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GND.str})
        (pad 4 thru_hole oval (at ${def_neg}8.89 -16.51) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP2.str})
        (pad 5 thru_hole oval (at ${def_neg}8.89 -13.97) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP3.str})
        (pad 6 thru_hole oval (at ${def_neg}8.89 -11.43) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP4.str})
        (pad 7 thru_hole oval (at ${def_neg}8.89 -8.89) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP5.str})
        (pad 8 thru_hole rect (at ${def_neg}8.89 -6.35 ${p.rot}) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GND.str})
        (pad 9 thru_hole oval (at ${def_neg}8.89 -3.81) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP6.str})
        (pad 10 thru_hole oval (at ${def_neg}8.89 -1.27) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP7.str})
        (pad 11 thru_hole oval (at ${def_neg}8.89 1.27) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP8.str})
        (pad 12 thru_hole oval (at ${def_neg}8.89 3.81) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP9.str})
        (pad 13 thru_hole rect (at ${def_neg}8.89 6.35 ${p.rot}) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GND.str})
        (pad 14 thru_hole oval (at ${def_neg}8.89 8.89) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP10.str})
        (pad 15 thru_hole oval (at ${def_neg}8.89 11.43) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP11.str})
        (pad 16 thru_hole oval (at ${def_neg}8.89 13.97) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP12.str})
        (pad 17 thru_hole oval (at ${def_neg}8.89 16.51) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP13.str})
        (pad 18 thru_hole rect (at ${def_neg}8.89 19.05 ${p.rot}) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GND.str})
        (pad 19 thru_hole oval (at ${def_neg}8.89 21.59) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP14.str})
        (pad 20 thru_hole oval (at ${def_neg}8.89 24.13) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP15.str})
      
        (pad 21 thru_hole oval (at ${def_pos}8.89 24.13) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP16.str})
        (pad 22 thru_hole oval (at ${def_pos}8.89 21.59) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP17.str})
        (pad 23 thru_hole rect (at ${def_pos}8.89 19.05 ${p.rot}) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GND.str})
        (pad 24 thru_hole oval (at ${def_pos}8.89 16.51) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP18.str})
        (pad 25 thru_hole oval (at ${def_pos}8.89 13.97) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP19.str})
        (pad 26 thru_hole oval (at ${def_pos}8.89 11.43) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP20.str})
        (pad 27 thru_hole oval (at ${def_pos}8.89 8.89) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP21.str})
        (pad 28 thru_hole rect (at ${def_pos}8.89 6.35 ${p.rot}) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GND.str})
        (pad 29 thru_hole oval (at ${def_pos}8.89 3.81) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP22.str})
        (pad 30 thru_hole oval (at ${def_pos}8.89 1.27) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.RUN.str})
        (pad 31 thru_hole oval (at ${def_pos}8.89 -1.27) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP26.str})
        (pad 32 thru_hole oval (at ${def_pos}8.89 -3.81) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP27.str})
        (pad 33 thru_hole rect (at ${def_pos}8.89 -6.35 ${p.rot}) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.AGND.str})
        (pad 34 thru_hole oval (at ${def_pos}8.89 -8.89) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP28.str})
        
        (pad 36 thru_hole oval (at ${def_pos}8.89 -13.97) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.V3.str})
        
        (pad 38 thru_hole rect (at ${def_pos}8.89 -19.05 ${p.rot}) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GND.str})
        `
    }
    function default_specific_pins(def_neg, def_pos){
      return `
        ${''/* pin holes */}
        (pad 35 thru_hole oval (at ${def_pos}8.89 -11.43) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.ADC_VREF.str})
        
        (pad 37 thru_hole oval (at ${def_pos}8.89 -16.51) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.V3_EN.str})
        
        (pad 39 thru_hole oval (at ${def_pos}8.89 -21.59) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.VSYS.str})
        (pad 40 thru_hole oval (at ${def_pos}8.89 -24.13) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.VBUS.str})
        `
    }
    function vcc_gnd_specific_pins(def_neg, def_pos) {
      return `
        ${''/* pin holes */}
        (pad 35 thru_hole oval (at ${def_pos}8.89 -11.43) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP29.str})
        
        (pad 37 thru_hole oval (at ${def_pos}8.89 -16.51) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.GP23.str})
        
        (pad 39 thru_hole oval (at ${def_pos}8.89 -21.59) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.Vin.str})
        (pad 40 thru_hole oval (at ${def_pos}8.89 -24.13) (size 1.7 1.7) (drill 1.02) (layers *.Cu *.Mask) ${p.Vout.str})
        `
    }
    function default_outline_standard(def_neg, def_pos) {
      return `
        ${'' /* component outline*/}
        (fp_line (start -10.5 -25.5) (end -10.5 25.5) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start 10.5 -25.5) (end 10.5 25.5) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
      `
    }
    function default_outline_SMD(def_neg, def_pos) {
      return `
        ${'' /* component outline*/}
        (fp_line (start -10.5 -25.5) (end -10.5 -25.2) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start -10.5 -23.1) (end -10.5 -22.7) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start -10.5 -20.5) (end -10.5 -20.1) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start -10.5 -18) (end -10.5 -17.6) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start -10.5 -15.4) (end -10.5 -15) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start -10.5 -12.9) (end -10.5 -12.5) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start -10.5 -10.4) (end -10.5 -10) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start -10.5 -7.8) (end -10.5 -7.4) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start -10.5 -5.3) (end -10.5 -4.9) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start -10.5 -2.7) (end -10.5 -2.3) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start -10.5 -0.2) (end -10.5 0.2) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start -10.5 2.3) (end -10.5 2.7) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start -10.5 4.9) (end -10.5 5.3) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start -10.5 7.4) (end -10.5 7.8) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start -10.5 10) (end -10.5 10.4) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start -10.5 12.5) (end -10.5 12.9) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start -10.5 15.1) (end -10.5 15.5) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start -10.5 17.6) (end -10.5 18) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start -10.5 20.1) (end -10.5 20.5) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start -10.5 22.7) (end -10.5 23.1) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start 10.5 -25.5) (end 10.5 -25.2) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start 10.5 -23.1) (end 10.5 -22.7) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start 10.5 -20.5) (end 10.5 -20.1) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start 10.5 -18) (end 10.5 -17.6) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start 10.5 -15.4) (end 10.5 -15) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start 10.5 -12.9) (end 10.5 -12.5) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start 10.5 -10.4) (end 10.5 -10) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start 10.5 -7.8) (end 10.5 -7.4) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start 10.5 -5.3) (end 10.5 -4.9) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start 10.5 -2.7) (end 10.5 -2.3) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start 10.5 -0.2) (end 10.5 0.2) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start 10.5 2.3) (end 10.5 2.7) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start 10.5 4.9) (end 10.5 5.3) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start 10.5 7.4) (end 10.5 7.8) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start 10.5 10) (end 10.5 10.4) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start 10.5 12.5) (end 10.5 12.9) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start 10.5 15.1) (end 10.5 15.5) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start 10.5 17.6) (end 10.5 18) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start 10.5 20.1) (end 10.5 20.5) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        (fp_line (start 10.5 22.7) (end 10.5 23.1) (stroke (width 0.12) (type solid)) (layer ${p.side}.SilkS))
        `
    }
    function common_legend(def_neg, def_pos, def_text_mirror) {
      return `
        ${''/* pin names */}
        (fp_text user GND (at ${def_pos}6.7 -19.05 ${p.rot}) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${def_text_mirror}))
        
        (fp_text user 3V3 (at ${def_pos}6.8 -13.9 ${p.rot}) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${def_text_mirror}))
        
        (fp_text user GP28 (at ${def_pos}6.4 -8.8 ${p.rot}) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${def_text_mirror}))
        (fp_text user AGND (at ${def_pos}6.4 -6.35 ${p.rot}) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${def_text_mirror}))
        (fp_text user GP27 (at ${def_pos}6.4 -3.8 ${p.rot}) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${def_text_mirror}))
        (fp_text user GP26 (at ${def_pos}6.4 -1.27 ${p.rot}) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${def_text_mirror}))
        (fp_text user RUN (at ${def_pos}6.7 1.27 ${p.rot}) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${def_text_mirror}))
        (fp_text user GP22 (at ${def_pos}6.4 3.81 ${p.rot}) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${def_text_mirror}))
        (fp_text user GND (at ${def_pos}6.7 6.35 ${p.rot}) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${def_text_mirror}))
        (fp_text user GP21 (at ${def_pos}6.4 8.9 ${p.rot}) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${def_text_mirror}))
        (fp_text user GP20 (at ${def_pos}6.4 11.43 ${p.rot}) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${def_text_mirror}))
        (fp_text user GP19 (at ${def_pos}6.4 13.97 ${p.rot}) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${def_text_mirror}))
        (fp_text user GP18 (at ${def_pos}6.4 16.6 ${p.rot}) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${def_text_mirror}))
        (fp_text user GND (at ${def_pos}6.7 19.05 ${p.rot}) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${def_text_mirror}))
        (fp_text user GP17 (at ${def_pos}6.4 21.6 ${p.rot}) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${def_text_mirror}))
        (fp_text user GP16 (at ${def_pos}6.4 24.13 ${p.rot}) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${def_text_mirror}))
        
        (fp_text user GP15 (at ${def_neg}6.4 24.13 ${p.rot}) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${def_text_mirror}))
        (fp_text user GP14 (at ${def_neg}6.4 21.59 ${p.rot}) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${def_text_mirror}))
        (fp_text user GND (at ${def_neg}6.7 19.05 ${p.rot}) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${def_text_mirror}))
        (fp_text user GP13 (at ${def_neg}6.4 16.51 ${p.rot}) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${def_text_mirror}))
        (fp_text user GP12 (at ${def_neg}6.4 13.97 ${p.rot}) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${def_text_mirror}))
        (fp_text user GP11 (at ${def_neg}6.4 11.43 ${p.rot}) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${def_text_mirror}))
        (fp_text user GP10 (at ${def_neg}6.4 8.89 ${p.rot}) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${def_text_mirror}))
        (fp_text user GND (at ${def_neg}6.7 6.35 ${p.rot}) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${def_text_mirror}))
        (fp_text user GP9 (at ${def_neg}6.7 3.8 ${p.rot}) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${def_text_mirror}))
        (fp_text user GP8 (at ${def_neg}6.7 1.27 ${p.rot}) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${def_text_mirror}))
        (fp_text user GP7 (at ${def_neg}6.7 -1.2 ${p.rot}) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${def_text_mirror}))
        (fp_text user GP6 (at ${def_neg}6.7 -3.81 ${p.rot}) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${def_text_mirror}))
        (fp_text user GND (at ${def_neg}6.7 -6.35 ${p.rot}) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${def_text_mirror}))
        (fp_text user GP5 (at ${def_neg}6.7 -8.89 ${p.rot}) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${def_text_mirror}))
        (fp_text user GP4 (at ${def_neg}6.7 -11.43 ${p.rot}) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${def_text_mirror}))
        (fp_text user GP3 (at ${def_neg}6.7 -13.97 ${p.rot}) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${def_text_mirror}))
        (fp_text user GP2 (at ${def_neg}6.7 -16.51 ${p.rot}) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${def_text_mirror}))
        (fp_text user GND (at ${def_neg}6.7 -19.05 ${p.rot}) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${def_text_mirror}))
        (fp_text user GP1 (at ${def_neg}6.7 -21.6 ${p.rot}) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${def_text_mirror}))
        (fp_text user GP0 (at ${def_neg}6 -24.13 ${p.rot}) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${def_text_mirror}))
        `
    }
    function default_specific_legend(def_neg, def_pos, def_text_mirror) {
      return `
        ${''/* pin names */}
        (fp_text user VBUS (at ${def_pos}6.38 -24.11 ${p.rot}) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${def_text_mirror}))
        (fp_text user VSYS (at ${def_pos}6.4 -21.59 ${p.rot}) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${def_text_mirror}))
        
        (fp_text user 3V3_EN (at ${def_pos}5.7 -16.5 ${p.rot}) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${def_text_mirror}))
        
        (fp_text user ADC_VREF (at ${def_pos}5 -11.4 ${p.rot}) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${def_text_mirror}))
        `
    }
    function vcc_gnd_specific_legend(def_neg, def_pos, def_text_mirror) {
      return `
        ${''/* pin names */}
        (fp_text user Vout (at ${def_pos}6.4 -24.11 ${p.rot}) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${def_text_mirror}))
        (fp_text user Vin (at ${def_pos}7 -21.59 ${p.rot}) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${def_text_mirror}))
        
        (fp_text user GP23 (at ${def_pos}6.4 -16.5 ${p.rot}) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${def_text_mirror}))
        
        (fp_text user GP29 (at ${def_pos}6.4 -11.4 ${p.rot}) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) ${def_text_mirror}))
        `
    }
    if(p.model == 'default') {
      if(p.SMD == true) {
        if(p.orientation == 'down') {
          if(p.side == 'F'){
            if(p.legends == true) {
              return `
                ${standard}
                ${default_common_elements('', '-')}
                ${default_outline_SMD('', '-')}
                ${common_pins('', '-')}
                ${default_specific_pins('', '-')}
                ${SMD('', '-')}
                ${SMD_down_EdgeCut()}
                ${common_legend('', '-', '')}
                ${default_specific_legend('', '-', '')})
                `
            } else {
              return `
                ${standard}
                ${default_common_elements('', '-')}
                ${default_outline_SMD('', '-')}
                ${common_pins('', '-')}
                ${default_specific_pins('', '-')}
                ${SMD('', '-')}
                ${SMD_down_EdgeCut})
                `
            }
          }
          else {
            if(p.legends == true) {
              return `
                ${standard}
                ${default_common_elements('-', '')}
                ${default_outline_SMD('-', '')}
                ${common_pins('-', '')}
                ${default_specific_pins('-', '')}
                ${SMD('-', '')}
                ${SMD_down_EdgeCut()}
                ${common_legend('-', '', '(justify mirror)')}
                ${default_specific_legend('-', '', '(justify mirror)')})
                `
            } else {
              return `
                ${standard}
                ${default_common_elements('-', '')}
                ${default_outline_SMD('-', '')}
                ${common_pins('-', '')}
                ${default_specific_pins('-', '')}
                ${SMD('-', '')}
                ${SMD_down_EdgeCut()})
                `
            }
          }
        } else {
          if(p.side == 'F'){
            if(p.legends == true) {
              return `
                ${standard}
                ${default_common_elements('-', '')}
                ${default_outline_SMD('-', '')}
                ${common_pins('-', '')}
                ${default_specific_pins('-', '')}
                ${SMD('-', '')}
                ${SMD_up_EdgeCut()}
                ${common_legend('-', '', '')}
                ${default_specific_legend('-', '', '')})
                `
            } else {
              return `
                ${standard}
                ${default_common_elements('-', '')}
                ${default_outline_SMD('-', '')}
                ${common_pins('-', '')}
                ${default_specific_pins('-', '')}
                ${SMD('-', '')}
                ${SMD_up_EdgeCut()})
                `
            }
          }
          else {
            if(p.legends == true) {
              return `
                ${standard}
                ${default_common_elements('', '-')}
                ${default_outline_SMD('', '-')}
                ${common_pins('', '-')}
                ${default_specific_pins('', '-')}
                ${SMD('', '-')}
                ${SMD_up_EdgeCut()}
                ${common_legend('', '-', '(justify mirror)')}
                ${default_specific_legend('', '-', '(justify mirror)')})
                `
            } else {
              return `
                ${standard}
                ${default_common_elements('', '-')}
                ${default_outline_SMD('', '-')}
                ${common_pins('', '-')}
                ${default_specific_pins('', '-')}
                ${SMD('', '-')}
                ${SMD_up_EdgeCut()})
                `
            }
          }
        }
      } else {
        if(p.orientation == 'down') {
          if(p.side == 'F'){
            if(p.legends == true) {
              return `
                ${standard}
                ${default_common_elements('', '-')}
                ${default_outline_standard('', '-')}
                ${common_pins('', '-')}
                ${default_specific_pins('', '-')}
                ${common_legend('', '-', '')}
                ${default_specific_legend('', '-', '')})
                `
            } else {
              return `
                ${standard}
                ${default_common_elements('', '-')}
                ${default_outline_standard('', '-')}
                ${common_pins('', '-')}
                ${default_specific_pins('', '-')})
                `
            }
          }
          else {
            if(p.legends == true) {
              return `
                ${standard}
                ${default_common_elements('-', '')}
                ${default_outline_standard('-', '')}
                ${common_pins('-', '')}
                ${default_specific_pins('-', '')}
                ${common_legend('-', '', '(justify mirror)')}
                ${default_specific_legend('-', '', '(justify mirror)')})
                `
            } else {
              return `
                ${standard}
                ${default_common_elements('-', '')}
                ${default_outline_standard('-', '')}
                ${common_pins('-', '')}
                ${default_specific_pins('-', '')})
                `
            }
          }
        } else {
          if(p.side == 'F'){
            if(p.legends == true) {
              return `
                ${standard}
                ${default_common_elements('-', '')}
                ${default_outline_standard('-', '')}
                ${common_pins('-', '')}
                ${default_specific_pins('-', '')}
                ${common_legend('-', '', '')}
                ${default_specific_legend('-', '', '')})
                `
            } else {
              return `
                ${standard}
                ${default_common_elements('-', '')}
                ${default_outline_standard('-', '')}
                ${common_pins('-', '')}
                ${default_specific_pins('-', '')})
                `
            }
          }
          else {
            if(p.legends == true) {
              return `
                ${standard}
                ${default_common_elements('', '-')}
                ${default_outline_standard('', '-')}
                ${common_pins('', '-')}
                ${default_specific_pins('', '-')}
                ${common_legend('', '-', '(justify mirror)')}
                ${default_specific_legend('', '-', '(justify mirror)')})
                `
            } else {
              return `
                ${standard}
                ${default_common_elements('', '-')}
                ${default_outline_standard('', '-')}
                ${common_pins('', '-')}
                ${default_specific_pins('', '-')})
                `
            }
          }
        }
      }
    } else if(p.model == 'vcc-gnd') {
      if(p.orientation == 'down') {
        if(p.side == 'F') {
          if(p.legends == true) {
            return `
              ${standard}
              ${vcc_gnd_general('', '-')}
              ${common_pins('', '-')}
              ${vcc_gnd_specific_pins('', '-')}
              ${common_legend('', '-', '')}
              ${vcc_gnd_specific_legend('', '-', '')})
              `
          } else {
            return `
              ${standard}
              ${vcc_gnd_general('', '-')}
              ${common_pins('', '-')}
              ${vcc_gnd_specific_pins('', '-')})
              `
            }
        } else {
          if(p.legends == true) {
            return `
              ${standard}
              ${vcc_gnd_general('-', '')}
              ${common_pins('-', '')}
              ${vcc_gnd_specific_pins('-', '')}
              ${common_legend('-', '', '(justify mirror)')}
              ${vcc_gnd_specific_legend('-', '', '(justify mirror)')})
              `
          } else {
            return `
              ${standard}
              ${vcc_gnd_general('-', '')}
              ${common_pins('-', '')}
              ${vcc_gnd_specific_pins('-', '')})
              `
          }
        }
      } else {
        if(p.side == 'F'){
          if(p.legends == true) {
            return `
              ${standard}
              ${vcc_gnd_general('-', '')}
              ${common_pins('-', '')}
              ${vcc_gnd_specific_pins('-', '')}
              ${common_legend('-', '', '')}
              ${vcc_gnd_specific_legend('-', '', '')})
              `
          } else {
            return `
              ${standard}
              ${vcc_gnd_general('-', '')}
              ${common_pins('-', '')}
              ${vcc_gnd_specific_pins('-', '')})
              `
          }
        }
        else {
          if(p.legends == true) {
            return `
              ${standard}
              ${vcc_gnd_general('', '-')}
              ${common_pins('', '-')}
              ${vcc_gnd_specific_pins('', '-')}
              ${common_legend('', '-', '(justify mirror)')}
              ${vcc_gnd_specific_legend('', '-', '(justify mirror)')})
              `
          } else {
            return `
              ${standard}
              ${vcc_gnd_general('', '-')}
              ${common_pins('', '-')}
              ${vcc_gnd_specific_pins('', '-')})
              `
          }
        }
      }
    }
  }
}