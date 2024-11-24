// MX Switch with with default holes and hotswap sockets
// Nets
//    from: corresponds to pin 1
//    to: corresponds to pin 2

module.exports = {
    params: {
        designator: 'S' , // for Switch
        from: undefined,
        to: undefined
    },
    body: p => `
  
        (module MX_optional_reversible (layer F.Cu) (tedit 5DD4F656)
        ${p.at /* parametric position */}
        
        ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 0 1) (thickness 0.15))))
        (fp_text value "" (at 0 0) (layer F.Fab) hide (effects (font (size 1.27 1.27) (thickness 0.15))))   
    
        ${'' /* back outline  (mainly hotswap socket outline)*/}
        (fp_line (start -7 -7) (end -6 -7) (stroke (width 0.15) (type solid)) (layer B.SilkS))
        (fp_line (start -7 -6) (end -7 -7) (stroke (width 0.15) (type solid)) (layer B.SilkS)) 
        (fp_line (start -7 7) (end -7 6.604) (stroke (width 0.15) (type solid)) (layer B.SilkS))
        (fp_line (start -6 7) (end -7 7) (stroke (width 0.15) (type solid)) (layer B.SilkS))
        (fp_line (start -5.08 3.175) (end -5.08 3.556) (stroke (width 0.15) (type solid)) (layer B.SilkS))
        (fp_line (start -5.08 6.604) (end -5.08 6.985) (stroke (width 0.15) (type solid)) (layer B.SilkS))
        (fp_line (start -5.08 6.985) (end 3.81 6.985) (stroke (width 0.15) (type solid)) (layer B.SilkS))
        (fp_line (start 0 2.54) (end -2.286 2.54) (stroke (width 0.15) (type solid)) (layer B.SilkS))
        (fp_line (start 4.191 0.635) (end 2.54 0.635) (stroke (width 0.15) (type solid)) (layer B.SilkS))
        (fp_line (start 6 -7) (end 7 -7) (stroke (width 0.15) (type solid)) (layer B.SilkS))
        (fp_line (start 6.35 0.635) (end 5.969 0.635) (stroke (width 0.15) (type solid)) (layer B.SilkS))
        (fp_line (start 6.35 1.016) (end 6.35 0.635) (stroke (width 0.15) (type solid)) (layer B.SilkS))
        (fp_line (start 6.35 4.445) (end 6.35 4.064) (stroke (width 0.15) (type solid)) (layer B.SilkS))
        (fp_line (start 7 -7) (end 7 -6) (stroke (width 0.15) (type solid)) (layer B.SilkS))
        (fp_line (start 7 6) (end 7 7) (stroke (width 0.15) (type solid)) (layer B.SilkS))
        (fp_line (start 7 7) (end 6 7) (stroke (width 0.15) (type solid)) (layer B.SilkS))
        (fp_arc (start 0 0) (end 0 2.54) (angle -76) (stroke (width 0.15) (type solid)) (layer B.SilkS))
        (fp_arc (start 3.81 4.445) (end 3.81 6.985) (angle -90) (stroke (width 0.15) (type solid)) (layer B.SilkS))
    
        ${'' /* front outline  (mainly hotswap socket outline)*/}
        (fp_line (start -7 -7) (end -6 -7) (stroke (width 0.15) (type solid)) (layer F.SilkS))
        (fp_line (start -7 -6.604) (end -7 -7) (stroke (width 0.15) (type solid)) (layer F.SilkS))
        (fp_line (start -7 7) (end -7 6) (stroke (width 0.15) (type solid)) (layer F.SilkS))
        (fp_line (start -6 7) (end -7 7) (stroke (width 0.15) (type solid)) (layer F.SilkS))
        (fp_line (start -5.08 -6.985) (end -5.08 -6.604) (stroke (width 0.15) (type solid)) (layer F.SilkS))
        (fp_line (start -5.08 -3.556) (end -5.08 -3.175) (stroke (width 0.15) (type solid)) (layer F.SilkS))
        (fp_line (start -2.286 -2.54) (end 0 -2.54) (stroke (width 0.15) (type solid)) (layer F.SilkS))
        (fp_line (start 2.54 -0.635) (end 4.191 -0.635) (stroke (width 0.15) (type solid)) (layer F.SilkS))
        (fp_line (start 3.81 -6.985) (end -5.08 -6.985) (stroke (width 0.15) (type solid)) (layer F.SilkS))
        (fp_line (start 5.969 -0.635) (end 6.35 -0.635) (stroke (width 0.15) (type solid)) (layer F.SilkS))
        (fp_line (start 6 -7) (end 7 -7) (stroke (width 0.15) (type solid)) (layer F.SilkS))
        (fp_line (start 6.35 -4.445) (end 6.35 -4.064) (stroke (width 0.15) (type solid)) (layer F.SilkS))
        (fp_line (start 6.35 -0.635) (end 6.35 -1.016) (stroke (width 0.15) (type solid)) (layer F.SilkS))
        (fp_line (start 7 -7) (end 7 -6) (stroke (width 0.15) (type solid)) (layer F.SilkS))
        (fp_line (start 7 6) (end 7 7) (stroke (width 0.15) (type solid)) (layer F.SilkS))
        (fp_line (start 7 7) (end 6 7) (stroke (width 0.15) (type solid)) (layer F.SilkS))
        (fp_arc (start 0 0) (end 0 -2.54) (angle 76) (stroke (width 0.15) (type solid)) (layer F.SilkS))
        (fp_arc (start 3.81 -4.445) (end 6.35 -4.445) (angle -90) (stroke (width 0.15) (type solid)) (layer F.SilkS))
    
        ${'' /* back fabrication otuline  (mainly hotswap socket outline and switch limits) */}
        (fp_line (start -7.62 3.81) (end -7.62 6.35) (stroke (width 0.12) (type solid)) (layer B.Fab))
        (fp_line (start -7.62 6.35) (end -5.08 6.35) (stroke (width 0.12) (type solid)) (layer B.Fab))
        (fp_line (start -7.5 -7.5) (end 7.5 -7.5) (stroke (width 0.15) (type solid)) (layer B.Fab))
        (fp_line (start -7.5 7.5) (end -7.5 -7.5) (stroke (width 0.15) (type solid)) (layer B.Fab))
        (fp_line (start -5.08 2.54) (end -5.08 6.985) (stroke (width 0.12) (type solid)) (layer B.Fab))
        (fp_line (start -5.08 3.81) (end -7.62 3.81) (stroke (width 0.12) (type solid)) (layer B.Fab))
        (fp_line (start -5.08 6.985) (end 3.81 6.985) (stroke (width 0.12) (type solid)) (layer B.Fab))
        (fp_line (start 0 2.54) (end -5.08 2.54) (stroke (width 0.12) (type solid)) (layer B.Fab))
        (fp_line (start 6.35 0.635) (end 2.54 0.635) (stroke (width 0.12) (type solid)) (layer B.Fab))
        (fp_line (start 6.35 3.81) (end 8.89 3.81) (stroke (width 0.12) (type solid)) (layer B.Fab))
        (fp_line (start 6.35 4.445) (end 6.35 0.635) (stroke (width 0.12) (type solid)) (layer B.Fab))
        (fp_line (start 7.5 -7.5) (end 7.5 7.5) (stroke (width 0.15) (type solid)) (layer B.Fab))
        (fp_line (start 7.5 7.5) (end -7.5 7.5) (stroke (width 0.15) (type solid)) (layer B.Fab))
        (fp_line (start 8.89 1.27) (end 6.35 1.27) (stroke (width 0.12) (type solid)) (layer B.Fab))
        (fp_line (start 8.89 3.81) (end 8.89 1.27) (stroke (width 0.12) (type solid)) (layer B.Fab))
        (fp_arc (start 0 0) (end 0 2.54) (angle -76) (stroke (width 0.12) (type solid)) (layer B.Fab))
        (fp_arc (start 3.81 4.445) (end 3.81 6.985) (angle -90) (stroke (width 0.12) (type solid)) (layer B.Fab))
    
        ${'' /* front fabrication otuline  (mainly hotswap socket outline and switch limits) */}
        (fp_line (start -7.62 -6.35) (end -7.62 -3.81) (stroke (width 0.12) (type solid)) (layer F.Fab))
        (fp_line (start -7.62 -3.81) (end -5.08 -3.81) (stroke (width 0.12) (type solid)) (layer F.Fab))
        (fp_line (start -7.5 -7.5) (end 7.5 -7.5) (stroke (width 0.15) (type solid)) (layer F.Fab))
        (fp_line (start -7.5 7.5) (end -7.5 -7.5) (stroke (width 0.15) (type solid)) (layer F.Fab))
        (fp_line (start -5.08 -6.985) (end -5.08 -2.54) (stroke (width 0.12) (type solid)) (layer F.Fab))
        (fp_line (start -5.08 -6.35) (end -7.62 -6.35) (stroke (width 0.12) (type solid)) (layer F.Fab))
        (fp_line (start -5.08 -2.54) (end 0 -2.54) (stroke (width 0.12) (type solid)) (layer F.Fab))
        (fp_line (start 2.539999 -0.634999) (end 6.35 -0.635) (stroke (width 0.12) (type solid)) (layer F.Fab))
        (fp_line (start 3.81 -6.985) (end -5.08 -6.985) (stroke (width 0.12) (type solid)) (layer F.Fab))
        (fp_line (start 6.35 -1.27) (end 8.89 -1.27) (stroke (width 0.12) (type solid)) (layer F.Fab))
        (fp_line (start 6.35 -0.635) (end 6.35 -4.445) (stroke (width 0.12) (type solid)) (layer F.Fab))
        (fp_line (start 7.5 -7.5) (end 7.5 7.5) (stroke (width 0.15) (type solid)) (layer F.Fab))
        (fp_line (start 7.5 7.5) (end -7.5 7.5) (stroke (width 0.15) (type solid)) (layer F.Fab))
        (fp_line (start 8.89 -3.81) (end 6.35 -3.81) (stroke (width 0.12) (type solid)) (layer F.Fab))
        (fp_line (start 8.89 -1.27) (end 8.89 -3.81) (stroke (width 0.12) (type solid)) (layer F.Fab))
        (fp_arc (start 0 0) (end 0 -2.54) (angle 76) (stroke (width 0.12) (type solid)) (layer F.Fab))
        (fp_arc (start 3.81 -4.445) (end 6.35 -4.445) (angle -90) (stroke (width 0.12) (type solid)) (layer F.Fab))
   
        ${''/* middle shaft */}
        (pad "" np_thru_hole circle (at 0 0) (size 3.9878 3.9878) (drill 3.9878) (layers *.Cu *.Mask))
    
        ${''/* stabilizers */}
        (pad "" np_thru_hole circle (at -5.08 0) (size 1.7018 1.7018) (drill 1.7018) (layers *.Cu *.Mask
        (pad "" np_thru_hole circle (at 5.08 0) (size 1.7018 1.7018) (drill 1.7018) (layers *.Cu *.Mask))
    
        ${'' /* hotswap sockets related thru holes*/}
        (pad "" np_thru_hole circle (at -2.54 -5.08) (size 3 3) (drill 3) (layers *.Cu *.Mask))
        (pad "" np_thru_hole circle (at -2.54 5.08) (size 3 3) (drill 3) (layers *.Cu *.Mask))
        (pad "" np_thru_hole circle (at 3.81 -2.54) (size 3 3) (drill 3) (layers *.Cu *.Mask))
        (pad "" np_thru_hole circle (at 3.81 2.54) (size 3 3) (drill 3) (layers *.Cu *.Mask))
        
        ${'' /* direct solder pin holes*/}
        (pad "1" thru_hole circle (at -3.81 -2.54) (size 2.286 2.286) (drill 1.4986) (layers *.Cu *.Mask) ${p.from.str})
        (pad "1" thru_hole circle (at -3.81 2.54) (size 2.286 2.286) (drill 1.4986) (layers *.Cu *.Mask) ${p.from.str})
        (pad "2" thru_hole circle (at 2.54 -5.08) (size 2.286 2.286) (drill 1.4986) (layers *.Cu *.Mask) ${p.to.str})
        (pad "2" thru_hole circle (at 2.54 5.08) (size 2.286 2.286) (drill 1.4986) (layers *.Cu *.Mask) ${p.to.str})
        
        ${'' /* hotwswap sockets net pads*/}
        (pad "1" smd rect (at -6.29 -5.08 ${p.rot}) (size 2.55 2.5) (layers F.Cu F.Paste F.Mask) ${p.from.str})
        (pad "1" smd rect (at -6.29 5.08 ${p.rot}) (size 2.55 2.5) (layers B.Cu B.Paste B.Mask) ${p.from.str})
        (pad "2" smd rect (at 7.56 -2.54 ${p.rot}) (size 2.55 2.5) (layers F.Cu F.Paste F.Mask) ${p.to.str})
        (pad "2" smd rect (at 7.56 2.54 ${p.rot}) (size 2.55 2.5) (layers B.Cu B.Paste B.Mask) ${p.to.str})
    )
    
    `
}