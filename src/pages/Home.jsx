import React from 'react'
import Hero from '../components/Home/hero'
import Statistics from '../components/Home/statistics'
import Projects from '../components/Home/projects'
import Services from '../components/Home/services'
import Testmonials from '../components/Home/testmonials'
import ContactUs from '../components/Home/contact'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
export default function Home() {
  return (
    <>
    <Hero />
    <Statistics />
    <Services />
    <Projects />
    <Testmonials />
    <ContactUs/>
    
    
  


     

    </>
   
    
    
    
    
  )
}
