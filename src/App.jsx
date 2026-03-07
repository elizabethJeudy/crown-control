import { useState } from 'react'
import './App.css'


const status = ['Incoming', 'In Progress', 'Ready for Delivery', 'Completed']
const priority = ['Normal', 'Rush', 'Next Day']

// sample cases 
const cases = [
  {
    id: 1,
    caseNumber: 'CASE-000001',
    patient: 'Roberts, James',
    doctor: 'Dr. Smith',
    type: 'Single crown',
    material: 'Full Contour Zirconia',
    teeth: '5',
    shade: 'A2',
    status: 'In Progress',
    priority: 'Normal',
    dueDate: '03/20/2026',
    notes: 'Please fabriciate fcz single crown for tooth #5'
  },

  {
    id: 2,
    caseNumber: 'CASE-000002',
    patient: 'Johnson, Emily',
    doctor: 'Dr. Lee',
    type: 'Immediate flipper',
    material: 'Acrylic',
    teeth: '8',
    shade: 'A1',
    status: 'Incoming',
    priority: 'Rush',
    dueDate: '03/18/2026',
    notes: 'Patient needs an immediate flipper for tooth #8'
  },

  {
    id: 3,
    caseNumber: 'CASE-000003',
    patient: 'Smith, Michael',
    doctor: 'Dr. Brown',
    type: 'Full arch hybrid',
    material: 'Full Contour Zirconia',
    teeth: 'lower arch',
    shade: 'A3',
    status: 'In progress',
    priority: 'Next Day',
    dueDate: '03/19/2026',
    notes: 'Fabricte FCZ integrated bar for lower. Tissue gum shade is med. pink'
  },

  {
    id: 4,
    caseNumber: 'CASE-000004',
    patient: 'Davis, Sarah',
    doctor: 'Dr. Wilson',
    type: 'Bridge',
    material: 'Porcelain Fused to Metal',
    teeth: '3-5',
    shade: '1M1',
    status: 'Ready for Delivery',
    priority: 'Normal',
    dueDate: '03/30/2026',
    notes: 'PFM bridge with non precious metal and porcelain butt margins.'
  }
]