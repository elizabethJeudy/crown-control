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
    status: 'In Progress',
    priority: 'Normal',
    dueDate: '03/20/2026',
    notes: 'Please fabriciate fcz single crown for tooth #5'
  }
]