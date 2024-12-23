module.exports = {
  params: {
    designator: '4P4C',
    A: undefined,
    B: undefined,
    C: undefined,
    D: undefined
  },
  body: p => `
    (module RJ11_4p4c_reversible (layer F.Cu) (tedit 5970F8E5)

    ${p.at /* parametric position */}   

    ${'' /* footprint reference */}
    (fp_text reference "${p.ref}" (at 0 0) (layer Dwgs.User) (effects (font (size 1 1) (thickness 0.15))))
    (fp_text value "" (at 0 0) (layer F.Fab) (effects (font (size 1 1) (thickness 0.15))))
    
    ${'' /* footprint outline (Front) */}
    (fp_line (start -5 -6) (end 5 -6) (stroke (width 0.15) (type default)) (layer "F.SilkS"))
    (fp_line (start -5 -1.5) (end -5 -6) (stroke (width 0.15) (type default)) (layer "F.SilkS"))
    (fp_line (start -5 7) (end -5 1.5) (stroke (width 0.15) (type default)) (layer "F.SilkS"))
    (fp_line (start -5 7) (end 5 7) (stroke (width 0.15) (type default)) (layer "F.SilkS"))
    (fp_line (start 5 -1.5) (end 5 -6) (stroke (width 0.15) (type default)) (layer "F.SilkS"))
    (fp_line (start 5 7) (end 5 1.5) (stroke (width 0.15) (type default)) (layer "F.SilkS"))
    
    ${'' /* footprint outline (Back) */}
    (fp_line (start -6.02 -1.5) (end -6.02 -6) (stroke (width 0.15) (type default)) (layer "B.SilkS"))
    (fp_line (start -6.02 7) (end -6.02 1.5) (stroke (width 0.15) (type default)) (layer "B.SilkS"))
    (fp_line (start 3.98 -6) (end -6.02 -6) (stroke (width 0.15) (type default)) (layer "B.SilkS"))
    (fp_line (start 3.98 -1.5) (end 3.98 -6) (stroke (width 0.15) (type default)) (layer "B.SilkS"))
    (fp_line (start 3.98 7) (end -6.02 7) (stroke (width 0.15) (type default)) (layer "B.SilkS"))
    (fp_line (start 3.98 7) (end 3.98 1.5) (stroke (width 0.15) (type default)) (layer "B.SilkS"))
    
    ${'' /* footprint Limits (Front) */}
    (fp_line (start -6.02 -1.58) (end -5.5 -1.58) (stroke (width 0.05) (type default)) (layer "F.CrtYd"))
    (fp_line (start -6.02 1.58) (end -5.5 1.580447) (stroke (width 0.05) (type default)) (layer "F.CrtYd"))
    (fp_line (start -5.5 -6.5) (end 5.5 -6.5) (stroke (width 0.05) (type default)) (layer "F.CrtYd"))
    (fp_line (start -5.5 -1.58) (end -5.5 -6.5) (stroke (width 0.05) (type default)) (layer "F.CrtYd"))
    (fp_line (start -5.5 7.5) (end -5.5 1.580447) (stroke (width 0.05) (type default)) (layer "F.CrtYd"))
    (fp_line (start -5.5 7.5) (end 5.5 7.5) (stroke (width 0.05) (type default)) (layer "F.CrtYd"))
    (fp_line (start 5.5 -1.5) (end 5.5 -6.5) (stroke (width 0.05) (type default)) (layer "F.CrtYd"))
    (fp_line (start 5.5 7.5) (end 5.5 1.5) (stroke (width 0.05) (type default)) (layer "F.CrtYd"))
    (fp_arc (start -6.02 1.58) (mid -7.6 0) (end -6.02 -1.58) (stroke (width 0.05) (type default)) (layer "F.CrtYd"))
    (fp_arc (start 5.5 -1.5) (mid 6.579848 0) (end 5.5 1.5) (stroke (width 0.05) (type default)) (layer "F.CrtYd"))
    
    ${'' /* footprint Limits (Back) */}
    (fp_line (start -6.52 -1.5) (end -6.52 -6.5) (stroke (width 0.05) (type default)) (layer "B.CrtYd"))
    (fp_line (start -6.52 7.5) (end -6.52 1.5) (stroke (width 0.05) (type default)) (layer "B.CrtYd"))
    (fp_line (start 4.48 -6.5) (end -6.52 -6.5) (stroke (width 0.05) (type default)) (layer "B.CrtYd"))
    (fp_line (start 4.48 -1.58) (end 4.48 -6.5) (stroke (width 0.05) (type default)) (layer "B.CrtYd"))
    (fp_line (start 4.48 7.5) (end -6.52 7.5) (stroke (width 0.05) (type default)) (layer "B.CrtYd"))
    (fp_line (start 4.48 7.5) (end 4.48 1.58) (stroke (width 0.05) (type default)) (layer "B.CrtYd"))
    (fp_line (start 5 -1.58) (end 4.48 -1.58) (stroke (width 0.05) (type default)) (layer "B.CrtYd"))
    (fp_line (start 5 1.58) (end 4.48 1.58) (stroke (width 0.05) (type default)) (layer "B.CrtYd"))
    (fp_arc (start -6.52 1.5) (mid -7.599849 0) (end -6.52 -1.5) (stroke (width 0.05) (type default)) (layer "B.CrtYd"))
    (fp_arc (start 5 -1.58) (mid 6.58 0) (end 5 1.58) (stroke (width 0.05) (type default)) (layer "B.CrtYd"))
    
    ${'' /* footprint Fab traces (Front) */}
    (fp_line (start -5 7) (end -5 -6) (stroke (width 0.15) (type default)) (layer "F.Fab"))
    (fp_line (start -5 7) (end 5 7) (stroke (width 0.15) (type default)) (layer "F.Fab"))
    (fp_line (start 5 -6) (end -5 -6) (stroke (width 0.15) (type default)) (layer "F.Fab"))
    (fp_line (start 5 7) (end 5 -6) (stroke (width 0.15) (type default)) (layer "F.Fab"))
    
    ${'' /* footprint Fab traces (Back) */}
    (fp_line (start -6.02 -6) (end 3.98 -6) (stroke (width 0.15) (type default)) (layer "B.Fab"))
    (fp_line (start -6.02 7) (end -6.02 -6) (stroke (width 0.15) (type default)) (layer "B.Fab"))
    (fp_line (start 3.98 7) (end -6.02 7) (stroke (width 0.15) (type default)) (layer "B.Fab"))
    (fp_line (start 3.98 7) (end 3.98 -6) (stroke (width 0.15) (type default)) (layer "B.Fab"))
    
    ${'' /* footprint Jumpers (Front) */}
    (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask"))
    (fp_poly
    (pts
      (xy 0.002 -0.502)
      (xy 1.018 -0.502)
      (xy 1.018 0.514)
      (xy 0.002 0.514)
    )
    (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask"))
    
    (pad "" smd custom (at -1.54 -0.756 180) (size 1.2 0.5) (layers "F.Cu" "F.Mask")
    (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly
        (pts
          (xy 0.6 0)
          (xy -0.6 0)
          (xy -0.6 -1)
          (xy 0 -0.4)
          (xy 0.6 -1)
        )
        (width 0) (fill yes))))
        
    (pad "" smd custom (at -1.54 0.26 180) (size 0.1 0.1) (layers "F.Cu" "F.Mask")
    (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly
        (pts
          (xy 0.6 -0.2)
          (xy 0 0.4)
          (xy -0.6 -0.2)
          (xy -0.6 -0.4)
          (xy 0.6 -0.4)
        )
        (width 0) (fill yes))))
        
    (pad "" smd custom (at 0.51 -0.756 180) (size 1.2 0.5) (layers "F.Cu" "F.Mask")
    (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly
        (pts
          (xy 0.6 0)
          (xy -0.6 0)
          (xy -0.6 -1)
          (xy 0 -0.4)
          (xy 0.6 -1)
        )
        (width 0) (fill yes))))
        
    (pad "" smd custom (at 0.51 0.26 180) (size 0.1 0.1) (layers "F.Cu" "F.Mask")
    (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly
        (pts
          (xy 0.6 -0.2)
          (xy 0 0.4)
          (xy -0.6 -0.2)
          (xy -0.6 -0.4)
          (xy 0.6 -0.4)
        )
        (width 0) (fill yes))))
    
    ${'' /* footprint Jumpers (Back) */}
    (fp_poly 
    (pts
      (xy -2.048 -0.502)
      (xy -1.032 -0.502)
      (xy -1.032 0.514)
      (xy -2.048 0.514)
    )
    (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask"))
    (fp_poly
    (pts
      (xy 0.002 -0.502)
      (xy 1.018 -0.502)
      (xy 1.018 0.514)
      (xy 0.002 0.514)
    )
    (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask"))
    (fp_poly
    (pts
      (xy -2.048 -0.502)
      (xy -1.032 -0.502)
      (xy -1.032 0.514)
      (xy -2.048 0.514)
    )

    (pad "" smd custom (at -1.54 -0.756 180) (size 1.2 0.5) (layers "B.Cu" "B.Mask")
    (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly
        (pts
          (xy 0.6 0)
          (xy -0.6 0)
          (xy -0.6 -1)
          (xy 0 -0.4)
          (xy 0.6 -1)
        )
        (width 0) (fill yes))))
    
    (pad "" smd custom (at -1.54 0.26 180) (size 0.1 0.1) (layers "B.Cu" "B.Mask")
    (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly
        (pts
          (xy 0.6 -0.2)
          (xy 0 0.4)
          (xy -0.6 -0.2)
          (xy -0.6 -0.4)
          (xy 0.6 -0.4)
        )
        (width 0) (fill yes))))
    
    (pad "" smd custom (at 0.51 -0.756 180) (size 1.2 0.5) (layers "B.Cu" "B.Mask")
    (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly
        (pts
          (xy 0.6 0)
          (xy -0.6 0)
          (xy -0.6 -1)
          (xy 0 -0.4)
          (xy 0.6 -1)
        )
        (width 0) (fill yes)))) 
        
    (pad "" smd custom (at 0.51 0.26 180) (size 0.1 0.1) (layers "B.Cu" "B.Mask")
    (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives
      (gr_poly
        (pts
          (xy 0.6 -0.2)
          (xy 0 0.4)
          (xy -0.6 -0.2)
          (xy -0.6 -0.4)
          (xy 0.6 -0.4)
        )
        (width 0) (fill yes))))
    
    ${'' /* footprint jumper traces (Front) */}
    (fp_line (start -2.55 4.84) (end -1.29 3.58) (stroke (width 0.2) (type default)) (layer "F.Cu"))
    (fp_line (start -1.54 -1.756) (end -1.54 -0.756) (stroke (width 0.2) (type default)) (layer "F.Cu"))
    (fp_line (start -1.54 0.26) (end -1.54 2.36) (stroke (width 0.2) (type default)) (layer "F.Cu"))
    (fp_line (start -1.53 2.3) (end 0.51 0.26) (stroke (width 0.2) (type default)) (layer "F.Cu"))
    (fp_line (start -1.29 3.58) (end 0.27 3.58) (stroke (width 0.2) (type default)) (layer "F.Cu"))
    (fp_line (start 0.51 -1.756) (end 0.51 -0.756) (stroke (width 0.2) (type default)) (layer "F.Cu"))
    (fp_line (start 1.53 4.84) (end 0.27 3.58) (stroke (width 0.2) (type default)) (layer "F.Cu"))
    
    ${'' /* footprint jumper traces (Back) */}
    (fp_line (start -1.54 -1.756) (end -1.54 -0.756) (stroke (width 0.2) (type default)) (layer "B.Cu"))
    (fp_line (start 0.51 -1.756) (end 0.51 -0.756) (stroke (width 0.2) (type default)) (layer "B.Cu"))
    (fp_line (start 0.51 0.26) (end 0.51 2.3) (stroke (width 0.2) (type default)) (layer "B.Cu"))
    (fp_line (start 0.51 2.3) (end -1.54 0.26) (stroke (width 0.2) (type default)) (layer "B.Cu"))
    
    ${'' /* footprint jumper wiring connectors */}
    (pad "GND" thru_hole circle (at 0.51 -1.756 180) (size 0.6 0.6) (drill 0.3) (layers "*.Cu" "*.Mask") (zone_connect 0) (thermal_bridge_angle 90))
    (pad "VCC" thru_hole circle (at -1.54 -1.756 180) (size 0.6 0.6) (drill 0.3) (layers "*.Cu" "*.Mask") (zone_connect 0) (thermal_bridge_angle 90))
    
    ${'' /* footprint user help text (Front)*/}
    (fp_text user "L" (at -3.64 0.42 unlocked) (layer "F.SilkS") (effects (font (size 1 1) (thickness 0.1)) (justify left bottom)))
    (fp_text user "R" (at 1.53 0.47 unlocked) (layer "F.SilkS") (effects (font (size 1 1) (thickness 0.1)) (justify left bottom)))
    
    (fp_rect (start -2.34 -1.2) (end -0.74 0.86) (stroke (width 0.1) (type default)) (fill none) (layer "F.SilkS"))
    
    ${'' /* footprint user help text (Back)*/}
    (fp_text user "L" (at 2.63 0.46 unlocked) (layer "B.SilkS") (effects (font (size 1 1) (thickness 0.1)) (justify left bottom mirror)))
    (fp_text user "R" (at -2.56 0.42 unlocked) (layer "B.SilkS") (effects (font (size 1 1) (thickness 0.1)) (justify left bottom mirror)))
    
    (fp_rect (start -0.29 -1.2) (end 1.31 0.86) (stroke (width 0.1) (type default)) (fill none) (layer "B.SilkS"))
      
    ${'' /* fooptrint mounting holes */}
    (pad "" np_thru_hole circle (at -6.02 0) (size 2.3 2.3) (drill 2.3) (layers "F&B.Cu" "*.Mask"))
    (pad "" np_thru_hole circle (at -5 0) (size 2.3 2.3) (drill 2.3) (layers "F&B.Cu" "*.Mask"))
    (pad "" np_thru_hole circle (at 3.98 0) (size 2.3 2.3) (drill 2.3) (layers "F&B.Cu" "*.Mask"))
    (pad "" np_thru_hole circle (at 5 0) (size 2.3 2.3) (drill 2.3) (layers "F&B.Cu" "*.Mask"))
      
    ${'' /* fooptrint solder mounting holes */}
    (pad "" thru_hole roundrect (at -1.53 2.3) (size 1.7 1.7) (drill 0.8) (layers "*.Cu" "*.Mask") (roundrect_rratio 0.1388888889))
    (pad "" thru_hole circle (at 0.51 2.3) (size 1.7 1.7) (drill 0.8) (layers "*.Cu" "*.Mask"))
    (pad "RX" thru_hole circle (at -2.55 4.84) (size 1.7 1.7) (drill 0.8) (layers "*.Cu" "*.Mask"))
    (pad "RX" thru_hole circle (at 1.53 4.84) (size 1.7 1.7) (drill 0.8) (layers "*.Cu" "*.Mask"))
    (pad "TX" thru_hole circle (at -0.51 4.84) (size 1.7 1.7) (drill 0.8) (layers "*.Cu" "*.Mask"))
  `
}